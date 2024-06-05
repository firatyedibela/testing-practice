export { analyzeArray };

function analyzeArray(arr) {
  return {
    average: findAverage(arr),
    min: findMin(arr),
    max: findMax(arr),
    length: arr.length,
  };
}

function findAverage(arr) {
  const total = arr.reduce((total, current) => {
    return total + current;
  });

  return total / arr.length;
}

function findMin(arr) {
  const min = arr.reduce((min, current) => {
    if (current < min) return current;
    return min;
  }, arr[0]);
  return min;
}

function findMax(arr) {
  const max = arr.reduce((max, current) => {
    if (current > max) return current;
    return max;
  }, arr[0]);
  return max;
}
