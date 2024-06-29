import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import "../../../styles/slider.css";

import ava01 from "../../../assets/images/portrait-handsome-bearded-man.jpg";
import ava02 from "../../../assets/images/portrait-man-laughing.jpg";
import ava03 from "../../../assets/images/portrait-white-man-isolated.jpg";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={50} // Space between slides in pixels
      slidesPerView={1} // Number of slides to show per view
      autoplay={{
        delay: 3000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      loop={true} // Enable continuous loop mode
      pagination={{ clickable: true }} // Enable clickable pagination bullets
      modules={[Autoplay, Pagination]} // Register Swiper modules
    >
      <SwiperSlide>
        <div>
          <h6>Amazing Customer Service</h6>
          <p className="review__text">
            &quot;I had an issue with my order, and the customer service team at
            Pizza Time! resolved it promptly and professionally. They even sent
            a complimentary pizza to make up for it. Highly recommend!&quot;
          </p>
          <div className="slider__content d-flex align-items-center gap-3">
            <img src={ava01} alt="avatar" className="rounded" />
            <h6>Naser Ali</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h6>Fast Delivery and Delicious Pizza!</h6>
          <p className="review__text">
            &quot;Pizza Time! never disappoints. The delivery is always on time,
            and the pizza is piping hot and delicious. Their variety of toppings
            ensures everyone in my family gets their favorite slice!&quot;
          </p>
          <div className="slider__content d-flex align-items-center gap-3">
            <img src={ava02} alt="avatar" className="rounded" />
            <h6>Kareem Omar</h6>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h6>Kid-Approved!</h6>
          <p className="review__text">
            &quot;My kids are picky eaters, but they love Pizza Time! The
            customizable options mean we can get something for everyone. The
            cheesy crust is a big favorite in our house.&quot;
          </p>
          <div className="slider__content d-flex align-items-center gap-3">
            <img src={ava03} alt="avatar" className="rounded" />
            <h6>Steven Crock</h6>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialSlider;
