import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";
const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    initialIsFollowing: true,
  },
  {
    userName: "_figonzal",
    name: "Felipe González Alarcón",
    initialIsFollowing: false,
  },
];

const App = () => {
  const format = (userName: string) => `@${userName}`;

  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          initialIsFollowing={user.initialIsFollowing}
          name={user.name}
          formatUserName={format}
        />
      ))}
    </section>
  );
};

export default App;
