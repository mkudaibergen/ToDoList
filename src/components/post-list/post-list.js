import React, { Component } from 'react'
import './post-list.css'
import PostListItem from '../post-list-item'

export default class PostList extends Component{

    render(){
        const {list} = this.props
        const items = list.map(item=>{
            return <PostListItem 
                        onDelete = {()=>this.props.onDelete(item.id)} 
                        onFavourities = {()=>this.props.onFavourities(item.id)} 
                        onLike = {()=>this.props.onLike(item.id)} 
                        data = {item} 
                        key={item.id}
                    />
        })
        return (
            <div>
                <ul className = "app-list list-group">
                    {items}
                </ul>
            </div>
        )
    }
}