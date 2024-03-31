import React, { Component } from "react";

export class LandingPage extends Component {
  render() {
    return (
      <>
        <div class="hero-section">
          <div class="container">     
          </div>
        </div>

        <div class="feature-section">
          <div class="container">
           
            <div class="row">
              <div class="col-md-4">
                <div class="feature-box">
                  <i class="fas fa-star"></i>
                  <h3>Leave Reviews</h3>
                  <p>
                    Share your thoughts and experiences with other flavor
                    enthusiasts.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-box">
                  <i class="fas fa-book"></i>
                  <h3>Create Recipes</h3>
                  <p>
                    Craft and publish your own unique recipes for the community
                    to try.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="feature-box">
                  <i class="fas fa-comment"></i>
                  <h3>Community Interaction</h3>
                  <p>
                    Connect with other users, discuss flavors, and collaborate
                    on new ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </>
    )
  }
};

export default LandingPage