let board = "<table>";

let rowCount = 6;
let wordLength = 9;


for (let i = 0; i < rowCount; i++)
{
    board += '<tr id="r' + i + '">';
    for (let j = 0; j < wordLength; j++)
    {
        board += '<td id="c' + i + j + '"></td>';

    }
    board += '</tr>';
}
    


document.getElementById("board").innerHTML = board;
