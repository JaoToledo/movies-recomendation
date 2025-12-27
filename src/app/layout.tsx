"use client"
import './globals.css';
import { Header } from '@/shared/components/HeaderComposition';
import { FilterMovies } from '@/shared/components/HeaderComposition/filter/filterMovies';
import {Poppins} from 'next/font/google'
import { useState } from 'react'; 
// import { useRouter } from 'next/router';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export default function RootLayout({

  children,
    }: Readonly<{
    children: React.ReactNode;
  }>) {
   const [search, setSearch] = useState('');
  
  return (


    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header.Root >

          <div className="flex items-center w-full max-w-[1000px]">
            <div className="flex mx-auto w-full max-w-[556px]">
              <Header.Input 
              onSubmit={() => alert('Teste')}
              onValueChange={(value) => setSearch(value)}
              value={search}
              />
              <Header.SearchInputButton />
            </div>
        
            <div className="">
              <FilterMovies />
            </div>
          </div>  
        </Header.Root> 
        {children}
      </body>
    </html> 
  );
}