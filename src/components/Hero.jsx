const Hero = () => {
    const marks = 80;
    return (
        <div>
            <h2>2. H2 Tag of Hero</h2>
            <p>P Tag of Hero</p>
            <h3>Optional: 2 Use Short hand If Else in any JSX</h3>
            {
                marks>80 ?
                <h4>Briliant Result</h4>
                :
                <h4>Average Result</h4>
            }
        </div>
    );
};

export default Hero;

