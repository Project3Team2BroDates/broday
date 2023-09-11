import React from 'react';

const Footer = () => {
  return (
    <footer className="footer w-100  p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - BroDay Team</h4>
      </div>
    </footer>
  );
};

export default Footer;

