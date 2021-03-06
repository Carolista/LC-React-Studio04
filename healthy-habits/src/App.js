import React, { useState } from "react";
import Chart from "./components/chart.js";
import Details from "./components/details.js";
import "./App.css";

function App() {

    // TODO: Create a state variable to hold the five numbers to track. This should be an object with five properties: steps, water, food, exercise, and net. They should each be initialized with with a zero value (as a number).  Notice the hook you need has been imported at the top.


    // TODO: Create a state variable to track which tab should be displayed.
    // Initialize it to the string "net".
    

    // TODO: Inside each of the following handlers, update the corresponding numbers property from state.
    const handleUpdateSteps = (amount) => {
        // Use prevState to change just the steps property within the numbers object.
        
    };
    const handleUpdateWater = (amount) => {
        // Use prevState to change just the water property within the numbers object.

    };
    const handleUpdateFood = (amount) => {
        // You'll need to update both the food calories and the net calories here (add calories consumed). Use prevState to ensure you are adding the new amount to the existing total.

    };
    const handleUpdateExercise = (amount) => {
        // You'll need to update both the exercise calories and the net calories here (subtract calories burned). Use prevState to ensure you are adding the new amount to the existing total. 

    };

    // TODO: Change the current type of details to be displayed.
    const handleCurrTypeChange = (type) => {
        // Use the setter you created with your state variable.
        
    };

    // JSX to display all content on page
    return (
        <div className="app">

            <header className="app-header">
                <h1>Healthy Habits</h1>
            </header>

            {/* TODO: Pass the numbers object into the Chart component as a prop */}
            <Chart />

            <div className="tabs-container">
                <div
                    className="tab net-bkg"
                    onClick={() => handleCurrTypeChange("net")}
                >
                    INFO
                </div>

                <div
                    className="tab water-bkg"
                    onClick={() => handleCurrTypeChange("water")}
                >
                    WATER+
                </div>

                <div
                    className="tab steps-bkg"
                    onClick={() => handleCurrTypeChange("steps")}
                >
                    STEPS+
                </div>

                <div
                    className="tab food-bkg"
                    onClick={() => handleCurrTypeChange("food")}
                >
                    FOOD+
                </div>

                <div
                    className="tab exercise-bkg"
                    onClick={() => handleCurrTypeChange("exercise")}
                >
                    EXERCISE+
                </div>
            </div>
            
            {/* TODO: Pass the current type into the Details component */}
            {/* TODO: Pass the four handler functions to the Details component below. Check the propTypes object at the bottom of Details.js to see what the names of the attributes should be, then look just below the state variables at the top of this file for the names of the functions you are passing down. */}
            <Details />
            
        </div>
    );
}

export default App;
