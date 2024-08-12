"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const FilterByStarCategory = () => {
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Memoize params to avoid unnecessary effect reruns
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);
      setQuery(filtered);
    }
  };

  useEffect(() => {
    const category = params.get("category");

    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split("|");
      setQuery(queryInCategory);
    }
  }, [params]);

  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query, params, pathname, replace]);

  return (
    <div className="p-2 border-2 rounded-md border-gray-300 shadow">
      <h3 className="font-bold text-lg mb-4">Star Category</h3>
      <form action="" className="flex flex-col gap-1">
        <label htmlFor="fiveStar" className="flex items-center">
          <input
            type="checkbox"
            name="5"
            checked={query.includes("5")}
            id="fiveStar"
            onChange={handleChange}
            className="mr-2"
          />
          5 Star
        </label>

        <label htmlFor="fourStar" className="flex items-center">
          <input
            type="checkbox"
            name="4"
            checked={query.includes("4")}
            id="fourStar"
            onChange={handleChange}
            className="mr-2"
          />
          4 Star
        </label>

        <label htmlFor="threeStar" className="flex items-center">
          <input
            type="checkbox"
            name="3"
            checked={query.includes("3")}
            id="threeStar"
            onChange={handleChange}
            className="mr-2"
          />
          3 Star
        </label>

        <label htmlFor="twoStar" className="flex items-center">
          <input
            type="checkbox"
            name="2"
            checked={query.includes("2")}
            id="twoStar"
            onChange={handleChange}
            className="mr-2"
          />
          2 Star
        </label>

        <label htmlFor="oneStar" className="flex items-center">
          <input
            type="checkbox"
            name="1"
            checked={query.includes("1")}
            id="oneStar"
            onChange={handleChange}
            className="mr-2"
          />
          1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByStarCategory;
