import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-10 ">
      <div className="my-container grid md:grid-cols-2 lg:flex gap-16 text-white ">
        <div className=" lg:w-6/12">
          <h2 className="text-4xl font-bold mb-6">SushiFushi</h2>
          <p className="text-base text-gray-400 mb-6">
            The inventor of modern sushi is believed to be Hanaya Yohei, who invented nigiri-zushi, a type of sushi most known today, in which seafood is placed on hand-pressed vinegared rice, around 1824 in the Edo period (1603–1867). It was the fast food of the chōnin class in the Edo period.[2][3][4]

            Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish.
          </p>
          <div className="flex gap-4">
            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
            <Link to="">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/d0Yz1tks/facebook.png"
                  alt="fb"
                />
              </div>
            </Link>
            <Link to="">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/t4PKpVgv/twitter.png"
                  alt="twitter"
                />
              </div>
            </Link>
            <Link to="">
              <div className="rounded-full w-10 h-10 bg-white">
                <img
                  className="p-2"
                  src="https://i.postimg.cc/rF7BB9qt/instagram.png"
                  alt="instagram"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className=" lg:w-3/12">
          <h2 className="text-xl font-semibold mb-8">Navigate</h2>
          <div className="grid gap-3 text-base text-gray-400">
            <p>Home</p>
            <p>Recipes</p>
            <p>Chefs</p>
            <p>ingredients</p>
            <p>Features</p>
            <p>Competition</p>
          </div>
        </div>
        <div className="lg:w-3/12">
          <h2 className="text-xl font-semibold mb-8">Information</h2>
          <div className="grid gap-3 text-base text-gray-400">
            <p>Contact</p>
            <p>Work with us</p>
            <p>Insights and consultancy</p>
            <p>FAQs</p>
            <p>About us</p>
            <p>Jobs</p>
            <p>Contributors</p>
            <p>Photography</p>
            <p>Policies</p>
          </div>
        </div>
      </div>
      <hr className="mt-9  text-gray-50" />
      <div className="my-container flex justify-between">
        <p className=" text-base  text-gray-400">
          &#169;2023 SushiFushi. All Rights Reserved
        </p>
        <p className=" text-base  text-gray-400">
          Powered by{" "}
          <span className="text-xl font-semibold">SushiFushi</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
