import { Provider } from 'react-redux';
import { ClerkProvider } from '@clerk/nextjs';
import { store } from '../store/store';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </Provider>
  );
}
