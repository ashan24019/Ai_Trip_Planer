import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import CreatTrip from "./create-trip";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Welcome to trip planner</h1>
              <Button>Subcribe</Button>
            </>
          }
        />
        <Route path="/create-trip" element={<CreatTrip />} />
      </Routes>
    </>
  );
}

export default App;
