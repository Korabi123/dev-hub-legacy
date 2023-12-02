import Sidebar from "@/components/sidebar"

export const metadata = {
  title: 'Profile | DevHub',
  description: 'Edit DevHub Profile',
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}