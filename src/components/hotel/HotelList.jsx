import HotelCard from "./HotelCard";
import NoHotels from "./NoHotel";
import { getAllHotels } from "/src/database/queries/index.js";

const HotelList = async ({ destination, checkin, checkout, category }) => {
  const allHotels = await getAllHotels(
    destination,
    checkin,
    checkout,
    category
  );

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.length > 0 ? (
          allHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotelInfo={hotel}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        ) : (
          <NoHotels />
        )}
      </div>
    </div>
  );
};

export default HotelList;
