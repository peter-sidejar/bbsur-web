import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { LayoutContextProvider } from '@/components/layout/LayoutContextProvider';

const interDisplay = localFont({
  src: [
    {
      path: '../fonts/InterDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter-display',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutContextProvider>
      <div className={`${interDisplay.variable}`}>
        <Component {...pageProps} />
      </div>
    </LayoutContextProvider>
  );
}
