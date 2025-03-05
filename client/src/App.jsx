import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import DynamicTitle from "./utils/DynamicTitle";

function App() {

    return (
        <>
        <BrowserRouter>
        <DynamicTitle />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/SignIn" element={<SignIn />}></Route>
                <Route path="/SignUp" element={<SignIn />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
