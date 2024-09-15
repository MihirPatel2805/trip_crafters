const trainData = {
    trains: [
        {
            _id: "65b0c0bdd32aab0a6f3b7fa6",
            trainName: "Prayagraj Express",
            trainNumber: "12418",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "17:20",
            arrivalTime: "12:15",
            travelDuration: "18h 55m",
            fare: 1900,
            availableSeats: 160,
            trainType: "Express",
            coaches: [
                { coachType: "SL", numberOfSeats: 80 },
                { coachType: "3A", numberOfSeats: 40 },
                { coachType: "2A", numberOfSeats: 40 },
            ],
            daysOfOperation: ["Mon", "Thu", "Sat"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa7",
            trainName: "Sampark Kranti Express",
            trainNumber: "12649",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "10:30",
            arrivalTime: "05:15",
            travelDuration: "18h 45m",
            fare: 1700,
            availableSeats: 140,
            trainType: "Superfast",
            coaches: [
                { coachType: "SL", numberOfSeats: 60 },
                { coachType: "2A", numberOfSeats: 40 },
                { coachType: "3A", numberOfSeats: 40 },
            ],
            daysOfOperation: ["Tue", "Fri", "Sun"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa8",
            trainName: "Adi-Lucknow Express",
            trainNumber: "19401",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "15:35",
            arrivalTime: "13:15",
            travelDuration: "21h 40m",
            fare: 1600,
            availableSeats: 100,
            trainType: "Express",
            coaches: [
                { coachType: "SL", numberOfSeats: 70 },
                { coachType: "3A", numberOfSeats: 30 },
            ],
            daysOfOperation: ["Wed", "Sat"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa9",
            trainName: "Garib Rath",
            trainNumber: "12215",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "21:00",
            arrivalTime: "18:45",
            travelDuration: "21h 45m",
            fare: 1300,
            availableSeats: 200,
            trainType: "Garib Rath",
            coaches: [
                { coachType: "3A", numberOfSeats: 200 },
            ],
            daysOfOperation: ["Mon", "Thu"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7faa",
            trainName: "Kumbh Express",
            trainNumber: "12369",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "05:15",
            arrivalTime: "07:30",
            travelDuration: "26h 15m",
            fare: 1550,
            availableSeats: 180,
            trainType: "Express",
            coaches: [
                { coachType: "SL", numberOfSeats: 100 },
                { coachType: "3A", numberOfSeats: 50 },
                { coachType: "2A", numberOfSeats: 30 },
            ],
            daysOfOperation: ["Tue", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa1",
            trainName: "Sabarmati Express",
            trainNumber: "19167",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "08:45",
            arrivalTime: "10:30",
            travelDuration: "25h 45m",
            fare: 1500,
            availableSeats: 120,
            trainType: "Express",
            coaches: [
                { coachType: "SL", numberOfSeats: 60 },
                { coachType: "3A", numberOfSeats: 60 },
            ],
            daysOfOperation: ["Mon", "Wed", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa2",
            trainName: "Rajdhani Express",
            trainNumber: "12951",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "19:40",
            arrivalTime: "11:05",
            travelDuration: "15h 25m",
            fare: 2200,
            availableSeats: 150,
            trainType: "Rajdhani",
            coaches: [
                { coachType: "1A", numberOfSeats: 50 },
                { coachType: "2A", numberOfSeats: 60 },
                { coachType: "3A", numberOfSeats: 40 },
            ],
            daysOfOperation: ["Tue", "Thu", "Sat"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa3",
            trainName: "Gujarat Mail",
            trainNumber: "12901",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "21:05",
            arrivalTime: "16:55",
            travelDuration: "19h 50m",
            fare: 1800,
            availableSeats: 200,
            trainType: "Mail",
            coaches: [
                { coachType: "SL", numberOfSeats: 120 },
                { coachType: "2A", numberOfSeats: 40 },
                { coachType: "3A", numberOfSeats: 40 },
            ],
            daysOfOperation: ["Sun", "Wed", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa4",
            trainName: "Shatabdi Express",
            trainNumber: "12009",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "06:00",
            arrivalTime: "20:30",
            travelDuration: "14h 30m",
            fare: 2000,
            availableSeats: 180,
            trainType: "Shatabdi",
            coaches: [
                { coachType: "CC", numberOfSeats: 100 },
                { coachType: "2S", numberOfSeats: 80 },
            ],
            daysOfOperation: ["Mon", "Wed", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fa5",
            trainName: "Duronto Express",
            trainNumber: "12267",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "23:30",
            arrivalTime: "14:10",
            travelDuration: "14h 40m",
            fare: 2400,
            availableSeats: 130,
            trainType: "Duronto",
            coaches: [
                { coachType: "1A", numberOfSeats: 30 },
                { coachType: "2A", numberOfSeats: 40 },
                { coachType: "3A", numberOfSeats: 60 },
            ],
            daysOfOperation: ["Tue", "Thu"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe6",
            trainName: "Superfast Express",
            trainNumber: "12345",
            source: "Salem Junction",
            destination: "Visakhapatnam Junction",
            departureTime: "16:30",
            arrivalTime: "08:50",
            travelDuration: "16h 20m",
            fare: 2100,
            availableSeats: 180,
            trainType: "Superfast",
            coaches: [
                { coachType: "2A", numberOfSeats: 50 },
                { coachType: "3A", numberOfSeats: 130 },
            ],
            daysOfOperation: ["Tue", "Sat"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe7",
            trainName: "Duronto Express",
            trainNumber: "12285",
            source: "Nagpur Junction",
            destination: "Thrissur",
            departureTime: "19:15",
            arrivalTime: "09:10",
            travelDuration: "13h 55m",
            fare: 1950,
            availableSeats: 140,
            trainType: "Duronto",
            coaches: [
                { coachType: "1A", numberOfSeats: 40 },
                { coachType: "2A", numberOfSeats: 100 },
            ],
            daysOfOperation: ["Mon", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe8",
            trainName: "Jan Shatabdi Express",
            trainNumber: "12024",
            source: "Indore Junction",
            destination: "Vadodara Junction",
            departureTime: "06:00",
            arrivalTime: "12:30",
            travelDuration: "6h 30m",
            fare: 1100,
            availableSeats: 210,
            trainType: "Shatabdi",
            coaches: [
                { coachType: "CC", numberOfSeats: 110 },
                { coachType: "2S", numberOfSeats: 100 },
            ],
            daysOfOperation: ["Thu", "Sun"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe9",
            trainName: "Humsafar Express",
            trainNumber: "20889",
            source: "Asansol Junction",
            destination: "Kanpur",
            departureTime: "21:15",
            arrivalTime: "07:30",
            travelDuration: "10h 15m",
            fare: 1500,
            availableSeats: 170,
            trainType: "Humsafar",
            coaches: [
                { coachType: "3A", numberOfSeats: 120 },
                { coachType: "SL", numberOfSeats: 50 },
            ],
            daysOfOperation: ["Wed", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fea",
            trainName: "Sampark Kranti Express",
            trainNumber: "12411",
            source: "Chandigarh",
            destination: "Manmad Junction",
            departureTime: "05:30",
            arrivalTime: "17:45",
            travelDuration: "12h 15m",
            fare: 1700,
            availableSeats: 130,
            trainType: "Sampark Kranti",
            coaches: [
                { coachType: "2A", numberOfSeats: 50 },
                { coachType: "3A", numberOfSeats: 80 },
            ],
            daysOfOperation: ["Mon", "Thu", "Sat"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fdf",
            trainName: "Rajdhani Express",
            trainNumber: "12951",
            source: "Delhi Junction",
            destination: "Ahmedabad Junction",
            departureTime: "14:45",
            arrivalTime: "22:00",
            travelDuration: "7h 15m",
            fare: 2500,
            availableSeats: 150,
            trainType: "Rajdhani",
            coaches: [
                { coachType: "1A", numberOfSeats: 20 },
                { coachType: "2A", numberOfSeats: 50 },
                { coachType: "3A", numberOfSeats: 80 },
            ],
            daysOfOperation: ["Mon", "Wed", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe2",
            trainName: "Shatabdi Express",
            trainNumber: "12007",
            source: "Coimbatore Junction",
            destination: "Thiruvananthapuram Central",
            departureTime: "07:30",
            arrivalTime: "13:15",
            travelDuration: "5h 45m",
            fare: 1600,
            availableSeats: 200,
            trainType: "Shatabdi",
            coaches: [
                { coachType: "CC", numberOfSeats: 100 },
                { coachType: "EC", numberOfSeats: 100 },
            ],
            daysOfOperation: ["Tue", "Thu", "Sat"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe3",
            trainName: "Garib Rath Express",
            trainNumber: "12201",
            source: "Gorakhpur Junction",
            destination: "Howrah Junction",
            departureTime: "18:25",
            arrivalTime: "08:10",
            travelDuration: "13h 45m",
            fare: 900,
            availableSeats: 220,
            trainType: "Garib Rath",
            coaches: [
                { coachType: "3A", numberOfSeats: 150 },
                { coachType: "SL", numberOfSeats: 70 },
            ],
            daysOfOperation: ["Wed", "Sun"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe4",
            trainName: "Duronto Express",
            trainNumber: "12247",
            source: "Ghaziabad Junction",
            destination: "Visakhapatnam Junction",
            departureTime: "20:30",
            arrivalTime: "10:30",
            travelDuration: "14h 00m",
            fare: 1800,
            availableSeats: 190,
            trainType: "Duronto",
            coaches: [
                { coachType: "1A", numberOfSeats: 40 },
                { coachType: "2A", numberOfSeats: 60 },
                { coachType: "3A", numberOfSeats: 90 },
            ],
            daysOfOperation: ["Tue", "Fri"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fe5",
            trainName: "Express Train",
            trainNumber: "12728",
            source: "Warangal",
            destination: "Kanpur",
            departureTime: "11:45",
            arrivalTime: "03:30",
            travelDuration: "15h 45m",
            fare: 1200,
            availableSeats: 110,
            trainType: "Express",
            coaches: [
                { coachType: "SL", numberOfSeats: 70 },
                { coachType: "3A", numberOfSeats: 40 },
            ],
            daysOfOperation: ["Mon", "Thu", "Sat"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7fdf",
            trainName: "Shatabdi Express",
            trainNumber: "840047",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "18:08",
            arrivalTime: "06:33",
            travelDuration: "12h 25m",
            fare: 1964,
            availableSeats: 271,
            trainType: "Shatabdi",
            coaches: [
                { coachType: "2S", numberOfSeats: 40 },
                { coachType: "2S", numberOfSeats: 67 },
                { coachType: "1A", numberOfSeats: 37 },
                { coachType: "CC", numberOfSeats: 45 },
                { coachType: "3A", numberOfSeats: 34 },
                { coachType: "3E", numberOfSeats: 48 },
            ],
            daysOfOperation: ["Fri", "Wed", "Tue"],
        },
        {
            _id: "65b0c0bdd32aab0a6f3b7ffb",
            trainName: "Rajdhani Express",
            trainNumber: "520507",
            source: "Ahmedabad Junction",
            destination: "Allahabad Junction",
            departureTime: "23:49",
            arrivalTime: "12:19",
            travelDuration: "11h 30m",
            fare: 1922,
            availableSeats: 343,
            trainType: "Rajdhani",
            coaches: [
                { coachType: "EA", numberOfSeats: 62 },
                { coachType: "CC", numberOfSeats: 50 },
                { coachType: "SL", numberOfSeats: 62 },
                { coachType: "3E", numberOfSeats: 65 },
                { coachType: "2S", numberOfSeats: 33 },
                { coachType: "2S", numberOfSeats: 38 },
                { coachType: "3A", numberOfSeats: 33 },
            ],
            daysOfOperation: ["Mon", "Tue"],
        },
    ],
};

export default trainData;