import React, { Component } from 'react'

export default class PostStatusFilter extends Component{
    state = {
         buttons: [
             {name: 'all', label: 'все'},
             {name: 'like', label: 'понравилось'}
        ]   
    }
    render(){
        const {filter, onFilterSelect} = this.props
        let buttons = this.state.buttons.map(({name, label})=>{
            const active = filter === name
            let claz = active ? " btn btn-info" : " btn btn-outline-secondary"
            return (
                <button 
                    onClick={()=>onFilterSelect(name)} 
                    className={claz} 
                    key={name}>
                    {label}
                </button>
            )
        })
        return (
            <div className = "btn-group">
                {buttons}
            </div>
        )
    }
}