//Hooks
import { useState } from 'react';

//Importando CSS
import './App.css';
//Importando componente Formulario
import Formulario from './Formulario';
import Tabela from './Tabela';

//Componente
function App() {

  //useState
  const [btnCadastrar, setBtnCadastrar] = useState(true);

  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} />
      <Tabela />
    </div>
    
  );
}

export default App;
