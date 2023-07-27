import { useState } from "react";
import Star from "./Star";
function StarRating({ maxRate }) {
  const [rating, setRating] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        width: "52rem",
        height: "5rem",
        justifyContent: "center",
      }}
    >
      {Array.from({ length: maxRate }, (_, i) => (
        <Star key={i} onRate={() => setRating(i + 1)} full={rating >= i + 1} />
      ))}
      <p style={{ fontSize: "1.8rem" }}>{rating || ""}</p>
    </div>
  );
}

export default StarRating;
