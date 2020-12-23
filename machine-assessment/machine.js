class Machine extends React.Component {
    render() {
        const slot = getSlot()
        const { s1, s2, s3 } = this.props
        const isWinner = (s1 === s2) && (s2 === s3)

        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{isWinner ? "Winner" : "Loser"}</p>


                {/* <p1>{slot === this.props ? "You win" : "You lose"}</p1> */}
            </div>


        )
    }
}
function getSlot() {
    const slotValue = ['X', 'Y']
    return slotValue[Math.floor(Math.random() * slotValue.length)]
}