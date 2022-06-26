// Here we import anything from the react library or other libraries such as react-router, etc.
import { useState } from 'react';

// Here we import the components we need to use.
import Title from './Components/Title/Title';
import Button from './Components/Button/Button';

// Here we import any assets we need to use.
import youngDiogo from './assets/diogo.jpeg';

// Here we import the CSS file of the component. Like this, you can easily change styles and you don't get confused with other parts of the project.
import './Example.css';


//  --------------------------------------------------------------------------------------------------------------------

// You can use any syntax you want to define the component (arrow function components, function components or class components). 
// But you must keep the same syntax for your whole project.

const Example = () => {

    // Here we define all the states of the component.
    const [name, setName] = useState('John Doe');


    // Here we define all the functions of the component.
    const getNameFromAPI = () => {

        const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

        fetch(`https://jsonplaceholder.typicode.com/users/${getRandomNumber()}`)
            .then(response => response.json())
            .then(data => setName(data.name)) // Here we set a new value to the name state.
            .catch(error => console.log(error));
    }


    return (
        <div className='example'>
            <Title name={name} /> {/* Here we pass the name state to the Title component. Remember that in this case name(this is the name of the property)={name(this is the name of the variable we are passing)} */}
            <Button action={getNameFromAPI} /> {/* Here we pass the function getNameFromAPI to the button component. */}
            <img src={youngDiogo} width="230px" alt='young diogo' /> {/* Here we pass the image we imported aboved to the img src. */}
        </div>);
}

export default Example;