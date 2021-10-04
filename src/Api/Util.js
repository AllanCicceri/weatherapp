//given a string, returns a new string from the passed position to the left
function Left(string, position) {
    return string.slice(0, position)
}

//given a string, returns a new string from the passed position to the right
function Right(string, position) {
    return string.slice(position, string.length)
    
}

function capitalizeFirstLetter(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

const StringFunctions = {
    Left,
    Right,
    capitalizeFirstLetter
}

export default StringFunctions