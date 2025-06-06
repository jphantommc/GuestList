import { useState } from "react";

import GuestDetails from "./GuestDetails"

import GuestList from "./GuestList"

export default function App() {
  const [guestId, setGuestId] = useState(null);

  return (
  <main>
    {guestId ? (
      <GuestDetails guestId={guestId} setGuestId={setGuestId} />
    ) : (
      <GuestList setGuestId={setGuestId} />
    )}
  </main>
  );
}  