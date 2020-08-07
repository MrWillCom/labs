import React from 'react'

export default function NotificationController() {
  const [notifications, setNotifications] = React.useState([])

  return {
    notifications: notifications,
    add: (notification) => {
      setNotifications(notifications.push(notification))
    }
  }
}