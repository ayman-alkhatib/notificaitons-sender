import { useState } from 'react';
import Form from './components/Form';
import Profile from './components/Profile';
function App() {
  const [username, setUsername] = useState("mark zuckerberg");
  const [avatar, setAvatar] = useState(
    "https://media.wired.com/photos/592676467034dc5f91beb80e/master/w_960,c_limit/MarkZuckerberg.jpg"
  );
  return (
    <div className="App">
      <header className="App-header">
        <Profile username={username}
          setUsername={setUsername}
          avatarUrl={avatar}
          setAvatarUrl={setAvatar} />
        <Form username={username} avatar={avatar} />
      </header>
    </div >
  );
}

export default App;


// id: 1,
// avatar: "/images/avatar-mark-webber.webp",
// username: "Mark Webber",
// notificationType: "reacted to your recent post",
// target: "My first tournament today!",
// messagePreview: "",
// readStatus: false,
// timestamp: "1m ago"

// useEffect(() => {

//   const fetchNotifications = async () => {
//     let { data: notifications, error } = await supabase
//       .from('notifications')
//       .select('*')

//     console.log(notifications)
//     if (error) console.error('Error fetching notifications:', error);
//     else setNotifications(notifications);
//   };
//   fetchNotifications();

//   // Real-time subscription
//   const channel = supabase
//     .channel('notifications')
//     .on(
//       'postgres_changes',
//       { event: 'INSERT', schema: 'public', table: 'notifications' },
//       (payload) => {
//         setNotifications((prev) => [payload.new, ...prev]);
//       }
//     )
//     .subscribe();

//   return () => {
//     supabase.removeChannel(channel);
//   };


// }, []);


// <div>
// <label htmlFor='type'> notification type </label>
// <select id='type' value={notificationType} onChange={(e) => { setNotificationType(e.target.value) }} >
//   <option value={"followed you"}>follow</option>
//   <option value={"has joined the group"} >joined your group</option>
//   <option value={"left the group"}>left the group</option>
//   <option value={"reacted to your recent post"}>like the post</option>
//   <option value={"comment on the post"}>commented on your picture</option>
//   <option value={"sent private message"}>sent private message</option>
// </select>
// </div>