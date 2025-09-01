// if value is falsy ->emoji (\UD83E\uDD25) Falsy
// if value is truthy -> green tick \u2705 Truthy

const checkTruthy = value => {
  return value ? "\u2705 Truthy" : "\uD83E\uDD25 Falsy";
};

console.log(checkTruthy(true));
console.log(checkTruthy(false));