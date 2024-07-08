'use client';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ConfigProvider } from 'antd';
import {store} from '../lib/store';
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Localynk</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <ConfigProvider
            theme={{ token: { colorPrimary: '#1890ff' } }}
          >
            {children}
          </ConfigProvider>
        </Provider>
      </body>
    </html>
  );
}
