import React, { Component } from 'react'
import Bookmark from './Bookmark'
class BookList extends Component {

    formDivStyle = {
        display: this.props.displayForm ? "flex" : "none"
    } 

    render() {

        return (
            <div className="bookmark-list">
                {/* <button className="add-bookmark" onClick={this.props.toggleForm} >+Add Bookmark</button> */}
                <h3>Simplified Bookmarks</h3>
                <Bookmark bookmarks={this.props.bookmarks} deleteHandler={this.props.deleteHandler} editHandler={this.props.editHandler}/>
            </div>
        )
    }
}
export default BookList