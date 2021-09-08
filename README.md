# React: State - Declarative vs. Imperative Pprogramming
Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu


## Description

.

---

## Notes

To make our apps more interactive, we need to understand the concept of state.        
This is a really central concept about how React works.      

### State      
```UI = f(State)```

The UI (User Interface), that somebody looking at our website sees, is a function of the state of our app.    
So Uer Iterface changes are reflecting the changes in state.     
Eg: if UI is H20:

UI | State | 
--- | --- | 
Ice | f(-30°) | 
Water | f(20°) | 



Translating to code,  we would probably keep track of a variable.      
We would define how our user interface would change depending on different values of that variable.     
And this kind of programming is known as declarative programming.       
We're declaring how our user interface should look under different conditions depending upon the state.    


### Declarative Programming. 
We're declaring, when we're writing our code, how our UI should look under different conditions dependent upon the state.

Eg: Tasks List: Buy Milk will be lined-through if the task was done
```javascript
function App() {
  var isDone = false;
  const strikeThrough = { textDecoration: "line-through" };
  return <p style={isDone ? strikeThrough: null}>Buy Milk</p>;
}
```
We have an UI depending of the value ```isDone```.

The other style of programming would be called imperative programming.


### Imperative Programming. 
This is us imperative telling this element to do something different.
Eg: Tasks List: Using buttons that change the style 
```javascript
function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}
function App() {
  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}> Change to strike through </button>
      <button onClick={unStrike}> Change Back </button>
    </div>
  );
}
```



---
## What I have learned with this project
