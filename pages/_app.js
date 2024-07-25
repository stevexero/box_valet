import { Provider } from 'react-redux';
import { store } from '../store/store';
import SessionManager from '../utils/sessionManager';
import '@/styles/output.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionManager>
        <Component {...pageProps} />
      </SessionManager>
    </Provider>
  );
}
