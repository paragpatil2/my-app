// Props (stand for properties) are arguments used for passing data from one component to another. 
// Data (as name:value pair) with props are passed in a unidirectional flow from parent to child
// Props are passed to components via HTML attributes.
// React Props are like function arguments in JavaScript and attributes in HTML.
// Props is immutable. They are read-only - Cant change them in the function


export default function Propexe(props)
{
	return (
		<div>
			<h2> From Props : Hello {props.dataattribute.fname} {props.dataattribute.lname}</h2>
			<h3> You are {props.dataattribute.age} Years Old !!! </h3>
	
		</div>
	);
}