import React from 'react'
import './Item.scss'
import {INotification} from '../../../interfaces/notification.interface'

interface Props{
  notification: INotification
}

const List:React.FC<Props> = ({notification}) => {
  
  switch (notification.type) {
    case 'react':
      return (
    
        <li className='item-notification react'>
            <img src={notification.imgIcon} alt="" />
            <div className='content-text'>
              <p>
                <span className='name'>{notification.name}</span>
                reacted to your recent post 
                <span className='event-react'>{notification.event}</span>
                { notification.isRead ? (<></>) : (<div className='read'>◉</div>)}
              </p>
              <span className='time'>{notification.time}</span>
            </div>
        </li>
       
      )
    break;
    case 'follow':
      return (
    
        <li className='item-notification follow'>
            <img src={notification.imgIcon} alt="" />
            <div className='content-text'>
              <p>
                <span className='name'>{notification.name}</span>
                followed you 
                { notification.isRead ? (<></>) : (<div className='read'>◉</div>)}
              </p>
              <span className='time'>{notification.time}</span>
            </div>
        </li>
       
      )
    break;
    case 'join':
      return (
    
        <li className='item-notification join'>
          <img src={notification.imgIcon} alt="" />
          <div className='content-text'>
            <p>
              <span className='name' >{notification.name}</span>
              has joined your grounp
              <span className='event'>{notification.event}</span>
              { notification.isRead ? (<></>) : (<div className='read'>◉</div>)}
            </p>
            <span className='time'>{notification.time}</span>
          </div>
        </li>
       
      )
    break;

    case 'message':
      return (
    
        <li className='item-notification message'>
            <img className='avatar' src={notification.imgIcon} alt="" />
            <div className='content-text'>
              
              <div>
                <p>
                  <span className='name'>{notification.name}</span>
                  sent you a private message
                  { notification.isRead ? (<></>) : (<div className='read'>◉</div>)}
                </p>
              <span className='time'>{notification.time}</span>
              </div>

              <div className='text-message'>
                <p>
                  {notification.message}
                </p>
              </div>

            </div>
        </li>
       
      )
    break;
    case 'comment':
      return (
    
        <li className='item-notification comment'>
          <div className='content-flex'>
            <img src={notification.imgIcon} alt="" />
            <div className='content-text'>
              <p>
                <span className='name'>{notification.name}</span>
                commented on your picture
                { notification.isRead ? (<></>) : (<div className='read'>◉</div>)}
              </p>
              <span className='time'>{notification.time}</span>
              
            </div>
          </div>
          <div className='image-comment'>
              <img src={notification.postImage} alt="" />
            </div>
            
        </li>
       
      )
    break;

    case 'left':
      return (
    
        <li className='item-notification left'>
          <img src={notification.imgIcon} alt="" />
          <div className='content-text'>
            <p>
              <span className='name'>{notification.name}</span>
              left the grounp
              <span className='event'>{notification.event}</span>
              { notification.isRead ? (<></>) : (<div className='read'>◉</div>)}
            </p>
            <span className='time'>{notification.time}</span>
          </div>
        </li>
       
      )
    break;
  
    default:
    break;
  }

  
    return (
      <li>
        <img src={notification.imgIcon} alt="" />
        <h3>{notification.name}</h3>
        <span>{notification.event}</span>
      </li>
    )
      
}

export default List