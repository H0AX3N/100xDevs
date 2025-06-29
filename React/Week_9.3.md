// STATE

- state is the dynamic part of a webpage
- when the value of a state variable changes, the component that uses the state variable re-renders
- whenever doing conditional logic, make sure it is a state variable. simple variables wont work. React is only tracking the state  variables.
- When a react component re-renders after a variable changes, that variable is called a state variable.
- 

useEffect
---------

WHAT IS SIDE EFFECT?
- side effect is something that has nothing to do with the content that is being rendered in the ui. it is something that happens in the background(something that we cannot see on the screen).
- let's say i am rendering something on the ui. it has some props as well. meanwhile i am also doing a 'setInterval' that updates every 1 second. That setInterval is the side effect here, because it has nothing to do with the content with props that is being rendered in the ui.
- It is something that we want to happen on the side while react calculates and renders the rest of our state and components.
- They affect things outside the component itself.
