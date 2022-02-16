import React, { Component } from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import './app.css'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

export default class App extends Component{
    state = {
        id: 0,
        data: [], 
        term: '',  
        filter: 'all'
    }
    getText = (item)=>{
        let newObj = {
            label: item, 
            important: false, 
            like: false,
            id: this.state.id++
        }
        let data = [...this.state.data, newObj]
        this.setState({
            data: data
        })
    }
    deleteItem = (id)=>{
        let index = this.state.data.findIndex((elem)=>elem.id === id)
        let newData = [...this.state.data.slice(0, index), ...this.state.data.slice(index+1, this.state.data.length)]
        this.setState({
            data: newData
        })

    }
    onToggleImportant = (id)=>{
        let index = this.state.data.findIndex((elem)=>elem.id === id)
        let old = this.state.data[index]
        let newItem = {...old, important: !old.important}
        let newArr = [...this.state.data.slice(0, index), newItem, ...this.state.data.slice(index+1, this.state.data.length)]
        this.setState({
            data: newArr
        })
    }
    likeItem = (id)=>{
        let index = this.state.data.findIndex((elem)=>elem.id === id)
        let old = this.state.data[index]
        let newItem = {...old, like: !old.like}
        let newArr = [...this.state.data.slice(0, index), newItem, ...this.state.data.slice(index+1, this.state.data.length)]
        this.setState({
            data: newArr
        })
    }
    onUpdateSearch = (text)=>{
        this.setState({
            term: text
        })
    }
    searchPost = (items, term)=>{
        if(term.length === 0){
            return items
        }
        return items.filter(item=>{
            return item.label.indexOf(term)>-1
        })
    }
    onFilterSelect = (item)=>{
        this.setState({
            filter: item
        })
    }
    filterPost = (items, filter)=>{
        if(filter === 'like'){
            return items.filter(item=>item.like)
        }else {
            return items
        }
    }
    render(){
        const {data, filter, term} = this.state
        let visiblePost = this.filterPost(this.searchPost(data, term), filter)
        let allPostCount = data.length
        let likedPosts = data.filter(item=>item.like).length
        return (
            <div className = "app">
                <AppHeader 
                    count = {allPostCount} 
                    number = {likedPosts}
                />
                <div className = "search-panel d-flex">
                    <SearchPanel searchPanel = {this.onUpdateSearch}/>
                    <PostStatusFilter 
                        onFilterSelect = {this.onFilterSelect} 
                        filter = {filter}
                    />
                </div>
                <PostList 
                    list = {visiblePost} 
                    onDelete={this.deleteItem} 
                    onFavourities = {this.onToggleImportant} 
                    onLike = {this.likeItem}
                />
                <PostAddForm sendText = {this.getText}/>
            </div>
        )
    }
}