import React, { FormEvent, useRef } from "react";

//div.mb-3>label.form-label+input.form-control
//type the above line and hit tab, you get proper label and input fields

//div.mb-3>label.form-label+input[type=number].form-control

//form submission event default behavior is, once form submitted
//contents are sent to server and whole page is reloaded
//so you can prevent default behavior
//
function Form() {
  //HTMLInputElement is the indicator that this useRef references an input element
  //required for Type Script; casting

  //first time, there is no DOM element so you MUST init to null
  //if you leave (), it is undefined and may create problems in future
  const form_nameFldRRef = useRef<HTMLInputElement>(null);
  const form_ageFldRRef = useRef<HTMLInputElement>(null);
  //to get all the form values, create an object and use the key-val pair
  //here its only name and age as an example
  const person = { name: "", age: 0 };

  //it is better to handle submit event in separate function and call it in
  //event is not understood by TypeScript until you explicitly cast it
  //using FormEvent from react (imported in this file)

  //then handleSubmit is referenced in onSubmit attribute of form element below
  //NOTE its not a function call but refernece when you just use handleSubmit instead of
  //handleSubmit()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
    if (form_nameFldRRef.current !== null)
      //console.log(form_nameFldRRef.current.value); //if it is more than one line if condition has to be in closures {}
      person.name = form_nameFldRRef.current.value;
    if (form_ageFldRRef.current !== null)
      //console.log(form_ageFldRRef.current.value);
      person.age = parseInt(form_ageFldRRef.current.value);
    console.log(person); //Object { name: "Ram", age: 22 }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          ref={form_nameFldRRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          ref={form_ageFldRRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
