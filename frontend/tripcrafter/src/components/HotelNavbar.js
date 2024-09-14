import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HotelDetailPage = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [rooms, setRooms] = useState(1);
  const today = new Date();

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 px-4 py-1 mx-auto w-full sticky top-0 z-10">
      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-6 item-center justify-between">
        {/* Location Dropdown */}
        <div className="flex-1 px-16">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" className="disabled hidden">Select Location</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Surat">Surat</option>
          </select>
        </div>

        {/* Check-in Date Picker */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Check-in</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => {
              setCheckInDate(date);
              setCheckOutDate(null); // Reset check-out date when check-in date changes
            }}
            minDate={today} // Only allow selection from today onward
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
            minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : today} // Set minDate to one day after check-in date
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholderText="Select Check-out Date"
            disabled={!checkInDate} // Disable check-out date picker if check-in date is not selected
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
  );
};

export default HotelDetailPage;
