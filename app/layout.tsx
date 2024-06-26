import type {Metadata} from 'next'
import '/public/style/global.scss'
import {Geologica} from 'next/font/google'
import {Header} from "@/components/layouts/Header";
import {QueryProvider} from "@/react-query/QueryProvider";


const geologica = Geologica({subsets: ['latin'], display: 'swap', adjustFontFallback: false})

export const metadata: Metadata = {
    title: 'Учет расходов',
    description: '',
    icons: {
        icon: '/cost.svg'
    }
}

export type Root = {
    children: React.ReactNode,
}

export default function RootLayout({children}: Root) {

    return (
        <html lang="en">
        <body className={geologica.className}>
        <QueryProvider>
            <Header/>
            <div className={'main'}>
                {children}
            </div>
        </QueryProvider>
        </body>
        </html>
    )
}
