import React from 'react';
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* .map() creates a new array and calls 
  a function for every element in that array */
function List(props){
    const items = props.items;
    const listItem = items.map(item => {
        return <div className="list" key={item.key}>
            <p>{item.text} 
            <span>
                <FontAwesomeIcon className="faicons" 
                icon='trash'
                onClick={ () => props.deleteItem(item.key)
                }/>
            </span>
            </p>   
        </div>
    })
    return(
        <div>{listItem}</div>
    )
}

export default List;