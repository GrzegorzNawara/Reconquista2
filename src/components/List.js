import React from 'react'
import ListItem from './ListItem'

const List = ({visible=true, header, items, onClick}) => (
  <div className="row mx-2">
    {visible &&
      <h2 className="col-12 rounded bg-list-header px-3 py-3 my-2 justify-content-right align-items-center">
        {header}
      </h2>}
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
