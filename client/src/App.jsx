import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx"
import DynamicTitle from "./utils/DynamicTitle.jsx";

function App() {

    return (
        <>
        <BrowserRouter>
        <DynamicTitle />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/SignIn" element={<SignIn />}></Route>
                <Route path="/SignUp" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
