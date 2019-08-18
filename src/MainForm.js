import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import Table from './Table';

import axios from 'axios';


export class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      submittingState: "",
      data: [],
    };
  }

  handleInputChange = ({ target: { name, value, type, checked } }) => {
    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
  };

  handleSubmitForm = async (e) => {
    this.setState({ submittingState: 'submitted' });
    const result = await axios.get('/smym-data.json');
    console.log(result.data);
    this.setState({ data: result.data });
  }

    render() {
        return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Header />
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Investment amount:</h1>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={this.handleInputChange}/>
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
        <p className="lead">Investment analytics tool</p>
        <p className="lead">
          <button className="btn btn-lg btn-secondary" onClick={this.handleSubmitForm}>Search</button>
        </p>  
        
        
    <Table data={this.state.data}/>
      </main>
      <Footer />
      </div>
        )
    }
}

export default MainForm;
