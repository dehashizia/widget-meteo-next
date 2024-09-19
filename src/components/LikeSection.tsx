"use client";

import { useState } from "react";

function LikeSection() {
  const [nbLikes, setNbLikes] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setNbLikes(nbLikes + 1)}
      className="text-red-700 font-bold p-2 border border-blue-600 rounded-md"
    >
      {nbLikes} ❤️
    </button>
  );
}

export default LikeSection;
