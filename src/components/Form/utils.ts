function removePrefixAndConvertToCents(valueNotFormated: string){
    let string = ""

    const start = valueNotFormated.indexOf("$")

    if (start > 0){
        string = valueNotFormated.slice(2).replaceAll(".","")
    }else {
        string = valueNotFormated.replaceAll(".","")
    }

    const arrayNum = string.split(",")

    let cents = 0

    if(arrayNum.length === 2){
        if (arrayNum[1].length === 3){
            cents = Number(arrayNum[1].slice(0,2))
        }else {
            cents = Number(arrayNum[1]) || 0
        }
        
    }

    cents += Number(arrayNum[0]) * 100
    
    return cents
}

export { removePrefixAndConvertToCents }