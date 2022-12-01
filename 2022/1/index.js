import d from "./data.js";

const calsByElve = d.split("\n\n").map((c) => {
  return c.split("\n").reduce((sum, cur) => sum + parseInt(cur, 10), 0);
});

const [f, s, t] = calsByElve.filter((e) => !isNaN(e)).sort((a, b) => b - a);

console.log("a", f, "b", f + s + t);
