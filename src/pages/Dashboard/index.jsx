import React, { useState } from 'react';
import Login from '../../components/Login';

const Dashboard = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <h2>What do you think you are doing?</h2>;
};

export default Dashboard;
