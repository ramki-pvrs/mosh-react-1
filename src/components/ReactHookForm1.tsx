//npm install react-hook-form

import { useForm, FieldValues } from "react-hook-form";

//div.mb-3>label.form-label+input.form-control
//type the above line and hit tab, you get proper label and input fields

//div.mb-3>label.form-label+input[type=number].form-control

//form submission event default behavior is, once form submitted
//contents are sent to server and whole page is reloaded
//so you can prevent default behavior
//
//react-hook-form

interface FormData {
  name: string;
  age: number;
}

function ReactHookForm1() {
  const form = useForm();

  console.log(form);
  /*
  the form object has lot of methods like 
   - register method to register input fields
   - reset
   - resetField
   -setValue ....

   you can de-structure form object and get only register method (function)

  formState has methods like errors, isDirty, isLoading, isValid ...

  you can destructure formState property and get only errors
  */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(register("name")); //name is name of the input field

  /*
    register method on input name "name" gives four properties 
    name which is name of the input field - "name"
    onBlur
    onChange
    ref: ref object to get values from input fields

    //NO RE-RENDERING INVOLVED HERE (RAMKI: may be only Submit?? and NOT ON  every input field change, like R-A-M-K-I)
    below in input field attributes {...register("name")}
    means register function returns 4 properties
    ...register spreads all those properties as attributes to input field
    name, onBlur, onChange, ref

    it is equivalent to setting those 4 attributes separately but handled by register function
    an advantage of react-hook-form useForm module
  */

  //onSubmit function is taken out

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  //handleSubmit below in form onSubmit attribute is coming from
  //react-hook-form useForm destructuring above

  //in below section, erros.name - this name is the form-field property of errors from useForm (react-hook-form)
  //but Type Script does not understand it, so for developers, errors. will not
  //show in auto completion box of properties available in errors
  //to enable such a context menu,
  //you configure an interfact and setup the required errors property name
  //as interface properties and pass that interface to useForm() call
  //then when you type errors., you will see the name and age
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
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
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name field input is required</p>
        )}
        {errors.name?.type === "required" && (
          <p className="text-danger">Name field input is required</p>
        )}

        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name field min should be 3 chars</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ReactHookForm1;
