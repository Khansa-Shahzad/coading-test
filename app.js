   //Q:01
function createCounter() {
    let count = 0;  // This variable is enclosed within the closure
  
    return {
      increment: function() {
        count++;
        return count;
      },
      reset: function() {
        count = 0;
        return count;
      }
    };
  }
  
  // Example usage:
  const counter = createCounter();
  console.log(counter.increment()); // 1
  console.log(counter.increment()); // 2
  console.log(counter.reset());    // 0
  
  //Q:02
  function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}`;
  }
  
  // Example usage:
  console.log(greetUser("Fatima", "Morning")); // "Good Morning, Fatima"
  console.log(greetUser("Bob", "Evening"));   // "Good Evening, Bob"

  //Q:03
  function greetUser({ name = 'Unknown', city = 'Unknown' }) {
    console.log(`Name: ${name}, City: ${city}`);
  }
  
  // Example usage:
  const user = { name: 'John', age: 25, city: 'New York' };
  greetUser(user); // Output: "Name: John, City: New York"

  //Q:04
  const add = (a, b) => { return a + b };
  
  //Q:05
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });
  
  myPromise.then(console.log);  // This will log "Success!" after 1 second
  

  
  
  