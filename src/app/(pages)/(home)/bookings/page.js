import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import ProfileInfo from "@/components/user/ProfileInfo";
import { getBookingsByUser, getUserByEmail } from "@/db/queries/index";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";

const BookingsPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const bookings = await getBookingsByUser(loggedInUser?.id);

  const pastBookings = bookings.filter((booking) => {
    return new Date().getTime() > new Date(booking.checkin).getTime();
  });

  const upcomingBookings = bookings.filter((booking) => {
    return new Date().getTime() < new Date(booking.checkin).getTime();
  });

  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking bookings={pastBookings} />
            <UpcomingBooking bookings={upcomingBookings} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsPage;
