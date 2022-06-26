# React CRUD Challenge

![SebsBook(./imgs/sebsbook.png?raw=true "SebsBook")](https://tapio-exercise.herokuapp.com/)

[Check the repo here!](https://github.com/sebherrerabe/tapio-exercise)

## Requirements

Create a simple CRUD application using React and myAPI

- Retrieve and display a list of posts (user, title, body)
- Create new post (showing a simple form in place that submit data) displaying
the created data when submitted
- Delete a post (with a button for each element in the list)
- Update a post (with a button for each element in the list, showing a form in
place with data to update) displaying the updated data when submitted

Bonus

- Add Images to your post using Cloudinary
- Create your own API & DataBase


## Our goal

- Learn and Understand React workflow. (States, Props and Re-rendering)
- Learn Basic React Hooks (useState, useEffect)
- Do simple CRUD (Create, Read, Update & Delete) Operations using React.
- Organise in a readable way your project folders
- Split your code in small components when needed
- Write clean & consistent code

### `Design`

![Figma](./imgs/figma.png?raw=true "Figma")

Prepare and design your project before coding! 

- [ ] Define your scope and user needs.
- [ ] Style and move around your app's components.
- [ ] Ask for some feedback before starting

You can use any tool out there. Personally I get along with Figma :)

### `Folder structure`
![Folder Structure](https://i.stack.imgur.com/741Ng.png)

Before coding organise the folders of your project. 

- [ ] Define what a component is. (Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.)
- [ ] Will I have sub-components?
- [ ] Where should I put my assets?
- [ ] Create your repo and install react (you can always use npx create-react-app)

The truth is that there's not standard way to do it, the most important is that you feel comfortable with it considering that maybe other people could also collaborate.

If you want a quick start-up clone this repo and see if you like my way to organise folders.

### `Create HTML & CSS-only components`

Let's start to code! 
If you don't feel comfortable with writing JSX yet. You could start with simply writing HTML components with no funcitionalities. On the other hand, if you are already familiar with it, go the way you find the most proper.


### `Add functionalities`

Now that we have our HTML elements let's add some magic to them.

- [ ] Try to identify which data will change because that's probably what you will have to define as state. (Use the useState Hook)
- [ ] Get familiar with setState because that's the built-in function that'll help you to change the data in your app.
- [ ] Get the difference between the Dom and the React DOM and why it's important to know how re-rendering works. (**https://felixgerschau.com/react-rerender-components/**)
- [ ] Create, Get, Update and Delete elements from an array state. (Ex: const [posts, setPosts] = useState([{...}]) )

### `Fetch data`

For this step you will have to get familiar with the useEffect Hook.

You can use my API or create your own one.

You can use JS fetch. Personally, I use Axios. It seems that the best way nowadays is to use async functions.

https://tapio-exercise-api.herokuapp.com/api/

- [ ] To get all posts from the API

```js
try {
        const res = await axios.get("https://tapio-exercise-api.herokuapp.com/api/posts");
    } catch (err) {
        console.log(err);
    }
```


- [ ] Create a post

```js
const post = {
        img: "",
        title: "this is a test",
        content: "this is a test"
    }
    try {
        const res = await axios.post("https://tapio-exercise-api.herokuapp.com/api/posts", post);
    }
    catch (err) {
        console.log(err);
    }
```



- [ ] Update a post

```js
const post = {
        img: "",
        title: "this is a test updated",
        content: "this is a test"
    }
    try {
        const res = await axios.put(`https://tapio-exercise-api.herokuapp.com/api/posts/${post.id}`, post);
    }
    catch (err) {
        console.log(err);
    }
```


- [ ] Delete a post

 ```js
 try {
        const res = axios.delete(`https://tapio-exercise-api.herokuapp.com/api/posts/${post.id}`);
    }
    catch (err) {
        console.log(err);
    }
 ```

### `Re-factor your code`

Once everything is working properly, have another look to your code...

- [ ] Is there something that i'm repeating and I could just write it once?
- [ ] Is there a cleaner syntax for this piece of code ?
- [ ] Write down a list of all the stuff you'd like to improve and shoot them one by one


### `Deploy`

Once you are done...

- [ ] Checkout to a new branch called Master.
- [ ] Link your repo to your heroku app
- [ ] Add commitments and push !
- [ ] Send me the final version


## Tuturials to consider


- [Web Dev Simplified React Tutorial](https://www.youtube.com/watch?v=hQAHSlTtcmY&t=1372s)
- [React Re-rendering](https://www.youtube.com/watch?v=0iNDB-2fg8A)
- [Fetch Data with useEffect](https://www.youtube.com/watch?v=bYFYF2GnMy8)
- [Folder Structure](https://www.youtube.com/watch?v=XEO3mFvrDx0)
- [React Virtual Dom](https://www.youtube.com/watch?v=Iw2BLUjQo1E)
- [React Best Practices](https://www.youtube.com/watch?v=5r4LlVAFrd0)

