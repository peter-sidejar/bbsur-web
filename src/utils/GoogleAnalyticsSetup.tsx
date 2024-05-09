import React from 'react';
import Script from 'next/script';

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALTYICS_ID;

const GoogleAnalyticsSetup = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      />

      <Script id='google_analytics_setup' strategy='lazyOnload'>
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${googleAnalyticsId}');
         `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsSetup;
