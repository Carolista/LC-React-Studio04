import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Chart = (props) => {

    // TODO: Replace the hard-coded example numbers below with props coming from the parent, App

    // JSX that will display the Chart component
    return (
        <React.Fragment>
            <div className="circle">
                <div className="cell-number net-number">
                    {props.numbers.net}
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
