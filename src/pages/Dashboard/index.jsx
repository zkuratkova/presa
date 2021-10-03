import React, { useState } from 'react';
import Login from '../../components/Login';

const Dashboard = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <h2>what are you doing?</h2>;
};

export default Dashboard;
