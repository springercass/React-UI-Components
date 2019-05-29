import React from "react";
import "./Display.css";
import ActionButton from "../ButtonComponents/ActionButton";
import MathButton from "../ButtonComponents/MathButton";
import NumberButton from "../ButtonComponents/NumberButton";
const CalculatorDisplay = props => {
  return (
    <div className="calculatorDisplay">
      <div className="calculatorAnswer">0</div>
      <div className="wholeCalc">
        <div className="calculatorLeft">
          <ActionButton buttonStyle="clear" text="clear" />
          <div className="numberBlock">
            <div className="zero">
              <ActionButton buttonStyle="zeroButton" text="0" />
            </div>
            <div className="row1">
              <NumberButton buttonStyle="number" text="1" />
              <NumberButton buttonStyle="number" text="2" />
              <NumberButton buttonStyle="number" text="3" />
            </div>
            <div className="row2">
              <NumberButton buttonStyle="number" text="4" />
              <NumberButton buttonStyle="number" text="5" />
              <NumberButton buttonStyle="number" text="6" />
            </div>
            <div className="row3">
              <NumberButton buttonStyle="number" text="7" />
              <NumberButton buttonStyle="number" text="8" />
              <NumberButton buttonStyle="number" text="9" />
            </div>
          </div>
        </div>
        <div className="calculatorRight">
          <MathButton buttonStyle="operator" text="÷" />
          <MathButton buttonStyle="operator" text="×" />
          <MathButton buttonStyle="operator" text="−" />
          <MathButton buttonStyle="operator" text="+" />
          <MathButton buttonStyle="operator" text="=" />
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;
