const Filter = () => {
  return (
    <div className="col-span-3 space-y-6 p-4 bg-white rounded-lg shadow border mr-4">
      <div className="space-y-2 border-2 rounded p-2">
        <h3 className="font-bold text-lg text-gray-900">Sort By</h3>
        <form action="" className="flex flex-col gap-2 mt-2">
          <label htmlFor="highToLow" className="flex items-center">
            <input
              type="checkbox"
              name="highToLow"
              id="highToLow"
              className="mr-2"
            />
            Price High to Low
          </label>

          <label htmlFor="lowToHigh" className="flex items-center">
            <input
              type="checkbox"
              name="lowToHigh"
              id="lowToHigh"
              className="mr-2"
            />
            Price Low to High
          </label>
        </form>
      </div>

      <div className="space-y-2 border-2 rounded p-2">
        <h3 className="font-bold text-lg text-gray-900">Price Range</h3>
        <form action="" className="flex flex-col gap-2 mt-2">
          <label htmlFor="range1" className="flex items-center">
            <input type="checkbox" name="range1" id="range1" className="mr-2" />
            $13 - $30
          </label>

          <label htmlFor="range2" className="flex items-center">
            <input type="checkbox" name="range2" id="range2" className="mr-2" />
            $30 - $60
          </label>

          <label htmlFor="range3" className="flex items-center">
            <input type="checkbox" name="range3" id="range3" className="mr-2" />
            $60 - $97
          </label>

          <label htmlFor="range3" className="flex items-center">
            <input type="checkbox" name="range3" id="range3" className="mr-2" />
            $97 - $152
          </label>

          <label htmlFor="range4" className="flex items-center">
            <input type="checkbox" name="range4" id="range4" className="mr-2" />
            $152 - $182
          </label>

          <label htmlFor="range5" className="flex items-center">
            <input type="checkbox" name="range5" id="range5" className="mr-2" />
            $182+
          </label>
        </form>
      </div>

      <div className="space-y-2 border-2 rounded p-2">
        <h3 className="font-bold text-lg text-gray-900">Star Category</h3>
        <form action="" className="flex flex-col gap-2 mt-2">
          <label htmlFor="fiveStar" className="flex items-center">
            <input
              type="checkbox"
              name="fiveStar"
              id="fiveStar"
              className="mr-2"
            />
            5 Star
          </label>

          <label htmlFor="fourStar" className="flex items-center">
            <input
              type="checkbox"
              name="fourStar"
              id="fourStar"
              className="mr-2"
            />
            4 Star
          </label>

          <label htmlFor="threeStar" className="flex items-center">
            <input
              type="checkbox"
              name="threeStar"
              id="threeStar"
              className="mr-2"
            />
            3 Star
          </label>

          <label htmlFor="twoStar" className="flex items-center">
            <input
              type="checkbox"
              name="twoStar"
              id="twoStar"
              className="mr-2"
            />
            2 Star
          </label>

          <label htmlFor="oneStar" className="flex items-center">
            <input
              type="checkbox"
              name="oneStar"
              id="oneStar"
              className="mr-2"
            />
            1 Star
          </label>
        </form>
      </div>

      <div className="space-y-2 border-2 rounded p-2">
        <h3 className="font-bold text-lg text-gray-900">Amenities</h3>
        <form action="" className="flex flex-col gap-2 mt-2">
          <label htmlFor="wifi" className="flex items-center">
            <input type="checkbox" name="wifi" id="wifi" className="mr-2" />
            Wi-Fi
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
    </div>
  );
};

export default Filter;
