import Layout from '@/components/Layout';

const Pricing = () => {
  // FETCH ALL ITEMS BELONGING TO USER ID
  const fetchItems = () => {
    fetch(`/api/items/getAll?userId=ger950612`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  // ADD USER WITH USER ID
  const addUser = (userId, userEmail) => {
    fetch(`/api/user/addUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, userEmail }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <Layout>
      <button onClick={() => addUser('10001', 'four@four.com')}>
        Add User
      </button>
      <button onClick={fetchItems}>Fetch All Items for current userID</button>
    </Layout>
  );
};

export default Pricing;
