import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotelInfo }) => {
  return (
    <div className="flex gap-6 border-2 p-4 rounded-md shadow">
      <Image
        src={hotelInfo?.thumbNailUrl}
        width={240}
        height={165}
        className="max-h-[162px] max-w-[240px] rounded ring-2 ring-offset-2 ring-blue-300 shadow"
        alt={hotelInfo.name}
      />
      <HotelSummaryInfo info={hotelInfo} fromListPage={true} />
    </div>
  );
};

export default HotelCard;
