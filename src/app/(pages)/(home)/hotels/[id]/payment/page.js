import PaymentForm from "@/components/payto/paymentForm";
import { getDayDifference } from "@/utils/data-utils";
import { redirect } from "next/navigation";
import { auth } from "../../../../../../../auth";
import { getHotelById, getUserByEmail } from "/src/database/queries/index.js";

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
        <h2 className="font-bold text-2xl text-center my-4">Payment Details</h2>
        <p className="text-gray-600 text-sm text-center mb-4">
          You have picked{" "}
          <span className="font-semibold text-gray-800">{hotelInfo?.name}</span>{" "}
          and total price is
          <span className="font-semibold text-gray-800"> ${cost}</span>
          {hasCheckInCheckOut && (
            <>
              {" "}
              for{" "}
              <span className="font-semibold text-gray-800">
                {getDayDifference(checkin, checkout)}
              </span>{" "}
              day(s).
            </>
          )}
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
