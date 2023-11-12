import { List } from '../../common/List'
import { Header } from '../Header'
import './NotificationPage.scss'
import avatar1 from '../../../assets/images/avatar-angela-gray.webp'
import avatar2 from '../../../assets/images/avatar-anna-kim.webp'
import avatar3 from '../../../assets/images/avatar-jacob-thompson.webp'
import avatar4 from '../../../assets/images/avatar-kimberly-smith.webp'
import avatar5 from '../../../assets/images/avatar-mark-webber.webp'
import avatar6 from '../../../assets/images/avatar-nathan-peterson.webp'
import avatar7 from '../../../assets/images/avatar-rizky-hasanuddin.webp'
import postimg from '../../../assets/images/image-chess.webp'

import {INotification} from '../../../interfaces/notification.interface'

const notifications:INotification[] = [
  {
    id:1,
    name:"Mark Webber",
    imgIcon:avatar1,
    type: 'react',
    event: "My fisrt tournament today",
    isRead:false,
    time: "1m ago",
    message:"",
    postImage:""
  },
  {
    id:2,
    name:"Angela Gray",
    imgIcon:avatar2,
    type: 'follow',
    event: "",
    isRead:false,
    time: "5m ago",
    message:"",
    postImage:""
  },
  {
    id:3,
    name:"Jacob Thompson",
    imgIcon:avatar3,
    type: 'join',
    event: "Chess Club",
    isRead:false,
    time: "1d ago",
    message:"",
    postImage:""
  },
  {
    id:4,
    name:"Rizky Hasanuddin",
    imgIcon:avatar4,
    type: 'message',
    event: "",
    isRead:true,
    time: "5d ago",
    message:"Hello, thanks for setting up the chess Club I've benn member for a few weeks now and i'm already having lots of fun and improving my game",
    postImage:"",
  },
  {
    id:5,
    name:"Kimberly Smith",
    imgIcon:avatar5,
    type: 'comment',
    event: "",
    isRead:true,
    time: "1 week ago",
    message:"",
    postImage:postimg,
  },
  {
    id:6,
    name:"Nathan Peterson",
    imgIcon:avatar6,
    type: 'react',
    event: "5 end-game strategies to increase your win rate",
    isRead:true,
    time: "2 weeks ago",
    message:"",
    postImage:"",
  },
  {
    id:7,
    name:"Anna Kim",
    imgIcon:avatar7,
    type: 'left',
    event: "Chess Club",
    isRead:true,
    time: "2 weeks ago",
    message:"",
    postImage:"",
  },
]


const NotificationPage = () => {
  return (
    <div className="main-container-notification-page">
      <div className="container">
        <Header/>
        <List list={notifications}/>
      </div>
    </div>
  )
}

export default NotificationPage