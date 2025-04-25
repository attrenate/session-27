const person = {
    name: "Max",
    age: 18,
    isStudent: true
  };

  function doubleEvens(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
  }
  function logObject(obj) {
    // Get key-value pairs as an array
    const entries = Object.entries(obj);
    
    // Loop through each key-value pair
    for (let [key, value] of entries) {
      console.log(`${key} is ${value}`);
    }
  }
  
  // Example usage
  const user = { name: "Alex", age: 20 };
  logObject(user);
  // Output:
  // "name is Alex"
  // "age is 20"
  