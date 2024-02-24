import React from 'react'
import CommonButton from '../CommonButton/CommonButton'
import NotificationBell from '../NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar'

const Header:React.FC = () => {
  return (
    <div>
        <CommonButton>
            Go to Docs
        </CommonButton>
        <NotificationBell 
          color="primary"
        />
        <Avatar 
          src="https://mui.com/static/images/avatar/1.jpg"
        />
    </div>
  )
}

export default Header
