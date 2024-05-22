import { Provider } from 'react-redux';
import { store } from '../store/store';
import '@/styles/output.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
