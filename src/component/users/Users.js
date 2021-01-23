import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users:[
            {
                id: '1',
                login: 'Kundan',
                avatar_url:'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/KUNDANKUMAR092'
            },
            {
                id: '2',
                login: 'Defunkt',
                avatar_url:'https://avatars.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            },
            {
                id: '3',
                login: 'Pjhyett',
                avatar_url:'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }
    render() {
        return (
            <div style={uaserStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}
const uaserStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
