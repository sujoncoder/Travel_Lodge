"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState({
    destination: destination || "Puglia",
    checkin: checkin,
    checkout: checkout,
  });

  const [allowSearch, setAllowSearch] = useState(true);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const state = { ...searchTerm, [name]: value };

    if (
      new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }
    setSearchTerm(state);
  };

  function doSearch(event) {
    const params = new URLSearchParams(searchParams);

    params.set("destination", searchTerm?.destination || "all");
    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set("checkin", searchTerm?.checkin);
      params.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes("hotels")) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="action-board bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl">
        <div
          id="searchParams"
          className={`${
            fromList ? "!shadow-none" : ""
          } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                name="destination"
                id="destination"
                defaultValue={searchTerm.destination}
                onChange={handleInputs}
                className="w-full border rounded p-2"
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkin"
                id="checkin"
                value={searchTerm.checkin}
                onChange={handleInputs}
                className="w-full border rounded p-2"
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkout"
                id="checkout"
                value={searchTerm.checkout}
                onChange={handleInputs}
                className="w-full border rounded p-2"
              />
            </h4>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          disabled={!allowSearch}
          className={`mt-4 w-40 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            !allowSearch ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={doSearch}
        >
          {fromList ? "Modify Search" : "Search"}
        </button>
      </div>
    </div>
  );
};

export default Search;
