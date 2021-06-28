import React, {Component} from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

class App extends Component {
  render() {
    return(
      <>
  <NumberProvider>
    <Calculator />
  </NumberProvider>
      </>
    );
  }
};

export default App;