import Link from "next/link";
import { getReviewsForAHotel } from "/src/database/queries/index.js";

const HotelReviewNumber = async ({ id }) => {
  const reviews = await getReviewsForAHotel(id);

  return (
    <>
      {reviews?.length === 0 ? (
        <Link href="#" className="underline text-sm">
          Be the first one to review
        </Link>
      ) : (
        <Link href={`/hotel/${id}/reviews`} className="underline text-sm">
          {reviews.length} Reviews
        </Link>
      )}
    </>
  );
};

export default HotelReviewNumber;
