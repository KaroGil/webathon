import { useState } from "react";
import { Button } from "./ui/button";

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
    <Button
      onClick={() => handleClick()}
      className={`flex items-center py-0 px-4 rounded-full ${
        isClicked ? "bg-muted" : "bg-background"
      }`}
      variant="none"
    >
      <p className="text-lg">♥︎</p>
      <p>{likes}</p>
    </Button>
  );
}
