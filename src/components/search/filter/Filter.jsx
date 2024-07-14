import SortHotel from "@/components/sort/SortHotel";
import FilterByAmenities from "./FilterByAmenities";
import FilterByStarCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <SortHotel />

        <FilterByPriceRange />
        <FilterByStarCategory />
        <FilterByAmenities />
      </div>
    </>
  );
};

export default Filter;
