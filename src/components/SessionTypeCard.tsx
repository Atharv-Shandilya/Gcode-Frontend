import GlobalStore from "../store/GlobalStore";

export default function SessionTypeCard() {
  const setShowBooking = GlobalStore((state) => state.setShowBooking);
  return (
    <article className="flex justify-between border p-4 items-center border-black/10 rounded-lg mb-4 last:mb-0">
      <div>
        <h3 className=" font-semibold mb-1">Idea Validation & Market Fit</h3>
        <p className=" text-sm text-black/60 mb-3">1 hour, once</p>
        <p className="font-semibold"> ₹500</p>
      </div>
      <div>
        <button
          className="border px-5 py-2 bg-black text-white font-medium rounded-lg cursor-pointer hover:bg-black"
          onClick={() => {
            setShowBooking();
          }}
        >
          Book
        </button>
      </div>
    </article>
  );
}
