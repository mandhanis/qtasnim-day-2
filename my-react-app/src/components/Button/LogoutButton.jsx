import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/users/login');
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger logout-btn">
      Logout
    </button>
  );
}

export default LogoutButton;
