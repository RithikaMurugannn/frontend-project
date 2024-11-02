import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page" style={{ backgroundImage: "url('/path/to/image.jpg')" }}>
      <h1>Company Name</h1>
      <p>Welcome to our store! We offer a range of beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;