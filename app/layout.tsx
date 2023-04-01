import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <footer>
          <nav>
            <a href='/'>Home</a>
            <a href='/search/'>Search</a>
            <a href='/clubs/'>Clubs</a>
            <a href='/notifications/'>Notifications</a>
            <a href='/messages/'>Messages</a>
          </nav>
        </footer>
      </body>
    </html>
  )
}
