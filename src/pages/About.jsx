import React from 'react';

function About() {
  return <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
          A React app to search Github profiles and see their details.
      </p>
      <p className='text-lg text-primary'>
          Version <span className='text-primary'>1.0.0</span>
      </p>
  </div>;
}

export default About;
