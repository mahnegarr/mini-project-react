import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  
function handleChange(inputIdentifier,newValue){
  setUserInput(
      prevInput=> {
          return{
              ...prevInput,
              [inputIdentifier]:+newValue
          }
      }
  )
}
  return (
    <>
      <Header />

      <UserInput onChange={handleChange} userInput={userInput} />

      <Result input={userInput} />
    </>
  );
}

export default App;
