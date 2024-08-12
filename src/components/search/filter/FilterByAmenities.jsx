const FilterByAmenities = () => {
  return (
    <div className="p-2 border-2 rounded-md border-gray-300 shadow">
      <h3 className="font-bold text-lg mb-4">Amenities</h3>
      <form action="" className="flex flex-col gap-1">
        <label htmlFor="wifi" className="flex items-center">
          <input type="checkbox" name="wifi" id="wifi" className="mr-2" />
          Wi-fi
        </label>

        <label htmlFor="swimmingPool" className="flex items-center">
          <input
            type="checkbox"
            name="swimmingPool"
            id="swimmingPool"
            className="mr-2"
          />
          Swimming Pool
        </label>
      </form>
    </div>
  );
};

export default FilterByAmenities;
