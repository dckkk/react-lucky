import React, { Component } from 'react';

import { getData, like } from '../actions/entities';

class Search extends Component {
  constructor () {
    super();
    
    this.state = {
        "userId": "",
        "data": ""
    }
    
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    var userId = sessionStorage.getItem("id") ? sessionStorage.getItem("id") : null;
    
    var res = getData(null, userId);
    this.setState({
        "userId": userId,
        "data": res
    })
  }
  
  shouldComponentUpdate(newProps, newState) {
      return newState ? true : false;
  }

  handleKeyUp(e) {
    var keywords = e.target.value
    , userId = this.state.userId;

    var res = getData(keywords, userId);
    this.setState({
        "data": res
    })
  }

  handleClick(data_name, type) {
    like(this.state.userId, data_name, type)
    var res = getData("", this.state.userId);
    this.setState({
        "data": res
    })
  }
  
  render() {
    const listData = this.state.data.map((data, i) => {
        if (data.isLiked) {
            return <tr key={i}>
                <td>{data.name}</td>
                <td className="col-btn">
                    <button className="btn-like btn-active" onClick={(e) => this.handleClick(data.name, "unlike", e)}>
                        Unlike
                    </button>
                </td>
            </tr>
        } else {
            return <tr key={i}>
                <td>{data.name}</td>
                <td className="col-btn">
                    <button className="btn-like" onClick={(e) => this.handleClick(data.name, "like", e)}>
                        Like
                    </button>
                </td>
            </tr>
        }
    })
    return (
        <div>
            <h3>Search</h3>
            <input type="text" className="search-form form-control" placeholder="Ketik untuk mencari .." onKeyUp={this.handleKeyUp}/>
            <table>
                <tbody>
                    {listData}
                </tbody>
            </table>
        </div>
    )
  }

}


export default Search;
