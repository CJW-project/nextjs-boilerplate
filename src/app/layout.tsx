import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import ReactQueryProvider from '@/components/layout/ReactQueryProvider'
import StyledComponentsRegistry from '@/components/layout/StyledComponentsRegistry'
import RecoilProvider from '@/components/layout/RecoilProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nextjs-boilerplate',
  description: 'Generated by nextjs boilerplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <RecoilProvider>
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
            </RecoilProvider>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
