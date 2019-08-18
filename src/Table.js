import React, { Component } from 'react'

export class Table extends Component {
    render() {
        if (this.props.data.length === 0) {
            return null;
        }     
        return (
           
<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col" className="tableText">Investment Options</th>
      <th scope="col" className="tableText">Your money after a year</th>
      <th scope="col">Info</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
   {this.props.data.map(item => <tr key={item.ID}>
        <th scope="row" className="tableText">{item.Name}</th>
        <th scope="row" className="tableText">${item.ROI}</th>
        <th scope="row"><a href={item.Link}>link</a></th>
      </tr>)}
    
  </tbody>
</table>
        )
    }
}

export default Table
