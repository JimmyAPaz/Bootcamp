import './App.css';
import Message from './MensajeModulo';

//Important//
//Componentes en mayuscula para que diferencie de los tags de HTML y siempre separados, afuera de App() en este caso //
//Reutilizacion de components//
const Name = () =>{
  return <p>Hello I am Jimmy and I'm enjoying this incredible bootcamp!</p>
}

const Description = () =>{
  return <p>This is the first app of the FullStack bootcamp.</p>
}

//Siempre se debe devolver un solo elemnto que contiene el resto: App()//
//Hay otra manera llamada "Fragment" que envuelve todo lo que quiere renderizar sin necesidad de crear un elemento. //
//Conficionales se pueden devolver ,  String y null(osea na) //
const App = () => {
  return (
    <div className="App">
      <Message color="steelblue" message="We are working"/>
      <Message color="red" message="in a React"/>
      <Message color="purple" message="Course!"/>
      <Name/>
      <Description/>
    </div>
  );
}

export default App;
