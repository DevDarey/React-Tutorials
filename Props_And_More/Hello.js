class Hello extends React.Component {
    render() {
        const bangs = "*".repeat(this.props.bangs)
        return (
            <div>
                <p>Hi {this.props.name} </p>
                <p>My name is {this.props.sender} </p>
                <p>Welcome {this.props.name} to Herlabytes{bangs} </p>
                <p>How may i help you?</p>

            </div>


        )
    }

}