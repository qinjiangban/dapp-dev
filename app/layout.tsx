import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers'
import Provider from '@/app/Provider'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/config/Wagmi'
import { Web3ModalProvider } from '@/config/Web3Modal'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | VimCord',
    default: 'VimCord',
  },
  description: "Generated by create next app",
  icons: {
    icon: '/favicon.ico',
    //shortcut: '/shortcut-icon.png',
    //apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="en">
      <body className={inter.className}>


        <Provider>
          <Web3ModalProvider initialState={initialState}>

            {children}
            
          </Web3ModalProvider>
        </Provider>

      </body>
    </html>
  );
}
