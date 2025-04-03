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

