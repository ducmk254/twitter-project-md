import Author from "./components/Author/Author";
import Header from "./components/Header/Header";
import NewTweet from "./components/NewTweet/NewTweet";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NewTweet />
      <PostList />
      <Author />
    </div>
  );
}

export default App;
