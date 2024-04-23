// import { SignUp } from '@clerk/clerk-react';
import Layout from '@/components/Layout';
import SignUpComponent from '@/components/auth/SignUpComponent';

const SignUpPage = () => {
  return (
    <Layout>
      <main className='w-screen flex items-center justify-center'>
        <div className='py-24 px-0'>
          {/* <SignUp signInUrl='/signin' afterSignUpUrl='/createuser' /> */}
          {/* <SignUp signInUrl='/signin' /> */}
          <SignUpComponent />
        </div>
      </main>
    </Layout>
  );
};

export default SignUpPage;
