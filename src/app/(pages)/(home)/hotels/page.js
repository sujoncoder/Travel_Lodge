import HotelList from "../../../../components/hotel/HotelList";
import Search from "../../../../components/search/Search";
import Filter from "../../../../components/search/filter/Filter";

const refineCategory = (category) => {
  const decodedCategory = decodeURI(category);
  if (decodedCategory === "undefined") {
    return "";
  }
  return decodedCategory;
};

const HotelListPage = ({
  searchParams: { destination, checkin, checkout, category },
}) => {
  return (
    <>
      <section className="bg-[url('../../public/assets/hero-bg.jpg')] bg-cover bg-no-repeat bg-center py-10">
        <div className="items-center py-12 ">
          <Search
            fromList={true}
            destination={destination}
            checkin={checkin}
            checkout={checkout}
          />
        </div>
      </section>

      <section className="py-12 border-2 bg-gray-100">
        <div className="container mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3 p-4 bg-white rounded-md shadow-lg">
            <Filter />
          </div>
          <div className="col-span-12 lg:col-span-9 p-4 bg-white rounded-md shadow-lg">
            <HotelList
              destination={destination}
              checkin={checkin}
              checkout={checkout}
              category={refineCategory(category)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
