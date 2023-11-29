export const metadata = {
  title: 'Feed | DevHub',
  description: 'DevHub Personalized Feed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
