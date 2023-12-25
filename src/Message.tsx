// PascalCasing - each word capital letter

//whereever Message function is used, display Hello World in h1 tag

function Message() {
    //JSX code - Javascript XML
    //https://babeljs.io/repl

    const name = "Ramki";
    if(name) 
        return <h1>Hello {name}</h1>;
    //if no name
    return <h1>Hello World</h1>;
}

export default Message;
