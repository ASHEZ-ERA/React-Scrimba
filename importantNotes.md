React: <Declaretive> in react means we just need to declare and the work will be done by the react.

<Consumable>: React is consumable as to a component as a template can be used for many insantces 

Q. What does ''Array.Map()' method do?
A. It is JS built in method,you can run it on top of any kind of array in JS, you pass to it a callback function,

 <it will iterate/loop over every item in that array, run the funcyion that you pass to it and whatever you return from that function will be stored inside a new array>

(returns a new array, whatever is returned from the callback function provided is placed at the same index in the new array. Usually we take some items from the original array and modify them in some way.)

Q.  Why do we need .map() method in react?
A. Convert an array of raw data into an array of JSX elements that can be displayed on the page.

Q. Why is using '.map' better than just manually typing the components out?
A. 
    1. we dont often have the data ahead of time 
    2. it makes our code "self-sustaining" i,e we won.t need to change our code whenever there is any change in the database or the file where is raw data is held

#props:
#props refeer to the properties being passed into component in order for it to work correctly, similarly to how a function recieves paramteters (from above). A component recieving props is not allowed to modify those props(i,e: props are immutable)

#state:
#state refers to values that are managed by the component, similiar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.


in what way are react components supposed to be pure functions?
a componet when given some props should always return the same user interface, the same holds for giving the same state values it should always return the same user interface.
also rendering the component or running that component function will never affect any outside system(everytime a state changes it adds a new item in the database)

What is a 'side effect'? examples
any code that effects or interacts with an outside system, even a GET request to an API is a side effect even though we are not making a change to that system, simply interacting with an outside system is called side effect. e.g, interacting with local storage, API, manual DOM manupilation, web socket.

What is not considered a "side effect " in react, examples?

Anything that react is in charge of e.g: maintaining state, keeping the UI in sync with rendering the DOM elements.

When does react run your "useEffect"? when does it not run the effect function?
As soon as the component renderes for the first time, on every re-render of the component(assuming no dependencies array)

Will not run the useEffecct when the calues in the dependecies in the array stay the same between the re-renders

How do you explain what the dependencies array is?
it is way for react to know whether or not it should re-run the effect function.

#
useRef is used to let you access DOMnodes, have no re renders is mutable and lets you track state

# 
useRef holds mutable value or DOM refrence and useEffect runs code after the component renders. So when we want to interact eith the Dom (like focusing on an input, scrolling or measurinf size.) the element must be in the DOM first which happens after render, that is where useEffect comes in.

we cannot use useEffect inisde useRef because useRef doesnt watch for changes or or render cycles, it is just a container 