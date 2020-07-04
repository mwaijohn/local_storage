import React, { Component } from 'react'

class Bookmark extends Component {


    render() {
        return (
            <div className="bookmarks">
                {
                    this.props.bookmarks.map((element, index) => <div className="bookmark-item" key={index}>
                        <div className="bookmark-item-container">
                            <div>
                                <div>
                                   <a href={element['link']} target="blank" className="title">{element['title']}</a>
                                </div>
                                <small>{element['link']}</small>
                            </div>
                            <div>
                                <button className="edit" onClick={this.props.editHandler.bind(this, element['title'], element['link'])}>Edit</button>
                                <button className="delete" onClick={this.props.deleteHandler.bind(this, element['title'], element['link'])}>Delete</button>
                            </div>
                        </div>

                    </div>
                    )
                }
            </div>
        )
    }
}

export default Bookmark
