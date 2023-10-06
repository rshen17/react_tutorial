// How to create a new Component!
function Message(){
    // JSX: JavaScript XML
    // Converts HTML code to JavaScript code
    const name = "";
    if (name)
        return <h1>Hello {name}!</h1>;
    else
        return <h1>Hello World!</h1>
}

export default Message;