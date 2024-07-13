import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/Database/queries";

const DetailsPage = async ({ params: { id } }) => {
  const hotelInfo = await getHotelById(id);
  return (
    <div className="max-w-6xl mx-auto">
      <Summary hotelInfo={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </div>
  );
};

export default DetailsPage;
