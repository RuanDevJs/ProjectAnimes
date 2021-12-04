import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/routes";
import { AuthenticateProvider } from "./Context/AuthenticateContext";
import Headers from "./Components/Header";

function App() {
    return (
        <Router>
            <AuthenticateProvider>
                <Headers />
                <Routes />
            </AuthenticateProvider>
        </Router>
    );
}

export default App;
