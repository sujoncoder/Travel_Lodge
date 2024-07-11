const UpcomingBooking = () => {
  return (
    <div className="space-y-6 p-4 border bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900">
        ⌛️ Upcoming Bookings
      </h2>

      <div className="bg-green-100 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
              Effotel By Sayaji Jaipur
            </h3>
            <div className="mt-2 text-gray-600">
              <p className="text-sm lg:text-base">Check In: 12/12/2021</p>
              <p className="text-sm lg:text-base">Check Out: 14/12/2021</p>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
              $124
            </h3>
            <p className="mt-1 text-sm lg:text-base text-gray-600">
              $62 per night x 2 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBooking;
