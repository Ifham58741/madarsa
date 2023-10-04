import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Madarsa Management System</h1>
      </header>
      <section>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          libero non erat accumsan posuere sit amet id nunc. Vestibulum at
          tristique elit, id pharetra dolor. Sed at libero vitae ex rutrum
          sodales. Nullam aliquet congue suscipit. Nullam euismod, odio nec
          dignissim vestibulum, libero libero varius augue, vel dignissim mi
          tortor ut nunc.
        </p>
      </section>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Admissions</li>
          <li>Annual Reports</li>
          <li>Student Information</li>
          <li>Programs and Fees</li>
          <li>Chat with Us</li>
        </ul>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to contact us
          at <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
