const Board = (props) => {
    return (
        <span onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</span>
    )
}

export default Board;


// const Student = (props) => {

//     const onAttendanceButtonClick = () => {
//         const updatedStudent = {
//             id: props.id,
//             nameData: props.name,
//             emailData: props.email,
//             isPresentData: !props.isPresent
//         };
