import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper base styles
import 'swiper/css/navigation'; // Import Swiper Navigation styles
import 'swiper/css/pagination'; // Import Swiper Pagination styles

import { Navigation, Pagination } from 'swiper/modules'; // Correct import path for Swiper modules in version 7+

function HotelDetailPage() {
    const [hotel, setHotel] = useState(null); // State to store hotel details
    const [loading, setLoading] = useState(true); // State to handle loading
    const { id } = useParams(); // Get the hotel ID from the URL

    // Fetch hotel details when the component mounts
    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const hotelResponse = await axios.get(`http://localhost:8000/api/hotels/hoteldetails/${id}`);
                setHotel(hotelResponse.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching hotel data:", error);
                setLoading(false);
            }
        };
        fetchHotelData();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner"></div> {/* Loading Spinner */}
            </div>
        );
    }

    if (!hotel) {
        return <div>Error loading hotel data.</div>;
    }

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100'>
            <div className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg overflow-hidden">
                        <div className="flex flex-wrap">
                        <Swiper
                            modules={[Pagination, Navigation]} // Corrected modules usage
                            spaceBetween={30}
                            navigation
                            pagination={{ clickable: true }}
                            className="hotel-images-carousel"
                        >
                            {hotel.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={`http://localhost:8000${image.image}`}
                                        alt={`${hotel.name} ${index + 1}`}
                                        className="w-full h-96 object-cover mb-4"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
                        <div className="p-6">
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">{hotel.name}</h1>
                            <p className="text-gray-600 mb-4">{hotel.location}</p>
                            <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                    {[...Array(Math.round(hotel.rating))].map((_, index) => (
                                        <svg
                                            key={index}
                                            className="h-5 w-5 text-yellow-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-gray-500">({hotel.rating} / 5)</span>
                                </div>
                            </div>
                        </div>
                    </div>  

                    {/* Amenities */}
                    <div className="border border-gray-300 rounded-lg p-4 bg-white">
                        <h2 className="text-lg font-semibold mb-2">Amenities</h2>
                        <ul className="list-none pl-5">
                            {hotel.amenities.map((amenity, index) => (
                                <li key={index} className="flex items-center mb-2 text-gray-600">
                                    {/* Checkmark Icon */}
                                    <svg
                                        className="h-4 w-4 text-green-500 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M7 10l3 3 7-7-1.5-1.5-5.5 5.5L8.5 8.5 7 10z" />
                                    </svg>
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Pricing and Offers */}
                    <div className="bg-white rounded-lg p-6 border">
                        <h2 className="text-xl font-bold mb-4">Pricing</h2>
                        <p className="text-3xl font-semibold text-blue-600 mb-4">{hotel.price_per_night} per night</p>
                        <h3 className="text-lg font-semibold mb-2">Special Offer</h3>
                        <p className="text-green-600 font-semibold">{hotel.offer}</p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Room Selection Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
                    {hotel.rooms && hotel.rooms.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {hotel.rooms.map((room, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">{room.room_type}</h3>
                                        <p className="text-gray-600 mb-2">{room.description}</p>
                                        <p className="text-gray-600 mb-2">Max Guests: {room.max_guests}</p>
                                        <p className="text-lg font-bold text-blue-600 mb-2">₹{room.price_per_night} per night</p>
                                        <p className="text-gray-600 mb-4">Rooms Available: {room.number_of_rooms}</p>
                                        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                                            Select Room
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No rooms available at this time.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HotelDetailPage;
