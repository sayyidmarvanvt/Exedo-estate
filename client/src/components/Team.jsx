import { teams } from '../constant/data'
import Button from './Button'
const Team = () => {
  return (
    <section className="section pb-[90px] md:pb-[150px]">
      <div className="container">
        <p className="subtitle">Our Team</p>
        <h2>Meet our Team</h2>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {teams.map((member) => (
            <div className="relative" key={member.id}>
              {/* image */}
              <figure>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full object-cover h-full"
                />
              </figure>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[75%] bg-white p-4 border text-center rounded-lg border-gray-300">
                <h4 className="font-semibold text-lg text-[#fece51]">
                  {member.name}
                </h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <Button
          label="View More"
          className="secondary-btn ml-auto rounded-md mt-20"
        />
      </div>
    </section>
  );
}

export default Team