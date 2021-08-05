# LC-React-Studio04

This studio focuses on using state in your components. You'll also work with props a little bit. It is recommended to view these instructions from the main repository page where the markdown formatting and images are displayed.

You're going to finish an app that lets a user track their daily steps, water intake, calories consumed from food, and calories burned from exercise. It will also display the net calories (consumed minus burned). Below the chart there will be details panels with built-in forms to update the values. Most of this code has already been written for you. It will just be your job to make sure the data can be received from the user in the `Details` component, passed up to the parent `App` component, and then passed down to the child component `Chart`. You will also use two-way binding and display lists of entered food and exercise in the details sections. You'll accomplish all this with a combination of state variables, props, and lifting state by passing functions as props. Ready?

---

## Getting Started

### A. Fork & clone the repository from GitHub.
 - [ ] Navigate to the [studio 04 project repository](https://github.com/Carolista/LC-React-Studio04).
 - [ ] Fork the repository to your own account, then grab the link from the green Code dropdown.
 - [ ] In your terminal, go to the folder where you want your project to be. Use `git clone` to create your local copy.

### B. Get the project ready to code.
 - [ ] Still in your terminal, use `cd LC-React-Studio04/healthy-habits` to navigate to the React project and then use the command `npm install` to download any required dependencies. *Note: You won't be able to install the correct files or start the program unless you are in the `healthy-habits` directory.*
 - [ ] Now use the command `npm start` to serve the project to your browser. The page is *partially* there - but don't worry - as soon as you make a few of the first changes in Part 2, it will shape up quickly.

<p align="center"><img width="600" alt="Screen Shot 2021-08-04 at 11 25 54 AM" src="https://user-images.githubusercontent.com/55961845/128218360-a376e9d8-f044-4685-87b9-65708e1f9867.png"></p>

 - [ ] In VSCode (or the IDE of your choice), open the project so you can view the code. You should already be in the `main` branch, which is where the starter code resides. Now you're ready to go!

<p align="center"><img width="1321" alt="Screen Shot 2021-08-04 at 3 56 39 PM" src="https://user-images.githubusercontent.com/55961845/128253762-2c6764d0-e536-42d9-a91d-e348b6ca3d20.png"></p>

---

## Part 1 - Preparing for a Dynamic Chart Display

### A. Create a state variable to track changes to the five numbers on the chart.
 - [ ] In the `App` component, look at the first `TODO`. Using destructuring, create a state variable to hold the five numbers to track. This should be an object with five properties: `steps`, `water`, `food`, `exercise`, and `net`. They should each be initialized with with a zero value (as a number). Notice that the hook you need is already imported at the top. 
 - [ ] Find where the `<Chart />` component is included in the JSX in the return statement below. Add an attribute called `numbers` and set it equal to your state variable so that the object will be passed into the child component as a prop. 

### B. Add the five prop values to the chart.
 - [ ] Go to the `Chart` component. Get familiar with the JSX structure for the display of the chart and take note of the five hard-coded numbers.
 - [ ] Scroll down to the bottom and notice the propTypes object. This is how type validation is done, and it's a great way to see the list of all props that are used throughout the rest of the code in the component. In this case, there is only one prop - the `numbers` object with five properties that is passed down from the `App` component.
 - [ ] Replace each of the five hardcoded numbers in the JSX with the corresponding value from `props.numbers`.
 - [ ] Save all changes, then go to the browser (refresh if necessary) and notice that the numbers are now all zero, which is expected since those are the initial values in your state variable in the `App` component. 

<p align="center"><img width="600" alt="Screen Shot 2021-08-04 at 1 19 31 PM" src="https://user-images.githubusercontent.com/55961845/128233955-d20782ba-f8e9-4414-866c-16d0f9032768.png"></p>

Great job! You're all done with the `Chart` component.

---

## Part 2 - Displaying the Details Sections

### A. Create a state variable to keep track of which of the five details panels should be visible.
 - [ ] In the `App` component, look at the second `TODO`. Use destructuring to create a state variable to track which tab should be displayed. Initialize it to the string "net".
 - [ ] Go to the very bottom and pass your new state variable into the `<Details />` component using an attribute called `type`. This makes it a prop accessible in the `Details` component.
 - [ ] Save all changes, then go to the browser (refresh if necessary) and you should see the default details panel below the tabs.

<p align="center"><img width="600" alt="Screen Shot 2021-08-04 at 1 38 42 PM" src="https://user-images.githubusercontent.com/55961845/128237493-d5c3622e-11f0-46f5-8ca6-dac283ee5b5b.png"></p>


### B. Wire up the tabs so you can switch between the different details panels.
If you tried to click on the tabs and nothing happened, that's because the event handler isn't finished yet. Let's change that!
 - [ ] In the `App` component, look at each tab `<div>` in the JSX. There is already an `onClick` attribute for each one to pass its corresponding type into a function called `handleCurrTypeChange`.
 - [ ] Just above the JSX in the `App` component, find the `handleCurrTypeChange` function. 
 - [ ] Use your state variable's setter to update it with the `type` that has been passed into the function.
 - [ ] Save your changes, then go to the browser (refresh if necessary) and click on each of the tabs. You should see the panels change as expected. 

<p align="center"><img width="600" alt="Screen Shot 2021-08-04 at 2 58 35 PM" src="https://user-images.githubusercontent.com/55961845/128246725-8148d866-dbb0-41be-afaa-ec598d31a43f.png"></p>

---

## Part 3 - Making the Forms Functional

### A. Set up state variables to track your input values.
You may have already tried to use one of the forms on the details panels. The page broke, didn't it? Let's fix it.
 - [ ] Go to the UI in the browser. If you switch between all the tabs, you can see there are a total of six input fields: water, steps, food description, food calories, exercise description, and exercise calories. 
 - [ ] Go to the `Details` component and look at the first `TODO`. Create 6 state variables to hold the values of the form input fields, and initialize each as an empty string. Don't forget to import the hook you need (the same way it's done in the `App` component).
 - [ ] Look at each of the `<input />` elements in the JSX below. Let's implement one half of the two-way binding by adding a `value` attribute to each one and setting it equal to its corresponding state variable above.

### B. Let's review what needs to happen now in order to get the numbers from the forms in `Details` up to `App` so they can then be displayed in `Chart`.
There are multiple aspects to this and we'll take them one by one.
1. First we will add events to the `<input />` and `<button>` elements.
2. Then we will complete the handlers in the `Details` component that will update state and also pass the new input value up to the parent component, `App`, via props. 
3. Next we will go to the `App` component and complete the update handler functions.
4. Then, to tie it all together, we will pass these update handlers down to the `Details` component so they can pull in the values that are submitted through the forms.

### C. Complete two-way binding by adding events to each input field and button.
 - [ ] Go to the `App` component and look at the four empty handler functions. Notice how each one has a parameter called `amount`. These will be used to update the numbers in state above, which will in turn be passed down to the `Chart` component. But first we have to receive those amounts from the `Details` component, right? You'll do that in a little bit using props.
 - [ ] Go back to the `Details` component. Revisit your `<input />` elements. In order to complete the two-way binding, you need to add `onChange` events. Set each one equal to the name of the change handlers above. Remember that these are just references to the functions, so you don't use parentheses after the name.
 - [ ] Look at the `<button>` components for the food and exercise details. You need to add `onClick` events here and set them equal to their respective click handlers above.

### D. Finish the event handlers for the steps and water values in the Details component.
If you look at the change and click handlers just below your state variables, you'll notice they each automatically receive an event object, which we are calling `e`. In the DOM you can get the value by accessing `event.target.value`, and these have already been stored in a local variable for you (and converted to number types).
You'll see there are a few `TODO`s that need to be completed. Let's start with the handler for steps since it's pretty simple.
 - [ ] Use the setter to update your state variable with the new amount coming from the `onChange` event. This will ensure that next time your user returns to the steps form it will already have the most current value displayed in the input field.
 - [ ] Now call `props.updateSteps` (see the list in the propTypes object at the very bottom?) and pass in the `amount`. This is how we'll get it up to the parent component.
 - [ ] Go over to `App` and look at where the `<Details />` component is placed in the JSX. You need to add an attribute matching the prop name you were just referencing in `Details`. Set it equal to the update handler function for steps toward the top of `App`. Now go up to that function and use your setter for `numbers` to save the new `amount` in state. 
 - [ ] That's it! Save your changes and go test it out in the browser. You should see your steps updating in the chart as you enter them into the form below.
 - [ ] Repeat this same sequence for the water value.

<p align="center"><img width="600" alt="Screen Shot 2021-08-04 at 6 19 40 PM" src="https://user-images.githubusercontent.com/55961845/128267699-3093927b-5cab-49d9-935b-e4b7abf94414.png"></p>

### E. Finish the event handlers for the food and exercise values in the Details component.
Because there are two input fields for each of these categories, we need to make use of an object instead of just a single string. Let's start with the handler for food.
 - [ ] Use setters to update your food description and calories state variables with the new data coming from the `onChange` events. This will ensure that next time your user returns to the food form it will already have the most current values displayed in the input fields.
 - [ ] In the third function, `handleSubmitFood`, add two more properties just after the `id` property and call them `desc` and `cal`. Set them equal to the values currently stored in state above.
 - [ ] Skip the `TODO` about the list for now.
 - [ ] Now call `props.updateFood` and pass in just the calories.
 - [ ] Use your setters to reset the values of the inputs for description and calories back to empty strings.
 - [ ] Go over to `App` and look at where the `<Details />` component is placed in the JSX. You need to add an attribute matching the prop name you were just referencing in `Details`. Set it equal to the update handler function for steps toward the top of `App`. 
 - [ ] Now go up to that function and use your setter for `numbers` to update both the food and net cal values in state. Make sure to use `prevState` to ensure you're adding new values to existing values.
 - [ ] That's it! Save your changes and go test it out in the browser. You should see both your food and net calories update in the chart after you enter and submit them.
 - [ ] Repeat this same sequence for the exercise values.

---

## Part 4 - Displaying Lists of Food & Exercise

### A. Create state variables to hold lists of food and exercise entries.
 - [ ] At the top of the `Details` component, look at the second `TODO`. Create two state variables to hold the lists of food and exercise objects (each object having `id`, `desc`, and `cal` properties). Initialize them as empty arrays.

### B. Add setters to your submit handlers to update these new state variables.
 - [ ] In the `handleSubmitFood` and `handleSubmitExercise` functions, go back and look at those `TODO`s you skipped earlier. For each one, use `prevState` to to add the new entry object you just created in the previous step to the corresponding list state variable. *Hint: with the spread operator and some brackets, you can set a new array with all previous values and the new value together*

### C. Place DetailsTable components into the food and exercise sections.
 - [ ] Go to the middle of the file, just between the handlers and the JSX. You'll see a helper component called `DetailsTable`. This accepts a single parameter, `params`, which functions the same way that `props` does for the main component. We just can't use that variable twice since `DetailsTable` is nested inside `Details`. This will accept a list (either food entries or exercise entries) and generate the JSX needed to display each table.
 - [ ] Now go to the very last `TODO` in each of the food and exercise sections in the JSX. Add an instance of the `<DetailsTable />` component to each section, then create an attribute called `list` and set it equal to the list state variable you created for that section. If you go back to the `DetailsTable` function you see that `list` is accessed through `params` as `params.list`, just as other attributes are accessed through `props` on primary components.
 - [ ] Save your work and head over to the browser (refresh if necessary). Add some food and exercise entries, and watch the information being added to the tables on each tab!

<p align="center"><img width="600" alt="Screen Shot 2021-08-04 at 6 15 38 PM" src="https://user-images.githubusercontent.com/55961845/128267442-47b6d829-f44a-4e48-a6a7-43a4f5e8cbfc.png"></p>

---

## Bonus Missions

### A. Disable button if description or calories field is empty.
In the `Details` component, both the food and exercise tabs have submission buttons.
 - [ ] Remember that the `disabled` attribute exists in the browser for `<button>` elements.
 - [ ] Come up with a way to disable each button if one or both input fields are empty. 
 
 > Hint: JavaScript has an abbreviated way to say "if this is true, do this" when a ternary can't be used because there is no "else" value. In React, if you use it inside JSX, you use the same curly braces you do for other bits of JS:
 > ```
 > { booleanValue && doAThing }
 > ```
 > The `booleanValue` can be a single boolean variable or an expression as long as it evaluates to `true` or `false`. The second part, `doAThing`, can be a variable, function, or other command depending on the context. But essentially it just means that the second thing won't be taken into consideration unless the first thing evaluates to true.

### B. Make the table and its subheader display conditionally. 
They should display only after the first entry has been submitted through the form. 
What value can you base your boolean expression on?
> Hint: This can be accomplished the same way as the previous bonus mission, but instead of `doAThing` you would just put the HTML element or React component element!

### C. Just for fun - see some animation in action.
You don't really have to code anything for this, but if you want to see some fun effects on the page, there's a branch for that. 
 - [ ] Use `git checkout` to switch to the `solution-with-animation` branch. 
 - [ ] If the app is no longer compiled, use `npm start` to serve it back up to `localhost:3000`.
 - [ ] As you add food and exercise on the app, watch how the net calories in the middle fade out and back in.

---

## That's it! Great job!

<p align="center"><img width="600" alt="Screen Shot 2021-08-02 at 7 33 45 PM" src="https://user-images.githubusercontent.com/55961845/128267509-deedba44-a505-475e-a4eb-2919f10b47f7.png"></p>

