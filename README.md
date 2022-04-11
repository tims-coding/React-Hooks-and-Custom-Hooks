# Example of Popular React Hooks and Custom Hooks

This is a short tutorial created for people trying to learn popular React hooks and a few very useful Custom hooks

## All React Hooks used
* useState
  * Allows you to track and manage State in a functional component
* useEffect
  * Perform side effects in functional components. Fires on all renders by default, on first render when empty dependncy array, or any time a dependency changes if it is passed to the array.
* useRef
  * Maintains a value between renders
* useReducer
  * Same as useState but allows custom state logic

## All Custom Hooks
* useToggle
  * Lets the user toggle when no value is passed or toggles to the value that is passed
* useDebounce
  * Executes the function that is passed only after a certain period of inactivity, which can be determined in the debounce function
