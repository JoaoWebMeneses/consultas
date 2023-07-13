import { useState } from 'react';
import './App.css';
import Consultas from './components/Consultas';
import ConsultasAdd from './components/ConsultasAdd'
function App() {
  const [consultas, setConsultas] = useState([
    {
      id: 1,
      nome: "João Vitor",
      horário: "2023-07-13 16:00",
      isCompleted: false,
    },
    {
      id: 2,
      nome: "Duda",
      horário: "2023-07-13 17:00",
      isCompleted: false,
    },{
      id: 3,
      nome: "Gui",
      horário: "2023-07-13 18:00",
      isCompleted: false,
    },
  ]);

  const addConsulta = (nome, horário) => {

      const newConsulta = [
        ...consultas,
        {
          id: Math.floor(Math.random() * 10000),
          nome,
          horário,
          isCompleted: false,
        },
      ];

      setConsultas(newConsulta);
  }

  const removeConsulta = (id) => {
    const newConsulta = [...consultas];
    const filtraConsulta = newConsulta.filter((consultas) =>
      consultas.id !== id ? consultas : null
    );
    setConsultas(filtraConsulta);
  }

  const completeConsulta = (id) => {
    const newConsulta = [...consultas];
    newConsulta.map((consultas) => consultas.id === id ? consultas.isCompleted = !consultas.isCompleted : consultas)
    setConsultas(newConsulta)
  }

  return (
    <div className='app'>
      <h1>Consultas</h1>
      <div className='agendamentos'>
        {consultas.map((consultas) => (
          <Consultas key={consultas.id} consultas={consultas} removeConsulta={removeConsulta} completeConsulta={completeConsulta}/>
        ))}
      </div>
      <ConsultasAdd addConsulta={addConsulta}/>
    </div>
  );
}

export default App
