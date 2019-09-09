import React from "react"


class UserCard extends React.Component {

    
    constructor() {
        super()
        this.state = {
        userList: []
    }}

    componentDidMount() {
        
        this.setState({userList: this.props.users})
        //console.log(this.props.users)
    }

    render() {
        return (
            <div>
            </div>
        )


    }
}

export default UserCard
