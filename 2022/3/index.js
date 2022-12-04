import d from "./data.js";

const getPrio = (c) => {
  if (c.toUpperCase() === c) {
    return c.charCodeAt() - 38;
  }
  return c.charCodeAt() - 96;
};

if (
  getPrio("a") !== 1 ||
  getPrio("b") !== 2 ||
  getPrio("A") !== 27 ||
  getPrio("B") !== 28
)
  throw new Error("getPrio is wrong");

const rucks = d.split("\n");

const a = rucks.reduce((sum, ruck) => {
  const chars = ruck.split("");
  const l = chars.slice(0, chars.length / 2);
  const r = chars.slice(chars.length / 2, chars.length);

  const dupes = Array.from(new Set(l.filter((item) => r.includes(item))));

  return sum + dupes.reduce((s, dc) => getPrio(dc) + s, 0);
}, 0);

console.log("a", a);

let sum = 0;
for (let i = 0; i + 2 <= rucks.length; i = i + 3) {
  const [ra, rb, rc] = [rucks[i], rucks[i + 1], rucks[i + 2]];

  const badge = ra
    .split("")
    .find((item) => rb.includes(item) && rc.includes(item));
  sum = sum + getPrio(badge);
}

console.log("b", sum);
