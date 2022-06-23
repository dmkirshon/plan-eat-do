import React from "react";
import NavWelcome from "../components/NavWelcome";

const Welcome = () => {
  return (
    <div className="welcome">
      <NavWelcome></NavWelcome>
      <div className="welcome-main">
        <section className="welcome-slogan">
          <h1>Less time more Eats</h1>
          <p>
            Plan meals, eat great food, and prep them with ease so you can do
            what matters in life.
          </p>
          <button>Start Today!</button>
          <p>Health is non-negotiable</p>
        </section>
        <section className="welcome-perks">
          <div>
            <img />
            <h3>Perk 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              velit.
            </p>
          </div>
          <div>
            <img />
            <h3>Perk 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              velit.
            </p>
          </div>
          <div>
            <img />
            <h3>Perk 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              velit.
            </p>
          </div>
        </section>
        <section className="welcome-reviews">
          <h2></h2>
          <ul>
            <li>
              <div>stars</div>
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                vel maiores dicta tempore ullam dolorum ipsum iste, molestiae
                tempora doloremque?
              </blockquote>
              <div>Customer Name</div>
            </li>
            <li>
              <div>stars</div>
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                vel maiores dicta tempore ullam dolorum ipsum iste, molestiae
                tempora doloremque?
              </blockquote>
              <div>Customer Name</div>
            </li>
            <li>
              <div>stars</div>
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                vel maiores dicta tempore ullam dolorum ipsum iste, molestiae
                tempora doloremque?
              </blockquote>
              <div>Customer Name</div>
            </li>
            <li>
              <div>stars</div>
              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                vel maiores dicta tempore ullam dolorum ipsum iste, molestiae
                tempora doloremque?
              </blockquote>
              <div>Customer Name</div>
            </li>
          </ul>
        </section>
        <section className="welcome-guides">
          <h2>Customize Food Plans - Food Guides</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            incidunt eius commodi nam illo maxime temporibus ab earum et
            dignissimos.
          </p>
          <div>
            <div></div>
            <div>
              <img></img>
            </div>
            <div></div>
          </div>
        </section>
        <section className="welcome-join">
          <h2>Ready to save time with delicious food?</h2>
          <button>Join Now</button>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
