let vig;
let status = 0;
function setup() {
  noCanvas();
  let but = select("#button");
  but.mousePressed(changeStatus);

  function changeStatus() {
    if (status == 0) {
      status = 1;
      but.html("d");
    } else if (status == 1) {
      status = 0;
      but.html("e");
    }
    changeParaHtml();
  }
  let textBox = select("#input")
  let pw = select("#pw")

  pw.input(change);
  let para = select("#para")
  
   para.html("hi");


  function change() {
    vig = vigenere(textBox.value(), pw.value(), status);

    alert("hey")
    para.html(vig);
  }
}
