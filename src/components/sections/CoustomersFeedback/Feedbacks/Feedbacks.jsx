import React, { useEffect, useState, useRef } from "react";
import Feedback from "../Feedback/Feedback";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/components/pagination/pagination.min.css";

import "./Feedbacks.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("https://seoul-kitchenista-server-apurbahasanj.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error(err.message));
  }, []);


//   handle stop on hover
  const handleSwiperHover = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleSwiperLeave = () => {
    if (swiperRef.current && !swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.start();
    }
  };


  return (
    <>
      <div className="">
        <h1 className="lg:text-5xl text-3xl mt-4 mb-3 font-mono uppercase text-center text-slate-800">
          What Our Clients Say
        </h1>
        <p className=" text-slate-800 font-mono text-center lg:text-2xl md:text-lg text-base dark:text-gray-400">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti explicabo numquam vero assumenda, nulla neque quisquam quasi nam recusandae labore.
        </p>
      </div>
      <h1 className="sub-header rounded">
        Customer Feedback
      </h1>
      <div
        className="mb-7 my-container"
        onMouseEnter={handleSwiperHover}
        onMouseLeave={handleSwiperLeave}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          
        >
          {feedbacks.map((singleFeedback) => (
            <SwiperSlide key={singleFeedback.id}>
              <Feedback singleFeedback={singleFeedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Feedbacks;
