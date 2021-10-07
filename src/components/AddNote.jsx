import React from "react";
import PropTypes from 'prop-types';

class AddNote extends React.Component{
    static propTypes = {
        addNote: PropTypes.func
      };
      nameRef = React.createRef();
      descRef = React.createRef();
  createNote=event =>{
    event.preventDefault();
      const Note={
          name:this.nameRef.current.Value,
          desc:this.descRef.current.Value
      };
      console.log(Note.name);
      this.props.addNote(Note);
    event.currentTarget.reset();    
  }
  render() {
    return (   
            <form className='createNote' onSubmit={this.createNote}>
                <input name='name' type='text' ref={this.nameRef} placeholder='Name' autoComplete='off'/>
                <textarea name='desc' type='text' ref={this.descRef} placeholder='Desc' autoComplete='off'/>
                <button type='submit'>Добавить заметку</button>
            </form>  
       
    );
  }
}

export default AddNote;
