import { X } from "lucide-react";
import SessionsType from "./SessionTypes";
import GlobalStore from "../store/GlobalStore";

export default ({}: {}) => {
  const setShowProfile = GlobalStore((state) => state.setShowProfile);
  const showProfile = GlobalStore((state) => state.showProfile);

  return (
    <article
      className={`fixed right-0 top-4 bottom-4 border-l border-t border-b border-black/10 transform p-6 transition-transform rounded-l-2xl ${
        showProfile ? "" : "translate-x-full"
      }`}
    >
      <div
        onClick={() => {
          setShowProfile();
        }}
        className="flex justify-end mb-6 cursor-pointer"
      >
        <X />
      </div>

      <SessionsType />
    </article>
  );
};
