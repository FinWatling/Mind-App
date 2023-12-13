import "./App.css";
import { MainHero } from "./MainHero";
import { SetPin } from "./SetPin";
import { MoodRating } from "./MoodRating";
import MoodEntryList from "./MoodEntryList";

function App() {
  let loggedIn = localStorage.getItem("loggedin") === "true" ? true : false;
  let content;

  if (loggedIn) {
    content = (
      <div className="main-content">
        <MainHero />
        <MoodRating />
        <MoodEntryList />
      </div>
    );
  } else {
    content = <SetPin />;
  }

  return <div>{content}</div>;
}

export default App;
