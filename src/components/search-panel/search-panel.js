import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component{
    state = {
        text: ''
    }
    onUpdateSearch = (event)=>{
        this.setState({
            text: event.target.value
        }, ()=>this.props.searchPanel(this.state.text))
    }
    render(){
        return (
                <input 
                    type="text" 
                    placeholder="Поиск по записям" 
                    className="form-control search-input" 
                    onChange = {this.onUpdateSearch}
                />
        )
    }
}