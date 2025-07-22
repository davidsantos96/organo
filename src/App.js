import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';





function App() {

   const [times, setTimes] = useState([
    { id: uuidv4(), nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { id: uuidv4(), nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { id: uuidv4(), nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { id: uuidv4(), nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { id: uuidv4(), nome: 'UX e Design', corPrimaria: '#DB6EBF', corSecundaria: '#FAE9F5' },
    { id: uuidv4(), nome: 'Mobile', corPrimaria: '#FFBA05', corSecundaria: '#FFF5D9' },
    { id: uuidv4(), nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ])

  const [colaboradores, setColaboradores] = useState([]);
    debugger
  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }]);
  }

  function deletarColaborador(id) {  // ...existing code...
  
  function App() {
  
    const [times, setTimes] = useState([
      // ...times...
    ]);
  
    const [colaboradores, setColaboradores] = useState([]);
  
    const aoNovoColaboradorAdcionado = (colaborador) => {
      setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }]);
    };
  
    function deletarColaborador(id) {
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    }
  
    // O return deve estar dentro da função App!
    return (
      <div className="App">
        <Banner />
        <Formulario
          times={times.map(time => time.nome)}
          aoColaboradorCadastrado={aoNovoColaboradorAdcionado}
        />
        {times.map((time) => (
          <Time
            key={time.id}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />
        ))}
        <Rodape />
      </div>
    );
  }
  

  // ...existing code...
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)} />

      {times.map((time, indice) => <Time 
      key={time.id}
      nome={time.nome}
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      aoDeletar={deletarColaborador}
      />
      )}
      <Rodape />
    </div>

  );
}

export default App;