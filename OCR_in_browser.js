var globalVariable;
var select;

document.getElementById("runOCR").onclick = runningOCR;
const image = document.getElementById('fileElementId').files[0];
  console.log(image);

function runningOCR() {
var inp = document.getElementById('fileElementId');
for (var i = 0; i < inp.files.length; ++i) {
  var name = inp.files.item(i).name;
  var working_files = inp.files.item(i)
  //alert("here is a file name: " + name);
  runOCR(working_files);
}
}

window.onload = function () {
    select = document.getElementById('dropdown');
    console.log(select);
}

function changeHiddenInput(objDropDown) {
    console.log(objDropDown);
    var objHidden = document.getElementById("hiddenInput");
    objHidden.value = objDropDown.value;
    globalVariable = objHidden.value;
}

function runOCR(url) {
    Tesseract.recognize(url, {
    lang: globalVariable
})
         .then(function(result) {
            var appendingText = document.getElementById("TextArea")
                    //.innerText += result.text;
                    appendingText.innerHTML += result.text;
         }).progress(function(result) {
            document.getElementById("ocr_status")
                    .innerText = result["status"] + " (" +
                        math.Round(result["progress"] * 100) + "%)";
        });
}

$("#btn-save").click( function() {
  var text = $("#TextArea").val();
  var filename = $("#input-fileName").val()
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".txt");
});
