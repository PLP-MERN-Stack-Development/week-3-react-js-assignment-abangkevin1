import Card from "../components/Card";

function Home() {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-2">Welcome to Abang Task Manager!</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Manage your tasks efficiently and stay productive. Use the navigation bar to explore features.
      </p>
    </Card>
  );
}

export default Home;