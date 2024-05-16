import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { LayoutContextProvider } from '@/components/layout/LayoutContextProvider';
import { DefaultSeo } from 'next-seo';

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
        <DefaultSeo
          title='BBUR | Breaking Barriers To Substance Use Recovery'
          description='In response to the urgent need for accessible opioid treatment recovery solutions, a dynamic coalition emerges, pioneering a multifaceted approach.'
        />
        <Component {...pageProps} />
      </div>
    </LayoutContextProvider>
  );
}
