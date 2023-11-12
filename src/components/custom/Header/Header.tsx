import './Header.scss'
const Header = () => {
  return (
    <div className="header-container">
      <div className="content">
        <div className='notification-counter'>
          <h2>Notifications</h2>
          <span>3</span>
        </div>
        <span className='author'>By-Rubens</span>
        <span>Mark all as read </span>
      </div>
    </div>
  )
}

export default Header