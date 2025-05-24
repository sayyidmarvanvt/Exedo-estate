import { ServicesCardItem } from '../constant/data'

const Services = () => {
  return (
    <section className="section pb-[90px] md:pb-[150px] bg-gray-200/30">
      <div className="container">
        <p className="subtitle">Services</p>
        <h2>Services We Offer</h2>

        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 md:mt-16">
          {ServicesCardItem.map((item) => (
            /* card */
            <div
              className="border border-gray-300 p-[36px] rounded-lg bg-white hover:border-[#fece51]transition"
              key={item.id}
            >
              <div className="bg-sky-200/30 max-w-max p-5 rounded-full">
                <img src={item.icon} alt={item.title} width={70} height={70} />
              </div>
              <h4 className="text-[22px] font-bold my-3">{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services