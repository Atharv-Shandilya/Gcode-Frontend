import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProfileView from "./components/ProfileView";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <main className="p-2 relative">
      <ProfileCard setShowProfile={setShowProfile} />
      <ProfileView show={showProfile} setShowProfile={setShowProfile} />
    </main>
  );
}

export default App;
