//* ****************************************************
//* 📌 React useContext Hook
//* ****************************************************

    // 1️⃣ The useContext hook is a built-in React hook that allows you to access global data without passing props manually through every component.
    // 2️⃣ It is used with "React Context API" to manage "state globally" across the component tree.


//* 📌 Why (When to) use useContext?
    // ✅ To avoid props drilling (passing props through multiple layers of components).
    // ✅ To Simplify state management without using external libraries like Redux.
    // ✅ To share global data (e.g., themes, user authentication) across the entire app.


//* ****************************************************
//* 📌 How Does Context API Work?
//* ****************************************************

    // It involves three main steps:
    // 1️⃣ Create a Context:
        // Use "React.createContext()" to create a context object.

    // 2️⃣ Provide the Context:
        // Use the "Context.Provider" component to wrap the part of the component tree that needs access to the context value.

    // 3️⃣ Consume (Access) the Context:
        // Use "useContext()" in any child component to access the shared data (e.g., the context value).


//* ****************************************************
//* 📌 Best Practices For useContext Hook
//* ****************************************************

    // 1️⃣ Create separate contexts for different types of data (e.g., "ThemeContext", "UserContext").
    // 2️⃣ Don’t use context for data that is only needed by a few components.
    // 3️⃣ Use "useReducer" with "useContext" to manage complex state logic.


//* ****************************************************
//* 📌 Syntax
//* ****************************************************

    // 1️⃣ Step 1: Create a Context
        const MyContext = createContext(defaultValue);

        // MyContext: The context object.
        // defaultValue: The default value of the context (used when no Provider is found).


    // 2️⃣ Step 2: Provide the Context
        <MyContext.Provider value={contextValue}>
            <ChildComponent />
        </MyContext.Provider>

        // MyContext.Provider: The component that provides the context value.
        // value: The value to be shared with child components.
        // contextValue: The value to be shared with child components. It can be an object or a primitive value.
        // ChildComponent: The component that consumes the context value.


    // 3️⃣ Step 3: Consume the Context
        const value = useContext(MyContext);

        // MyContext: The context object.
        // value: The value shared by the context provider.


//* ****************************************************
//* 📌 Example 1: Theme Toggler
//* ****************************************************

    import React, { useState, useContext } from "react";

    // 1️⃣ Step 1: Create a Context
    const ThemeContext = createContext();

    export default function App() {
        const [theme, setTheme] = useState("Light");

        // 2️⃣ Step 2: Provide the Context
        return (
            <ThemeContext.Provider value = {{theme, setTheme}}>
                <DisplayTheme />
            </ThemeContext.Provider>
        );
    }

    function DisplayTheme() {
        return (
            <div>
                <h2>Current Theme: {theme}</h2>
            </div>
        );
    }

    function ThemeButton() {
        // 3️⃣ Step 3: Consume the Context
        const { theme, setTheme } = useContext(ThemeContext);

        const toggleTheme = () => {
            setTheme(theme === "light" ? "dark" : "light");
        };

        return (
            <button 
                onClick={toggleTheme}
                style={{
                    backgroundColor: theme === "light" ? "#fff" : "#000",
                    color: theme === "light" ? "#000" : "#fff"
                }}
            >
                Toggle Theme
            </button>
        );
    }


    //* 📌 Explanation:
        // 1️⃣ The "ThemeContext" is created to share the "theme" and "setTheme" values.
        // 2️⃣ The "App" component provides the context value using "ThemeContext.Provider".
        // 3️⃣ The "ThemedButton" component consumes the context using "useContext" and toggles the theme.


//* ****************************************************
//* 📌 Example 2: User Authentication
//* ****************************************************

    import React, { useState, useContext } from "react";

    // 1️⃣ Step 1: Create a Context
    const UserContext = createContext();

    export default function App() {
        const [user, setUser] = useState(null);

        const login = () => {
            setUser({ name: "Suraj Adhikari" });
        }

        const logout = () => {
            setUser(null);
        }

        // 2️⃣ Step 2: Provide the Context
        return (
            <UserContext.Provider value={{ user, login, logout }}>
                <Navbar />
                <MainContent />
            </UserContext.Provider>
        )
    }

    function Navbar() {
        // 3️⃣ Step 3: Consume the Context
        const { user, logout } = useContext(UserContext);

        return (
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.name}!</p>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <p>Please log in.</p>
                )}
            </div>
        );
    }

    function MainContent() {
        const { user, login } = useContext(UserContext);

        return (
            <div>
                {user ? (
                    <p>Hello, {user.name}!</p>
                ) : (

                    <button onClick={login}>Login</button>
                )}
            </div>
        );
    }


    //* 📌 Explanation:
        // 1️⃣ The "UserContext" is created to share the "user", "login", and "logout" values.
        // 2️⃣ The "App" component provides the context value using "UserContext.Provider".
        // 3️⃣ The "Navbar" and "MainContent" components consume the context using "useContext" to display user information and handle login/logout.