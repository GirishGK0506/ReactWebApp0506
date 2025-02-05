        // const heading = React.createElement("h1", {id:"head"}, "Hello JavaScript World");
        // const root = ReactDOM.createRoot(document.getElementById('root'));
        // console.log(heading);
        // root.render(heading);

        const parent = React.createElement('div', {id: "parent1"},
        React.createElement('div', {id: "child1"} ,[
            React.createElement("h1", {}, "First Day of Namsthe React"),
            React.createElement("h2", {}, "First Day of Namsthe React"),
        ]  ),
        React.createElement('div', {id: "child2"}, [
            React.createElement("h1", {}, "First Day of Namsthe React"),
            React.createElement("h2", {}, "First Day of Namsthe React"),
        ]  )
        )


        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);


        // <div id = "parent1">
        //     <div id ="child1">
        //         <h1>First Day of Namsthe React</h1>
        //         <h2>I completed React Foundational things</h2>
        //     </div>
        //     <div id = "child2">
        //     <h1>First Day of Namsthe React</h1>
        //  <h2>I completed React Foundational things</h2> 
        //     </div>
        // </div>