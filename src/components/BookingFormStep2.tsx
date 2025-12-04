import GlobalStore from "../store/GlobalStore";

export default () => {
  const selectedSlot = GlobalStore((state) => state.slotSelected);
  const selectSlot = GlobalStore((state) => state.setSelectedSlot);

  const moveTo = GlobalStore((state) => state.bookingMoveTo);

  const AvaialbeTimeSlots = [300, 900, 915, 930, 945, 960];
  return (
    <>
      <h3 className="font-semibold text-lg mb-2">Select Availabe time</h3>
      <p className="mb-4 ">In your local timezone (Asia/Kolkata)</p>
      <div className=" flex items-center text-sm mb-4">
        <span className="mr-1 text-black/60">Date:</span>
        <span className="mr-4"> Thursday, 20 Novemeber 2025 </span>
        <span
          className="cursor-pointer text-blue-500"
          onClick={() => {
            moveTo(1);
          }}
        >
          Change
        </span>
      </div>
      <p className="mb-2 text-sm">Available time slots.</p>
      <section className="flex items-center overflow-x-scroll gap-x-3 pb-8 ">
        {AvaialbeTimeSlots.map((curr) => {
          const isPM = curr >= 720;
          const hours = Math.trunc(curr / 60);
          const displayHour = isPM ? hours % 12 || 12 : hours;
          const minutes = curr % 60 === 0 ? "00" : curr % 60;
          const meridiem = isPM ? "PM" : "AM";

          return (
            <span
              key={curr}
              onClick={() => selectSlot(curr)}
              className={`px-3 shrink-0 py-2 border cursor-pointer ${
                selectedSlot === curr ? "bg-black text-white" : ""
              }`}
            >
              {displayHour} : {minutes} {meridiem}
            </span>
          );
        })}
      </section>

      <button
        className={`border w-full py-3 ${
          selectedSlot
            ? "bg-black cursor-pointer hover:bg-black/80"
            : "bg-black/60"
        } text-white mt-6`}
        disabled={!selectedSlot}
        onClick={() => {
          moveTo(3);
        }}
      >
        Continue
      </button>
    </>
  );
};
1;
