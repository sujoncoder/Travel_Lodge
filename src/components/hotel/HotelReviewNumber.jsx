import { getReviewsForAHotel } from "@/db/queries/index";
import Link from "next/link";

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
