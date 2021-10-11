const tab_btn = document.querySelectorAll(".tab-button");
const contant = document.querySelectorAll('.content');

tab_btn.forEach((tab,index)=>{
   tab.addEventListener("click",()=>{
    // to remove active class from previus 
    tab_btn.forEach((tab)=> tab.classList.remove("active"));
       // add active class
    tab.classList.add("active");
    // show content according to tab selected 
    contant.forEach((c)=> c.classList.remove("active") );

    // active content 
    contant[index].classList.add("active");
   })

})

// curser focus code 

function focusCampo(){
    let inputField = document.getElementById('type_name');
    if (inputField != null && inputField.value.length != 0){
        if (inputField.createTextRange){
            let FieldRange = inputField.createTextRange();
            FieldRange.moveStart('character',inputField.value.length);
            FieldRange.collapse();
            FieldRange.select();
        }else if (inputField.selectionStart || inputField.selectionStart == '0') {
            let elemLen = inputField.value.length;
            inputField.selectionStart = elemLen;
            inputField.selectionEnd = elemLen;
            inputField.focus();
        }
    }else{
        inputField.focus();
    }
}
// active input focus
focusCampo();






