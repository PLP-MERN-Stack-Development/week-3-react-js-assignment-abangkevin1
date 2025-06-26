import Card from "../components/Card";

function About() {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-2">About This App</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Abang Task Manager is a simple React app built with Vite and Tailwind CSS for the PLP assignment.
        It demonstrates component architecture, routing, and modern styling.
      </p>
    </Card>
  );
}

export default About;