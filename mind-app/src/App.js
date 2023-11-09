import "./App.css";
import MainHero from "./MainHero";
import { MoodRating } from "./MoodRating";
import { MoodEntryList } from "./MoodEntryList";

function App() {
  return (
    <div className="main-content">
      <MainHero />
      <MoodRating />
      <MoodEntryList />
    </div>
  );
}

export default App;
