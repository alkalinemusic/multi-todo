import "./App.css";
import ListOverview from "./ListOverview";
import tailwindcss from "@tailwindcss/vite";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Multi-List Todo App</h1>
      <ListOverview />
    </div>
  );
}

export default App;
