import './globals.css'
import { Inter } from 'next/font/google'
import { ChatAppProvider } from '@/Context/ChatAppContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SecureChatX',
  description: 'Unlock a new era of communication',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// const MyApp = ({Component, pageProps}) => (
//   <div>
//     <ChatAppProvider>
//       <Component {...pageProps} />
//     </ChatAppProvider>
//   </div>
// )

// export default MyApp