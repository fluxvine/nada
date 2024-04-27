// this was working great until I made it a route, so I had to add 'export default' to make it available to the router

export default function (num1, operator, num2) {
  switch (operator) {
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "**":
      return num1 ** num2;
    default:
      return "error!";
  }
}
