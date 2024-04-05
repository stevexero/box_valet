import { SignUp } from '@clerk/clerk-react';
import Layout from '@/components/Layout';

const SignUpPage = () => {
  return (
    <Layout>
      <main className='w-screen flex items-center justify-center'>
        <div className='py-24 px-0'>
          <SignUp signInUrl='/signin' afterSignUpUrl='/createuser' />
        </div>
      </main>
    </Layout>
  );
};

export default SignUpPage;
