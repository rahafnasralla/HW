
import './App.css';
import Names from './Names';


function App() {
  return (
    <div className="App">
     <Names array = {[{name: 'Ahmad', age: 30},
                     {name: 'Yousef', age: 12},
                     {name: 'Shatha', age: 14},
                     {name: 'Rana', age: 22},
                     {name: 'Osama', age: 22},
                     {name: 'Ahmad', age: 38}]}/>
    </div>
  );
}

export default App;
