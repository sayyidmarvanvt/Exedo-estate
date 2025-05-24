import SearchBar from "./SearchBar";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const stats = [
    {
      id: 1,
      value: 10,
      label: "Years of Experience",
    },
    {
      id: 2,
      value: 200,
      label: "Award Gained",
    },
    {
      id: 3,
      value: 2000,
      label: "Property Ready",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, //only trigger the animation once
    threshold: 0.3, //start when 30% of the element is visible
  });

  return (
    <section className="hero">
      <div className="container flex m-5 sm:mt-10 relative">
        {/* Left side */}
        <div className="flex flex-col sm:gap-[50px] h-full pt-10 flex-1  relative ">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              Find Property That <br />
              <span className="text-[#fece51]">Feels Like Home.</span>
            </h1>
            <p className="max-w-[440px] pt-2 pb-8">
              From cozy apartments to spacious family homes, we’ll help you find
              the one that fits your lifestyle.
            </p>
          </div>
          <SearchBar />
          <div className="hidden sm:flex justify-between" ref={ref}>
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <h3 className="text-[36px] lg:text-[32px] font-bold text-gray-900">
                  {inView && <CountUp end={stat.value} duration={2} />}
                  {stat.value >= 1000 ? "+" : stat.value === 16 ? "+" : ""}
                </h3>
                <h4 className="text-[20px] font-light text-gray-600">
                  {stat.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
        {/* Right side */}
        <div className="flex-[2] lg:flex hidden relative items-center ">
          <img
            src="image/bg.png"
            alt=""
            className="absolute w-[110%] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
