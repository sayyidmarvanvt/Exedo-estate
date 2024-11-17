import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import Spinner from "../components/spinner.component";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [loading, setLoading] = useState({
    offers: true,
    rent: true,
    sale: true,
  });

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading({ offers: true, rent: true, sale: true });
        const [offers, rent, sale] = await Promise.all([
          fetch(
            "https://real-estate-server-yqaq.onrender.com/api/listing/search?offer=true&limit=4"
          ).then((res) => res.json()),
          fetch(
            "https://real-estate-server-yqaq.onrender.com/api/listing/search?type=rent&limit=4"
          ).then((res) => res.json()),
          fetch(
            "https://real-estate-server-yqaq.onrender.com/api/listing/search?type=sale&limit=4"
          ).then((res) => res.json()),
        ]);
        setOfferListings(offers);
        setRentListings(rent);
        setSaleListings(sale);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading({ offers: false, rent: false, sale: false });
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          <p>
            Exedo Estate will help you find your home fast, easy, and
            comfortable.
            <br />
            Our expert support is always available.
          </p>
        </div>
        <Link
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
          to={"/search"}
        >
          Let's get started...
        </Link>
      </div>

      {loading.offers ? (
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
    </div>
  );
}
