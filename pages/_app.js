import { Provider } from 'react-redux';
import Script from 'next/script';
import { store } from '../store/store';
import '@/styles/output.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script
        defer
        src='https://cloud.umami.is/script.js'
        data-website-id={process.env.NEXT_UMAMI_SITE_ID}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
