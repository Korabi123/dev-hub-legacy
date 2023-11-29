export const metadata = {
  title: 'Edit Profile | DevHub',
  description: 'Edit DevHub Profile',
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