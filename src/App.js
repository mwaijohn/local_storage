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
      displayForm: true,
      testv:"block",
      title_text: "",
      link_text: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
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
    // this.state.items({
    //   "title": index,
    //   "link": key,
    // })
    // this.setState({
    //   items: this.state.items
    // })

    console.log(index, key)
    this.getStoredLinks()
  }

  editHandler = (value, key) => {
    this.setState({
      link_text: value,
      title_text: key
    })
  }

  addItem = (title,link) => {
    console.log(title)
    window.localStorage.setItem(link, title);
    this.getStoredLinks() 

    this.setState({
      link_text: "",
      title_text: ""
    })
  }

  toggleAddBookMarkForm = () => {
    this.setState({
      displayForm: !this.state.displayForm,
      testv:"none"
    })
  }

  render() {
    const bookmarks = this.state.items

    return (
      <div className="App">
        <AddBookMark addItem={this.addItem} displayForm={this.state.displayForm} title_text={this.state.title_text}
        link_text={this.state.link_text} handleChange = {this.handleChange}/>
        <BookList deleteHandler={this.deleteHandler} bookmarks={bookmarks} toggleForm={this.toggleAddBookMarkForm}
        editHandler = {this.editHandler}/>
      </div>
    )
  }
}

export default App
