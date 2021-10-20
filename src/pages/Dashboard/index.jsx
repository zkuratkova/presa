import React from 'react';
import Login from '../../components/Login';
import useToken from './useToken';

const Dashboard = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <h2>What do you think you are doing?</h2>;
};

export default Dashboard;
