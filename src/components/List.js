import React from 'react';
import Item from './Item';

function List(props) {
    const { itemList } = props;
    const createKey = (string) => {
        string = (string.toString()).replace(/\s+/g, "") + "-";
        let key = (string += Math.random().toString(36).substr(2, 5));
        return key;
      };

    return (
        itemList.map((item) => (
            <Item item={item} key={createKey(item)}/>
        ))
    );
}

export default List;