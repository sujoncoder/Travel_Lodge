import Image from "next/image";
import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";
import LocationIcon from "/public/assets/location.png";

const HotelSummaryInfo = ({ fromListPage, info, checkin, checkout }) => {
  let params = "";
  if (checkin && checkout) {
    params = `?checkin=${checkin}&checkout=${checkout}`;
  }

  const detailsLink = `/hotels/${info?.id}${params}`;
  const paymentLink = `/hotels/${info?.id}/payment${params}`;

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 md:p-6 border-2 border-cyan-500 shadow border-opacity-20 rounded-md bg-white">
      <div className="flex-1">
        <h2
          className={
            fromListPage
              ? "font-bold text-lg "
              : "font-bold text-2xl text-slate-500"
          }
        >
          {info?.name}
        </h2>
        <div className="flex items-center space-x-2">
          <Image
            src={LocationIcon}
            width={25}
            height={25}
            alt="location-image"
            className="animate-pulse"
          />
          <span>{info?.city}</span>
        </div>
        <div className="flex gap-2 items-center my-2 md:my-4">
          <HotelRating id={info?.id} />
          <HotelReviewNumber id={info?.id} />
          {info?.isBooked && <span className="text-red-500">Sold Out</span>}
          <span>232 Reviews</span>
        </div>
        <span className="bg-yellow-300 px-2 py-1.5 text-slate-800 rounded">
          <span className="rounded-full bg-slate-500 bg-opacity-50 px-2 py-0.5">
            {info?.propertyCategory}
          </span>{" "}
          Star Property
        </span>
      </div>

      <div className="flex flex-col items-center md:items-end justify-center gap-2">
        <h2 className="text-xl md:text-2xl font-bold text-right text-slate-500">
          ${(info?.highRate + info?.lowRate) / 2}/night
        </h2>
        <p className="text-sm text-right">Per Night for 4 Rooms</p>
        {fromListPage ? (
          <Link
            href={detailsLink}
            className="bg-orange-500 active:bg-orange-600 text-white rounded-full px-4 py-1 shadow-md hover:brightness-105 text-center w-full md:w-auto"
          >
            Details
          </Link>
        ) : (
          <Link
            href={info?.isBooked ? "#" : paymentLink}
            className={
              info?.isBooked
                ? "bg-gray-500 text-white rounded-full px-4 py-1 shadow-md cursor-not-allowed text-center w-full md:w-auto"
                : "bg-blue-500 active:bg-blue-600 text-white rounded-full px-4 py-1 shadow-md hover:brightness-105 text-center w-full md:w-auto"
            }
            disabled={info?.isBooked}
          >
            {info?.isBooked ? "Sold Out" : "Book"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HotelSummaryInfo;
