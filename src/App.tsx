//import Message from "./Message";

//JSX Javascript XML
//JSX for dynamic content
//inline variable rendering - expression - simple var or function call which returns some data

//Component Tree
//App is the root (tsx extenstion for react compoents)
//Message component is the child
//virtual

import ListGroup from "./components/ListGroup";
import ListGroupProps from "./components/ListGroupProps";
import ListGroup_Function_InProps from "./components/ListGroup_passFuncThruProps";
import NavBar1 from "./components/NavBar1";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

import { useState } from "react";

function App() {
  //return <div><Message></Message></div>;

  let items = [
    "Test",
    "New York",
    "Delhi",
    "Tokyo",
    "Singapore",
    "London",
    "Paris",
  ];
  let ListGroupName = "Cities Learn Props";

  let colorsList = ["Red", "Blue", "Orange", "Green", "Black", "White"];
  let colorsListName = "Colors List Name: Learn Pass Function via props";

  const x = 10;

  const [alertVisible, setAlertVisibility] = useState(false);

  //function through props
  const handleOnSelect_colorsListGroup = (item: string) => {
    console.log("In Apps.tst logging selected Color " + item);
  };

  //- UPDATING OBJECTS
  //-- you need a brand new object to update state value
  //-- you can use spread operator ... on old object and say set price new value
  //a drink object with price
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleDrinkPriceBtn = () => {
    //create new drink obj and set the price

    //use spread operator ... to get all properties of old dringk obj
    //and change only price
    //note that spread operator is a shallow copy
    //meaning if there is nested object...drink will have same value as the old objecct
    //for the nested object; like addres for person object; when you do ...person
    //all persons will have same address as original person obect which is spread
    //in React for updation you have to create a new object and new nest object as well
    //...person and person.address has to be changed/updated as well
    const newDrink = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);
  };

  //drink object does not have nested structure
  //when nested structure is there like name, and address and address is another object
  //when you create new person object one or more times,
  //for each person obj the address is same in speread operator
  //so you have to say person.address in new object and change that too
  //Updating Nested Objects in Mosh course under Manageing Component State lesson

  //updating Arrays is similar like above, you need new array object for updating
  //similarly Array of Objects update also to be explored

  //use js map function to deal with Array or Array of Objects; explore

  //use Immer lib to simplify update logic
  //npm install immer
  //immer gives draft of your existing object and you can mutate it

  return (
    <div>
      <Form></Form>
      <ExpandableText maxChars={10}>
        Test Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </ExpandableText>

      <p>Update Object trial using drink.price</p>
      <p>TItle = {drink.title}</p>
      <p>Price = {drink.price}</p>
      <Button onClick={handleDrinkPriceBtn}>Chg Drink Price</Button>

      <ListGroup></ListGroup>
      <ListGroupProps
        items_inListGroup={items}
        ListGroupName={ListGroupName}
      ></ListGroupProps>
      <ListGroup_Function_InProps
        Colors_inListGroup={colorsList}
        Colors_ListGroupName={colorsListName}
        onSelectItem={handleOnSelect_colorsListGroup}
      ></ListGroup_Function_InProps>
      <NavBar1></NavBar1>
      {/* the HTML text for Alert tag "My Alert" is the child for Alert */}
      {/* some times we want to pass children to a component */}
      {/* chidren is a concept; for div, anything inside div is children; for p tag any text inside p tag is its children */}
      {/* passing children as special props is different from usual props passing as attribute of an element */}
      {/* for usual way check ListGroup_Function_InProps;  Colors_inListGroup and Colors_ListGroupName are all usual props*/}
      {/* they are passed to component through interfaces */}
      {/* passing children, like dynamic alert text (which is body of that tag) is different*/}
      {/* for that use the special props called children */}

      {/* Alert box has a Close button from Bootstrap Button class; X mark at top right corner */}
      {/* Alert box is a React component; child to App.tsx */}
      {/* React Props are uni directional frm Parent to Child only i.e. App -> Alert component */}
      {/* So when onClose function is passed from App to Alert, React will execute that function obviously knowing whcih component the props has to go */}
      {/* and close the button */}

      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          My alert
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Alert Btn
      </Button>
    </div>
  );
}

export default App;
