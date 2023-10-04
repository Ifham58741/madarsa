import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/annual-report">Annual Report</Link>
        </li>
        <li>
          <Link to="/program-and-fees">Programs & Fees</Link>
        </li>
        <li>
          <Link to="/admission">Admission</Link>
        </li>
        <li>
          <Link to="/admin-login">Admin Login</Link>
        </li>
        <li>
          <Link to="/subadmin-login">Subadmin Login</Link>
        </li>
        <li>
          <Link to="/chat-with-us">Chat with Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
