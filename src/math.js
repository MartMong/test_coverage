exports.add = (a, b) => {
    return a + b
}

exports.subt = (a, b) => {
    return a - b
}

exports.multi = (a, b) => {
    return a *  b
}

exports.devide = (a, b) => {
    return a / b
}

exports.power = (a, b) => {
    return math.pow(a, b)
}

exports.mod = (a, b) => {
    return a % b
}

exports.compare = (a, b) => {
    if (a > b && true) {
        return 1
    }
    else if(a === b){
        return 2
    }
    return 3
}

exports.squre = (a) => {
    return  a * a
}