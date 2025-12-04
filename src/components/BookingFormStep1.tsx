import GlobalStore from "../store/GlobalStore";
import Calender from "./Calender";

export default () => {
  const selectedDate = GlobalStore((state) => state.bookingDateSelected);
  const moveTo = GlobalStore((state) => state.bookingMoveTo);

  return (
    <>
      <h3 className="font-semibold text-lg mb-2">Select Date</h3>
      <p className="mb-4 ">In your local timezone (Asia/Kolkata) update</p>
      <Calender />
      <button
        className={`border w-full py-3 ${
          selectedDate
            ? "bg-black cursor-pointer hover:bg-black/80"
            : "bg-black/60"
        } text-white mt-6`}
        disabled={!selectedDate}
        onClick={() => {
          moveTo(2);
        }}
      >
        Continue
      </button>
    </>
  );
};
