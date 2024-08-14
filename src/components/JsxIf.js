
export default function JsxIf() {
    let age = 18;
    let name = "Rita";

    if (age >= 18) {
        return <h2>Hello {name} ! You are Elligible to Vote !!</h2>
    }
    else {
        return <h2>Hello {name} !! You are too young to vote !!</h2>
    }
}