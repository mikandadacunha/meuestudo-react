
import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Items'
import{ListItem} from './components/ListItem';
import { AddArea } from './components/AddArea';
const App = () =>{
    const [list, setList] = useState<Item[]> ([

      {id:1, tarefa:'Estudar flutter', done: false},
      {id:2, tarefa:'Excercitar o react', done: false}
    ]);
 /**Array clone - Funcao que adiciona novas tarefas na lista de tarefas */
    const hanleKeyAddTask = (taskName:string)=>{
      let newList = [...list];
      newList.push({
        id: list.length + 1,
        tarefa: taskName,
        done: false

      });
      /**recepção da lista de array clone */
      setList(newList);
    }
  return(
    <C.Container>
      <C.Area>
        <C.Header>Minhas tarefas</C.Header>
        {/*Adição de novas tarefas */}

            <AddArea onEnter ={hanleKeyAddTask} />
          {/*Area de listagem de tarefas adicionada*/}
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>))}

        
      </C.Area>
    </C.Container>
  );
}


export default App;