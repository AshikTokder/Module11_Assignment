const About = () => {
    const jsxLoop = ["A","S","H","I","K"];
    return (
        <div>
            <h2>3. H2 Tag of About</h2>
            <p>P Tag of About</p>
            <h3>Optional: 3 Show How to Loop works in JSX</h3>
            <ol>
                {jsxLoop.map((item,i)=>{
                    return <li key={i.toString}>{item}</li>
                })}
            </ol>

        </div>
    );
};

export default About;