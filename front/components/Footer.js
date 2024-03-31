import React, { Component } from "react";


export class Footer extends Component {
  render() {
    return (
      <>
      <footer class="bg-dark text-white py-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h4>About Flavor Exchange</h4>
              <p>
                Flavor Exchange is a community-driven platform where enthusiasts
                share their favorite flavors, recipes, and reviews. Join us in
                exploring the world of delicious possibilities!
              </p>
              <p>Address: 123 Tasty Street, Flavor City</p>
            </div>
            <div class="col-md-3">
              <h4>Contact Us</h4>
              <p>Email: info@flavorexchange.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div class="col-md-3">
              <h4>Quick Links</h4>
              <a href="localhost:3000/privacy" class="text-white">
                Privacy Policy
              </a>
              <br />
              <a href="localhost:3000/privacy" class="text-white">
                Terms of Service
              </a>
              <br />
              <a href="localhost:3000/privacy" class="text-white">
                FAQ
              </a>
            </div>
          </div>
        </div>
        </footer>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </>
    );
  }
}

export default Footer;
