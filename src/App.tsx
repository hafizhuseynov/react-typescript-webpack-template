import ManImage from './assets/man.jpg';
import HomeIconUrl from './assets/icons/home.svg?url';
import HomeIcon from './assets/icons/home.svg';
import { useState } from 'react';
import './App.scss';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <img src={ManImage} />
        <img src={HomeIconUrl} />
        <HomeIcon width={20} height={20} />
      </div>
      <button onClick={() => setCounter(counter + 1)}>go</button>
    </div>
  );
};

export default App;
