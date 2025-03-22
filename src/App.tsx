import "./App.css";
import ListOverview from "./ListOverview";
import tailwindcss from "@tailwindcss/vite";

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-bold mb-6">Multi-List Todo App</h1>
      <ListOverview />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="min-h-screen p-6 bg-white text-black dark:bg-black dark:text-white">
//       <h1 className="text-3xl font-bold">Dark Mode Test</h1>
//     </div>
//   );
// }

// export default App;
