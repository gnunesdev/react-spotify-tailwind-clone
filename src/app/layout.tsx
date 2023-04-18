import './globals.css'

export const metadata = {
  title: 'Spotify Tailwind clone',
  description: 'Spotify clone project to practice tailwind library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  )
}
