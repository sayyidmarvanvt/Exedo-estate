import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";

const ListingsModal = ({ isVisible, onClose, listings,setUserListings }) => {
  if (!isVisible) return null;


  const handleListingDelete = async(listingId) => {
    try {
      const res = await fetch(
        `https://real-estate-server-yqaq.onrender.com/api/listing/delete/${listingId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-sm w-full h-3/4 overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Your Listings</h2>
          <button onClick={onClose} className="text-gray-700 hover:text-gray-900 "><MdClose /></button>
        </div>
        <div className="mt-4">
          {listings && listings.length > 0 ? (
            listings.map((listing) => (
              <div className="border rounded-lg p-3 flex justify-between items-center gap-4 mt-2" key={listing._id}>
                <Link className="flex justify-between items-center gap-4" to={`/listing/${listing._id}`}>
                  <img src={listing.imageUrls[0]} alt="listing cover" className="h-16 w-16 object-contain " />
                  <p className="text-slate-700 font-semibold flex-1 hover:underline truncate">
                    {listing.name}
                  </p>
                </Link>
                <div className="flex flex-col items-center">
                  <button onClick={()=>handleListingDelete(listing._id)} className="text-red-700 uppercase">Delete</button>
                  <Link  to={`update-listing/${listing._id}`}><button className="text-green-700 uppercase">Edit</button></Link>
                  
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">No listings available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingsModal;
