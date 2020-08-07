import NotificationController from '../components/notificationController'

export default function Home() {
  var notifications = NotificationController()

  return (<>
    <button onClick={() => {
      notifications.add(<div>new notification!</div>)
    }}>add item</button>
    <notifications.notifications />
  </>)
}
