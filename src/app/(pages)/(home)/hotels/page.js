import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";

const HotelListPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('../../public/assets/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="container items-center pb-12 ">
          <Search fromList={true} />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto container grid grid-cols-12">
          <Filter />
          <HotelList />
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
