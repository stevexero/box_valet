import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';
import Layout from '@/components/Layout';

// .heading_primary {
//   font-size: 48px;
//   font-weight: 500;
//   line-height: 48px;
// }

const howitworks = () => {
  return (
    <Layout>
      <div className='container mx-auto max-w-6xl mb-20'>
        <h1 className='text-5xl text-center mt-32 md:mt-20 mb-12'>
          How to Valet your items with BoxValet
        </h1>
        <Accordion className='divide-black-primary dark:divide-black-primary'>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 1: Set up an account
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              First, you&apos;ll need to set up an account with us Sign Up Now
              Or if you&apos;d prefer to have us set it up for you, give us a
              call at +1 (702) 689 9811
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 2: Provide Description Of Your Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              Our Item-Intake form will guide you through the process We&apos;ll
              base your custom pricing on the dimensions and weight of your
              items.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 3: Set up Box Delivery (If You Need Boxes)
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              If you need any boxes or containers for your items, we&apos;re
              happy to provide We&apos;ll consult with you to determine the
              appropriate sizes and containers for your items.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 4: Determine Time Frame Needed to Store Your Items (Days,
              Weeks, Months, Etc.)
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              We&apos;ll store your stuff for as little or as much time as
              you&apos;d like Whether it&apos;s a day, a few weeks, several
              months or years, or you need a rotation of time-frames, your items
              will always be well taken care of and within reach.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 5: Schedule Pick Up of Your Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              Choose your pick up date and time once your items are packed up
              and ready to go Our schedule is open to yours.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 6: Meet with BoxValet Team Member to Verify and Pick Up Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              Your BoxValet team member will arrive as scheduled for pick up
              They will then verify your items for pick up, leave you with a
              signed manifest, and instructions on how to track your items
              through your BoxValet dashboard.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 7: Await Storage Verification Upon Warehouse Arrival
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              You will be notified once your items hit your BoxValet storage bin
              We provide a variety of notification preferences through your
              BoxValet dashboard.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 8: Check Your BoxValet Dashboard For Updated Info About Your
              Items and Account
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              Manage your items and account through your BoxValet Dashboard From
              account standings, notification preferences, and analytics on how
              much CO2 you&apos;ve saved the planet by choosing us versus a
              big-box storage facility and more, your BoxValet dashboard
              provides you with a wealth of information to easily manage your
              items and account.
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 9: When Needed, Schedule the Return of Any or All of Your
              Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              We valet your items back to you when you need them With future or
              same-day requests at your fingertips, we&apos;ll bring you all or
              whatever items you need. Let&apos;s Valet Our First Item!
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </Layout>
  );
};

export default howitworks;
