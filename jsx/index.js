class JSXDemo extends React.Component {

    render() {
        return (
            <div>
                <h1>My current mood is:{getMood()}</h1>

            </div>

        )
    }
}
function getMood() {
    const moods = ['Angry', 'Hungry', 'silly', 'Quiet', 'Paranoid']
    return moods[Math.floor(Math.random() * moods.length)]

}
ReactDOM.render(<JSXDemo />, document.getElementById('root'));