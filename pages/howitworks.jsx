import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';
import Image from 'next/image';
import Layout from '@/components/Layout';

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
              <div className='flex flex-row'>
                <Image
                  src='/acc1.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
                <div>
                  <h2 className='text-4xl'>
                    First, you&apos;ll need to set up an account with us
                  </h2>
                  Sign Up Now Or if you&apos;d prefer to have us set it up for
                  you, give us a call at +1 (702) 689 9811
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 2: Provide Description Of Your Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <div>
                  <h2 className='text-4xl'>
                    Our Item-Intake form will guide you through the process
                  </h2>
                  We&apos;ll base your custom pricing on the dimensions and
                  weight of your items.
                </div>
                <Image
                  src='/acc2.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 3: Set up Box Delivery (If You Need Boxes)
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <Image
                  src='/acc3.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
                <div>
                  <h2 className='text-4xl'>
                    If you need any boxes or containers for your items,
                    we&apos;re happy to provide
                  </h2>
                  We&apos;ll consult with you to determine the appropriate sizes
                  and containers for your items.
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 4: Determine Time Frame Needed to Store Your Items (Days,
              Weeks, Months, Etc.)
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <div>
                  <h2 className='text-4xl'>
                    We&apos;ll store your stuff for as little or as much time as
                    you&apos;d like
                  </h2>
                  Whether it&apos;s a day, a few weeks, several months or years,
                  or you need a rotation of time-frames, your items will always
                  be well taken care of and within reach.
                </div>
                <Image
                  src='/acc4.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 5: Schedule Pick Up of Your Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <Image
                  src='/acc5.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
                <div>
                  <h2 className='text-4xl'>
                    Choose your pick up date and time once your items are packed
                    up and ready to go
                  </h2>
                  Our schedule is open to yours.
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 6: Meet with BoxValet Team Member to Verify and Pick Up Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <div>
                  <h2 className='text-4xl'>
                    Your BoxValet team member will arrive as scheduled for pick
                    up
                  </h2>
                  They will then verify your items for pick up, leave you with a
                  signed manifest, and instructions on how to track your items
                  through your BoxValet dashboard.
                </div>
                <Image
                  src='/acc6.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 7: Await Storage Verification Upon Warehouse Arrival
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <Image
                  src='/acc7.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
                <div>
                  <h2 className='text-4xl'>
                    You will be notified once your items hit your BoxValet
                    storage bin
                  </h2>
                  We provide a variety of notification preferences through your
                  BoxValet dashboard.
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 8: Check Your BoxValet Dashboard For Updated Info About Your
              Items and Account
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <div>
                  <h2 className='text-4xl'>
                    Manage your items and account through your BoxValet
                    Dashboard
                  </h2>
                  From account standings, notification preferences, and
                  analytics on how much CO2 you&apos;ve saved the planet by
                  choosing us versus a big-box storage facility and more, your
                  BoxValet dashboard provides you with a wealth of information
                  to easily manage your items and account.
                </div>
                <Image
                  src='/acc8.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className='text-white dark:text-white dark:hover:bg-accent-primary-hover hover:bg-accent-primary-hover bg-accent-primary dark:bg-accent-primary focus:ring-1 focus:ring-red-900 dark:focus:ring-red-900'>
              Step 9: When Needed, Schedule the Return of Any or All of Your
              Items
            </AccordionTitle>
            <AccordionContent className='dark:bg-white'>
              <div className='flex flex-row'>
                <Image
                  src='/acc9.svg'
                  alt='setting up account'
                  width={298}
                  height={199}
                />
                <div>
                  <h2 className='text-4xl'>
                    We valet your items back to you when you need them
                  </h2>
                  With future or same-day requests at your fingertips,
                  we&apos;ll bring you all or whatever items you need.
                  Let&apos;s Valet Our First Item!
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </Layout>
  );
};

export default howitworks;
