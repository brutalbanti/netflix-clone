import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmsPage from "./Pages/Films.tsx/FilmsPage";
import HomePage from "./Pages/Home/HomePage";
import SignIn from "./Pages/Sign/SignIn";
import SignUp from "./Pages/Sign/SignUp";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
