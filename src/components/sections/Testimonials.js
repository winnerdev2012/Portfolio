const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I endorse ChengZe for React, html/html5,
                 jquery, angular js, cascading style sheets (css), Django-cms,
                  e-commerce website, JavaScript programming language, laravel
                   framework.
              </span>
              <span className="person">Jasmin Aniston</span>
              <span className="job">Director - Adobe</span>
            </p>
            <img src="assets/clients.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " ChengZe is a great help managing a very out of date website.
                Everything we ask him to do is done quickly and efficiently, we
                would be lost without him. "
              </span>
              <span className="person">Mark Eliott</span>
              <span className="job">Manager - Envato</span>
            </p>
            <img src="assets/clients.jpg" alt="" />
          </div>
        </div>
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " In One Word, Excellent Developer! High Recommend!
I endorse ChengZe for woocommerce, html/html5, React JS, cascading style sheets (css), e-commerce website, JavaScript programming language, PHP programming language"
              </span>
              <span className="person">Gail Parichat</span>
              <span className="job">Manager - Micosoft</span>
            </p>
            <img src="assets/clients2.jpeg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
