import React from "react";
import NavWelcome from "./NavWelcome";

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
            <div className="welcome-perk-icon">🍽️</div>
            <h3 className="welcome-perk-heading">Menu Planning</h3>
            <p className="welcome-perk-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              velit.
            </p>
          </div>
          <div>
            <div className="welcome-perk-icon">🗒️</div>
            <h3 className="welcome-perk-heading">Grocery Lists</h3>
            <p className="welcome-perk-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              velit.
            </p>
          </div>
          <div>
            <div className="welcome-perk-icon">🥙</div>
            <h3 className="welcome-perk-heading">Custom Recipes</h3>
            <p className="welcome-perk-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              velit.
            </p>
          </div>
        </section>
        <section className="welcome-reviews">
          <h2 className="welcome-reviews-heading">
            Made For People that Love Their Time
          </h2>
          <div className="welcome-review-wrapper">
            <div className="welcome-review-stars">⭐️⭐️⭐️⭐️⭐️</div>
            <blockquote className="welcome-review-quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
              maiores dicta tempore ullam dolorum ipsum iste, molestiae tempora
              doloremque?
            </blockquote>
            <div className="welcome-review-name">John S.</div>
          </div>
          <div className="welcome-review-wrapper">
            <div className="welcome-review-stars">⭐️⭐️⭐️⭐️⭐️</div>
            <blockquote className="welcome-review-quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
              maiores dicta tempore ullam dolorum ipsum iste, molestiae tempora
              doloremque?
            </blockquote>
            <div className="welcome-review-name">Jennifer H.</div>
          </div>
          <div className="welcome-review-wrapper">
            <div className="welcome-review-stars">⭐️⭐️⭐️⭐️⭐️</div>
            <blockquote className="welcome-review-quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
              maiores dicta tempore ullam dolorum ipsum iste, molestiae tempora
              doloremque?
            </blockquote>
            <div className="welcome-review-name">Martha S.</div>
          </div>
          <div className="welcome-review-wrapper">
            <div className="welcome-review-stars">⭐️⭐️⭐️⭐️⭐️</div>
            <blockquote className="welcome-review-quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
              maiores dicta tempore ullam dolorum ipsum iste, molestiae tempora
              doloremque?
            </blockquote>
            <div className="welcome-review-name">Carl B.</div>
          </div>
        </section>
        <section className="welcome-guides">
          <h2 className="welcome-guides-heading">
            Customize Food Plans - Food Guides
          </h2>
          <p className="welcome-guides-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            incidunt eius commodi nam illo maxime temporibus ab earum et
            dignissimos.
          </p>
          <div className="welcome-guide-wrapper">
            <div className="welcome-guide-info">
              <p className="welcome-guide-info-item">Oil-Free</p>
              <p className="welcome-guide-info-item">Salt-Free</p>
              <p className="welcome-guide-info-item">Sugar-Free</p>
            </div>
            <div className="welcome-guide-icons">🫒🧂🍯🥕🥔🥘</div>
            <div className="welcome-guide-info">
              <p className="welcome-guide-info-item">WFPB</p>
              <p className="welcome-guide-info-item">Low-Processed</p>
              <p className="welcome-guide-info-item">Food Simplicity</p>
            </div>
          </div>
        </section>
        <section className="welcome-join">
          <h2 className="welcome-join-heading">
            Ready to save time with delicious food?
          </h2>
          <button className="welcome-join-button">Join Now</button>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
