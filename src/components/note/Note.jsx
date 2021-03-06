import React from 'react'
import PropTypes from 'prop-types'

const styles={
    li:  {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:'.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom:'.5rem'
    },
    input: {
        marginRight:'1rem'
    }
}

function Note({todo,index,onChange}){
    return (
    <li style={styles.li}>
        <span>
        <input type="checkbox" style={styles.input} onChange={()=>onChange(todo.id)}
        />
        <strong>{index}</strong>
        &nbsp;
        {todo.title}
        </span>
        <button className="rm">&times;</button>
    </li> 
    )
}
Note.propTypes={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange:PropTypes.func.isRequired
}
export default Note