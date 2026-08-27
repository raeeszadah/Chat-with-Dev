//* ****************************************************
//* 📌 React useEffect Hook
//* ****************************************************

    // 1️⃣ useEffect is a hook that allows you to perform "side effects" in functional components.
    // 2️⃣ Side effects are actions that happen outside the normal component rendering, such as:
        // Fetching data from an API.
        // Updating the DOM
        // Setting up event listeners
        // Managing timers and intervals
    // 3️⃣ The useEffect hook runs after the component has been rendered for the first time.


//* 📌 What is a Side Effect in React?
    // Imagine you are cooking a meal (rendering a React component). 
    // Normally, cooking should just involve "using ingredients (props & state) and preparing the food (returning JSX)".

    // However, what if you also:
    // ✅ Turn on the oven 🔥 (interacting with the outside world)
    // ✅ Set a timer ⏳ (using setInterval)
    // ✅ Call a friend 📞 (fetching data from an API)

    // These are "side effects" because they happen outside of just preparing the meal.


//* 📌 Side Effects in React
    // In React, "rendering should be pure" — meaning it should only depend on the component’s props and state. 
    // However, some operations (like fetching data) don’t belong inside the render process because they affect the outside world. 
    // These are called side effects.

    // 👉 In simple word, a side effect is "anything that happens outside the component’s return statement".
    // 👉 React provides the "useEffect" hook to handle side effects in functional components.


//* 📌 Syntax:
    useEffect(() => {
        // Side effect code here
        return () => {
            // Cleanup code here
        };
    }, [dependencies]);


    //* 📌 Explanation:
    // 1️⃣ The first argument: A function that contains the side effect code (logic).
    // 2️⃣ Second argument ([dependencies]): An array of dependencies that trigger the useEffect to re-run.
        // [] (empty array) → Runs on the initial render.
        // [state] (dependency) → Runs when "state" changes.
        // No dependency array → Runs on every render.
    // 3️⃣ If you return a function from the effect, it will be used for cleanup (e.g., unsubscribing from events or clearing timers).


//* ****************************************************
//* 📌 Key Points of useState Hook
//* ****************************************************

    // 1️⃣ Runs After Render: The effect runs after the component renders.
    // 2️⃣ Dependencies:
        // If the dependency array is empty ([]), the effect runs only once (after the initial render).
        // If the dependency array contains values, the effect runs whenever those values change.
        // If there’s no dependency array, the effect runs after every render.
    // 3️⃣ Cleanup: Use the cleanup function to avoid memory leaks (e.g., unsubscribing from events).


//* ****************************************************
//* 📌 Best Practices For useEffect Hook
//* ****************************************************

    // 1️⃣ Always include dependencies to avoid unnecessary re-renders.
    // 2️⃣ Use cleanup functions to prevent memory leaks.
    // 3️⃣ Avoid performing heavy computations inside "useEffect"; use "useMemo" or "useCallback" instead.


//* ****************************************************
//* 📌 Cheat Sheet for useEffect Hook
//* ****************************************************

    useEffect(() => {
        // Side effect
        return () => {
            // Cleanup
        };
    }, [dependencies]);     // Empty array = run once, no array = run every render, 
                            // dependency array = run when dependency changes


//* ****************************************************
//* 📌 Example 1: Updating Document Title
//* ****************************************************
    // Update the document title dynamically based on a state variable.

    import React, {useState, useEffect} from 'react';

    function DocumentTitle() {
        const [count, setCount] = useState(0);

        // useEffect to update document title
        useEffect(() => {
            document.title = `You clicked ${count} times`;
        }, [count]);             // The effect runs whenever the 'count' state changes


        return (
            <>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </>
        );
    }


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // The component renders for the first time
            // "useState(0)" initializes "count" to "0".
            // The "useEffect" hook runs, setting the document title to "You clicked 0 times".
            // The component renders (The UI displays):
                // You clicked 0 times
                // [Click me Button]

        // 2️⃣ Button Click:
            // When the button is clicked:
                // "setCount(count + 1)" is called.
                // The "count" state is updated to "1".
                // The component re-renders.
                // The "useEffect" hook runs again (because "count" changed), updating the document title to "You clicked 1 times".
                // The component re-renders (The UI displays):
                    // You clicked 1 times
                    // [Click me Button]

        // 3️⃣ Subsequent Clicks:
            // Each button click increments "count" by "1".
            // The "useEffect" hook updates the document title with the new "count" value.
            // The UI reflects the updated "count".

    
    //* 📌 Key Points:
        // 1️⃣ State Management: "useState" is used to manage the "count" state.
        // 2️⃣ Side Effects: "useEffect" is used to update the document title whenever "count" changes.
        // 3️⃣ Re-rendering: The component re-renders whenever "count" is updated.
        // 4️⃣ Dependency Array: The "[count]"" dependency array ensures the effect runs only when "count" changes.


//* ****************************************************
//* 📌 Example 2: Conditional Effect
//* ****************************************************
    // Run an effect only when a specific condition is met (e.g., when a state variable reaches a certain value).

    import React, {useState, useEffect} from 'react';

    function ConditionalEffect() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if(count > 5)
                alert(`Count is now ${count}`);
        }, [count]);             // The effect runs whenever the 'count' state changes

        return (
            <>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}> Increment </button>
            </>
        );
    };


    //* 📌 Explanation:
        // 1️⃣ State: We use "useState" to create a "count" state variable.
        // 2️⃣ Effect: The "useEffect" hook runs only when "count" is greater than 5.
        // 3️⃣ Dependency Array: "[count]" ensures the effect runs whenever "count" changes.
        // 4️⃣ Result: An alert is shown when "count" exceeds 5.


//* ****************************************************
//* 📌 Example 3: Using Multiple Effects
//* ****************************************************
    // Use multiple "useEffect" hooks in a single component for different tasks.

    import React, {useState, useEffect} from 'react';

    function MultipleEffects() {
        const [count, setCount] = useState(0);
        const [message, setMessage] = useState('');

        // Effect 1: Update document title
        useEffect(() => {
            document.title = `Count is: ${count}`;
        }, [count]);             // The effect runs whenever the 'count' state changes


        // Effect 2: Show a message when count reaches 10
        useEffect(() => {
            if(count === 10)
                setMessage('You reached 10!');
        }, [count]);            // The effect runs whenever the 'message' state changes


        return (
            <>
                <p>Count: {count}</p>
                <p>{message}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </>
        );
    };


    //* 📌 Explanation:
        // 1️⃣ State: We use "useState" to create "count" and "message" state variables.
        // 2️⃣ Effect 1: The "useEffect" hook updates the document title whenever "count" changes.
        // 3️⃣ Effect 2: The "useEffect" hook shows a message when "count" reaches 10.
        // 4️⃣ Dependency Array: "[count]" ensures the effect runs whenever "count" changes.
        // 5️⃣ Result: The document title updates dynamically, and a message is shown when the count reaches 10.