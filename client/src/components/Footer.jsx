import { footerSocialIcons, footerListItems } from "../constant/data";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 pt-[60px] pb-9 text-neutral-100">
      <div className="container">
        {/* footer top */}
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-[1fr_0.5fr_1fr_1fr]">
          {/* footer brand */}
          <div>
            <a
              to="/"
              className="font-bold text-[20px] flex items-center gap-[10px]"
            >
              <img src="image/logo.png" alt="" className="w-[28px]" />
              <span>ExedoEstate</span>
            </a>
            <p className="my-[14px] text-neutral-50/60">
              Helping you find the perfect home with expert guidance and a
              seamless experience.
            </p>

            <div className="flex mt-3 gap-6">
              {footerSocialIcons.map((icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="hover:text-[#fece51]transition-colors"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* footer list */}
          {footerListItems.map((item) => (
            <div key={item.id}>
              <p className="text-xl font-bold text-white mb-3">{item.title}</p>
              <ul className="grid gap-2">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-neutral-50/60 hover:text-neutral-100 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* footer bottom */}
        <div className="grid gap-4 mt-10 md:mt-20 text-center">
          <div className="w-full h-[1px] bg-gray-500 block"></div>
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} copyright Homely.All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
