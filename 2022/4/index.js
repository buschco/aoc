import d from "./data.js";

const pairs = d
  .split("\n")
  .map((pair) =>
    pair.split(",").map((range) => range.split("-").map((n) => parseInt(n, 10)))
  );

console.log("cbu", pairs);

const a = pairs.filter(([[sa, ea], [sb, eb]]) => {
  if (sa >= sb && ea <= eb) {
    return true;
  }

  if (sa <= sb && ea >= eb) {
    return true;
  }
  return false;
}).length;

console.log("a", a);

const b = pairs.filter(([[sa, ea], [sb, eb]]) => {
  const start = Math.max(sa, sb);
  const end = Math.min(ea, eb);

  if (start <= end) {
    return true;
  }
  return false;
}).length;

console.log("b", b);
