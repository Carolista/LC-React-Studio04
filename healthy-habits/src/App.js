import React from "react";
import Chart from "./components/chart.js";
import Details from "./components/details.js";
import "./App.css";

function App() {

    // TODO: Create a state variable to track which tab should be displayed.
    // Initialize it to the string "net".
    // Don't forget to import the hook you need.


    // TODO: Create a state variable to hold the five numbers to track.
    // This should be an object with five properties: steps, water, food, exercise, and net.
    // They should all start with a zero value.


    // TODO: Inside each of the following handlers, update the numbers property from state.
    const handleUpdateSteps = (amount) => {
        // You have two options here: use prevState OR make a copy of the object using the spread operator and then use that copy to set the new values.
        

    };
    const handleUpdateWater = (amount) => {
        // Same

    };
    const handleUpdateFood = (amount) => {
        // Same, but update the net cal as well (add calories consumed).

    };
    const handleUpdateExercise = (amount) => {
        // Same, but update the net cal as well (subtract calories burned).

    };

    // TODO: Change the current type of details to be displayed.
    const handleCurrTypeChange = (type) => {
        // Use the setter from state.

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
            {/* TODO: Pass the four handler functions to the Details component */}
            <Details />
            
        </div>
    );
}

export default App;
