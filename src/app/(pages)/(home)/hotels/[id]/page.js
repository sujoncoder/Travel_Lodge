import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";

const DetailsPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Summary />
      <Gallery />
      <Overview />
    </div>
  );
};

export default DetailsPage;
