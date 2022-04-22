import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form1"
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Form />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;