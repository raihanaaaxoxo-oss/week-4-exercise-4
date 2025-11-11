const inputValidator = (input) => {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }
  if (input === "") {
    throw new Error("Input cannot be empty");
  }
  return input;
};

const errorList = (randomInput) => {
  try {
    if (typeof randomInput === "number") {
      (randomInput).toUpperCase();
    }

    if (typeof randomInput === "string" && randomInput.length > 1000) {
      throw new RangeError("String is too long");
    }

    if (randomInput === null) {
      throw new Error("Custom error: null is not allowed");
    }

    return inputValidator(randomInput);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Caught main error:", error.name, error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
};

const stringHelpers = {
  reverse(str) {
    inputValidator(str);
    return str.split("").reverse().join("");
  },

  toTitleCase(str) {
    inputValidator(str);
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  },
  countWords(str) {
    inputValidator(str);
    return str.trim().split(/\s+/).length;
  },
};

const arrayHelpers = {
  sum(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("sum() expects an array");
    }
    return arr.reduce((a, b) => a + b, 0);
  },
  max(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("max() expects an array");
    }
    return Math.max(...arr);
  },
  unique(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("unique() expects an array");
    }
    return [...new Set(arr)];
  },
};

console.log(inputValidator("hello"));
console.log(errorList("twink"));
console.log(errorList(123));
console.log(errorList(null));

console.log(stringHelpers.reverse("RaceCar"));
console.log(stringHelpers.toTitleCase("south korea"));
console.log(stringHelpers.countWords("one two three"));

console.log(arrayHelpers.sum([87, 99, 103]));
console.log(arrayHelpers.max([27, 65, 43]));
console.log(arrayHelpers.unique([1, 2, 1, 3]));