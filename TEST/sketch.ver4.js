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

  pw.input(changeParaHtml);
  let para = select("#para")
  
   para.html("hi");


  function changeParaHtml() {
    vig = vigenere(textBox.value(), pw.value(), status);


    para.html(vig);
  }
}
