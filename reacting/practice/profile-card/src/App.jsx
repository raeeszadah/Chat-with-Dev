import { useState } from "react";
import UserCard from "./components/UserCard";

import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-4 gap-1.5 ">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default App;
