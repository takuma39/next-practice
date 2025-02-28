export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="bg-orange-100 h-screen">{children}</div>
}
