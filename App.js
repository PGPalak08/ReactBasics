
// Nested 
// const heading = React.createElement(
//     "div", 
//     { id: "parent" }, 
//     React.createElement(
//         "div", 
//         { id: "child" }, 
//         React.createElement(
//             "h1", 
//             { id: "parent" }, 
//             "Hello!!!!"
//         )
//     )
// );

// Sibling
const heading = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div", 
        { id: "child" }, 
        [
            React.createElement("h1", { id: "1t" }, "Hello!!!!"),
            React.createElement("h1", { id: "2" }, "Hello!!!!!")
        ]
    )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);