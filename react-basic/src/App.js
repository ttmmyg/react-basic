import './App.css';
import { ApiFetch } from './components/ApiFetch';
import { B } from './components/B';
import { BasicReducer } from './components/BasicReducer';
import { AppContext } from './contexts/AppContext';
//import { Basic1 } from './components/Basic1';
//import { TimerContainer } from './components/TimerContainer';

function App() {
  return (
    <AppContext.Provider value={'value from App.js'}>
      <>
      <ApiFetch />
      {/* <TimerContainer /> */}
      <B />
      <BasicReducer />
      </>

    </AppContext.Provider>
  );
};

export default App;
