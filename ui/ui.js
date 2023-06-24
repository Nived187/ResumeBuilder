
const addFields = (value)=>{

    if(value){
        var id = document.getElementById(value)
        var input = `<input type = text name='${value}'><br>`
        id.appendChild(input)
    }
}

//Enter languages : <input type="text" name="langs"> &nbsp &nbsp 
// read<input type='checkbox' value="read"> &nbsp
// write<input type='checkbox' value="write"> &nbsp
// speak<input type='checkbox' value="read">