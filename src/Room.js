import React, {useState} from 'react';
import './App.css';

function Room() {


    // const state= useState(true)
    // const isLit = state[0];
    // const setLit = state[1];
    // console.log("State = ", state);

    let [session, setSession] = useState(true);
    let [isLit, setLit] = useState(false);
    let [number, setNumber] = useState(0);

    
// Using simple function
    function updateLit() {

            console.log("Button clicked");
            setLit(!isLit);
            // isLit= !isLit;
    }

//

    
//     function updateNum() {

//         console.log("Button clicked");
//         setNumber(++number);
    
// }  

// Another way of writing the function (using arrow)

    const updateNum= ()=> {
        console.log("Button clicked");
        setNumber(++number);

}
    return (


    <div className={`room ${isLit ? 'Light' : 'Dark'}`}>

    <h1>BOOTCAMP2020 SESSION 4</h1>
    <h1>Topic: Using State in React Components</h1>
    <h2>This is  {session ? 'English': 'Urdu'} session!!!! </h2>
    <h2>Room is  {isLit ? 'Light' : 'Dark'}</h2>
    <h2>The above Statement is  {JSON.stringify(isLit)}</h2>
    <br/>
    <h2>Number is {number}</h2>
    <br/>
    <br/>
    <button onClick= {updateLit} > Toogle Light </button>
    {/* <button onClick = { () => {} }></button> */}
    {/* Now put the arrow function in that curly brackets */}

   {/* <button onClick = { () => {
        console.log("Button clicked");
        setNumber(++number);
        } }>
        </button> */}

    <button onClick= {updateNum} > Update number </button>

    <button onClick = { () => {
        console.log("Button clicked");
        setSession(!session);
        } }> 
        Session </button>


    <p><b>Submitted by Hina Zargham</b></p>
    </div>

    );
    
}

export default Room;