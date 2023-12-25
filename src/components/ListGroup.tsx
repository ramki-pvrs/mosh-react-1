//ListGroup component from Bootstrap
//class is reserved in React

//Pascal Convention
//React componenet will return only one HTML tag element
//or it can return a Fragment
//import { Fragment } from "react";
//YOu dont need to import Fragmet,
//empty angle bracket represents Fragment

//

import { MouseEvent, useState } from "react";
import styled from "styled-components";

//React Component with its own style
//THis should be used as the tag instead of <ul></ul>
const UnOrderedList = styled.ul`
  list-style: none;
  padding: 100px;
`;

const StyledListItem = styled.li`
  padding: 5px 0;
  font-color: red;
`;

function ListGroup() {
  const items = ["New York", "Delhi", "Tokyo", "Singapore", "London", "Paris"];

  //let selectedIndex = -1; once you use useState Hook, you dont need this init

  //conditional rendering by function call possible;
  //the function below can be used inside component when required

  //const getMessage = () => {
  //return items.length === 0 ? <p>No Item found</p> : null;
  //};

  //Event Handler function
  //const handleClick = (event: MouseEvent) => console.log(event);
  //useState is Hook in react
  //[variable, set_or_updater_dynamicVariableFunction];
  //the first param is the dynamic variable (run time value);
  //second param is the function to set that dynamic variable
  //de-struture returned array

  //if the onClick event is a large scope to handle
  //instead of adding the onClick arrow function directly on li tag as attribute
  //define a function outside and use it

  //type Anotation in typescript
  //after type Anotation, you can call objects and methods in event using dot notation

  //Event Handler
  //https://www.kindacode.com/article/react-passing-parameters-to-event-handler-functions/
  const handle_li_onClick = (
    event: MouseEvent,
    item: string,
    index: number
  ) => {
    console.log(event, item, index); //in browser debug console, you will see New York if you clicked on New York list item
    setSelectedIndex(index); //update selected index when user clicks on one of the other list item in browser
  };
  /*  
      the setSelectedIndex = -1 line above is local to this component and react is not aware of it globally
      so when you click on next list item, it will not be highlighted with blue
      so you need to be able to tell react this change
      for that you need to maintain state (state means dynamic data which changes over time) of this selected index globally

      useState is a function, state Hook which returns an array
      first element is the dynamic variable
      second is the function which sets that dynamic variable

      useState(-1) means -1 is the initial value, remember if you add 0, the first element of the array is always highlighted 
      even before you click on it which you may not want

      EACH COMPONENT HAS ITS OWN STATE VARIAABLES
      FOR TESTING IN App.tsx there are two ListGroup elements
      with same list items
      but if you select New York in first List Group, it is blued
      but no impact on New York in second List Group
      until you select New York in second List group to have blue color to show 
      it is selected (remember each list item in each group should have unique id)


    */

  //de-structure return array and assign to each value on received values
  //selectedIndex is a state variable
  //setSelectedIndex is a function reference

  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*
  removed from li after using StyledListItem
   className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
  */

  return (
    <>
      <h1>List</h1>
      {/*If no item is found return msg to user else do nothing, return  null; then the ul below this ternary if statement will be returned */}
      {/*getMessage(); better approach to fn call is below; logical && */}
      {/* the condition below for items.length can also be a function defined outside this component function*/}
      {/* and called in here so that we can deal with parameterized conditional rendering through function params and returns */}
      {/* if it is only length as condition, then below one line is better */}
      {/* if condition that length = 0, then retun No items found p tag; js true && "some string" returns "some string" */}
      {items.length === 0 && <p>No item found</p>}

      {/*<UnOrderedList className="list-group">*/}
      <UnOrderedList>
        {/*{items.map(item => <li key={item}>{item}</li>)} formatted by prettier like below in function*/}
        {/* Each list item li requires unique key for React to retrieve later*/}
        {/* Observe js code for className to have active or not based on selectedIndex */}
        {/* this is part of Manage State in React; if selectedIndex is current index, that list item */}
        {/* will be shown in blue in browser */}
        {/* active is props for List Item to apply coditional styling;  */}
        {items.map((item, index) => (
          <StyledListItem
            key={item}
            //event is a browser event, in this case it is click event
            //you can print it on debug console and see the object
            onClick={(event) => handle_li_onClick(event, item, index)}
          >
            {" "}
            {/* END of li tag from above */}
            {item}
          </StyledListItem>
        ))}
      </UnOrderedList>
    </>
  );
}
//default export vs named export; you can export single variable from here as named export
//the respective import should handle it
export default ListGroup;
