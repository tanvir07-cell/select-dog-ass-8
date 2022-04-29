import React from "react";
import "./QNA.css";

const QNA = () => {
  return (
    <div>
      <h1>How react.js work ? </h1>
      <p>
        React Works Component base system, but similar in javascript Working
        flow. reactJS is one directional way data binding System. only parent
        components to child component data passing but in rare case child
        components to parent component data passing with reference. React
        components work similarly to JavaScript functions as they accept
        arbitrary inputs called properties or props. Returned React elements
        determine how the UI will look at the client end, When browser open in
        localhost or server react create Virtual DOM in own way for finding
        every rendering, if we change any elements or data react compare this
        and changes happened. this react algorithm call diff algorithm
      </p>

      <h2>Differents between props and states?</h2>
      <p>
        Props in react.js use data pass to component, props are equivalent to
        javascript pure functions, which are parameter cannot be changed when we
        assign, we cannot change their values.State is called as a Hook. State
        can be considered an instance of react component class and is majorly
        used to communicate with a component. The state of a react a component
        is an object that contains information that may or may not change over
        the lifecycle of a component. State object stores values of properties
        related to a component. React State are mutable and it's value changed
        as per requirement but Props are not mutable and it's value not
        changable. React state set by parent component but props set by event
        handler and completely changed by parent component, Both Props and
        states are used for storing data related to a component
      </p>
    </div>
  );
};

export default QNA;
