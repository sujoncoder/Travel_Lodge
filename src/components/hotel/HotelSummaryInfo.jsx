import Image from "next/image";
import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";
import LicationIcon from "/public/assets/location.png";

const HotelSummaryInfo = ({ fromListPage, info }) => {
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {info?.name}
        </h2>
        <div className="flex items-center space-x-2">
          <Image
            src={LicationIcon}
            width={25}
            height={25}
            alt="location-image"
            className="animate-pulse"
          />
          <span> {info?.city}</span>
        </div>
        <div className="flex gap-2 items-center my-4">
          <HotelRating id={info?.id} />
          <HotelReviewNumber id={info?.id} />
          <span>232 Reviews</span>
        </div>
        <span className="bg-yellow-300 px-2 py-1.5 text-slate-800 rounded">
          <span className="rounded-full bg-slate-500 bg-opacity-50 px-2 py-0.5">
            {info?.propertyCategory}
          </span>{" "}
          Star Property
        </span>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">
          ${(info?.highRate + info?.lowRate) / 2}/night
        </h2>
        <p className=" text-right">Per Night for 4 Rooms</p>
        {fromListPage ? (
          <Link
            href={`/hotels/${info?.id}`}
            className="bg-orange-500 active:bg-orange-600 text-white rounded-full px-4 p-1 shadow hover:brightness-105"
          >
            Details
          </Link>
        ) : (
          <button className="bg-blue-500 active:bg-blue-600 text-white rounded-full px-4 p-1 shadow hover:brightness-105">
            Book
          </button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
