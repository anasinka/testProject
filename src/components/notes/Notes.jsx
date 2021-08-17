import React from 'react'
import PropTypes from 'prop-types'
import Note from '../note/Note';

const styles={
    ul:{
        listStyle: 'none',
        margin:0,
        padding: 0
    }
}
function Notes(props){
    return  (
        <ul style={styles.ul}>
            {props.todos.map((todo,index)=>{
                return <Note todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}
Notes.propTypes={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default Notes