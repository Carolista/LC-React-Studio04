import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid"; // Universally Unique ID generator
import "../App.css";

const Details = (props) => {

    // TODO: Create state variables to hold values of form input fields.
    // Initialize them as empty strings.
    // Don't forget to import the hook you need.


    // TODO: Create state variables to hold full lists of food and exercise
    // Initialize them as empty arrays.


    // Steps input handler (note e = event)
    const handleStepsChange = e => {
        e.preventDefault();
        let amount = Number(e.target.value);
        // TODO: set the new value in state
        
        props.updateSteps(amount);
    }

    // Water input handler
    const handleWaterChange = e => {
        e.preventDefault();
        let amount = Number(e.target.value);
        // TODO: set the new value in state
        
        props.updateWater(amount);
    }

    // Food input handlers
    const handleFoodDescChange = e => {
        e.preventDefault();
        let desc = e.target.value;
        // TODO: set the new value in state
        
    }
    const handleFoodCalChange = e => {
        e.preventDefault();
        let amount = Number(e.target.value);
        // TODO: set the new value in state
        
    }
    const handleSubmitFood = e => {
        e.preventDefault();
        let newFoodEntry = {
            id: uuid(),
            // TODO: Add desc & cal properties with values from state
            
        }
        // TODO: make a copy of the list held in state
        
        // TODO: combine the copy of the list and the new entry and set as the new value of the list
        
        props.updateFood(newFoodEntry.cal);
        // TODO: reset the desc and cal input values to an empty string
        
    }

    // Exercise input handlers
    const handleExerciseDescChange = e => {
        e.preventDefault();
        let desc = e.target.value;
        // TODO: set the new value in state
        
    }
    const handleExerciseCalChange = e => {
        e.preventDefault();
        let amount = Number(e.target.value);
        // TODO: set the new value in state
        
    }
    const handleSubmitExercise = e => {
        e.preventDefault();
        let newExerciseEntry = {
            id: uuid(),
            // TODO: Add desc & cal properties with values from state
            
        }
        // TODO: make a copy of the list held in state
        
        // TODO: combine the copy of the list and the new entry and set as the new value of the list
        
        props.updateExercise(newExerciseEntry.cal);
        // TODO: reset the desc and cal input values to an empty string
        
    }

    // Small helper components like this don't need a separate file
    const DetailsTable = params => {
        // This creates table rows for each object in the list passed in
        const rows = params.list.map(item => {
            return (
                <tr id={item.id} key={item.id}>
                    <td className="desc-cell">{item.desc}</td>
                    <td className="cal-cell">{item.cal} cal</td>
                </tr>
            );
        });
        // This returns the whole table with the rows inserted
        return(
            <table className="details-table">
                <thead className="subheader">
                    <tr>
                        <th className="desc-cell">Description</th>
                        <th className="cal-cell">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    };

    // Final JSX for the whole Details component
    return (
        <div className={`details-container ${props.type}-bkg`}>

            {props.type === "net" && <div>
                <p className="label">MANAGE YOUR HEALTHY LIFESTYLE!</p>
                <p>Select a tab to view details and update your numbers.</p>
            </div>}

            {props.type === "water" && <div>
                <form id="water-form" onSubmit={(e) => e.preventDefault() }>
                    <p className="label">TOTAL GLASSES OF WATER</p>
                    {/* TODO: Add two-way binding for the input below */}
                    <input type="number"  placeholder="Total" min="0" />           
                </form>
                <p className="list subheader">How much water should you drink each day?</p>
                <p className="info">In general, you should drink between &frac12; - 1 ounce for every pound you weigh. That's 5-10 glasses per day for a 160-lb person.</p>
            </div>}

            {props.type === "steps" && <div> 
                <form id="steps-form" onSubmit={(e) => e.preventDefault() }>
                    <p className="label">TOTAL STEPS</p>
                    {/* TODO: Add two-way binding for the input below */}
                    <input type="number" placeholder="Total" min="0" />
                </form>
                <p className="subheader steps-subheader">What's your daily steps goal?</p>
                <table className="steps-table">
                    <tbody>
                        <tr>
                            <td className="steps-cell-left">Low Active</td>
                            <td className="steps-cell-right">5,000-7,500</td>
                        </tr>
                        <tr>
                            <td className="steps-cell-left">Somewhat Active</td>
                            <td className="steps-cell-right">7,500-10,000</td>
                        </tr>
                        <tr>
                            <td className="steps-cell-left">Active</td>
                            <td className="steps-cell-right">10,000-12,500</td>
                        </tr>
                        <tr>
                            <td className="steps-cell-left">Highly Active</td>
                            <td className="steps-cell-right">12,500+</td>
                        </tr>
                    </tbody>
                </table>
            </div>}

            {props.type === "food" && <div>
                <form id="food-form">
                    <p className="label">ADD CALORIES CONSUMED</p>
                    {/* TODO: Add two-way binding for each of the two inputs below */}
                    <input type="text" className="wide" placeholder="Description of food or beverage" maxLength="32" />
                    <input type="number" placeholder="Calories" min="0" />
                    {/* TODO: BONUS! Make the button disabled if either field is empty */}
                    <button type="submit" onClick={handleSubmitFood}>Add</button>
                </form>
                {/* TODO: BONUS! Make the log & table appear only when the first entry is submitted */}
                <div>
                    <p className="details-header">FOOD & BEVERAGE LOG</p>
                    {/* TODO: Add the DetailsTable component and pass in the food list using the attribute 'list' */}
                    
                </div>
            </div>}

            {props.type === "exercise" && <div>
                <form id="exercise-form">
                    <p className="label">ADD CALORIES BURNED</p>
                    {/* TODO: Add two-way binding for each of the two inputs below */}
                    <input type="text" className="wide" placeholder="Description of exercise activity" maxLength="32" />
                    <input type="number" placeholder="Calories" min="0" />
                    {/* TODO: BONUS! Make the button disabled if either field is empty */}
                    <button type="submit" onClick={handleSubmitExercise}>Update</button>
                </form>
                {/* TODO: BONUS! Make the log & table appear only when the first entry is submitted */}
                <div>
                    <p className="details-header">EXERCISE LOG</p>
                    {/* TODO: Add the DetailsTable component and pass in the exercise list using the attribute 'list' */}
                    
                </div>
            </div>}

        </div>
    );
};

// This provides validation of data types for all props
Details.propTypes = {
    type: PropTypes.string.isRequired,
    updateSteps: PropTypes.func.isRequired,
    updateWater: PropTypes.func.isRequired,
    updateFood: PropTypes.func.isRequired,
    updateExercise: PropTypes.func.isRequired,
};

export default Details;