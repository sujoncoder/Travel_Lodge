const FilterByPriceRange = () => {
  return (
    <div className="p-2 border-2 rounded-md border-gray-300 shadow">
      <h3 className="font-bold text-lg mb-4">Price Range</h3>
      <form action="" className="flex flex-col gap-1">
        <label htmlFor="range1" className="flex items-center">
          <input type="checkbox" name="range1" id="range1" className="mr-2" />$
          13 - $ 30
        </label>

        <label htmlFor="range2" className="flex items-center">
          <input type="checkbox" name="range2" id="range2" className="mr-2" />$
          30 - $ 60
        </label>

        <label htmlFor="range3" className="flex items-center">
          <input type="checkbox" name="range3" id="range3" className="mr-2" />$
          60 - $ 97
        </label>

        <label htmlFor="range4" className="flex items-center">
          <input type="checkbox" name="range4" id="range4" className="mr-2" />$
          97 - $ 152
        </label>

        <label htmlFor="range5" className="flex items-center">
          <input type="checkbox" name="range5" id="range5" className="mr-2" />$
          152 - $ 182
        </label>

        <label htmlFor="range6" className="flex items-center">
          <input type="checkbox" name="range6" id="range6" className="mr-2" />$
          182+
        </label>
      </form>
    </div>
  );
};

export default FilterByPriceRange;
