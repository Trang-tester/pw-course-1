const height = 161;
const lastTwoDigits = height % 100;
const idealWeight = (lastTwoDigits * 9) / 10;
const maxWeight = lastTwoDigits;
const minWeight = (lastTwoDigits * 8) / 10;
console.log(
  "Cân nặng lý tưởng: " + idealWeight + "kg, tối đa: " + maxWeight + "kg, tối thiểu: " + minWeight + "kg"
);
