import { useState } from "react";
import './App.scss'
import Card from "./components/Card"
import tutorialData from "./tutorialData"


function App() {
  

  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(prev => (prev + 1) % tutorialData.length )
  }

  function prevStep() {
    setStep(prev => prev === 0 ? tutorialData.length - 1 : prev - 1)
  }

  

  return (
    <>
    <Card 
    image = {tutorialData[step].image}
    title = {tutorialData[step].title}
    description = {tutorialData[step].description}
    bgColor = {tutorialData[step].bgColor}
    prevStep = {prevStep}
    nextStep = {nextStep}
    step = {step}
    setStep = {setStep}
    />
     
    </>
  )
}

export default App
