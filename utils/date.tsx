import { WEATHER_DATETIME_UPDATE_KEY } from "@/lib/contants";

export const getFormattedDate = () => {
  return new Date().toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).replace(",", "");
};

export const saveDateToLocalStorage = () => {
  const formattedDate = getFormattedDate();
  localStorage.setItem(WEATHER_DATETIME_UPDATE_KEY, formattedDate);
};
