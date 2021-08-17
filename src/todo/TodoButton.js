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

function TodoItem({todo}){
    return (
    <li style={styles.li}>
        <span>
        {todo.title}       
        </span>
    </li> 
    )
}
TodoItem.propTypes={
    todo: PropTypes.object.isRequired    
}
export default TodoItem