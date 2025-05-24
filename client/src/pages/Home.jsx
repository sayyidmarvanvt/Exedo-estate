import "swiper/css/bundle";
import Hero from "../components/Hero";
import PopularProperties from "../components/PopularProperties";
import Services from "../components/Services";
import About from "../components/About";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Cta from "../components/Cta";


export default function Home() {
  // const [offerListings, setOfferListings] = useState([]);
  // const [saleListings, setSaleListings] = useState([]);
  // const [rentListings, setRentListings] = useState([]);
  // const [loading, setLoading] = useState({
  //   offers: true,
  //   rent: true,
  //   sale: true,
  // });

  // SwiperCore.use([Navigation]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading({ offers: true, rent: true, sale: true });
  //       const [offers, rent, sale] = await Promise.all([
  //         axios
  //           .get(
  //             "https://real-estate-server-yqaq.onrender.com/api/listing/search?offer=true&limit=4"
  //           )
  //           .then((res) => res.data),

  //         axios
  //           .get(
  //             "https://real-estate-server-yqaq.onrender.com/api/listing/search?type=rent&limit=4"
  //           )
  //           .then((res) => res.data),

  //         axios
  //           .get(
  //             "https://real-estate-server-yqaq.onrender.com/api/listing/search?type=sale&limit=4"
  //           )
  //           .then((res) => res.data),
  //       ]);
  //       setOfferListings(offers);
  //       setRentListings(rent);
  //       setSaleListings(sale);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading({ offers: false, rent: false, sale: false });
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      
        <Hero />
        <PopularProperties />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Blog />
        <Cta />
     
      {/* {loading.offers ? (
        <Spinner />
      ) : (
        <div className=" max-w-6xl mx-auto">
          <Swiper navigation>
            {offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  className="h-[500px] rounded-lg"
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {loading.offers ? (
          <Spinner />
        ) : (
          offerListings.length > 0 && (
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent offers
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?offer=true"}
                >
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )
        )}

        {loading.rent ? (
          <Spinner />
        ) : (
          rentListings.length > 0 && (
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for rent{" "}
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=rent"}
                >
                  Show more places for rent
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )
        )}

        {loading.sale ? (
          <Spinner />
        ) : (
          saleListings.length > 0 && (
            <div>
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for sale
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=sale"}
                >
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )
        )}
      </div>
       */}
    </>
  );
}
