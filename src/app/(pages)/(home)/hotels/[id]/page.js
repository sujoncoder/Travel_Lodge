import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/database/queries";

const DetailsPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  console.log("from details page", checkin, checkout);
  const hotelInfo = await getHotelById(id, checkin, checkout);
  return (
    <div className="max-w-6xl mx-auto">
      <Summary checkin={checkin} checkout={checkout} hotelInfo={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </div>
  );
};

export default DetailsPage;
