import { useState } from "react";
import './App.scss'
import Card from "./components/Card"

function App() {
  
  const tutorialData = [

    {
      title: "Dedica molt de temps",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaras una millora ràpidament",
      bgColor: "",
      image: 'src/assets/time_managment.svg'
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "",
      image: 'src/assets/programming.svg'
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaras el teu aprenentatge.",
      bgColor: "",
      image: 'src/assets/meditation.svg',
    },
  ];

  const [step, setStep] = useState(0);


  return (
    <>
    <Card 
    image= {tutorialData[step].image}
    title= {tutorialData[step].title}
    description={tutorialData[step].description}
    />
     
    </>
  )
}

export default App
