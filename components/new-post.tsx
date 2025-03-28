"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export function NewPost() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handlePublish = () => {
    const newPost = {
      date,
      time,
      place,
      description,
    };
    console.log("Nytt arrangement publisert:", newPost);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button onClick={togglePopover}>Nytt arrangement</Button>
      {isOpen && (
        <>
          {/* Blurry bakgrunn */}
          <div
            className="fixed inset-0 bg-background bg-opacity-50 backdrop-blur-sm z-40"
            onClick={togglePopover}
          />
          {/* Popover innhold */}
          <div className="fixed top-1/2 left-1/2 z-50 w-80 p-6 bg-white border border-gray-300 rounded-md shadow-md transform -translate-x-1/2 -translate-y-1/2">
            <h4 className="text-lg font-semibold mb-2">Nytt arrangement</h4>
            <div className="space-y-2">
              <label className="block text-sm">Dato:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border rounded bg-white text-gray-700 hover:bg-gray-100 focus:bg-gray-200"
                style={{ colorScheme: "light" }}
              />
              <label className="block text-sm">Tid:</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <label className="block text-sm">Plassering:</label>
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="F.eks. Bystranda"
                className="w-full p-2 border rounded"
              />
              <label className="block text-sm">Beskrivelse:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Beskriv arrangementet"
                className="w-full p-2 border rounded resize-none"
                rows={3}
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button size="sm" variant="ghost" onClick={togglePopover}>
                Lukk
              </Button>
              <Button size="sm" variant="default" onClick={handlePublish}>
                Publiser
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
