import { useReducer } from "react";

export default function CounterPage() {

    const buttons = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [counterValue, counterValueDispatch] = useReducer((state, action) => {

        if (!buttons.includes(Number(action)))
            return state;

        return Number(state) + Number(action);
    }, 0);

    function onButtonsClick(evt) {
        if (evt.target.tagName == "BUTTON") {
            counterValueDispatch(evt.target.value);
        }
    }

    return (
        <>
            <h1>Räknare</h1>
            <div className="counter-buttons" onClick={onButtonsClick}>
                {buttons.map((btn) => <button key={btn} value={btn}>{btn}</button>)}
            </div>
            <div className="counter-value">Värde: <span>{counterValue}</span></div>
        </>
    );
}