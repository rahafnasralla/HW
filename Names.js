  function Names(props) {  
    const  array = props.array; 
    return (
      <div>
      <div>
      <table>
        <tr>
        <th>Name</th>
        <th>Age</th>
        </tr>
        {
          array.map((item,idx) => {
            return <tr><td key={idx}>{item.name}</td> <td key={idx*5}>{item.age}</td> </tr>
          })
        }
    
        <tr> 
        <td> <button onClick={(array)=>{
             return (
                props.array.splice(array.length-1, 1)
             )

        }}>Delete element</button></td>
        </tr>
      </table>
      </div>
      </div> 
      
    )
  }

  
  

  export default Names;

