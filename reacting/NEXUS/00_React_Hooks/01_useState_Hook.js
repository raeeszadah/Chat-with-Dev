//* ****************************************************
//* 📌 React Hooks
//* ****************************************************


//* 📌 What are React Hooks?
    // Hooks are functions that allow you to "hook into" React features like state and lifecycle methods in functional components.
    // They provide a way to reuse stateful logic across multiple components and manage side effects.


//* 📌 Why use React Hooks?
    // 1️⃣ Reusability: Hooks allow you to extract common logic from components and reuse it across multiple components.
    // 2️⃣ Performance: Hooks provide better performance compared to class components.
    // 3️⃣ Accessibility: Hooks make it easier to implement accessibility features in functional components.
    // 4️⃣ Integration: Hooks allow you to integrate with other libraries and frameworks.


//* 📌 Different Types of React Hooks:
    // 1️⃣ useState: Hook for managing state in functional components.
    // 2️⃣ useEffect: Hook for managing side effects in functional components.
    // 3️⃣ useContext: Hook for accessing context in functional components.
    // 4️⃣ useMemo: Hook for memoizing expensive calculations in functional components.
    // 5️⃣ useRef: Hook for accessing mutable references in functional components.


//* ****************************************************
//* 📌 React useState Hook
//* ****************************************************

    // 1️⃣ "useState" is a React hook that allows you to manage "state" in functional components.
    // 2️⃣ "State" is a way to store and manage data that can change over time. 
    // 3️⃣ When the state changes, React re-renders the component to reflect the new state.


//* 📌 Syntax:
    const [state, setState] = useState(initialValue);

    //* Explanation:
    // 1️⃣ state: The current value of the state.
    // 2️⃣ setState: A function used to update the state.
    // 3️⃣ initialValue: The initial value of the state (can be a number, string, boolean, object, array, etc.).


//* ****************************************************
//* 📌 Key Points of useState Hook
//* ****************************************************

    // 1️⃣ State is Immutable: You should never modify the "state" directly. Always use the "setState" function to update it.
    // 2️⃣ Re-rendering: When the "state" changes, React re-renders the component to reflect the new state.
    // 3️⃣ Functional Updates: If the new state depends on the previous state, you can pass a function to setState:
        setState((prevState) => prevState + 1);


//* ****************************************************
//* 📌 Best Practices For useState Hook
//* ****************************************************

    // 1️⃣ Use descriptive names for state variables and updater functions.
    // 2️⃣ Use functional updates when the new state depends on the previous state.
    // 3️⃣ Avoid deeply nested state objects; split them into multiple state variables if needed.


//* ****************************************************
//* 📌 Cheat Sheet for useState Hook
//* ****************************************************

    const [value, setValue] = useState(initialValue);
    setState(newValue);                             // Update state
    setState((prevState) => prevState + 1);         // Functional update


//* ****************************************************
//* 📌 Example 1: Counter App
//* ****************************************************

    import React, {useState} from 'react';

    function Counter() {
        const [count, setCount] = useState(0);      // Initial value of count is 0

        return (
            <>
                <p>Count is: {count}</p>
                <button onClick={() => setCount(count + 1)}> Increment </button>
                <button onClick={() => setCount(count - 1)}> Decrement </button>
            </>
        );
    }


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // The component is rendered with `count` initialized to `0`.
            // The UI displays "Count is: 0".
            // The "Increment" and "Decrement" buttons are rendered.

        // 2️⃣ Incrementing the Count:
            // When the Increment button is clicked, `setCount(count + 1)` is called.
            // The current value of `count` (which starts as `0`) is incremented by 1, so the new value becomes `1`.
            // React re-renders the component, and the UI updates to show "Count is: 1".

        // 3️⃣ Decrementing  the Count:
            // When the Decrement  button is clicked, `setCount(count - 1)` is called.
            // The current value of `count` (which could be `1` or any other value) is decremented by 1.
            // React re-renders the component, and the UI updates to show the updated `count` value.


//* ****************************************************
//* 📌 Example 2: Toggle Button
//* ****************************************************

    import React, {useState} from 'react';

    function ToogleButton() {
        const [isOn, setIsOn] = useState(false);      // Initial value of isOn is false

        return(
            <>
                <button onClick={() => setIsOn(!isOn)}>
                    {isOn ? "ON" : "OFF"}
                </button>
            </>
        );
    }


//* ****************************************************
//* 📌 Example 3: Toggle A Theme (Light/Dark)
//* ****************************************************

    import React, {useState} from 'react';

    function ToggleTheme() {
        const [theme, setTheme] = useState("Light");      // Initial value of theme is "Light"

        return (
            <div style={{
                backgroundColor: theme === "Light" ? "#fff" : "#333",
                color: theme === "Light" ? "#000" : "#fff",
                padding: "20px"
            }}>
                <h2>Current Theme: {theme}</h2>
                <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
                    Toggle Theme
                </button>
            </div>
        );
    }


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // The component renders with the initial theme as "Light".
            // The background is white `(#fff)`, and the text color is black `(#000)`.
            // The UI displays:
                // "Current Theme: Light"
                // A button that says "Toggle Theme"

        // 2️⃣ Toggling the Theme:
            // When the "Toggle Theme" button is clicked, the `setTheme` function updates the `theme` to "Dark".
            // React re-renders the component:
                // The background changes to dark gray (#333), and the text color changes to white (#fff).
                // The UI updates to display "Current Theme: Dark".

        // 3️⃣ Subsequent Toggling:
            // When the button is clicked again, the setTheme function updates the theme back to "Light".
            // The background changes back to white (#fff), and the text color changes back to black (#000).
            // The UI updates to display "Current Theme: Light".