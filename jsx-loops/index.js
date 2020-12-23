class App extends React.Component {
    render() {
        return (
            <Friend
                name="Johnson"
                hobbies={['praying', 'reading', 'sleeping']}
            />
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))