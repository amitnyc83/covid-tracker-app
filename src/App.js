import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components'


class App extends React.Component {
  render(){
    return(
      <div>
       <Cards />
       <Chart />
       <CountryPicker />
      </div>
    )
  }
}


export default App;
