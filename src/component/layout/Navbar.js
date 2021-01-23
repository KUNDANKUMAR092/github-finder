import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary">
                <span><i class="fab fa-github"></i>{this.props.title}</span>
            </nav>
        )
    }
}

export default Navbar
