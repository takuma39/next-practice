'use client'
import { submitContactForm } from '@/lib/actions/contact'
import { ContactSchema } from '@/validations/contact'
import { useActionState, useState } from 'react'
import { z } from 'zod'

export default function ContactForm() {
  const [state, formActions] = useActionState(submitContactForm, {
    success: false,
    errors: {},
  })

  const [clientErrors, setClientErrors] = useState({ name: '', email: '' })

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    try {
      if (name === 'name') {
        ContactSchema.pick({ name: true }).parse({ name: value })
      } else if (name === 'email') {
        ContactSchema.pick({ email: true }).parse({ email: value })
      }
      setClientErrors((prev) => ({ ...prev, [name]: '' }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0]?.message || ''
        setClientErrors((prev) => ({ ...prev, [name]: errorMessage }))
      }
    }
  }

  return (
    <div>
      <form noValidate action={formActions}>
        <div className="py-24 text-gray-600">
          <div className="mx-auto flex flex-col rounded-lg bg-white p-8 shadow-md md:w-1/2">
            <h2 className="mb-2 text-lg">お問い合わせ</h2>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm">
                名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onBlur={handleBlur}
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 leading-8 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
                {(state.errors.name || clientErrors.name) && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.name?.join(', ') || clientErrors.name}
                </p>
                )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onBlur={handleBlur}
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 leading-8 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
                {(state.errors.email || clientErrors.email) && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.email?.join(', ') || clientErrors.email}
                </p>
                )}
            </div>
            <button className="rounded bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600">
              送信
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
