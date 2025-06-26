import TaskManager from "../components/TaskManager";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <TaskManager />
    </div>
  );
}

export default Home;