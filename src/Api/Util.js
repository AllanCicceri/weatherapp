//given a string, returns a new string from the passed position to the left
String.prototype.Left = function (position) {
    const leftOfTheString = this.slice(0, position)
    return leftOfTheString
}

//given a string, returns a new string from the passed position to the right
String.prototype.Right = function (position) {
    const RightOfTheString = this.slice(position, this.length)
    return RightOfTheString
}

String.prototype.capitalizeFirstLetter = function(){
    return `${this.charAt(0).toUpperCase()}${this.slice(1)}`
}
