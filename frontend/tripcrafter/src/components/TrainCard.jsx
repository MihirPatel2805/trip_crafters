import React from "react";
import "../pages/trainsearchpage.css";

const TrainCard = ({ data }) => {
    return (
        <>
            <div className="searchresults-div">
                {console.log(data)}
                {data?.trains.length > 0 ? (
                    data?.trains.map((train, index) => (
                        <div key={index} className="showtrains">
                            <div className="showtrains-topdiv">
                                <div className="trainname-and-details">
                                    <p className="trainname">{train?.trainName}</p>
                                    <div className="traindetails-div">
                                        <p className="train-number">#{train?.trainNumber}</p>
                                        <p>
                                            <span className="departure-dates">Departs on :</span>
                                            <span>S</span>
                                            <span>M</span>
                                            <span>T</span>
                                            <span>W</span>
                                            <span>T</span>
                                            <span>F</span>
                                            <span>S</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="departuredetails-div">
                                    <p>{train?.departureTime}</p>
                                    <p>{train?.source}</p>
                                </div>
                                <div className="traveltime-div">
                                    <div>
                                        <p>{train?.travelDuration}</p>
                                    </div>
                                </div>
                                <div className="arrivaldetails-div">
                                    <p>{train?.arrivalTime}</p>
                                    <p>{train?.destination} </p>
                                </div>
                            </div>

                            <div className="showtrains-btmdiv">
                                {train?.coaches.map((coach, coachIndex) => (
                                    <div key={coachIndex} className="sl-card">
                                        <div>
                                            <p>{coach.coachType}</p>
                                            <p>₹ {coach.numberOfSeats * 10}</p>
                                            {/* You can replace this calculation with your actual logic */}
                                        </div>
                                        <p className="rac-nmbr">RAC {coachIndex + 1}</p>
                                        <p className="cancellation">Free Cancellation</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="flex justify-center items-center my-16 text-2xl font-bold">
                        No trains found for the given day.
                    </p>
                )}
            </div>
        </>
    );
};

export default TrainCard;
