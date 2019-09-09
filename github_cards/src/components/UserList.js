import React, {Component} from "react"
import UserCard from "./UserCard.js"

class UserList extends Component {

        state = {
            users: [],
            usernames: ["aidenbow", "lilvina", "jacobangulo"]
        }

    componentDidMount() {       
        this.state.usernames.map(name => {
                fetch(`https://api.github.com/users/${name}`)
                .then(res => res.json())
                .then(res => {
                    this.setState({users: [...this.state.users, res]})
                    console.log(this.state.users)})
                .catch(err => err)
                return console.log(this.state.users)
        })

        //setInterval(() => { console.log(this.state.users)}, 2000)
        
    }
    

    render() {
        return (
            <div className="App-header">
                {this.state.users.map(user => {
                    return <UserCard key={user.id} user={user} />
                })}
            </div>
        )


    }
}

export default UserList;