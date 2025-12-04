import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProfileView from "./components/ProfileView";
import BookingOverlay from "./components/BookingOverlay";
import GlobalStore from "./store/GlobalStore";

function App() {
  const showBooking = GlobalStore((state) => state.showBooking);
  return (
    <main className="p-2 relative">
      <ProfileCard />
      <ProfileView />
      {showBooking && <BookingOverlay />}
    </main>
  );
}

export default App;
