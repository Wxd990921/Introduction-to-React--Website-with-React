import React from 'react'


export default class MovieList extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return<div>
            <h1>MovieList----{this.props.match.params.type}----{this.props.match.params.page}</h1>
        </div>
    }
}
