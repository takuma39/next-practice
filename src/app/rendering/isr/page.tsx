import Image from 'next/image'
export const revalidate = 10

export default async function ISRPage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: { revalidate: 10 },
  })

  const resJson = await res.json()
  const image = resJson.message

  const timestamp = new Date().toISOString()

  return (
    <div className="relative h-screen w-full">
      ISR 10秒ごとにリロード: {timestamp}
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
