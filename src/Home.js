import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CD428684220_.jpg"
          alt="Watch Now"
        />

        <div className="home__row">
          <Product
            id="123"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._Ac_SY400_.jpg"
            rating={5}
          />
          <Product
            id="830"
            title="Kenwood kMix Stand Mixer for Baking, 5 Litre Glass Bowl, Stylish Kitchen Mixer with K-beater"
            price={239}
            rating={4}
            image="https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/CC/06/28141e6f-0078-46b3-8795-b85aef1ddc41.JPG"
          />
        </div>

        <div className="home__row">
          <Product
            id="456"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            price={37.5}
            rating={5}
            image="https://ilounge.ua/files/products/xiaomi-mi-watch-kupit-8.1000x.jpg"
          />
          <Product
            id="2342"
            title="Mauris nunc congue nisi vitae suscipit tellus mauris a diam."
            price={8}
            rating={4}
            image="https://cdn.ecommercedns.uk/files/6/223396/6/7012816/nought-bamboo-reusable-coffee-cup-with-sleeve-and-lid.jpg"
          />
          <Product
            id="1098"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna."
            price={329}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="01201"
            title="Samsung LC48Rg9SuXEN 49' Curved LED Gaming Monitor. Best experience you've ever had with 4K and ultra wide screen impossible is possible."
            price={199}
            rating={3}
            image="https://soft-click.ru/wp-content/uploads/2015/02/Samsung-S34E790CN2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
