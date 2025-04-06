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

#what is conditional rendering?
#when we want to only sometimes display something on the page based on some kind of condition.

@ when to use &&
#when you need to either display something or not display something

#when to use ternary
#when to decide which 2 of the things to display

#what if you need to decide > 2 options on what to display.
#if..elseif..elseif..etc