import React, { Component } from 'react'
import './post-add-form.css'

export default class PostAddForm extends Component{
    state = {
        text: ''
    }
    addPost = (event)=>{
        this.setState({
            text: event.target.value
        })
    }
    sendText = (event)=>{
        event.preventDefault()
        this.props.sendText(this.state.text)
        this.setState({
            text: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.sendText} className="bottom-panel d-flex">
                    <input 
                        onChange = {this.addPost} 
                        value={this.state.text}
                        type="text"
                        placeholder="О чем вы думаете сейчас?"
                        className="form-control new-post-label"
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-secondary"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}