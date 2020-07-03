import React, { Component } from 'react'
class AddBookmark extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title_text: "",
            link_text: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //alert(`${this.state.link} ${this.state.title}`)
        //window.location.reload(false)

        this.props.addItem(this.state.title_text,this.state.link_text)
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
                            value={this.state.title_text} onChange={this.handleChange} />
                        <br></br>
                        <input type="text" name="link_text" placeholder="enter bookmark link" id="link" required
                            value={this.state.link_text} onChange={this.handleChange} />
                        <br></br>
                        <input type="submit" value="add bookmark" />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default AddBookmark