export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="h-screen bg-orange-100">{children}</div>
}
