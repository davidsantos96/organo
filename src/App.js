import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';





function App() {

  const [times, setTimes] = useState([
    { id: uuidv4(), nome: 'Programação', cor: '#57C278' },
    { id: uuidv4(), nome: 'Front-End', cor: '#82CFFA' },
    { id: uuidv4(), nome: 'Data Science', cor: '#A6D157' },
    { id: uuidv4(), nome: 'Devops', cor: '#E06B69' },
    { id: uuidv4(), nome: 'UX e Design', cor: '#DB6EBF' },
    { id: uuidv4(), nome: 'Mobile', cor: '#FFBA05' },
    { id: uuidv4(), nome: 'Inovação e Gestão', cor: '#FF8A29' }
  ])

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }]);
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time =>
      time.id === id
        ? { ...time, cor: cor }
        : time
    ));
  }

   function cadastrarTime (novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdcionado}
        cadastrarTime={cadastrarTime}
      />

      {times.map((time, indice) => (
        <Time
          time={time}
          key={time.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
        />
      ))}
      <Rodape />
    </div>

  );
}

export default App;