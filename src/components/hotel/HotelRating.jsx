import { getRatingsForAHotel } from "../../database/queries/index";

const HotelRating = async ({ id }) => {
  const ratings = await getRatingsForAHotel(id);

  const getRatingDescription = (avgRating) => {
    if (avgRating === 0) {
      return "No Ratings Available";
    } else if (avgRating > 0 && avgRating <= 2) {
      return "Poor";
    } else if (avgRating > 2 && avgRating <= 3) {
      return "Average";
    } else if (avgRating > 3 && avgRating <= 4) {
      return "Good";
    } else if (avgRating > 4) {
      return "Very Good";
    }
  };

  let avgRating = 0;

  if (ratings.length === 1) {
    avgRating = ratings[0].rating;
  }
  if (ratings.length > 1) {
    avgRating =
      ratings.reduce((item, currentValue) => {
        return item.rating + currentValue.rating;
      }) / ratings.length;
  }

  return (
    <>
      <div className="bg-orange-500 px-2 py-0.5 rounded text-white grid place-items-center font-bold">
        {avgRating}
      </div>
      <span>{getRatingDescription(avgRating)}</span>
    </>
  );
};

export default HotelRating;
