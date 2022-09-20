import React, {Component} from 'react';

class Generos extends Component{
    
  constructor(){
      super();
      this.state = {
          generos: [],
      };
  }

  componentDidMount(){
      fetch("http://localhost:3001/api/generos")
      .then(response => (response.json()))
      .then(data =>{
          this.setState({generos: data.data})
          })
      .catch(e=>console.log(e))
        
  }
  
 

  render(){
  
    

    return(
      <div>
       <h1>Todos los Generos</h1>   
          {this.state.generos.map((genero, i) => 
            {
             return (
               <div key={genero + i}>
                   <h2>{genero.name}</h2>
                   </div>
               );
            })
          }                  
        </div>
      )
  }
}  

export default Generos