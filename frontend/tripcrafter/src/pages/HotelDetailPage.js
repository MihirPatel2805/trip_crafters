// import React from 'react';

// function HotelDetailPage() {
//     const hotel = {
//         name: "Luxury Hotel",
//         location: "Ahmedabad, India",
//         rating: 4.5,
//         image: "https://via.placeholder.com/400", // Replace with actual image URL
//         amenities: [
//             "Free Wi-Fi",
//             "Pool",
//             "Spa",
//             "Fitness Center",
//             "Restaurant",
//             "Parking"
//         ],
//         price: "₹4500 per night",
//         offer: "20% off on weekends!",
//         starCount: 5 // Total stars
//     };

//     const suggestedHotels = [
//         {
//             name: "Comfort Inn",
//             location: "Ahmedabad, India",
//             rating: 4.0,
//             image: "https://via.placeholder.com/150",
//             price: "₹3000 per night"
//         },
//         {
//             name: "City Center Hotel",
//             location: "Ahmedabad, India",
//             rating: 4.2,
//             image: "https://via.placeholder.com/150",
//             price: "₹3500 per night"
//         },
//         {
//             name: "Budget Stay",
//             location: "Ahmedabad, India",
//             rating: 3.8,
//             image: "https://via.placeholder.com/150",
//             price: "₹2500 per night"
//         },
//         {
//             name: "Business Hotel",
//             location: "Ahmedabad, India",
//             rating: 4.5,
//             image: "https://via.placeholder.com/150",
//             price: "₹4000 per night"
//         }
//     ];

//     return (
//         <div className='container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100'>
//             <div className="py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Left Side: Hotel Details */}
//                     <div className="bg-white rounded-lg overflow-hidden">
//                         <img
//                             src={hotel.image}
//                             alt={hotel.name}
//                             className="w-full h-64 object-cover mb-4"
//                         />
//                         <div className="p-6">
//                             <h1 className="text-2xl md:text-3xl font-bold mb-2">{hotel.name}</h1>
//                             <p className="text-gray-600 mb-4">{hotel.location}</p>
//                             <div className="flex items-center mb-4">
//                                 <div className="flex items-center">
//                                     {[...Array(hotel.starCount)].map((_, index) => (
//                                         <svg
//                                             key={index}
//                                             className="h-5 w-5 text-yellow-500"
//                                             fill="currentColor"
//                                             viewBox="0 0 20 20"
//                                         >
//                                             <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
//                                         </svg>
//                                     ))}
//                                     <span className="ml-2 text-gray-500">({hotel.rating} / {hotel.starCount})</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Amenities */}
//                     <div className="border border-gray-300 rounded-lg p-4 bg-white">
//                         <h2 className="text-lg font-semibold mb-2">Amenities</h2>
//                         <ul className="list-none pl-5">
//                             {hotel.amenities.map((amenity, index) => (
//                                 <li key={index} className="flex items-center mb-2 text-gray-600">
//                                     {/* Checkmark Icon */}
//                                     <svg
//                                         className="h-4 w-4 text-green-500 mr-2"
//                                         fill="currentColor"
//                                         viewBox="0 0 20 20"
//                                     >
//                                         <path d="M7 10l3 3 7-7-1.5-1.5-5.5 5.5L8.5 8.5 7 10z" />
//                                     </svg>
//                                     {amenity}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Right Side: Pricing and Offers */}
//                     <div className="bg-white rounded-lg p-6 border">
//                         <h2 className="text-xl font-bold mb-4">Pricing</h2>
//                         <p className="text-3xl font-semibold text-blue-600 mb-4">{hotel.price}</p>
//                         <h3 className="text-lg font-semibold mb-2">Special Offer</h3>
//                         <p className="text-green-600 font-semibold">{hotel.offer}</p>
//                         <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
//                             Book Now
//                         </button>
//                     </div>
//                 </div>

//                 {/* Suggested Hotels Nearby */}
//                 <div className="mt-8">
//                     <h2 className="text-2xl font-bold mb-4">Suggested Hotels Nearby</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                         {suggestedHotels.map((hotel, index) => (
//                             <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
//                                 <img
//                                     src={hotel.image}
//                                     alt={hotel.name}
//                                     className="w-full h-40 object-cover"
//                                 />
//                                 <div className="p-4">
//                                     <h3 className="text-lg font-semibold mb-2">{hotel.name}</h3>
//                                     <p className="text-gray-600 mb-2">{hotel.location}</p>
//                                     <div className="flex items-center mb-2">
//                                         <div className="flex items-center">
//                                             {[...Array(Math.round(hotel.rating))].map((_, index) => (
//                                                 <svg
//                                                     key={index}
//                                                     className="h-5 w-5 text-yellow-500"
//                                                     fill="currentColor"
//                                                     viewBox="0 0 20 20"
//                                                 >
//                                                     <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
//                                                 </svg>
//                                             ))}
//                                             <span className="ml-2 text-gray-500">({hotel.rating})</span>
//                                         </div>
//                                     </div>
//                                     <p className="text-lg font-bold text-blue-600">{hotel.price}</p>
//                                     <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
//                                         View Details
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HotelDetailPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function HotelDetailPage() {
//     const [hotel, setHotel] = useState(null); // State to store hotel details
//     const [suggestedHotels, setSuggestedHotels] = useState([]); // State to store suggested hotels
//     const [loading, setLoading] = useState(true); // State to handle loading

//     // Fetch hotel details and suggested hotels when the component mounts
//     useEffect(() => {
//         const fetchHotelData = async () => {
//             try {
//                 const hotelResponse = await axios.get('https://api.example.com/hotel/1'); // Replace with actual API URL
//                 const suggestedHotelsResponse = await axios.get('https://api.example.com/hotel/suggestions'); // Replace with actual API URL
//                 setHotel(hotelResponse.data);
//                 setSuggestedHotels(suggestedHotelsResponse.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching hotel data:", error);
//                 setLoading(false);
//             }
//         };
//         fetchHotelData();
//     }, []);

//     if (loading) {
//         return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="spinner"></div> {/* Loading Spinner */}
//         </div>);
//     }

//     if (!hotel) {
//         return <div>Error loading hotel data.</div>;
//     }

//     return (
//         <div className='container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100'>
            // <div className="py-8">
            //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            //         {/* Left Side: Hotel Details */}
            //         <div className="bg-white rounded-lg overflow-hidden">
            //             <img
            //                 src={hotel.image}
            //                 alt={hotel.name}
            //                 className="w-full h-64 object-cover mb-4"
            //             />
            //             <div className="p-6">
            //                 <h1 className="text-2xl md:text-3xl font-bold mb-2">{hotel.name}</h1>
            //                 <p className="text-gray-600 mb-4">{hotel.location}</p>
            //                 <div className="flex items-center mb-4">
            //                     <div className="flex items-center">
            //                         {[...Array(hotel.starCount)].map((_, index) => (
            //                             <svg
            //                                 key={index}
            //                                 className="h-5 w-5 text-yellow-500"
            //                                 fill="currentColor"
            //                                 viewBox="0 0 20 20"
            //                             >
            //                                 <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            //                             </svg>
            //                         ))}
            //                         <span className="ml-2 text-gray-500">({hotel.rating} / {hotel.starCount})</span>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>

            //         {/* Amenities */}
            //         <div className="border border-gray-300 rounded-lg p-4 bg-white">
            //             <h2 className="text-lg font-semibold mb-2">Amenities</h2>
            //             <ul className="list-none pl-5">
            //                 {hotel.amenities.map((amenity, index) => (
            //                     <li key={index} className="flex items-center mb-2 text-gray-600">
            //                         {/* Checkmark Icon */}
            //                         <svg
            //                             className="h-4 w-4 text-green-500 mr-2"
            //                             fill="currentColor"
            //                             viewBox="0 0 20 20"
            //                         >
            //                             <path d="M7 10l3 3 7-7-1.5-1.5-5.5 5.5L8.5 8.5 7 10z" />
            //                         </svg>
            //                         {amenity}
            //                     </li>
            //                 ))}
            //             </ul>
            //         </div>

            //         {/* Right Side: Pricing and Offers */}
            //         <div className="bg-white rounded-lg p-6 border">
            //             <h2 className="text-xl font-bold mb-4">Pricing</h2>
            //             <p className="text-3xl font-semibold text-blue-600 mb-4">{hotel.price}</p>
            //             <h3 className="text-lg font-semibold mb-2">Special Offer</h3>
            //             <p className="text-green-600 font-semibold">{hotel.offer}</p>
            //             <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            //                 Book Now
            //             </button>
            //         </div>
            //     </div>

            //     {/* Suggested Hotels Nearby */}
            //     <div className="mt-8">
            //         <h2 className="text-2xl font-bold mb-4">Suggested Hotels Nearby</h2>
            //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            //             {suggestedHotels.map((hotel, index) => (
            //                 <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
            //                     <img
            //                         src={hotel.image}
            //                         alt={hotel.name}
            //                         className="w-full h-40 object-cover"
            //                     />
            //                     <div className="p-4">
            //                         <h3 className="text-lg font-semibold mb-2">{hotel.name}</h3>
            //                         <p className="text-gray-600 mb-2">{hotel.location}</p>
            //                         <div className="flex items-center mb-2">
            //                             <div className="flex items-center">
            //                                 {[...Array(Math.round(hotel.rating))].map((_, index) => (
            //                                     <svg
            //                                         key={index}
            //                                         className="h-5 w-5 text-yellow-500"
            //                                         fill="currentColor"
            //                                         viewBox="0 0 20 20"
            //                                     >
            //                                         <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            //                                     </svg>
            //                                 ))}
            //                                 <span className="ml-2 text-gray-500">({hotel.rating})</span>
            //                             </div>
            //                         </div>
            //                         <p className="text-lg font-bold text-blue-600">{hotel.price}</p>
            //                         <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            //                             View Details
            //                         </button>
            //                     </div>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>
            // </div>
//         </div>
//     );
// }

// export default HotelDetailPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function HotelDetailPage() {
    const { hotelId } = useParams(); // Get the hotelId from the URL parameters
    const [hotel, setHotel] = useState(null);
    const [suggestedHotels, setSuggestedHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const hotelResponse = await axios.get(`http://localhost:8000/api/hotels/${hotelId}/`); // Fetch hotel details
                const suggestedHotelsResponse = await axios.get('http://localhost:8000/api/hotels/suggestions/'); // Fetch suggested hotels
                setHotel(hotelResponse.data);
                setSuggestedHotels(suggestedHotelsResponse.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching hotel data:", error);
                setLoading(false);
            }
        };
        fetchHotelData();
    }, [hotelId]);

    if (loading) {
        return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner"></div> {/* Loading Spinner */}
        </div>);
    }

    if (!hotel) {
        return <div>Error loading hotel data.</div>;
    }

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100'>
            <div className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Hotel Details */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-64 object-cover mb-4"
                        />
                        <div className="p-6">
                            <h1 className="text-2xl md:text-3xl font-bold mb-2">{hotel.name}</h1>
                            <p className="text-gray-600 mb-4">{hotel.location}</p>
                            <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                    {[...Array(hotel.starCount)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className="h-5 w-5 text-yellow-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-gray-500">({hotel.rating} / {hotel.starCount})</span>
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
                        <p className="text-3xl font-semibold text-blue-600 mb-4">{hotel.price}</p>
                        <h3 className="text-lg font-semibold mb-2">Special Offer</h3>
                        <p className="text-green-600 font-semibold">{hotel.offer}</p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Suggested Hotels Nearby */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Suggested Hotels Nearby</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {suggestedHotels.map((hotel, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{hotel.name}</h3>
                                    <p className="text-gray-600 mb-2">{hotel.location}</p>
                                    <div className="flex items-center mb-2">
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
                                            <span className="ml-2 text-gray-500">({hotel.rating})</span>
                                        </div>
                                    </div>
                                    <p className="text-lg font-bold text-blue-600">{hotel.price}</p>
                                    <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelDetailPage;
