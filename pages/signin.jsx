import { SignIn } from '@clerk/clerk-react';
import Layout from '@/components/Layout';

const SignInPage = () => {
  return (
    <Layout>
      <main className='w-screen flex items-center justify-center'>
        <div className='py-24 px-0'>
          <SignIn signUpUrl='/signup' afterSignUpUrl='/createuser' />
        </div>
      </main>
    </Layout>
  );
};

export default SignInPage;
