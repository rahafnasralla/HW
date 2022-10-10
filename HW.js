import './App.css';
import {Component} from 'react';

class HW extends Component {
  constructor(props){
    super(props);
    this.array = [{name: 'Ahmad', age: 30},
    {name: 'Yousef', age: 12},
    {name: 'Shatha', age: 14},
    {name: 'Rana', age: 22},
    {name: 'Osama', age: 22},
    {name: 'Ahmad', age: 38} ]

    this.names = this.array.map( (item)=> {
      return {
          name : item.name
      }
  })
   this.ages = this.array.map( (item)=> {
    return {
        age : item.age
    }
})
    this.state = {
       names : this.names.filter((value, index, self) =>
       index === self.findIndex((t) => (
       t.name === value.name)) ),
       ages : this.ages.filter((value, index, self) =>
       index === self.findIndex((t) => (
       t.age === value.age )) )
    }
  }
  
  deleteElement () {
    this.setState(this.state.names.pop())
    this.setState(this.state.ages.pop())  }
  
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
            this.state.names.map((item,idx) => {
              return <tr key={idx}><td>{item.name}</td><td>{this.state.ages[idx].age}</td></tr>
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
export default HW;
