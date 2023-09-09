import { DateTime } from "luxon";

const age = (() => {
  const current = DateTime.now();
  const birthday = DateTime.fromISO("2004-01-20");

  const difference = current.diff(birthday, "years");
  const years = difference.toObject().years;

  return Math.floor(years);
})();

const name = "Maurice Schorn";
const profession = "Software developer";
const about = `${age} year old from Germany.`;
const picture = import("../assets/profile_picture.png");

export { name, profession, about, picture }