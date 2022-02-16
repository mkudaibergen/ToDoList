import React, { Component } from 'react'
import './app-header.css'

export default class AppHeader extends Component{
    render(){
        const {count, number} = this.props
        return (
            <div className = "app-header">
                <h1>Finrod Felagund</h1>
                <h2>{count}  записей, из них {number} понравилось</h2>
            </div>
        )
    }
}