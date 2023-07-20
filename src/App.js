import QuizQuestions from "./components/QuizQuestions";
import Start from "./components/Start";
import { useState } from "react";
import "./styles.css";

const App = () => {
  const [startClicked, setStartClicked] = useState(false);

  const handleStartButton = () => {
    setStartClicked(true);
  };

  return (
    <div>
      {startClicked ? (
        <QuizQuestions />
      ) : (
        <Start handleStartButton={handleStartButton} />
      )}
    </div>
  );
};

export default App;
