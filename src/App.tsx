import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProfileView from "./components/ProfileView";
import BookingOverlay from "./components/BookingOverlay";
import GlobalStore from "./store/GlobalStore";
import Nav from "./components/Nav";

function App() {
  const showBooking = GlobalStore((state) => state.showBooking);
  return (
    <main className=" relative">
      <Nav />
      <article className="p-2">
        <ProfileCard />
        <ProfileView />
        {showBooking && <BookingOverlay />}
      </article>
    </main>
  );
}

export default App;
