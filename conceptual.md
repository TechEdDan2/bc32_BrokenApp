### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Two ways of managing async actions are callbacks using promises (.then and .catch), and async/await. 

- What is a Promise?
 A promise is a one-time guarantee of a future value and has three states: pending, resolved, and rejected. 

- What are the differences between an async function and a regular function?
  A regular function will execute all its lines of code when it is called, but an async function can use the await keyword to "pause" its running to let other code run and will "promise" to return to the await line later. 

- What is the difference between Node.js and Express.js?
  Node.js is the environment to run js in, and Express.js is the framework built on top of node that can help make node easier to use

- What is the error-first callback pattern?
It is a standard pattern used by node.js, where the first argument is an error object and then it is followed by the successful response data. 

- What is middleware?
 Middleware is a function that runs between request and response 

- What does the `next` function do?
 It is a callback function built into Express that will tell the program to move on to the next task in the stack

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
 The first issue I noticed is that each request has to await for the previous to be fulfilled before running. This is also not very reuseable and should be refactored to have a username (array) parameter and then create a base url with the param added at the end inside of a loop, so it could accept any number of users.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
