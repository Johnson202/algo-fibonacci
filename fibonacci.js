function fibonacci(n, memo = {}) {
  if (n == 0 || n == 1) {
    return n;
  };
  if (n in memo) {
    return memo[n];
  }
  else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  };
};

module.exports = fibonacci;
