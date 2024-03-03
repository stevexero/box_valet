import { SignIn } from '@clerk/clerk-react';
import Layout from '@/components/Layout';
import styles from '@/styles/signin.module.css';

const SignInPage = () => {
  return (
    <Layout>
      <main className={`${styles.main} container`}>
        <div className={styles.container}>
          <SignIn />
        </div>
      </main>
    </Layout>
  );
};

export default SignInPage;
