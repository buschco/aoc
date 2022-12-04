import d from "./data.js";

const bonus = {
  loss: 0,
  win: 6,
  draw: 3,
};

const order = [1, 2, 3];

const scores = {
  A: 1, // Rock
  B: 2, // paper
  C: 3, // siccors
  X: 1,
  Y: 2,
  Z: 3,
};

const outcome = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const rounds = d.split("\n").map((round) => round.split(" "));

const aMyScore = rounds.reduce((sum, [o, y]) => {
  if (scores[o] === scores[y]) {
    return sum + scores[y] + bonus.draw;
  }

  if (scores[y] === 1) {
    if (scores[o] === 3) {
      return sum + scores[y] + bonus.win;
    }
  }

  if (scores[y] === 2) {
    if (scores[o] === 1) {
      return sum + scores[y] + bonus.win;
    }
  }

  if (scores[y] === 3) {
    if (scores[o] === 2) {
      return sum + scores[y] + bonus.win;
    }
  }

  return scores[y] + sum;
}, 0);

const bMyScore = rounds.reduce((sum, [o, r]) => {
  if (outcome[r] === "draw") {
    return sum + scores[o] + bonus.draw;
  }

  const a = order.indexOf(scores[o]);
  if (outcome[r] === "win") {
    return sum + order.at((a + 1) % 3) + bonus.win;
  }

  return sum + order.at((a - 1) % 3) + bonus.loss;
}, 0);

console.log("a", aMyScore, "b", bMyScore);
