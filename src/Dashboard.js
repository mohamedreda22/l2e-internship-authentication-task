import React from 'react';

const Dashboard = () => {
    const handleLogOut = () => {
        localStorage.removeItem('isAuthenticated');
        window.location.href = '/login';
    };
  return (
    <div >
         <button style={{float:"right",}} onClick={handleLogOut}>LogOut</button>
      <h1 style={{textAlign:"center"}}>Welcome to your Dashboard</h1>
    </div>
  );
};

export default Dashboard;
