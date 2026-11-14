import Header from "./components/layout/Header";
import HealthyRecipes from "./components/recipes/HealthyRecipes";
import Benefits from "./components/benefits/Benefits";
import MasterCheff from "./components/masterchef/MasterChef";
import WeeklyPick from "./components/weeklypick/WeeklyPick";

function App() {
  return (
    <>
      <Header />
      <HealthyRecipes />
      <MasterCheff />
      <Benefits />
      <WeeklyPick/>
    </>
  )
}

export default App;