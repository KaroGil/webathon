export function formatDate(date: Date): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return parsedDate
    .toLocaleDateString("no-NO", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, ".");
}

export function formatDateTime(date: string | Date): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  const datePart = parsedDate
    .toLocaleDateString("no-NO", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, ".");

  const timePart = parsedDate.toLocaleTimeString("no-NO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${datePart} ${timePart}`;
}

export function formatDateWithDay(date: string | Date): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  const weekday = parsedDate.toLocaleDateString("no-NO", { weekday: "long" });
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const day = parsedDate.getDate();
  const month = parsedDate.toLocaleDateString("no-NO", { month: "long" });

  return `${capitalizedWeekday} ${day}. ${month}`;
}

export function formatTime(date: Date): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  return parsedDate.toLocaleTimeString("no-NO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
