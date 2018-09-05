import React, {Component} from 'react';
import axios from 'axios';
import './css/fetch.css'

class Fetch extends Component {
  constructor(){
    super();
    this.state = {
      jsonplaceholder: [],
    }
  }
  componentDidMount = _ => {
    this.showData()
  };

  showData = _ => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      const jsonplaceholder = res.data;
      this.setState({ jsonplaceholder });
    })
    .catch(err => console.error(err))
  }

  filterData = (e) => {
    return this.setState({jsonplaceholder: this.state.jsonplaceholder.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase()))})
  }

  render() {
    return(
      <div className="todos">
        <input type="text" name="filter" className="filterInput" placeholder="search and find." onChange={this.filterData}></input>
        {this.state.jsonplaceholder.map(data =>
        <div key={data.id}>
          <span className="userId">{data.userId}</span> => <span className="idTodos">{data.id}</span> => <span className="titleTodos">{data.title}</span>
        </div>)}
      </div>
    )
  }
}
export default Fetch;
