export function formatDate(date: Date): string {
  return date
    .toLocaleDateString("no-NO", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, ".");
}

export function formatDateWithDay(date: Date): string {
  const weekday = date.toLocaleDateString("no-NO", { weekday: "long" });
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1); // Stor forbokstav
  const day = date.getDate(); // Dagen uten ledende null
  const month = date.toLocaleDateString("no-NO", { month: "long" }); // Full månedsnavn

  return `${capitalizedWeekday} ${day}. ${month}`;
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("no-NO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
