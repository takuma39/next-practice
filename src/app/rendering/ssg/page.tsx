import Image from 'next/image'

export default async function SSGPage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')

  const resJson = await res.json()
  const image = resJson.message

  const timestamp = new Date().toISOString()

  return (
    <div className="relative w-full h-screen">
      SSG ビルド時に生成され固定: {timestamp}
      <Image
        src={image}
        alt="Dog Image"
        width={500} // 任意の幅
        height={300} // 任意の高さ
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover w-full h-full"
      />
    </div>
  )
}
