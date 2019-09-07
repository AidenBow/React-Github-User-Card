import React from "react"


class UserList extends React.Component {
    constructor() {
        super()
        this.state = {
        users: []
    }}

    componentDidMount() {
        fetch("https://api.github.com/users/aidenbow")
        .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({users: res})
                console.log(this.state)
            })
    }

    render() {
        return (
            <div>
                <p>dawawd</p>
            </div>
        )


    }
}

export default UserList