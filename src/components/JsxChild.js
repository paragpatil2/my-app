// Return more than one element HTML in JSX
// Create a structure within the <div> tag

export default function JsxChild() {
    const name = "Suraj";
    return(
        <div>
            <h1> Hello {name}</h1>
            <h3> JSX child</h3>
            <p>We can return multiple elements in Jsx </p>
        </div>
    );
}