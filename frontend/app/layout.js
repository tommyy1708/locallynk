import './globals.css';
import { Inter } from 'next/font/google';
import ReduxProvider from './components/ReduxProvider';
// Use the AntdRegistry component for prevent the CSS-in-JS flicker
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Localynk</title>
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
