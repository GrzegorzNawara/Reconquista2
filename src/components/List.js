import React from 'react'
import ListItem from './ListItem'

const List = ({visible=true, items, onClick}) => (
  <div className="row mx-2">
    {visible && items.map( item =>
        <ListItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          onClick={() => onClick(item)}
        />
    )}
  </div>
)

export default List
