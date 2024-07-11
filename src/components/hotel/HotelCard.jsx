import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";
import ImageOne from "/public/assets/images/image-1.png";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border-2 p-4 rounded-md shadow">
      <Image
        src={ImageOne}
        width={100}
        height={100}
        className="max-h-[162px] max-w-[240px] rounded"
        alt="image"
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
