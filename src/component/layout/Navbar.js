import React, { Component } from 'react'

export class Navbar extends Component {
    static defaultProps = {
        title : 'Github fider'
    } 
    render() {
        return (
            <nav className="navbar bg-primary">
                {this.props.title}
            </nav>
        )
    }
}

export default Navbar
