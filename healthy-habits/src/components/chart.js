import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css";

const Chart = (props) => {

    // State variable to store the net calories - won't update until triggered during animations
    const [netCal, setNetCal] = useState(props.numbers.net);

    // This is a boolean that controls animation of the net calories
    const [animateNet, setAnimateNet] = useState(false);

    // This listens for props.numbers.net to change and then triggers the animations
    useEffect(() => {
        if (props.numbers.net !== 0) {
        setAnimateNet(true);
        setTimeout(() => {
            setNetCal(props.numbers.net);
            setAnimateNet(false);
        }, 400); // delay to allow blur animation to complete
        }
    }, [props.numbers.net]);

    // TODO: Replace the hard-coded example numbers below with props coming from the parent, App

    // JSX that will display the Chart component
    return (
        <React.Fragment>
            <div className="circle">
                <div
                    className={`cell-number net-number ${
                        animateNet ? "blur" : "clarify"
                    }`}
                >
                    {netCal}
                </div>
                <div className="cell-category">
                    calories<br /> (net)
                </div>
            </div>
            <table className="chart-table">
                <tbody>
                    <tr className="chart-row">
                        <td className="cell-q2 chart-cell">
                            <div className="cell-number">{props.numbers.steps}</div>
                            <div className="cell-category">
                                steps<br /> taken
                            </div>
                        </td>
                        <td className="cell-q1 chart-cell">
                            <div className="cell-number">{props.numbers.water}</div>
                            <div className="cell-category">glasses of water</div>
                        </td>
                    </tr>
                    <tr className="chart-row">
                        <td className="cell-q3 chart-cell">
                            <div className="cell-number">{props.numbers.food}</div>
                            <div className="cell-category">calories consumed</div>
                        </td>
                        <td className="cell-q4 chart-cell">
                            <div className="cell-number">{props.numbers.exercise}</div>
                            <div className="cell-category">calories burned</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};

// This provides validation of data types for all props
Chart.propTypes = {
    numbers: PropTypes.object.isRequired,
};

export default Chart;
