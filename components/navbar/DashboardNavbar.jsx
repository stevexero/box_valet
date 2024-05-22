// import { UserButton, useUser } from '@clerk/nextjs';

// const DotIcon = () => {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       viewBox='0 0 512 512'
//       fill='currentColor'
//     >
//       <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z' />
//     </svg>
//   );
// };

// const CustomPage = () => {
//   return (
//     <div>
//       <h1>Custom Profile Page</h1>
//       <p>This is the custom profile page</p>
//     </div>
//   );
// };

const DashboardNavbar = () => {
  // const { user } = useUser();

  return (
    <div className='w-full bg-gradient-to-l from-accent-primary to-accent-primary-hover flex flex-row justify-end p-4 items-center'>
      user navbar
      {/* <h1 className='text-white mr-2'>Hi {user && user.firstName}!</h1> */}
      {/* <UserButton afterSignOutUrl='/'> */}
      {/* <UserButton.UserProfileLink
          label='Homepage'
          url='/'
          labelIcon={<DotIcon />}
        /> */}
      {/* You can pass the content as a component */}
      {/* <UserButton.UserProfilePage
          label='Custom Page'
          url='custom'
          labelIcon={<DotIcon />}
        >
          <CustomPage />
        </UserButton.UserProfilePage> */}
      {/* You can also pass the content as direct children */}
      {/* <UserButton.UserProfilePage
          label='Terms'
          labelIcon={<DotIcon />}
          url='termsofservice'
        >
          <div>
            <h1>Custom Terms Page</h1>
            <p>This is the custom terms page</p>
          </div>
        </UserButton.UserProfilePage>
      </UserButton> */}
    </div>
  );
};

export default DashboardNavbar;
