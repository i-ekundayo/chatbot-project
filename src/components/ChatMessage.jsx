import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/my-picture.jpg";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, time }) {
  // const message = props.message;
  // const sender = props.sender

  // const { message, sender } = props;

  /* if (sender === "robot") {
    return (
      <div>

        {message}
      </div>
    );
  }*/
  

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          alt="Robot Image"
          className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">
        <div>{message}</div>
        <div className="time">{time}</div>
      </div>
      {sender === "user" && (
        <img
          src={UserProfileImage}
          alt="User Image"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}
