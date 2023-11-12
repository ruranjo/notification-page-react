import React from 'react'
import './List.scss'
import {INotification} from '../../../interfaces/notification.interface'
import { Item } from '../Item'

interface Props{
  list: INotification[] | []
}

const List:React.FC<Props> = ({list}) => {
  return (
    <div className="list-container">
      <ul>
      {
        list && list.map((notification, index)=>{
          return (
            <Item key={index} notification={notification}/>
          )
        })
      }
      </ul>
    </div>
  )
}

export default List