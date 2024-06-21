import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomers } from '@/features/user/userSlice';

const Customers = () => {
  const dispatch = useDispatch();
  const { customers, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(getAllCustomers());
    }
  }, [dispatch, customers.length]);

  const handleRefresh = () => {
    dispatch(getAllCustomers());
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='overflow-x-auto'>
      <button
        onClick={handleRefresh}
        className='mb-4 bg-accent-primary text-white rounded-lg px-4 py-2 border-2 border-accent-primary text-center'
      >
        Refresh Customers
      </button>
      {customers && customers.length > 0 ? (
        <table className='min-w-full bg-white border border-gray-300'>
          <thead>
            <tr>
              <th className='px-4 py-2 border border-gray-300'>User ID</th>
              <th className='px-4 py-2 border border-gray-300'>Created At</th>
              <th className='px-4 py-2 border border-gray-300'>Email</th>
              <th className='px-4 py-2 border border-gray-300'>User Role</th>
              <th className='px-4 py-2 border border-gray-300'>First Name</th>
              <th className='px-4 py-2 border border-gray-300'>Last Name</th>
              <th className='px-4 py-2 border border-gray-300'>
                Email Verified
              </th>
              <th className='px-4 py-2 border border-gray-300'>Temp Code</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.user_id}>
                <td className='px-4 py-2 border border-gray-300'>
                  {customer.user_id}
                </td>
                <td className='px-4 py-2 border border-gray-300'>
                  {new Date(customer.created_at).toLocaleString()}
                </td>
                <td className='px-4 py-2 border border-gray-300'>
                  {customer.email}
                </td>
                <td className='px-4 py-2 border border-gray-300'>
                  {customer.user_role}
                </td>
                <td className='px-4 py-2 border border-gray-300'>
                  {customer.first_name.trim()}
                </td>
                <td className='px-4 py-2 border border-gray-300'>
                  {customer.last_name.trim()}
                </td>
                <td className='px-4 py-2 border border-gray-300'>
                  {customer.email_verified ? 'Yes' : 'No'}
                </td>
                <td className='px-4 py-2 border border-gray-300'>
                  {customer.temp_code || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No customers available.</p>
      )}
    </div>
  );
};

export default Customers;
