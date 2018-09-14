
// var countNeighbors = function(board, x, y) {
//   var offsets = [-1, 0, 1];
//   var countAlive = 0;
//   offsets.forEach(function(yOffset) {
//     offsets.forEach(function(xOffset) {
//       if (!(yOffset === 0 && xOffset === 0)) {
//         var cellAlive = (board[y + yOffset] || [])[x + xOffset];
//           if (cellAlive) {
//           countAlive++;
//           }
//         }
//       });
//     });
//     return countAlive;
//   };

//   var shouldLive = function(cell, livingNeighborCount) {
//     return livingNeighborCount === 3
//       || (cell && livingNeighborCount === 2);
//     };

//   var game = function(board) {
//     return board.map(function(row, y) {
//       return row.map(function(cell, x) {
//         var countAlive = countNeighbors(board, x, y);
//         return shouldLive(cell, countAlive);
//         });
//       });
//     };
//     console.log(
//       game(
//           [
//             [false, true, false],
//             [false, true, false],
//             [false, true, false],
//           ]
//       )
//     );

let Board = () =>
//call BoardRow

let BoardRow = () =>
//call BoardSquare

let BoardSquare = () =>
//Build BoardSquares


class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state({
      life: life
    })
  }
  render() {
    return (
      <div className="board">
        <div className="board-row">
          <div className="board-square"></div>
          <div className="board-square"></div>
          <div className="board-square"></div>
        </div>
        <div className="board-row">
          <div className="board-square"></div>
          <div className="board-square"></div>
          <div className="board-square"></div>
        </div>
        <div className="board-row">
          <div className="board-square"></div>
          <div className="board-square"></div>
          <div className="board-square"></div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(Board), document.querySelector('.app'));