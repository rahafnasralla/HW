//484-523
//import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class Hi extends Component {
  constructor(props){
    super(props);
    this.state = {
      array :[{name: 'Ahmad', age: 30},
              {name: 'Yousef', age: 12},
              {name: 'Shatha', age: 14},
              {name: 'Rana', age: 22},
              {name: 'Osama', age: 22},
              {name: 'Ahmad', age: 38} ],
      newArray:  this.state.array.filter((value, index, self) =>
                 index === self.findIndex((t) => (
                 t.age === value.age && t.name === value.name
    ))
)
    }
    

  }

 
  deleteElement () {
    this.setState(this.state.newArray.pop())
  }
  render() {
    return(
        <div>
        <div>
        <table>
        <tbody>
          <tr>
          <th>Name</th>
          <th>Age</th>
          </tr>
          {
            this.state.newArray.map((item,idx) => {
              return <tr key={idx}><td>{item.name}</td><td>{item.age}</td></tr>
            })
          }
          <tr> 
          <td> <button onClick={this.deleteElement.bind(this)}>Delete element</button></td>
          </tr>
          </tbody>
        </table>
        </div>
        </div> 
    )
  }
}
export default Hi;

//change to a table 
