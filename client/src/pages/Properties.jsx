import axios from "axios";
import { useEffect, useState } from "react";

const Properties = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://real-estate-server-yqaq.onrender.com/api/listing/get`
        );
        const data = res.data;
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListings(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, []);

  if (loading) {
    return <div className="container py-12">Loading properties...</div>;
  }

  if (error) {
    return <div className="container py-12 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container py-12 mt-10 xs:mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">All Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item) => (
          <div
            key={item._id}
            className="border border-gray-200 rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={item.imageUrls[0]}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
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
        ))}
      </div>
    </div>
  );
};

export default Properties;
