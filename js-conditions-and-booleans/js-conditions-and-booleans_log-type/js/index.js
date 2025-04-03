const data = { name: "John", age: 30 };

// Switch on typeof data: Covers all the primitive types.

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "number":
    console.log("number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean");
    break;
  case "function":
    console.log("function!");
    break;

  //The tricky part is that typeof will return "object" for:

  //    - Plain objects (e.g., {} or { name: "John", age: 30 })

  //    - null

  //    - Arrays (because in JS, arrays are objects)

  //To differentiate between them:

  //    1. Use typeof to catch all "object" types.

  //   2. Then, add a conditional check inside the case block:

  case "object":
    if (data === null) {
      console.log("null!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    } else {
      console.log("object!");
    }
    break;

  // Special handling for objects: Uses nested if to distinguish between null, arrays, and generic objects.

  default:
    console.log("I have no idea!");
}
