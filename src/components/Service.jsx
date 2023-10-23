const Service = () => {
    const status = true;
    return (
        <div>
            <h2>4. H2 Tag of Service</h2>
            <p>P Tag of Service</p>
            <h3>Optional: 4 Show how JSX Conditional Rendering Using Ternary Operator</h3>
            {
                status ?
                <button>LogOut</button>
                :
                <button>LogIn</button>
            }
        </div>
    );
};

export default Service;

