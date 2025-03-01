import { z } from 'zod'

export const ContactSchema = z.object({
  name: z
    .string()
    .min(3, { message: '名前は3文字以上にして下さい' })
    .max(20, { message: '名前は20文字以内で入力してください' }),
  email: z
    .string()
    .nonempty({ message: 'メールアドレスは必須です' })
    .email({ message: '正しいメールアドレスの形式で入力してください' }),
})

// 型の定義
export type ContactType = z.infer<typeof ContactSchema>
