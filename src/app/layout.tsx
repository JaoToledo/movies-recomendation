import './globals.css';
import { HeaderMain } from '@/shared/components/HeaderComposition/headerMain/headerMain';
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '700', '900' ],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export default function RootLayout({

  children,
    }: Readonly<{
    children: React.ReactNode;
  }>) {
  
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
          <HeaderMain />
        {children}
      </body>
    </html> 
  );
}