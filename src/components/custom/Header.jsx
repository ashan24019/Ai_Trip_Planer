import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-3">
      <div className="flex items-center p-4 bg-white">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-1" />
        <span className="text-xl font-semibold">AI Trip Planner</span>
      </div>
      <Button>Sign In</Button>
    </div>
  );
}

export default Header;
