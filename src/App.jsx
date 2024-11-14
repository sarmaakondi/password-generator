import Password from "./Password";
import Config from "./Config";

import "./App.css";

function App() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-pageBg">
                <div>
                    <h1 className="text-2xl text-headingColor mb-8">
                        Password Generator
                    </h1>
                </div>
                <Password />
                <Config />
            </div>
        </>
    );
}

export default App;
