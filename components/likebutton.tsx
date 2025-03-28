import { useState } from "react";

export function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <button
      onClick={() => handleClick()}
      className={`flex items-center gap-2  ${
        isClicked ? "bg-card-muted" : "bg-background"
      } px-2 rounded-full`}
    >
      <p className="text-lg">♥︎</p>
      <p>{likes}</p>
    </button>
  );
}
