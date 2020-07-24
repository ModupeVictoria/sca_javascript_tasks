/* 
Syncronous & Asyncronous Javascript (MVP)

1. A promise is an object that may produce a single value some time in the future:
 either a resolved value, or a reason that it’s not resolved
 A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
 Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

 2. Synchronous operations block instructions until the task is completed, while 
 Asynchronous operations can execute without blocking other operations.
  Asynchronous operations are generally completed by firing an event or by calling a
   provided callback function.

 3. Synchronous sample code
       console.log('First');
       console.log('Second');
       console.log('Third');
     Output to the console will be 
       First
       Second 
       Third

      Asynchronous sample code
        let promise = new Promise(function(resolve, reject) {
      setTimeout(() => resolve("done!"), 1000);
     });
      promise.then(
     result => alert(result), // shows "done!" after 1 second
      error => alert(error) // doesn't run
      );

 4. Different ways to deal with Asynchronous Code
    1) Callbacks
    2) Promises
    3) Async or Await
*/