import logo from './logo.svg';
import './App.css';

function App() {

  const Lista =[];
  
   const mostrar = ()=>{ 
    var x=1;
 
    for(x=1;x<101;x++){
        if(x%5==0 && x % 3 == 0){
          Lista.push('Fizz Buzz', )
        }else if(x%5==0 ){
          Lista.push("Buzz" , )
        } else if ( x % 3 == 0){
          Lista.push( "Fizz", )
        }else {
          Lista.push(x , )
        }
    }
      document.getElementById("lista").textContent=Lista
    }

    const borrar = ()=>{ 
    
      Lista.splice(0, Lista.length);
      document.getElementById("lista").textContent=Lista;
      }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3> EJERCICIO </h3>
        <button onClick={mostrar}>  EJECUTAR </button>
        <button onClick={borrar}>  BORRAR </button>
        <p id="lista" >  </p>
      </header>
    
    </div>
   
  );
}

export default App;
