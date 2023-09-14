import '@/styles/globals.css';
import { Navbar, Provider } from '@/components';
import { Toaster } from 'react-hot-toast';
import 'react-loading-skeleton/dist/skeleton.css'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Navbar />
                        {children}
                        <Toaster />
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout