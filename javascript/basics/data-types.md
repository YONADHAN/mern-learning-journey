//Asynchronous Programming

🔹 Asynchronous Programming in JavaScript
✅ 1. Definition (English)

Asynchronous programming in JavaScript is a way of executing tasks without blocking the main thread, allowing other operations to run while waiting for time-consuming tasks (like API calls, file reading, timers) to complete.

✅ 2. Definition (Malayalam)

JavaScript-il asynchronous programming ennath, oru task complete aavunnathinu wait cheyyumbo main thread block cheyyathe, vere tasks run cheyyan allow cheyyunna method aanu.

(Simple: Oru work nadakkumbo, mattu works stop aakilla.)

✅ 3. Example (Implementation)
🔸 Using Callbacks (Basic way)
console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 2000);

console.log("End");
👉 Output:
Start
End
Async Task Done
✔️ Explanation:
setTimeout is asynchronous
JS doesn’t wait → moves to next line
After 2 sec → callback runs
🔸 Using Promises (Better)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

fetchData().then((data) => {
  console.log(data);
});
🔸 Using Async/Await (Best & Clean)
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

const getData = async () => {
  console.log("Fetching...");
  const data = await fetchData();
  console.log(data);
};

getData();
✔️ Why async/await?
Looks like synchronous code
Easy to read & maintain
✅ 4. Real Project Application (VERY IMPORTANT 🔥)

This is where you impress interviewers.

🔸 1. API Calls (Most Common)
const getUsers = async () => {
  const res = await fetch("https://api.example.com/users");
  const data = await res.json();
  console.log(data);
};

//------------------------------------------------------------------
🔹 Event Delegation
✅ 1. Definition (English)

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to handle events for its child elements using event bubbling.

✅ 2. Definition (Malayalam)

Event delegation ennath, oro child element-il listener add cheyyunnathinu pakaram, parent element-il oru single event listener use cheythu, child elements-ude events handle cheyyunna technique aanu (event bubbling use cheythu).

✅ 3. Example (Implementation)
❌ Without Event Delegation (Bad approach)
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Button clicked");
  });
});

👉 Problem:

Every button gets a separate listener ❌
Not scalable (think 1000 items)
✅ With Event Delegation (Correct approach)
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    console.log("Button clicked:", e.target.innerText);
  }
});
🧠 HTML Structure
<div id="parent">
  <button class="btn">One</button>
  <button class="btn">Two</button>
  <button class="btn">Three</button>
</div>
✔️ Explanation
Event happens on button
It bubbles up to parent
Parent handles it
e.target → actual clicked element
🔥 4. Why Event Delegation Works

Because of Event Bubbling

👉 Flow:

Button → Parent → Body → Document

So parent can “catch” child events.

✅ 5. Real Project Applications (VERY IMPORTANT)
🔸 1. Dynamic Lists (React / DOM)
<ul id="list"></ul>

👉 Items added dynamically → no need to attach listeners again

🔸 2. Tables / Data Rendering
User lists
Product lists
Admin dashboards

👉 One listener handles all rows

🔸 3. E-commerce / Cart Buttons
Add to cart
Remove item

👉 Works even when items update dynamically

🔸 4. Forms with Multiple Inputs
Instead of attaching to each input
Handle from parent
//---------------------------------------------------------------------------------------

//Proxy Object
A Proxy object in JavaScript is used to intercept and customize operations (like reading, writing, deleting properties) on another object.

const user = {
    name: "Yonadhan",
    age: 24
};

const proxy = new Proxy(user, {
    get(target, prop) {
        console.log(`Getting ${prop}`);
        return target[prop];
    },

    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;
        return true;
    },

    deleteProperty(target, prop) {
        console.log(`Deleting ${prop}`);
        delete target[prop];
        return true;
    }
});


// 🔹 1. GET (Read value)
console.log(proxy.name);

// 🔹 2. SET (Update value)
proxy.age = 25;

// 🔹 3. ADD new property
proxy.city = "Kochi";

// 🔹 4. DELETE property
delete proxy.name;

// 🔹 5. Final object check
console.log("Final user object:", user);

//--------------------------------------------------------------------

Throttling (Rate Limiting Technique)
 1. Definition (English)

Throttling is a technique that limits how often a function can be executed within a specific time interval, ensuring it runs at most once in that period.


function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = new Date().getTime();

        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}


function handleScroll() {
    console.log("Scroll event fired");
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);

\\\-------------------------------------------------------------------------------------------------------------



🔹 Debouncing
✅ 1. Definition (English)

Debouncing is a technique that delays the execution of a function until after a specified delay has passed since the last time it was invoked.

function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function search(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 1000);

// Simulating typing
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");


//-------------------------------------------------------------------------------------

Rest Parameter + Callback + Reduce

1. Definition (English)
Rest Parameter (...args): Allows a function to accept any number of arguments as an array
Callback Function: A function passed as an argument to another function
reduce(): Iterates over an array and reduces it to a single value

function calculate(operation, ...numbers) {
    return numbers.reduce((acc, curr) => {
        return operation(acc, curr);
    });
}

// Callback functions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(add, 1, 2, 3, 4));       // 10
console.log(calculate(multiply, 1, 2, 3, 4)); // 24

-----------------------------------------------------------------------------------

🔹 Currying in JavaScript
✅ 1. Definition (English)

Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.



function curryAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(curryAdd(1)(2)(3)); // 6

//--------------------------------------------------------------

Polyfills in JavaScript
✅ 1. Definition (English)

A polyfill is a piece of code (usually JavaScript) that implements a feature that is not supported in older browsers, allowing modern functionality to work everywhere.

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
        let hasInitial = arguments.length > 1;

        let acc = hasInitial ? initialValue : this[0];
        let startIndex = hasInitial ? 0 : 1;

        for (let i = startIndex; i < this.length; i++) {
            acc = callback(acc, this[i], i, this);
        }

        return acc;
    };
}

What Each Thing Means
this → the array
acc → accumulator (stores result)
this[i] → current element
i → index
callback → your function (acc, curr) => ...



let arr = [2,2,2,2,2];

if(!Array.prototype.yonadhanReduce){
    Array.prototype.yonadhanReduce = function(callbackfn, initialValue) {
        let acc = initialValue
        for(let i = 0;i<this.length;i++){
            acc = callbackfn(acc, this[i])
        }
        return acc;
    }
}


let result = arr.yonadhanReduce((acc, curr)=> acc += curr,0)
console.log(result)

//-----------------------------------------------------------------------------------------

Hoisting in JavaScript
✅ 1. Definition (English)

Hoisting is JavaScript’s behavior of moving declarations (variables and functions) to the top of their scope during the compilation phase, before code execution.

//-----------------------------------------------

Closures (🔥 must know)
Execution Context (deep)
Scope chain (connects everything)
Event Loop (core concept)

//=============================================


Object Flattening
✅ 1. Definition (English)

Object flattening is the process of converting a nested object into a single-level object, where keys represent the path to each value.
const obj = {
    user: {
        name: "Yonadhan",
        address: {
            city: "Kochi"
        }
    }
};


function flattenObject(obj,parentkey="" ,result = {} ){
    
    for(let key in obj){
        const newkey = parentkey?`${parentkey}:${key}`:key;
        if(typeof obj[key]==="object" && typeof obj[key]!== null && !Array.isArray(obj[key])){
            flattenObject(obj[key],newkey, result)
        }else{
            result[newkey] = obj[key]
        }
    }
    return result
    
}





console.log(flattenObject(obj));






🔸 Input
const obj = {
    user: {
        name: "Yonadhan",
        address: {
            city: "Kochi"
        }
    }
};
🔸 Output
{
  "user.name": "Yonadhan",
  "user.address.city": "Kochi"
}


//------------------------------------------------
🔹 Higher Order Functions (HOF)
✅ 1. Definition (English)

A Higher Order Function is a function that either takes another function as an argument or returns a function as output (or both).

function greet(name) {
    return `Hello ${name}`;
}

function processUser(callback) {
    console.log(callback("Yonadhan"));
}

processUser(greet);


 Real Project Use Cases
🔸 1. Array Transformations


Filtering users


Mapping API data



🔸 2. Event Handling
button.addEventListener("click", handleClick);
👉 Callback function

🔸 3. Middleware (Node.js / Express)
app.use((req, res, next) => {    console.log("Middleware");    next();});

🔸 4. Functional Utilities


Currying


Composition


Memoization



⚠️ Interview Traps
❌ Not understanding callback
👉 Callback = function passed to another function

❌ Confusing with normal functions
👉 HOF must:


take function OR


return function



💪 Strong Interview Answer

A higher order function is a function that takes another function as an argument or returns a function, enabling abstraction and reuse of logic.


💪 Quick Summary


Functions passed/returned


Enables:


callbacks


reuse


functional programming





🔥 Pro Tip (This impresses interviewer)
Say:

Methods like map, filter, and reduce are built-in higher order functions in JavaScript.




//---------------------------------------------------------------

👉 Find second largest number in an array using reduce

function findSecondLargest(arr) {
    if (arr.length < 2) return null;

    const { max, secondMax } = arr.reduce(
        (acc, curr) => {
            if (curr > acc.max) {
                acc.secondMax = acc.max;
                acc.max = curr;
            } else if (curr > acc.secondMax && curr !== acc.max) {
                acc.secondMax = curr;
            }
            return acc;
        },
        { max: -Infinity, secondMax: -Infinity }
    );

    return secondMax === -Infinity ? null : secondMax;
}




third largest


function thirdLargest(arr) {
    const {first,second,third} = arr.reduce((acc, curr) => {
        if(curr>acc.first){
            acc.third = acc.second;
            acc.second = acc.first;
            acc.first = curr
        }else if (curr>acc.second && curr!==first){
            acc.third = acc.second;
            acc.second = curr;
        }else if(curr>acc.third && curr!==first && curr!==second){
            acc.third = curr;
        }
        return acc;
    },{first:-Infinity, second: -Infinity, third: -Infinity})
    return third;
}


console.log(thirdLargest([1,2,3,4,5,6,7]))


//---------------------------------------------------------------------


🔹 localStorage vs sessionStorage
✅ 1. Definition (English)
localStorage: Stores data with no expiration time (persists even after browser is closed)
sessionStorage: Stores data only for the duration of the page session (cleared when tab is closed)

localStorage
localStorage.setItem("name", "Yonadhan");

const name = localStorage.getItem("name");

localStorage.removeItem("name");

🔸 sessionStorage
sessionStorage.setItem("token", "12345");

const token = sessionStorage.getItem("token");

sessionStorage.clear();


🔸 localStorage

👉 Use when data should persist:

Theme (dark/light mode)
User preferences
Remember login (non-sensitive data ⚠️)
🔸 sessionStorage

👉 Use when data is temporary:

Form data (multi-step forms)
OTP/session tokens (short-lived)
Tab-specific state


//--------------------------------------------------


callback hell


setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");

            setTimeout(() => {
                console.log("Step 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

output
Step 1
Step 2
Step 3
Step 4








🔥 Real-World Example
getUser(userId, (user) => {
    getOrders(user.id, (orders) => {
        getPayment(orders[0], (payment) => {
            console.log(payment);
        });
    });
});

👉 This is real callback hell in backend/frontend apps

🔥 4. Solution 1: Promises
getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getPayment(orders[0]))
    .then(payment => console.log(payment))
    .catch(err => console.error(err));

👉 Cleaner, linear flow

🔥 5. Solution 2: Async/Await (BEST)
async function process() {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const payment = await getPayment(orders[0]);

        console.log(payment);
    } catch (err) {
        console.error(err);
    }
}

👉 Looks like normal synchronous code ✅


//---------------------------------------------------------------------------------------------

2. Create an arrow function with n number of arguments and find the sum
3. Find unique elements in the array using HOF

2. Arrow function with n number of arguments (sum)
✅ Using Rest + Reduce (BEST way)
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);console.log(sum(1, 2, 3, 4, 5)); // 15

🧠 Explanation


...nums → collects all arguments into array


reduce() → sums all values



🔥 Alternative (without reduce)
const sum = (...nums) => {    let total = 0;    for (let num of nums) {        total += num;    }    return total;};

🔹 3. Find unique elements using HOF
✅ Using filter() (HOF)
const arr = [1, 2, 2, 3, 4, 4, 5];const unique = arr.filter((item, index) => arr.indexOf(item) === index);console.log(unique); // [1, 2, 3, 4, 5]

🧠 Explanation


indexOf(item) → first occurrence


Compare with current index


Keeps only first occurrence


//---------------------------------------
Promise States (VERY IMPORTANT)

A Promise has 3 states:

🔸 1. Pending

👉 Initial state
👉 Operation still running

const p = new Promise(() => {});
// still pending
🔸 2. Fulfilled (Resolved)

👉 Operation completed successfully

const p = Promise.resolve("Success");
🔸 3. Rejected

👉 Operation failed

const p = Promise.reject("Error");
🧠 Flow
Pending → Fulfilled
Pending → Rejected

👉 Once settled → cannot change ❗

🔥 Example
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received");
    }, 1000);
});

promise
    .then(res => console.log(res))   // fulfilled
    .catch(err => console.log(err)); // rejected
🔹 Promise Methods
🔥 1. .then()

👉 Handles success

promise.then(data => console.log(data));
🔥 2. .catch()

👉 Handles error

promise.catch(err => console.log(err));
🔥 3. .finally()

👉 Always runs

promise.finally(() => console.log("Done"));
🔹 Static Promise Methods (VERY IMPORTANT 🔥)
🔸 1. Promise.all()

👉 Runs multiple promises in parallel
👉 Fails if ANY fails

Promise.all([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err));
🔸 2. Promise.allSettled()

👉 Waits for ALL (success + failure)

Promise.allSettled([p1, p2, p3])
    .then(res => console.log(res));
🔸 3. Promise.race()

👉 Returns first settled (success OR fail)

Promise.race([p1, p2])
    .then(res => console.log(res));
🔸 4. Promise.any()

👉 Returns first successful
👉 Ignores failures

Promise.any([p1, p2])
    .then(res => console.log(res))
    .catch(err => console.log("All failed"));
🔸 5. Promise.resolve()
Promise.resolve("Success");
🔸 6. Promise.reject()
Promise.reject("Error");


//================================================
Convert string 1st character in upper case

const str = "Callback hell convert into promise and again convert into async/await"

const result = str.split(" ").map((word) => word[0].toUpperCase()+word.slice(1,word.length)).join(" ")
console.log(result)

//---------------------------------------
Callback hell convert into promise and again convert into async/await

1. Callback Hell (Starting Point)
function step1(cb) {
    setTimeout(() => {
        console.log("Step 1 done");
        cb();
    }, 1000);
}

function step2(cb) {
    setTimeout(() => {
        console.log("Step 2 done");
        cb();
    }, 1000);
}

function step3(cb) {
    setTimeout(() => {
        console.log("Step 3 done");
        cb();
    }, 1000);
}

// ❌ Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps done");
        });
    });
});
❌ Problem
Nested callbacks → hard to read → hard to maintain
🔹 2. Convert to Promises
✅ Step 1: Wrap in Promise
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 done");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 done");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 done");
            resolve();
        }, 1000);
    });
}
✅ Step 2: Promise Chaining
step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => console.log("All steps done"))
    .catch(err => console.log(err));
🔥 Why this is better
Flat structure ✅
Easy error handling ✅
Readable flow ✅
🔹 3. Convert to Async/Await (BEST)
async function runSteps() {
    try {
        await step1();
        await step2();
        await step3();

        console.log("All steps done");
    } catch (err) {
        console.log(err);
    }
}

runSteps();
🔥 Why Async/Await is Best
Looks synchronous ✅
Very readable ✅
Easy debugging ✅