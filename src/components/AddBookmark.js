import React, { Component } from 'react'
class AddBookmark extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title_text: "",
            link_text: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //alert(`${this.state.link} ${this.state.title}`)
        //window.location.reload(false)
        this.props.addItem(this.props.title_text, this.props.link_text)
    }


    formDivStyle = {
        display: this.props.displayForm ? "flex" : "none"
    } 

    render() {
        return (
            <div className="add-bookmark-container" style={this.formDivStyle}>
                <fieldset>
                    <legend >Add Bookmark</legend>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="title_text" placeholder="enter bookmark title" id="name" required
                            value={this.props.title_text} onChange={this.props.handleChange} />
                        <br></br>
                        <input type="text" name="link_text" placeholder="enter bookmark link" id="link" required
                            value={this.props.link_text} onChange={this.props.handleChange} />
                        <br></br>
                        <input type="submit" value="add bookmark" />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default AddBookmark