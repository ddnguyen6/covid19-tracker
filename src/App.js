import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import {fetchData} from './api';

class App extends Component {

    state = {
        data: {},
    }
  
    async componentDidMount() {
        const fetchedData = await fetchData();
        //console.log(fetchedData);

        this.setState( {data: fetchedData});
    }
  
  
    render() {

    const {data} = this.state;
    return (
        <div className = {styles.container}>
        <Cards
        data = {data}
        ></Cards>
        <Chart></Chart>
        <CountryPicker></CountryPicker>
      </div>
    );
  }
}

export default App;
