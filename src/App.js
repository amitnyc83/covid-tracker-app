import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './API';

import covidLogo from './images/covidLogo.jpeg';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const dataResponse = await fetchData();

    this.setState({ data: dataResponse });
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }
  render(){
    const { data, country } = this.state;
    return(
      <div className={styles.container}>
       <img className={styles.image} src={covidLogo} alt='Covid-19 Tracker' />
       <Cards data={data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart data={data} country={country}/>
      </div>
    )
  }
}


export default App;
