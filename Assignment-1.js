function calculateTriangleArea(a, b, c) {
  // Calculate the semi-perimeter
  const s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

const sideA = 5;
const sideB = 6;
const sideC = 7;

const areaOfTriangle = calculateTriangleArea(sideA, sideB, sideC);
console.log('The area of the triangle is:', areaOfTriangle);
