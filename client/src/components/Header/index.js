import React from 'react';

const Header = () => {
  return (
    <header className="bg-danger text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <h1 className="m-0" style={{ fontSize: '3rem' }}>
          BroDay
        </h1>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Meet your new Bros.
        </p>
      </div>
    </header>
  );
};

export default Header;
