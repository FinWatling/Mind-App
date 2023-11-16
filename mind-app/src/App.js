import "./App.css";
import { MainHero } from "./MainHero";
import { SetPin } from "./SetPin";
import { MoodRating } from "./MoodRating";

function App() {
  let verifiedUser = localStorage.getItem("password") == null ? false : true;
  let content;

  if (verifiedUser) {
    content = (
      <div className="main-content">
        <MainHero />
        <MoodRating />
      </div>
    );
  } else {
    content = <SetPin />;
  }

  return <div>{content}</div>;
}

export default App;
