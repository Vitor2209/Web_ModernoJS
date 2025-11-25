let comparaComThis = function (param) {
    console.log(this === param)
}   

comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj) // bind fixa o this da função
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => {
    console.log(this === param)
}

comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true

