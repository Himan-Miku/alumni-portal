import MessagesList from "./(components)/MessagesList";
import MessagesScreen from "./(components)/MessageScreen";

const MessagesPage = () => {
  return (
    <div className="my-5 mx-4 grid grid-cols-10 gap-4 w-full">
      <MessagesList />
      <MessagesScreen />
    </div>
  );
};

export default MessagesPage;
