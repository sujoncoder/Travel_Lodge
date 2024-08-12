import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ hotelInfo, checkin, checkout }) => {
  return (
    <section className="mt-20 container">
      <HotelSummaryInfo
        checkin={checkin}
        checkout={checkout}
        info={hotelInfo}
        source="details"
      />
    </section>
  );
};

export default Summary;
