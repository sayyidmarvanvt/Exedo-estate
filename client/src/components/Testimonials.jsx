import { testimonialItems } from '../constant/data'
import { RiArrowLeftSLine, RiArrowRightSLine, RiStarFill } from '@remixicon/react'
import { Swiper,SwiperSlide } from 'swiper/react'

/* Swiper styles */
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'


const Testimonials = () => {
  return (
    <section className="section pb-[90px] md:pb-[150px] bg-neutral-200/60">
      <div className="container">
        <p className="subtitle">Testimonials</p>
        <h2>What our clients say</h2>

        {/* card wrapper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mt-10 md:mt-12"
        >
          {testimonialItems.map((item) => (
            /* card swiper slide */
            <SwiperSlide
              className="bg-white p-6 rounded-xl mb-16"
              key={item.id}
            >
              {/* card */}
              <div>
                <div className="flex items-center gap-1 text-yellow-500 text-xl">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </div>

                <p className="mt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  repellendus voluptatem deleniti animi, eum dicta quidem.
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full aspect-square"
                  />

                  <div className="">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center mt-12 gap-6 max-md:hidden">
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
    </section>
  );
}

export default Testimonials