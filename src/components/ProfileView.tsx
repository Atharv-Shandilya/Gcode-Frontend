import { X } from "lucide-react";
import SessionsType from "./SessionTypes";

export default ({
  show,
  setShowProfile,
}: {
  show?: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <article
      className={`fixed right-0 top-4 bottom-4 border-l border-t border-b border-black/10 transform p-6 transition-transform rounded-l-2xl ${
        show ? "" : "translate-x-full"
      }`}
    >
      <div
        onClick={() => {
          setShowProfile(false);
        }}
        className="flex justify-end mb-6 cursor-pointer"
      >
        <X />
      </div>

      <SessionsType />
    </article>
  );
};
