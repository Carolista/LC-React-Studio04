import React, { useState } from "react";
import Chart from "./components/chart.js";
import Details from "./components/details.js";
import "./App.css";

function App() {

    // TODO: Create a state variable to track which tab should be displayed.
    const [currType, setCurrType] = useState("net");

    // TODO: Create a state variable to hold the five numbers to track.
    // This should be an object with five properties: steps, water, food, exercise, and net.
    // They should all start with a zero value.
    const [numbers, setNumbers] = useState({
        steps: 0,
        water: 0,
        food: 0,
        exercise: 0,
        net: 0,
    });

    // TODO: Inside each of the following handlers, update the corresponding numbers property from state.
    // Within the food and exercise handlers, you will need to update the net cal as well.
    const handleUpdateSteps = (amount) => {
        // You have two options here: use prevState OR make a copy of the object using the spread operator and then use that copy to set the new values.
        setNumbers(prevState => {
            return {
                ...prevState,
                steps: amount,
            }
        });
        // let prevNumbers = { ...numbers };
        // setNumbers({
        //     ...prevNumbers,
        //     steps: amount,
        // });
    };
    const handleUpdateWater = (amount) => {
        setNumbers(prevState => {
            return {
                ...prevState,
                water: amount,
            }
        });
        // let prevNumbers = { ...numbers };
        // setNumbers({
        //     ...prevNumbers,
        //     water: amount,
        // });
    };
    const handleUpdateFood = (amount) => {
        setNumbers(prevState => {
            return {
                ...prevState,
                food: prevState.food + amount,
                net: prevState.net + amount
            }
        });
        // let prevNumbers = { ...numbers };
        // setNumbers({
        //     ...prevNumbers,
        //     food: prevNumbers.food + amount,
        //     net: prevNumbers.net + amount,
        // });
    };
    const handleUpdateExercise = (amount) => {
        setNumbers(prevState => {
            return {
                ...prevState,
                exercise: prevState.exercise + amount,
                net: prevState.net - amount
            }
        });
        // let prevNumbers = { ...numbers };
        // setNumbers({
        //     ...prevNumbers,
        //     exercise: prevNumbers.exercise + amount,
        //     net: prevNumbers.net - amount,
        // });
    };

    const handleCurrTypeChange = (type) => {
        // TODO: Use the setter to change the current type of details to be displayed
        setCurrType(type);
    };

    // JSX to display all content on page
    return (
        <div className="app">

            <header className="app-header">
                <h1>Healthy Habits</h1>
            </header>

            {/* TODO: Pass the numbers object into the Chart component as a prop */}
            <Chart numbers={numbers} />

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
            <Details
                type={currType}
                updateSteps={handleUpdateSteps}
                updateWater={handleUpdateWater}
                updateFood={handleUpdateFood}
                updateExercise={handleUpdateExercise}
            />
            
        </div>
    );
}

export default App;
