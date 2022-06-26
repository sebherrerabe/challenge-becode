const Title = ({ name }) => { // There are two ways to use props in a component. One is to use the props object and the other is to import the whole props object.

    // Here we are using object destructuring to get the action property of the props object.
    // const { name } = props; where props = { name: 'Value' }

    return (<h1>Hello {name}</h1>); // If I had imported the whole props object, I would have had to write props.action instead of just action.
}

export default Title;