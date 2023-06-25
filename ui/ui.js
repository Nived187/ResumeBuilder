
const addFields = (value)=>{

    if(value){
        var id = document.getElementById(value)
        var input = document.createElement("input")
        var br = document.createElement('br')
        input.type='text'
        input.name=`${value}`
        id.appendChild(input)
        id.appendChild(br)
    }
    
}

//Enter languages : <input type="text" name="langs"> &nbsp &nbsp 
// read<input type='checkbox' value="read"> &nbsp
// write<input type='checkbox' value="write"> &nbsp
// speak<input type='checkbox' value="read">