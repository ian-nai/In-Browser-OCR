let globalVariable = 'eng';
var select;


document.getElementById("setLang").onclick = setOCRlang;
const image = document.getElementById('fileElementId').files[0];


function setOCRlang() {
    var cust_lang = document.getElementById("customLang");
    if (cust_lang.value.trim().length === 0) {
        //pass
    } else {
        var custLangInput = document.getElementById("customLang");
        globalVariable = custLangInput.value;
    }

    console.log(globalVariable);
}
window.onload = function() {
    select = document.getElementById('dropdown');
    console.log(select);
}

function changeHiddenInput(objDropDown) {
    console.log(objDropDown);
    var objHidden = document.getElementById("hiddenInput");
    objHidden.value = objDropDown.value;
    globalVariable = objHidden.value;
}


$("#btn-save").click(function() {
    var text = $("#TextArea").val();
    var filename = $("#input-fileName").val()
    var blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, filename + ".txt");
});
