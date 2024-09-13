import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HotelListingPage() {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Popular");

  // Sample hotel data (static for now)
  const hotels = [
    {
      name: "Hotel Sunshine",
      image: "https://via.placeholder.com/150",
      price: "₹3,500",
      rating: "4.5",
      amenities: ["WiFi", "Swimming Pool"],
    },
    {
      name: "Ocean View Hotel",
      image: "https://via.placeholder.com/150",
      price: "₹4,000",
      rating: "4.2",
      amenities: ["Spa", "Parking"],
    },
    {
      name: "Mountain Retreat",
      image: "https://via.placeholder.com/150",
      price: "₹2,800",
      rating: "4.8",
      amenities: ["Bar", "Cafe"],
    },
    {
      name: "City Center Inn",
      image: "https://via.placeholder.com/150",
      price: "₹3,200",
      rating: "4.0",
      amenities: ["WiFi", "Parking"],
    },
    {
      name: "Luxury Stay",
      image: "https://via.placeholder.com/150",
      price: "₹6,500",
      rating: "5.0",
      amenities: ["Spa", "Swimming Pool"],
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 px-4 py-1 shadow-lg mx-auto w-full">
      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-6 item-center justify-between ">
        {/* Location Dropdown */}
        <div className="flex-1 px-16">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" class="disabled hidden">Select Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        {/* Check-in Date Picker */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Check-in</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholderText="Select Check-in Date"
          />
        </div>

        {/* Check-out Date Picker */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Check-out</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholderText="Select Check-out Date"
          />
        </div>

        {/* Number of Rooms Dropdown */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Rooms</label>
          <select
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value={1}>1 Room</option>
            <option value={2}>2 Rooms</option>
            <option value={3}>3 Rooms</option>
            <option value={4}>4 Rooms</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex-1 px-16 mt-5">
          <button className="bg-blue-500 text-white px-16 py-2 rounded-lg shadow-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

    </div>

    <div>
    {/* Sort and Search Section */}
    <div className="bg-gray-100 px-16 py-2 shadow-lg mx-auto w-full flex justify-between items-center">
      <span className="font-bold px-4 ml-16">SORT BY:</span> {/* Added some margin for spacing */}
      
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
          className={`px-4 flex full-w py-2 rounded-md ${activeTab === "Price" ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
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
            <input type="checkbox" className="mr-2" /> Breakfast included
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> All meals included
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> Early bird deals
          </label>
        </div>

        {/* Price per Night */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Price per Night</h4>
          <label>
            <input type="checkbox" className="mr-2" /> Under ₹2,000
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> ₹2,000 - ₹4,000
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> ₹4,000 - ₹6,000
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> ₹6,000 & above
          </label>
        </div>

        {/* Star Category */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Star Category</h4>
          <label>
            <input type="checkbox" className="mr-2" /> 3 Star
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> 4 Star
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> 5 Star
          </label>
        </div>

        {/* Amenities */}
        <div>
          <h4 className="font-semibold mb-2">Amenities</h4>
          <label>
            <input type="checkbox" className="mr-2" /> Swimming Pool
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> Spa
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> WiFi
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> Parking
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> Bar
          </label><br />
          <label>
            <input type="checkbox" className="mr-2" /> Cafe
          </label>
        </div>
      </div>

      {/* Right Side - Hotel Listings */}
      <div className="col-span-3 bg-white p-5 shadow-lg">
        <h3 className="font-bold text-lg mb-4">Hotel Listings</h3>
        {hotels.map((hotel, index) => (
          <div key={index} className="border-b border-gray-300 mb-4 pb-4">
            <div className="flex items-center">
              <img src={hotel.image} alt={hotel.name} className="w-32 h-32 object-cover rounded-md mr-4" />
              <div>
                <h4 className="font-semibold text-xl">{hotel.name}</h4>
                <p className="text-gray-700">Price: {hotel.price}</p>
                <p className="text-gray-700">Rating: {hotel.rating} ⭐</p>
                <p className="text-gray-700">Amenities: {hotel.amenities.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default HotelListingPage;