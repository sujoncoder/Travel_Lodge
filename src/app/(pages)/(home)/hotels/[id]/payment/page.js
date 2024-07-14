import PaymentForm from "@/components/payto/paymentForm";
import { getHotelById, getUserByEmail } from "@/Database/queries";
import { getDayDifference } from "@/utils/data-utils";
import { redirect } from "next/navigation";
import { auth } from "../../../../../../../auth";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  console.log(checkin);
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id, checkin, checkout);

  const hasCheckInCheckOut = checkin && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (hasCheckInCheckOut) {
    const days = getDayDifference(checkin, checkout);
    cost = cost * days;
  }

  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo?.name}</b> and total price is{" "}
          <b>${cost}</b>{" "}
          {hasCheckInCheckOut && `for ${getDayDifference(checkin, checkout)}`}{" "}
          day(s).
        </p>
        <PaymentForm
          loggedInUser={loggedInUser}
          hotelInfo={hotelInfo}
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </section>
  );
};

export default PaymentPage;
