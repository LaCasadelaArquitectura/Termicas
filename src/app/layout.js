import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '../../ui/header'
import Footer from '../../ui/footer'


const poppins = Poppins({ 
    weight: ['100','200','300','400','500','600', '700', '800', '900'],
    subsets: ['latin'] 
})


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instalaciones Termicas',
  description: 'Web de recursos para los distintos modulos formativos del departamento de intalaciones termicas',
}

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={`${poppins.className} h-full`}>
        <Header />
        <div>{children}</div>
        <Footer />
        </body>
    </html>
  )
}
