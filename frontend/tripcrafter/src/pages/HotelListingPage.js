// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";  
// import axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";

// function HotelListingPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("Popular");
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); 

//   const [selectedAmenities, setSelectedAmenities] = useState([]);
//   const [selectedRating, setSelectedRating] = useState("");
//   const [selectedPriceRange, setSelectedPriceRange] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/hotels/fetchHotels/", {
//           params: {
//             searchTerm,
//             amenities: selectedAmenities.join(","), // Join array to send as string
//             rating: selectedRating,
//             price_range: selectedPriceRange,
//             city: selectedCity,
//           },
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         console.log(response.data)
//         setHotels(response.data);
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, [searchTerm, selectedAmenities, selectedRating, selectedPriceRange, selectedCity]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleHotelClick = (hotelId) => {
//     navigate(`/hotels/hotel-listing/${hotelId}`);  // Navigate to the hotel detail page
//   };
  
//   const handleAmenitiesChange = (amenity) => {
//     setSelectedAmenities((prev) =>
//       prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
//     );
//   };

//   const handleRatingChange = (event) => {
//     setSelectedRating(event.target.value);
//   };

//   const handlePriceRangeChange = (event) => {
//     setSelectedPriceRange(event.target.value);
//   };

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="spinner"></div> {/* Loading Spinner */}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div>
//         {/* Sort and Search Section */}
//         <div className="bg-gray-100 px-16 py-2 shadow-lg mx-auto w-full flex justify-between items-center">
//           <span className="font-bold px-4 ml-16">SORT BY:</span>

//           {/* Sort By Tabs */}
//           <div className="flex justify-between items-center space-x-10 ml-10">
//             <button
//               className={`px-4 flex py-2 rounded-md ${activeTab === "Popular" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
//               onClick={() => handleTabClick("Popular")}
//             >
//               Popular
//             </button>
//             <button
//               className={`px-4 flex py-2 rounded-md ${activeTab === "User Rating" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
//               onClick={() => handleTabClick("User Rating")}
//             >
//               User Rating (Highest First)
//             </button>
//             <button
//               className={`px-4 flex py-2 rounded-md ${activeTab === "Price" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
//               onClick={() => handleTabClick("Price")}
//             >
//               Price (Highest First)
//             </button>
//           </div>

//           {/* Search Bar for Hotel Name */}
//           <div className="ml-10 flex-1">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="block px-2 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Search Hotels"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="m-5">
//         {/* Search Filter and Hotel Listings Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
//           {/* Left Side - Search Filter */}
//           <div className="col-span-1 bg-white p-10 shadow-lg">
//             <h3 className="font-bold text-lg mb-4">Search Filter</h3>

//             {/* Suggested For You */}
//             <div className="mb-4">
//               <h4 className="font-semibold mb-2">Suggested For You</h4>
//               <label>
//                 <input type="checkbox" className="mr-2" /> Breakfast included
//               </label><br />
//               <label>
//                 <input type="checkbox" className="mr-2" /> All meals included
//               </label><br />
//               <label>
//                 <input type="checkbox" className="mr-2" /> Early bird deals
//               </label>
//             </div>

//             {/* Price per Night */}
//             <div className="mb-4">
//               <h4 className="font-semibold mb-2">Price per Night</h4>
//               <label>
//                 <input type="checkbox" className="mr-2" /> Under ₹2,000
//               </label><br />
//               <label>
//                 <input type="checkbox" className="mr-2" /> ₹2,000 - ₹4,000
//               </label><br />
//               <label>
//                 <input type="checkbox" className="mr-2" /> ₹4,000 - ₹6,000
//               </label><br />
//               <label>
//                 <input type="checkbox" className="mr-2" /> Above ₹6,000
//               </label>
//             </div>

//             {/* Amenities */}
//             <div className="mb-4">
//               <h4 className="font-semibold mb-2">Amenities</h4>
//               <label>
//                 <input type="checkbox" className="mr-2" /> Free Wi-Fi
//               </label><br />
//               <label>
//                 <input type="checkbox" className="mr-2" /> Swimming Pool
//               </label><br />
//               <label>
//                 <input type="checkbox" className="mr-2" /> Spa
//               </label>
//             </div>

//             {/* Apply Filters Button */}
//             <div className="mt-5">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
//                 Apply Filters
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Hotel Listings */}
//           <div className="col-span-3 grid grid-cols-2 md:grid-cols-2 gap-4">
//             {hotels.map((hotel) => (
//               <div key={hotel.id} className="bg-white rounded-lg p-4 shadow-md" onClick={() => handleHotelClick(hotel.id)}>
//                 <img src={`http://localhost:8000${hotel.images[0].image}`} alt={hotel.name} className="w-full h-64 object-cover rounded-md mb-2" />
//                 <h2 className="font-bold text-xl">{hotel.name}</h2>
//                 <p className="text-gray-600">Price: ₹{hotel.price_per_night}</p>
//                 <p className="text-gray-600">Rating: {hotel.rating}</p>
//                 <p className="text-gray-600">Amenities: {hotel.amenities.join(", ")}</p>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
//                   View Details
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotelListingPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

function HotelListingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Popular");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amenities, setAmenities] = useState([]); // State for amenities filter
  const [rating, setRating] = useState(""); // State for rating filter
  const [price, setPrice] = useState(""); // State for price filter
  const [city, setCity] = useState(""); // State for city filter
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/hotels/fetchHotels/", {
          params: {
            city,
            amenities,
            rating,
            price,
            searchTerm
          },
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [city, amenities, rating, price, searchTerm]); // Added dependencies to fetch on filter change

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleHotelClick = (hotelId) => {
    navigate(`/hotels/hotel-listing/${hotelId}`);  // Navigate to the hotel detail page
  };

  const handleApplyFilters = () => {
    // This function could be used to trigger filtering if needed
    console.log({ city, amenities, rating, price, searchTerm });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div> {/* Loading Spinner */}
      </div>
    );
  }

  return (
    <div>
      <div>
        {/* Sort and Search Section */}
        <div className="bg-gray-100 px-16 py-2 shadow-lg mx-auto w-full flex justify-between items-center">
          <span className="font-bold px-4 ml-16">SORT BY:</span>

          {/* Sort By Tabs */}
          <div className="flex justify-between items-center space-x-10 ml-10">
            <button
              className={`px-4 flex py-2 rounded-md ${activeTab === "Popular" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
              onClick={() => handleTabClick("Popular")}
            >
              Popular
            </button>
            <button
              className={`px-4 flex py-2 rounded-md ${activeTab === "User Rating" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
              onClick={() => handleTabClick("User Rating")}
            >
              User Rating (Highest First)
            </button>
            <button
              className={`px-4 flex py-2 rounded-md ${activeTab === "Price" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
              onClick={() => handleTabClick("Price")}
            >
              Price (Highest First)
            </button>
          </div>

          {/* Search Bar for Hotel Name */}
          <div className="ml-10 flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block px-2 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search Hotels"
            />
          </div>
        </div>
      </div>

      <div className="m-5">
        {/* Search Filter and Hotel Listings Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {/* Left Side - Search Filter */}
          <div className="col-span-1 bg-white p-10 shadow-lg">
            <h3 className="font-bold text-lg mb-4">Search Filter</h3>

            {/* Suggested For You */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Suggested For You</h4>
              <label>
                <input type="checkbox" value="Breakfast" onChange={(e) => setAmenities((prev) => [...prev, e.target.value])} className="mr-2" /> Breakfast included
              </label><br />
              <label>
                <input type="checkbox" value="All Meals" onChange={(e) => setAmenities((prev) => [...prev, e.target.value])} className="mr-2" /> All meals included
              </label><br />
              <label>
                <input type="checkbox" value="Early Bird" onChange={(e) => setAmenities((prev) => [...prev, e.target.value])} className="mr-2" /> Early bird deals
              </label>
            </div>

            {/* Price per Night */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Price per Night</h4>
              <select onChange={(e) => setPrice(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select Price Range</option>
                <option value="2000">Under ₹2,000</option>
                <option value="2000-4000">₹2,000 - ₹4,000</option>
                <option value="4000-6000">₹4,000 - ₹6,000</option>
                <option value="6000">Above ₹6,000</option>
              </select>
            </div>

            {/* Ratings */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Ratings</h4>
              <select onChange={(e) => setRating(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select Rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>

            {/* City */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">City</h4>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter city"
              />
            </div>

            {/* Apply Filters Button */}
            <div className="mt-5">
              <button onClick={handleApplyFilters} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Right Side - Hotel Listings */}
          <div className="col-span-3 grid grid-cols-2 md:grid-cols-2 gap-4">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-lg p-4 shadow-md" onClick={() => handleHotelClick(hotel.id)}>
                <img src={`http://localhost:8000${hotel.images[0].image}`} alt={hotel.name} className="w-full h-64 object-cover rounded-md mb-2" />
                <h2 className="font-bold text-xl">{hotel.name}</h2>
                <p className="text-gray-600">Price: ₹{hotel.price_per_night}</p>
                <p className="text-gray-600">Rating: {hotel.rating}</p>
                <p className="text-gray-600">Amenities: {hotel.amenities.join(", ")}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelListingPage;
