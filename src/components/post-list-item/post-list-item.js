import React, { Component } from 'react'
import './post-list-item.css'

export default class PostListItem extends Component{

    render(){
        const {data, onDelete, onFavourities, onLike} = this.props
        let classOfList = "app-list-item d-flex justify-content-between"
        if(data.important){
            classOfList += " important"
        }
        if(data.like){
            classOfList += " like"
        }
        return (
            <div>
                <li className={classOfList}>
                    <span onClick = {onLike} className="app-list-item-label">
                        {data.label}
                    </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <button onClick={onFavourities} className="btn-star btn-sm">
                            <i className="fa fa-star"></i>
                        </button>
                        <button onClick = {onDelete} className="btn-trash btn-sm">
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                    </div>
                </li>
            </div>
        )
    }
}