import ManImage from "./assets/man.jpg";
import HomeIcon from "./assets/icons/home.svg";
import HomeIconUrl from "./assets/icons/home.svg?url";

const App = () => {
  return (
    <div>
      <h1>React template</h1>
      <div>
        <img src={HomeIconUrl} />
        <HomeIcon width={20} height={20} />
      </div>
    </div>
  );
};

export default App;
