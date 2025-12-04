import { X } from "lucide-react";

import GlobalStore from "../store/GlobalStore";
import BookingFormStep1 from "./BookingFormStep1";
import BookingFormStep2 from "./BookingFormStep2";

export default () => {
  const setShowBooking = GlobalStore((state) => state.setShowBooking);
  const bookingStep = GlobalStore((state) => state.bookingFormStep);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/50"
        onClick={() => {
          setShowBooking();
        }}
      ></div>
      <article className="fixed bg-white left-1/2 top-1/2 transform -translate-1/2 w-full max-w-[900px] p-6 rounded-xl">
        <div
          className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center absolute right-4 top-4 cursor-pointer "
          onClick={() => {
            setShowBooking();
          }}
        >
          <X width={16} />
        </div>
        <section className="border-b border-black/10 mb-5 pb-2">
          <h2 className=" font-semibold text-lg mb-2">
            Idea Validation & Market Fit
          </h2>
          <p className="flex items-center gap-x-2">
            <span className=" font-semibold">Nihar Malali</span>
            <span className="w-1.5 h-1.5 bg-black/50  rounded-full"></span>
            <span className="text-sm  text-black/60">
              Principal Solutions Architect at National Life Group
            </span>
          </p>
        </section>
        <section className="flex gap-x-4">
          <section className="flex-1 text-sm [&>div>h3]:text-black/60 flex flex-col gap-y-5 [&>div>h3]:mb-0.5 ">
            <div>
              <h3>Price</h3>
              <p className="font-semibold text-lg">₹ 500</p>
            </div>
            <div>
              <h3>Session Duration</h3>
              <p>1 hour, once</p>
            </div>
            <div>
              <h3 className="">About</h3>
              <p className=" leading-[150%]">
                A practical session where founders learn to validate their
                startup idea, understand their target audience, and assess
                market demand using simple validation methods and feedback
                techniques to move toward product–market fit.
              </p>
            </div>
          </section>
          <section className="flex-1">
            <p className="mb-4">
              STEP <span className="text-sm">{bookingStep} of 3</span>
            </p>
            <div>
              {bookingStep == 1 && <BookingFormStep1 />}
              {bookingStep == 2 && <BookingFormStep2 />}
            </div>
          </section>
        </section>
      </article>
    </>
  );
};
