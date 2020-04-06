var memberYChk = document.getElementById("memberY");
var memberNChk = document.getElementById("memberN");

function memberSelect(){

    var memberForm = document.getElementById("memberLogin");
    var nonMemberForm = document.getElementById("nonLogin");

    if(memberYChk.checked){
        memberForm.classList.add("on");
        nonMemberForm.classList.remove("on");
    }
    else if(memberNChk.checked){
        memberForm.classList.remove("on");
        nonMemberForm.classList.add("on");
    }
}

memberYChk.addEventListener("click", memberSelect);
memberNChk.addEventListener("click", memberSelect);