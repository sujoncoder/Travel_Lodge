import PaymentForm from "@/components/payto/paymentForm";

const page = () => {
  return (
    <section className="my-20 space-y-8">
      <div className="space-y-2">
        <h2 className="text-center text-slate-600 text-2xl font-semibold">
          Payment Details
        </h2>
        <p className="text-center">
          You have picked <b className="font-bold">Sonarbangla hotel</b> and
          base price is <span className="font-bold">10$</span>{" "}
        </p>
      </div>
      <PaymentForm />
    </section>
  );
};

export default page;
