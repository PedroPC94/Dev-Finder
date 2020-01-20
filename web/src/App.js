import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

// Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação.
// Propriedade: Informções que um componente pai passa para componente filho
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)


function App() {
  const [devs, setDevs] = useState([]);



  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {

    const response = await api.post('./devs', data)

    //console.log(response.data);



    setDevs([...devs, response.data]);
  }

  return (
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
