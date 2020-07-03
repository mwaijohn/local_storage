import React, { Component } from 'react'

class Bookmark extends Component {


    render() {
        return (
            <ul className="bookmarks">
                {
                    this.props.bookmarks.map((element, index) => <li className="bookmark-item" key={index}>
                        <div className="bookmark-item-container">
                            <div>
                                <div>
                                    {index + 1} <a href={element['title']} target="blank" className="title">{element['link']}</a>
                                </div>
                                <small>{element['title']}</small>
                            </div>
                            <div>
                                <button className="edit" onClick={this.props.editHandler.bind(this, element['link'], element['title'])}>Edit</button>
                                <button className="delete" onClick={this.props.deleteHandler.bind(this, element['link'], element['title'])}>Delete</button>
                            </div>
                        </div>

                    </li>
                    )
                }
            </ul>
        )
    }
}

export default Bookmark
