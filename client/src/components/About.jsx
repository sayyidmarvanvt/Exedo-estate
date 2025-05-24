import { stats } from '../constant/data'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Button from './Button'
const About = () => {
    const { ref,inView } = useInView({
        triggerOnce:true, //only trigger the animation once
        threshold:0.3 //start when 30% of the element is visible
    })
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 md:items-center gap-[50px]">
        {/* content */}
        <div className="md:order-1">
          <p className="subtitle">About Us</p>
          <h2 className="mb-4">Who We Are</h2>
          <p className="mb-8">
            At Exedo, we connect people with homes they love. With over 10
            years of industry experience, we provide expert guidance for buyers,
            sellers, and investors across multiple cities.
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-5 md:gap-10 text-center"
            ref={ref}
          >
            {stats.map((stat) => (
              <div key={stat.id}>
                <h3 className="text-3xl md:text-4xl font-bold text-[#fece51]">
                  {inView && <CountUp end={stat.value} duration={2} />} +
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <Button label="Read More" className="secondary-btn mt-8" />
        </div>
        {/* banner */}
        <figure>
          <img
            src="/images/about-banner.png"
            alt="about banner"
            className="w-full h-full object-cover rounded-xl"
          />
        </figure>
      </div>
    </section>
  );
}

export default About