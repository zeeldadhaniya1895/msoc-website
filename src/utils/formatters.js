// Function to get the formatted timestamp in IST
export const getFormattedTimestamp = () => {
  // Create a new Date object
  const currentTimestamp = new Date();

  // Format the timestamp using toLocaleString with the IST timezone
  const formattedTimestamp = currentTimestamp.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Use 12-hour format with AM/PM
  });

  return formattedTimestamp;
};
