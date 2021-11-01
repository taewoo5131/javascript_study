function solution(new_id) {
// "...!@BaT#*..y.abcdefghijklm"	"bat.y.abcdefghi"
// "z-+.^."	"z--"
// "=.="	"aaa"
// "123_.def"	"123_.def"
// "abcdefghijklmn.p"	"abcdefghijklmn"
    // let paramId = "...!@BaT#*..y.abcdefghijklm.";
    
    let paramId = "abcdefghijklmn.p";
    // let paramId = new_id;
    console.log(typeof paramId)

    paramId = new_id
    .toLowerCase()
    .replace(/[^\w\.\-]/g, '')
    .replace(/[\.]{2,}/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '');

    if(paramId == ""){
        paramId = "a"; 
    }

    if (paramId.length >= 16) {
        paramId = paramId
            .slice(0, 15)
            .replace(/\.$/, '');
    }
    if(paramId.length <= 2){
        paramId = paramId.toString().padEnd(3, paramId[paramId.length - 1])
    }

    // paramId = paramId.join('')
    if(typeof paramId != 'string'){
        paramId = paramId.join('')
    }
    return paramId;
}
console.log(solution())