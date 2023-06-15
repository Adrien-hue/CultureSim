import "./Datatable.scss";
import React from 'react';
import  { useState } from 'react';


function Datatable({ json, ...props}) {

  let columns = json.columns;
  let data = json.data;

  
  const [users] = useState(data);

    return (
     
      <table>
        <thead>
          <tr>
            {Object.keys(columns).map((key) =>{
              if(columns[key].display){
                return <th key={key}>{columns[key].name}</th>
              }
            })}
            <th> Action </th>
            
          </tr>
        </thead>
        <tbody>  
          {users.map((user) => (
            <tr key={user.id}>
             {Object.keys(columns).map((key) => {
              if (columns[key].display) {
                return <td key={key}>{user[key]}</td>;
                }
                
              })}
              
              <td className="lmj-Datatable-button-td">
              
                 <button  className="lmj-Datatable-button-modify" >Modifier</button>
                 
                 <button  className="lmj-Datatable-button-suppr">Supprimer</button> 
                    
             </td>

            </tr>
          ))}
        </tbody>
      
    </table>
    
  );
}

export default Datatable;