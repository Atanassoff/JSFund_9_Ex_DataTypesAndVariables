function reversedString(str){
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr += str[i];
    }
    console.log(revStr);
}

reversedString('ABC') 
//CBA
reversedString('1L&') 
//&L1