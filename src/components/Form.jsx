import { useState } from "react";
import { supabase } from "../client";

function Form({ username, avatar }) {
  const [notificationType, setNotificationType] = useState("followed you");
  const [target, setTarget] = useState("");
  const [message, setMessage] = useState("");

  async function clickfn(e) {
    e.preventDefault();

    let notification = { username, avatar, notificationType };

    if (target) notification.target = target;
    if (message) notification.message = message;

    const { error } = await supabase
      .from("notifications")
      .insert(notification)
      .select();

    if (error) console.error(error);

    setNotificationType("followed you");
    setTarget("");
  }
  return (
    <form onSubmit={clickfn}>
      <fieldset
        onChange={(e) => {
          setNotificationType(e.target.value);
        }}
      >
        <legend>Select a notification type:</legend>
        <div>
          <input
            type="radio"
            id="follow"
            name="drone"
            value="followed you"
            defaultChecked
          />
          <label htmlFor="follow">follow</label>
        </div>

        <div>
          <input
            type="radio"
            id="joined your group"
            name="drone"
            value="has joined the group"
          />
          <label htmlFor="joined your group">joined your group</label>
        </div>

        <div>
          <input
            type="radio"
            id="left the group"
            name="drone"
            value="left the group"
          />
          <label htmlFor="left the group">left the group</label>
        </div>

        <div>
          <input
            type="radio"
            id="like the post"
            name="drone"
            value="reacted to your recent post"
          />
          <label htmlFor="like the post">like the post</label>
        </div>

        <div>
          <input
            type="radio"
            id="commented on your picture"
            name="drone"
            value="comment on the post"
          />
          <label htmlFor="commented on your picture">
            commented on your picture
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="sent private message"
            name="drone"
            value="sent private message"
          />
          <label htmlFor="sent private message">sent private message</label>
        </div>
      </fieldset>

      {(notificationType.includes("group") ||
        notificationType.includes("post")) && (
        <div>
          <label htmlFor="target">target</label>
          <input
            type="text"
            id="target"
            placeholder="target"
            value={target}
            onChange={(e) => {
              setTarget(e.target.value);
            }}
          />
        </div>
      )}
      {notificationType === "sent private message" && (
        <div>
          <label htmlFor="message">message</label>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            placeholder="message"
          />
        </div>
      )}
      <button type="submit">send</button>
    </form>
  );
}

export default Form;
