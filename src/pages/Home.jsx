import TodoPage from ".pages/TodoPage";

function Home(props) {
  return <TodoPage type="all" {...props} />;
}

export default Home;