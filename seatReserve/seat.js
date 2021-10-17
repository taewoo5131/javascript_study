let selectSeat = [];

window.onload = function(){
    document.querySelectorAll("rect").forEach((rect,idx)=>{
        rect.addEventListener('click',rectClickCbFunc)
    })
}


rectClickCbFunc = (e)=>{
    document.getElementById(e.target.id).style.fill = "yellow"
    selectSeat[selectSeat.length] = {
        "id" : e.target.id
    }
}

reserveBtn = ()=>{
    if(selectSeat.length <= 0)return
    console.log("통과!")
    reserve(selectSeat)
        .then((result)=>{
            if(result.msg === "SUCCESS"){
                var reservedSeatsNo = ""
                result.list.forEach((seat)=>{
                    document.getElementById(seat.id).style.fill = "gray"
                    document.getElementById(seat.id).style.pointerEvents = "none"
                    reservedSeatsNo = reservedSeatsNo + seat.id + " "
                })
                document.getElementById("reservedSeatNo").children[0].innerText+=reservedSeatsNo
                selectSeat = [];
            }else{
                alert("오류발생 : 관리자에게 문의")
            }
        })
        .catch(()=>alert("catch!!!"))
}

reserve = (selectList)=>{
    return new Promise((resolve,reject)=>{
        let data;
        // api 연동 효과 1초 대기
        setTimeout(()=>{
            data = {
                "msg":"SUCCESS",
                "list":selectList
            }
            resolve(data);
            // reject();
        },1000)
    })
}