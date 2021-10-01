//given a string, returns a new string from the passed position to the left
String.prototype.Left = (myString, position) => {
    const leftOfTheString = myString.slice(0, position)
    return leftOfTheString
}

//given a string, returns a new string from the passed position to the right
String.prototype.Right = (myString, position) => {
    const RightOfTheString = myString.slice(position, myString.length)
    return RightOfTheString
}