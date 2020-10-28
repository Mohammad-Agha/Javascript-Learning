# Functional Programming

* Functional programming is one of the many programming paradigms or styles of programming such as object-oriented programming, imperative programming, event-driven programming, etc...

* Functional programming has certain rules that how you should structure your code to solve a problem.

* Functional programming is about decomposing a problem into a bunch of reusable functions that take some input and return an output, they don't mutate or change data. With that approach we can compose these functions to build more complex functions. These small functions tends to be: 

  * More concise 
  * Easier to debug
  * Easier to test
  * More scalable

* We can run many function calls in parallel and take advantage of multiple cores of the CPU.

### Important concepts of functional programming

* Functions in javascript are first-class citizens which means they can be treated just like any other variable, we can:
  
  * Assign them to a variable
  * Pass them as an argument
  * Return them from other functions
  * See `first-class.js`

* A Higher order function is a function that takes a function as an argument or returns a function or does both
  * See `higher-order.js`

* Function composition is the idea of writing small and reusable functions and then compose them to form more complex functions for solving a problem
  * See `function-composition.js`
  * In the file above we had to read the result2 expression from right to left to know what's happening to the input
  * When more and more functions are added to the composition, the paranthesis becomes more and more complex
  * Solution: composing and piping, see `composing-piping.js` and `currying.js`

* Pure functions, a function is said to be pure if whenever we give it the same argument it will always return the same output
  * We can't use random values
  * we can't use current date time
  * we can't read or change the global state (such as DOM, files, db, etc...) because if we rely on them, this can affect the result of our pure function
  * No mutation of parameters 
  * Benefits of pure functions
    * Self-documenting because everything that the function needs is clearly specified in it
    * Easily testable
    * Concurrency
    * Cacheable
  * See `pure-functions.js`

* Immutability, so once we create an object we can't change it, we should create a copy and change the copy
  * Immutability pros
    * Predictability because we know that object won't be changed
    * Faster change detection because we are comparing the references of different object which is pretty fast
    * Concurrency
  * Immutability cons
    * Performance because we are copying the whole object
    * Memory overhead but there are immutability libraries which reduces this overhead by the use of structural sharing 
  * See `immer.js`. [Immutable](https://immutable-js.github.io/immutable-js/) and [Immer](https://immerjs.github.io/immer/docs/introduction)