import React from 'react'

import { Helmet } from 'react-helmet'

import './products.css'

const Products = (props) => {
  return (
    <div className="products-container">
      <Helmet>
        <title>Products - Kalamata Baked Olives</title>
        <meta property="og:title" content="Products - Kalamata Baked Olives" />
      </Helmet>
      <div className="products-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer products-navbar-interactive"
        >
          <span className="logo">OLIVESNACKS</span>
          <div data-thq="thq-navbar-nav" className="products-desktop-menu">
            <nav className="products-links">
              <span className="bodySmall">Home</span>
              <span className="products-nav22 bodySmall">About</span>
              <span className="products-nav32 bodySmall">Products</span>
              <span className="products-nav42 bodySmall">Contact</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="products-burger-menu">
            <svg viewBox="0 0 1024 1024" className="products-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="products-mobile-menu1 mobileMenu"
          >
            <div className="products-nav">
              <div className="products-top">
                <span className="logo">OLIVESNACKS</span>
                <div data-thq="thq-close-menu" className="products-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="products-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="products-links1">
                <span className="products-nav121 bodySmall">Home</span>
                <span className="products-nav221 bodySmall">About</span>
                <span className="products-nav321 bodySmall">Products</span>
                <span className="products-nav421 bodySmall">Contact</span>
              </nav>
              <div className="products-buttons">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="products-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="products-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="products-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="products-hero">
        <div className="heroContainer products-hero1">
          <div className="products-container01">
            <h1 className="products-hero-heading heading1">
              Introducing Kalamata Baked Olives
            </h1>
            <span className="products-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Handpicked from the olive groves of Messinia, Greece
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="products-banner">
        <div className="products-container02">
          <h1 className="products-text14">Kalamata Baked Olives - Natural</h1>
          <span className="products-text15">
            <span>
              Kalamata Baked Olives are produced in synergy between Farmer
              Messiniaki, Greenland - Co farming and Mamellada and it has
              already been distinguished in the Innovation competition of the
              International Exhibition SIAL PARIS 2022!
            </span>
            <br></br>
            <br></br>
            <span>
              It is a tasty and delicious crunchy oven-baked olive rings snack,
              WITHOUT pits, vinegar and olive oil, so that you can enjoy the
              olives as you have never tasted them before. Without preservatives
              and additives, completely natural, in a practical package, it is
              the ideal snack for the office, school, car, on a trip, but at the
              same time it is also an excellent accompaniment to drinks and
              above all to wine. The Baked Kalamon olives snack comes in HORECA
              and Retail packages as well.
            </span>
            <br></br>
            <br></br>
            <span>
              • Baked and crispy. Without the greasiness, but with all the
              flavor. Light body, explosive notes and rich aftertaste.
            </span>
            <br></br>
            <br></br>
            <span>
              • Snacks for all hours. In a convenient package, for work, school,
              a walk, an excursion. Natural and nutritious delicacy, without
              seeds.
            </span>
            <br></br>
            <br></br>
            <span>
              • Creative and versatile. Sauces, salads, hot and cold dishes,
              take on character and taste. Adds imagination to the kitchen.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="products-container03"></div>
        </div>
        <img
          alt="image"
          src="/kalamata_baked_olives_-01-500h.png"
          loading="lazy"
          className="products-image"
        />
      </div>
      <div className="products-banner1">
        <div className="products-container04">
          <h1 className="products-text33">Snack Mix - Natural and Healthy</h1>
          <span className="products-text34">
            <span>
              Healthy Nut Mix contains a blend of nuts and fruits, including
              almonds, peanuts, hazelnuts, cashews raisins, cranberries and of
              course Kalamata Baked olives to create a flavorful treat that
              helps you stay full and energized throughout your day. This mix
              contains no artificial flavors, colors or preservatives and they
              are unsalted to create a delicious, low sodium mixed nuts treat.
              Is an excellent source of vitamin E, making it a fun, antioxidant
              rich snack for the whole family.
            </span>
            <br></br>
            <br></br>
            <span>• No artificial flavors, colors or preservatives</span>
            <br></br>
            <br></br>
            <span>
              • Roasted, unsalted with added raisins for a blend of savory and
              sweet
            </span>
            <br></br>
            <br></br>
            <span>• Suggested from dieticians as a daily snacking</span>
            <br></br>
            <br></br>
            <span>
              • are great for on-the-go snacking, backyard gatherings or movie
              night
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
          </span>
          <div className="products-container05"></div>
        </div>
        <img
          alt="image"
          src="/kalamata_baked_olives_-02-500h.png"
          loading="lazy"
          className="products-image1"
        />
      </div>
      <div className="products-banner2">
        <div className="products-container06">
          <h1 className="products-text50">Kalamata Baked Olives - Chili</h1>
          <span className="products-text51">
            <span>
              Kalamata Baked Olives chili flavor is a tasty and delicious
              crunchy oven- baked olive rings snack.
            </span>
            <br></br>
            <br></br>
            <span>
              WITHOUT pits, vinegar and olive oil, so that you can enjoy the
              olives as you have never tasted them before. Without preservatives
              and additives, completely natural, in a practical package, it is
              the ideal snack for the office, school, car, on a trip, but at the
              same time it is also an excellent accompaniment to drinks. The
              Kalamata Baked olives snack comes in HORECA and Retail packages as
              well.
            </span>
            <br></br>
            <br></br>
            <span>
              • Baked and crispy. Without the greasiness, but with all the
              flavor. Light body, explosive notes and rich aftertaste.
            </span>
            <br></br>
            <br></br>
            <span>
              • Snacks for all hours. In a convenient package, for work, school,
              a walk, an excursion. Natural and nutritious delicacy, without
              seeds.
            </span>
            <br></br>
            <br></br>
            <span>
              • Creative and versatile. Sauces, salads, hot and cold dishes,
              take on character and taste. Adds imagination to the kitchen
            </span>
            <br></br>
            <br></br>
          </span>
          <div className="products-container07"></div>
        </div>
        <img
          alt="image"
          src="/kalamata_baked_olives_-03-500h.png"
          loading="lazy"
          className="products-image2"
        />
      </div>
      <div className="products-banner3">
        <div className="products-container08">
          <h1 className="products-text67">Chili Flavor Mix</h1>
          <span className="products-text68">
            <span>
              Chili Flavor Mix contains a blend of nuts slightly flavored ,
              including Huanita, peanuts, shrimp nuts piperito, cornnut,
              cocktail nuts, tiger nuts and of course Kalamata Baked olives to
              create a flavorful treat that helps you stay full and energized
              throughout your day.
            </span>
            <br></br>
            <br></br>
            <span>
              • Its sparkle and intensity make it an ideal snack to accompany
              alcoholic beverages and soft drinks.
            </span>
            <br></br>
            <br></br>
            <span>
              • Fresh, crunchy, salty and delicious, slightly spicy peanuts with
              paprika flavor
            </span>
            <br></br>
            <br></br>
            <span>
              • Serve your guests now a special, original and delicious snack to
              accompany their drinks. They are so delicious and tasty that you
              cannot resist.
            </span>
            <br></br>
            <br></br>
            <span>
              • Enjoy watching a movie or including them in a party buffet.
            </span>
            <br></br>
            <br></br>
            <span>
              • Attention they are extremely tempting and surely everyone will
              love them!
            </span>
          </span>
          <div className="products-container09"></div>
        </div>
        <img
          alt="pastedImage"
          src="/kalamata_baked_olives_-04-500h.png"
          loading="lazy"
          className="products-pasted-image"
        />
      </div>
      <div className="products-footer">
        <footer className="footerContainer products-footer1">
          <div className="products-container10">
            <span className="logo">OLIVESNACKS</span>
            <nav className="products-nav1">
              <span className="bodySmall">Home</span>
              <span className="products-nav222 bodySmall">About</span>
              <span className="products-nav322 bodySmall">Products</span>
              <span className="products-nav422 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="products-separator"></div>
          <div className="products-container11">
            <span className="bodySmall products-text85">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="products-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="products-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="products-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="products-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Products
