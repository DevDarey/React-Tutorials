class App extends React.Component {
    render() {
        return (
            <div>
                <Hello name="Damilare" sender="Emmanuel"
                    bangs={5}
                />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))