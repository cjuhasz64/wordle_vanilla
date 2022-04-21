



function createBoard(wordLength, noOfGuesses, location)
{

    for (var i = 0; i < noOfGuesses; i++)
    {   
        for (var j = 0; j < wordLength; j++)
        {
            let cell = document.createElement("div");

            cell.id = `c${i}${j}`; 
            cell.innerHTML = cell.id; 
            
            location.appendChild(cell).className = "grid-item";

        }
    }


    location.style.gridTemplateColumns = `repeat(${wordLength},auto)`;

}


function setHeight(boardId)
{
    $(boardId).find('div').each(function(){
        var innerDivId = $(this).attr('id');
        document.getElementById("board2").innerHTML = "23";
    });
    
}

createBoard(5,6,document.getElementById('board'));

setHeight("board")




/*
document.getElementById("board").innerHTML = board;

let x = "";

for (let i = 0; i < rowCount; i++)
{
   
    for (let j = 0; j < wordLength; j++)
    {
        //document.getElementById("c00").style.height = document.getElementById("c00").clientWidth + "px";
        document.getElementById("c00").style.height = "4px";    
    }

    
    
}

*/












//`"c${i}${j}"`;


//document.getElementById("lol").innerHTML += 



//style=" height:16px"