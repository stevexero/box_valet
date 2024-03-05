import { SignUp } from '@clerk/clerk-react';
import Layout from '@/components/Layout';
import styles from '@/styles/signup.module.css';

const SignUpPage = () => {
  return (
    <Layout>
      <main className={`${styles.main} container`}>
        <div className={styles.container}>
          <SignUp signInUrl='/signin' />
        </div>
      </main>
    </Layout>
  );
};

export default SignUpPage;
