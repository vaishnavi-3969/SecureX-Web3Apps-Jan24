import { NavBar } from '@/Components'
import './globals.css'
import { ChatAppProvider } from '@/Context/ChatAppContext'

const MyApp = ({ Component, pageProps }) => (
    <ChatAppProvider>
        <NavBar />
        <Component {...pageProps} />
    </ChatAppProvider>
)

export default MyApp