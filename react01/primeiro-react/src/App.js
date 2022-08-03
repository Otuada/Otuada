import Foto from "./img/grati.jpg"
import './App.css';

function App() {
  const gratidao = () =>{
    (alert `Obrigado pela visita`)
  }
  return (
    <div>
       <p className="paragrafo">Bem Vindo ao meu primeiro projeto de React</p>
       <img className="imagem"src={Foto} alt="gratidao"/> 
       <h1 className="nome">Não basta conquistar a sabedoria, é preciso usa-la.</h1>
       <iframe src="https://giphy.com/embed/Kf0OnhCss3AO0Kema1" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
       <button className="Botao" onClick={gratidao}>click aqui</button>
    </div>
  );
}

export default App;
