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
  const [indiceVetor, setIndiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [cidade, setCidade] = useState();
  const [vetor, setVetor] = useState([]);

  //Função para cadastrar
  const cadastrar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade':cidade};
    setVetor([...vetor, obj]);
    setNome('');
    setIdade('');
    setCidade('');
  }

  //Função para selecionar usuario
  const selecionar = (indice) => {
    setIndiceVetor(indice);

    setNome(vetor[indice].nome);
    setIdade(vetor[indice].idade);
    setCidade(vetor[indice].cidade);

    setBtnCadastrar(false);
  };

  //Função para alterar dados
  const alterar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade':cidade};
    let copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj;
    setVetor(copiaVetor);

    setNome('');
    setCidade('');
    setIdade('')
    setBtnCadastrar(true);
  }


  return (
    <div>
      <Formulario btnCadastrar={btnCadastrar} setNome={setNome} setCidade={setCidade} setIdade={setIdade} cadastrar={cadastrar} nome={nome} idade={idade} cidade={cidade} alterar={alterar} />
      <Tabela vetor={vetor} selecionar={selecionar} />
    </div>
    
  );
}

export default App;
