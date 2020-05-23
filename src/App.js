import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux-components/Store';
import Counter from './redux-components/IncCounter/CounterUI';
import DecrementCounter from './redux-components/DecCounter/DecUI';
import HooksIncCounter from './redux-components/IncCounter/HooksIncCounter';
import OwnPropsState from './redux-components/IncCounter/OwnStateProps';
import UserContainer from './redux-components/User/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter />
        <DecrementCounter/>
        <OwnPropsState hasOwnProps/>
        <OwnPropsState/> */}
        {/* <HooksIncCounter/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
