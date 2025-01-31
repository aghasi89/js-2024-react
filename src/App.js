import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "./components/header.css";
import { Fragment, useState } from 'react';

function App() {
  const [appear, setAppear] = useState(true);
  setTimeout(() => {
    setAppear(false);
  }
  , 5000);
  return (<>
        {appear && <Header >
          
        </Header>}
        <div> </div>
      </>

  );
}

export default App;
