import React from "react";
import AddNote from './AddNote';
import ListNotes from './ListNotes';
class App extends React.Component{
state ={
    UserId:{}, 
    Notes:{}
};
addNote = Note=> {
    // 1. Делаем копию объекта state
    const Notes = { ...this.state.Notes };
    // 2. Добавить новый бургер в переменную burgers
    Notes[`Note${Date.now()}`] = Note;
    // 3. Записать наш новый объект burgers в state
    this.setState({ Notes });
  };
  render() {
    return (
       <div className='Node-paradise'>
          <div className='ListNode'>
            <ListNotes title='List'/>
          </div>   
          <AddNote addNote={this.addNote}/>      
        </div>     
    );
  }
}


export default App;
