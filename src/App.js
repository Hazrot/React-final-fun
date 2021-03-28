import React, {useState} from 'react';
import './App.css'
import Person from "./Person/Person"
const App = props =>  {
    const  [personsState, setPersonsState] = useState({
        person: [
            {name:'Hazrot', age:28},
            {name:'Sumon', age:12},
            {name:'Shaikh', age:43}
        ],
         // otherState: "same other value"
    })
    const [otherState, setotherState] = useState('some other value');

    const switchNameHandler = () =>{
        // console.log("Was Clicked!");
        setPersonsState({ person:[
                {name:'Md Hazrot Ali Shaikh'},
                {name: "Md Sumon Shaikh"},
                {name: 'Shaikh Sohel'}
            ],
            // otherState: personsState.otherState
        });

    }

    console.log(personsState , otherState);


        return (
            <div className={"App"}>
                <h1>Hi, I'm a React App </h1>
                <Person name={personsState.person[0].name} age={personsState.person[0].age} />
                <button onClick={switchNameHandler}>Switch Name</button>
                <Person name={personsState.person[1].name} age={personsState.person[1].age} />
                <Person name={personsState.person[2].name} age={personsState.person[2].age}> My Hobbies: Racing</Person>

            </div>
        );


}

export default App;

