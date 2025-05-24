import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

/* swiper styles */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PopularProperties = () => {
  const [offerListings, setOfferListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [offers] = await Promise.all([
          axios
            .get(
              "https://real-estate-server-yqaq.onrender.com/api/listing/search?offer=true"
            )
            .then((res) => res.data),
        ]);
        setOfferListings(offers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="section pb-[90px] md:pb-[150px]">
      <div className="container">
        {/* Title wrapper */}
        <div className="lg:flex lg:justify-between lg:items-center mb-10">
          {/* title */}
          <div>
            <h2>Popular Properties</h2>
            <p className="mt-4 mb-7 text-gray-600 max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur. Faucibus tristique auctor
              mauris velit varius. Eu duis viverra.
            </p>
          </div>
          {/* navigation buttons */}
          <div className="flex items-center gap-5 mb-5">
            <button
              className="
    prev-btn
    bg-[#fece51]
    text-white
    h-12 w-12 flex items-center justify-center rounded-full
    transition-colors
    hover:bg-[#e6b94a]
    active:bg-[#cfa343]
  "
            >
              <RiArrowLeftSLine size={24} />
            </button>
            <button
              className="
    next-btn
    bg-[#fece51]
    text-white
    h-12 w-12 flex items-center justify-center rounded-full
    transition-colors
    hover:bg-[#e6b94a]
    active:bg-[#cfa343]
  "
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
        </div>

        {/* card wrapper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            575: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          autoplay={true}
          loop={offerListings.length > 3}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
        >
          {offerListings.map((item) => (
            <SwiperSlide key={item._id} className="mb-20">
              <div className="border border-gray-200  flex flex-col">
                <div>
                  <img
                    src={item.imageUrls[0]}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <b className="text-xl text-gray-900 min-h-[32px]">
                    {item.offer ? (
                      <>
                        <span className="line-through text-gray-400 mr-2">
                          ${item.regularPrice}
                        </span>
                        <span className="text-[#fece51]">
                          ${item.discountPrice}
                        </span>
                      </>
                    ) : (
                      <>${item.regularPrice}</>
                    )}
                    <span className="ml-1 text-sm text-gray-500">/mo</span>
                  </b>
                  <a
                    href="#"
                    className="block font-semibold text-2xl my-2 text-gray-700 hover:bg-[#e6b94a] transition truncate min-h-[32px]"
                    title={item.name}
                  >
                    {item.name}
                  </a>
                  <p
                    className="text-gray-500 truncate min-h-[20px]"
                    title={item.address}
                  >
                    {item.address}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-700 min-h-[32px]">
                    <span>{item.bedrooms} Bed</span>
                    <span>|</span>
                    <span>{item.bathrooms} Bath</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProperties;
