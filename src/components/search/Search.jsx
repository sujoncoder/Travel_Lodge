const Search = ({ fromList }) => {
  return (
    <>
      <div className="lg:max-h-[250px] max-w-5xl mx-auto mt-6 relative">
        <div
          id="searchParams"
          className={` bg-white gap-6 rounded-xl flex justify-between items-center p-10 shadow ${
            fromList && "!shadow-none"
          }`}
        >
          <div className="w-full">
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                name="destination"
                id="destination"
                className="border-2 rounded p-1 w-full"
              >
                <option value="Bali">Bali</option>
                <option value="Bali">Cox's Bazar</option>
                <option value="Bali">Sylhet</option>
                <option value="Bali">Saint Martin</option>
                <option value="Bali">Bali</option>
              </select>
            </h4>
          </div>

          <div className="w-full">
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkin"
                id="checkin"
                className="border-2 rounded p-1 w-full"
              />
            </h4>
          </div>

          <div className="w-full">
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkout"
                id="checkout"
                className="border-2 rounded p-1 w-full"
              />
            </h4>
          </div>
        </div>
      </div>

      <button className="absolute top-[510px] left-[650px] px-4 py-2 bg-orange-500 shadow rounded-full text-white">
        🔍️ {fromList ? "Modify Search" : "Search"}
      </button>
    </>
  );
};

export default Search;
