const SortHotel = () => {
  return (
    <div className="p-2 border-2 rounded-md border-gray-300 shadow">
      <h3 className="font-bold text-lg mb-4">Sort By</h3>
      <form action="" className="flex flex-col gap-1">
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
  );
};

export default SortHotel;
