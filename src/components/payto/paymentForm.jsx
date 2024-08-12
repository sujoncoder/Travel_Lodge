"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = ({ loggedInUser, hotelInfo, checkin, checkout }) => {
  const [error, setError] = useState("");

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const hotelId = hotelInfo?.id;
      const userId = loggedInUser?.id;
      const checkin = formData.get("checkin");
      const checkout = formData.get("checkout");

      const res = await fetch("/api/auth/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId,
          userId,
          checkin,
          checkout,
        }),
      });

      if (res.status === 201) {
        router.push("/bookings");
      } else {
        throw new Error("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <form
      className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg"
      onSubmit={onSubmit}
    >
      <div className="border my-4">
        <label htmlFor="name" className="block font-semibold text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={loggedInUser?.name}
          readOnly
          className="w-full border border-gray-300 focus:border-blue-500 py-2 px-4 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={loggedInUser?.email}
          readOnly
          className="w-full border border-gray-300 focus:border-blue-500 py-2 px-4 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="checkin" className="block font-semibold text-gray-700">
          Check in
        </label>
        <input
          type="date"
          name="checkin"
          value={checkin}
          id="checkin"
          className="w-full border border-gray-300 focus:border-blue-500 py-2 px-4 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="checkout" className="block font-semibold text-gray-700">
          Checkout
        </label>
        <input
          type="date"
          name="checkout"
          value={checkout}
          id="checkout"
          className="w-full border border-gray-300 focus:border-blue-500 py-2 px-4 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block font-semibold text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-gray-300 focus:border-blue-500 py-2 px-4 rounded-md"
          placeholder="1234 5678 9101 1121"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="my-4 space-y-2">
          <label htmlFor="expiry" className="block font-semibold text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            className="w-full border border-gray-300 focus:border-blue-500 py-2 px-4 rounded-md"
            placeholder="MM/YY"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="cvv" className="block font-semibold text-gray-700">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full border border-gray-300 focus:border-blue-500 py-2 px-4 rounded-md"
            placeholder="123"
          />
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        disabled={hotelInfo?.isBooked}
        type="submit"
        className={`w-full py-3 mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md ${
          hotelInfo?.isBooked ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {hotelInfo?.isBooked
          ? "Sold Out"
          : `Pay Now ($${(hotelInfo?.highRate + hotelInfo?.lowRate) / 2})`}
      </button>
    </form>
  );
};

export default PaymentForm;
