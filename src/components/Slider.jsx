import { useState } from "react";
import certificate1 from "../assets/images/certificates/Enactus Fayoum Certificates.jpg";
import certificate2 from "../assets/images/certificates/Enactus Egypt Certificates.jpg";
import certificate3 from "../assets/images/certificates/Screenshot 2025-09-19 110441.png";
import certificate4 from "../assets/images/certificates/Screenshot 2025-09-19 110501.png";
import certificate5 from "../assets/images/certificates/Screenshot 2025-09-19 110531.png";
import certificate6 from "../assets/images/certificates/Screenshot 2025-09-19 110556.png";
import certificate7 from "../assets/images/certificates/WhatsApp Image 2025-09-20 at 2.15.55 PM.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Slider() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const certificates = [
    { src: certificate1, title: "Enactus Fayoum" },
    { src: certificate2, title: "Enactus Egypt" },
    { src: certificate3, title: "Database Fundamentals" },
    { src: certificate4, title: "Network Essentials" },
    { src: certificate5, title: "UX Design Fundamentals" },
    { src: certificate6, title: "Introduction to Data Science" },
    { src: certificate7, title: "Introduction to Data Science" },
  ];

  return (
    <div
      id="Certifications"
      className="bg-[var(--bg-primary)]  text-center "
    >
      {/* Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, EffectCoverflow]}
        className="max-w-[225px] md:max-w-2xl mx-auto px-4"
        // data-aos="fade-up"
        breakpoints={{
          0: {
            slidesPerView: 1, // موبايل صغير جداً
          },
          400: {
            slidesPerView: 1, // من أول تابلت أو موبايل واسع
          },
          1024: {
            slidesPerView: 1, // من أول لابتوب وفوق
          },
        }}
      >
        {certificates.map((cert, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative group cursor-pointer rounded-lg overflow-hidden "
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-[200px] sm:h-[350px] object-cover rounded-lg"
              />
         
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative rounded-xl p-4 max-w-5xl w-[90%] shadow-lg">
            {/* زرار الإغلاق */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-xl sm:text-3xl font-black cursor-pointer text-red-700 hover:text-red-400 transition duration-500 hover:rotate-180 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 352 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>

            {/* الصورة */}
            <img
              src={certificates[index].src}
              alt={certificates[index].title}
              className="max-h-[80vh] mx-auto rounded-lg"
            />

            {/* العنوان */}
          </div>
        </div>
      )}
    </div>
  );
}
export default Slider;
