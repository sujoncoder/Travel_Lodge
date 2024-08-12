import Search from "@/components/search/Search";

export default function Home() {
  return (
    <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('../../public/assets/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="container items-center pb-12">
        <div className="col-span-7">
          <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Your Destination for Heartfelt Memories.
          </h1>
          <p className="my-2 text-gray-600 text-center">
            Discover our{" "}
            <span className="text-pink-700 animate-pulse">459</span> luxurious
            rooms across Indonesia, each offering the exceptional standards of a
            5-star hotel.
          </p>
          <Search />
        </div>
      </div>
    </section>
  );
}
