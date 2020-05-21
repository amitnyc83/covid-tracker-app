import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './API';


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

    this.setState({ data: fetchData });
  }
  render(){
    const { data } = this.state;
    return(
      <div className={styles.container}>
       <Cards data={data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart />
      </div>
    )
  }
}


export default App;
