import logo from './logo.svg';
import './App.css';
import './index.css';
const fullName="Paul De Ocampo Andres"
const age = 22
const getYear = new Date().getFullYear();
const getDate = new Date().getDate();
const getMonth = new Date().getMonth();

const App = () =>{
  return(
  <div>
    <h2>My name is {fullName} and I'm {age} years old, the year
    today is {getDate+"/"} {getMonth+"/"} {getYear}</h2>
    
  </div>
  );
}

export default App;
