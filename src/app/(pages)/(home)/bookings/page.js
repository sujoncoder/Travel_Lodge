import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import ProfileInfo from "@/components/user/ProfileInfo";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";

const BookingsPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="max-w-6xl mx-auto">
      <section className="mt-10">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>

      <section>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingsPage;
