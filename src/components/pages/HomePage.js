import React from 'react';
import './homepage.css';

function HomePage() {
  return (
    <div>
      {/* <!-- Header--> */}
      <header class="header"> {/* Apply the header class */}
        <div class="container px-4 text-center">
          <h1 class="fw-bolder">Welcome to Scrolling Nav</h1>
          <p class="lead">A functional Bootstrap 5 boilerplate for one page scrolling websites</p>
          <a class="btn btn-lg btn-light" href="#about">Start scrolling!</a>
        </div>
      </header>


      {/* <!-- About section--> */}
      <section id="about" style={{ marginBottom: '40px' }}>
        <div class="container px-4">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-8">
              <h2>About this page</h2>
              <p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for your own landing page designs! This template features:</p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                <li>Minimal custom CSS so you are free to explore your own unique design options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services section--> */}
      <section class="bg-light" id="services" style={{ marginBottom: '40px' }}>
        <div class="container px-4">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-8">
              <h2>Services we offer</h2>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact section--> */}
      <section id="contact">
        <div class="container px-4">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-8">
              <h2>Contact us</h2>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;