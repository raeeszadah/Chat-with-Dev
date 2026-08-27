//* ****************************************************
//* 📌 React useCallback Hook
//* ****************************************************

    // 1️⃣ "useCallback" is a React hook that "memoizes" (caches) a function so that it is not recreated on every render.
    // 2️⃣ It returns the same function instance between renders unless its dependencies change.
    // 3️⃣ It ensures that the function is only re-created when its dependencies change, improving performance in certain cases.
    // 4️⃣ Without useCallback, the function would be recreated every time the component re-renders, 
    // which can cause unnecessary computations or re-renders in child components.


//* 📌 Why use useCallback?
    // 1️⃣ In React, functions are recreated on every render by default. 
    // This can cause unnecessary re-renders in child components, even if the function logic hasn’t changed.

    // 2️⃣ "useCallback" ensures that the same function instance is reused across renders, 
    // which can help prevent unnecessary re-renders and improve performance.


//* 📌 Syntax:
    const memoizedFunction = useCallback(() => {
        // Function logic here
    }, [dependencies]);


    //* 📌 Explanation:
    // 1️⃣ memoizedFunction: The memoized (cached) function.
    // 2️⃣ dependencies: An array of values. If any of these values change, the function is recreated. 
    // If the dependencies don’t change, the same function instance is reused.


//* ****************************************************
//* 📌 Key Points of useCallback Hook
//* ****************************************************

    // 1️⃣ Memoization:
        // useCallback caches the function and returns the same instance unless the dependencies change.

    // 2️⃣ Dependencies:
        // The function is recreated only when one of the dependencies in the array changes.
        // If the dependency array is empty ([]), the function is created only once (on the first render) and never recreated.

    // 3️⃣ Performance Optimization:
        // useCallback is most useful when passing functions as props to child components or when functions are used in dependency arrays (e.g., in useEffect).

    // 4️⃣ When Not to Use useCallback:
        // Avoid using useCallback for simple functions or when performance optimization is not needed. 
        // Overusing it can make your code harder to read and maintain.


//* ****************************************************
//* 📌 Best Practices For useCallback Hook
//* ****************************************************

    // 1️⃣ Avoid Overusing useCallback: Only use it when performance optimization is necessary.
    // 2️⃣ Use Meaningful Dependencies: Include all variables used inside the function in the dependency array.
    // 3️⃣ Combine with "React.memo": Use "React.memo" to memoize child components for maximum performance optimization.


//* ****************************************************
//* 📌 Example 1: Works With Dynamic Dependency
//* ****************************************************

    import React, {useState, useCallback} from 'react';

    function DynamicDependency() {
        const [count, setCount] = useState(0);
        const [multiplier, setMultiplier] = useState(1);

        // Memoize the `calculateTotal` function using `useCallback`
        // This ensures the function is only recreated when `count` or `multiplier` changes
        const calculateTotal = useCallback(() => {
            return count * multiplier;
        }, [count, multiplier]);         // Recreate function only if count or multiplier changes


        return (
            <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "10px", 
                    padding: "10px", 
                    backgroundColor: "#f5f5f5", 
                    color: "#111", 
                    borderRadius: "10px"
                }}
            >
                <p>Count: {count}</p>
                <p>Multiplier: {multiplier}</p>
                <p>Total: {calculateTotal()}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <button onClick={() => setMultiplier(multiplier + 1)}>Increment Multiplier</button>
            </div>
        );
    };


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // The component renders for the first time.
                // useState(0) initializes the count state to 0.
                // useState(1) initializes multiplier state to 1.

            // The useCallback hook is called to memoize the calculateTotal function. At this stage:
                // The calculateTotal function multiplies count * multiplier → 0 * 1 = 0.

            // The component renders the UI:
                // Count: 0, Multiplier: 1, Total: 0
                // [Increment Count Button] [Increment Multiplier Button] 

        // 2️⃣ Memoizing the calculateTotal Function:
            // The calculateTotal function is memoized using useCallback.
                // The calculateTotal function is only recreated when count or multiplier changes.
                // Dependencies: The function depends on count and multiplier, so it will only be recreated if either of these values changes.
                // Without useCallback, calculateTotal would be recreated on every re-render, even if the values didn't change, which could affect performance.

        // 3️⃣ Subsequent Clicks:
            // Each time the "Increment Count" button is clicked:
                // The count is incremented by 1.
                // The calculateTotal function is recalculated with the new count and multiplier values.
                // The UI updates to reflect the latest values.

            // Each time the "Increment Multiplier" button is clicked:
                // The multiplier is incremented by 1.
                // The calculateTotal function is recalculated with the new count and multiplier values.
                // The UI updates to reflect the latest values.