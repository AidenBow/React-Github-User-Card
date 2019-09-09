import React from "react"


class UserCard extends React.Component {

    componentDidMount() {
        // let newusers = this.props.users
        // this.setState({userList: newusers})
        console.log(this.props.user)
    }

    render() {
        return (
            <div>
                <p>{this.props.user.login}</p>
                <img className="App-logo" src={this.props.user.avatar_url} alt="avatar"/>
            </div>
        )


    }
}

export default UserCard
