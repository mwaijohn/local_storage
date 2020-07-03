import React, { Component } from 'react'
import './App.css';
import './components/BookList'
import './components/styles.css'
import BookList from './components/BookList';
import AddBookMark from './components/AddBookmark'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: "",
      link: "",
      items: [],
      displayForm: true
    }
  }


  getStoredLinks = () => {
    let bookmarks = [];

    for (var i = 0; i < window.localStorage.length; i++) {

      // set iteration key name
      var key = localStorage.key(i);

      // use key name to retrieve the corresponding value
      var value = localStorage.getItem(key);

      // console.log the iteration key and value
      console.log('Key: ' + key + ', Value: ' + value);
      let bookmarkItem = {
        "title": key,
        "link": value,
      }
      bookmarks.push(bookmarkItem)
    }
    //localStorage.removeItem("j")
    console.log(bookmarks.length);

    this.setState({
      items: bookmarks
    })
  }


  componentDidMount() {
    this.getStoredLinks()
  }

  deleteHandler = (index, key) => {
    localStorage.removeItem(key)
    //console.log("kjhjhjh")
    this.state.items.pop(index)
    this.setState({
      items: this.state.items
    })

    console.log(index, key)
    // this.getStoredLinks()
  }

  addItem = (title,link) => {
    console.log(title)
    window.localStorage.setItem(link, title);
    this.setState({
      items: [...this.state.items, {
        "title": title,
        "link": link,
      }]
    })
  }

  toggleAddBookMarkForm = () => {
    this.setState({
      displayForm: !this.state.displayForm,
    })
  }

  render() {
    const bookmarks = this.state.items

    return (
      <div className="App">
        <AddBookMark addItem={this.addItem} displayForm={this.state.displayForm}/>
        <BookList deleteHandler={this.deleteHandler} bookmarks={bookmarks} toggleForm={this.toggleAddBookMarkForm}/>
      </div>
    )
  }
}

export default App
