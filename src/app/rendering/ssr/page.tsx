import Image from 'next/image'
export const dynamic = 'force-dynamic' // SSR強制

export default async function SSRPage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-store',
  })

  const resJson = await res.json()
  const image = resJson.message

  const timestamp = new Date().toISOString()

  return (
    <div className="relative h-screen w-full">
      <p>SSR 毎回リロード: {new Date(timestamp).toLocaleTimeString()}</p>
      <Image
        src={image}
        alt="Dog Image"
        width={500} // 任意の幅
        height={300} // 任意の高さ
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-full w-full object-cover"
      />
    </div>
  )
}
