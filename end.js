// End game
var endGame = document.getElementById("end-game");

endGame.innerHTML = `<ul>
    <li>
      <h2>Ochtend</h2>
    </li>
    <li>
      <p>Een ${localStorage.getItem("userBreakfastStart")}</p>
    </li>
    <li>
      <p>Met ${localStorage.getItem("userBreakfastWith")}</p>
    </li>
    <li>
      <p>En ${localStorage.getItem("userBreakfastAnd")}</p>
    </li>
  </ul>
  <ul>
    <li>
      <h2>Middag</h2>
    </li>
    <li>
      <p>Een ${localStorage.getItem("userLunchStart")}</p>
    </li>
    <li>
      <p>Met ${localStorage.getItem("userLunchWith")}</p>
    </li>
    <li>
      <p>En ${localStorage.getItem("userLunchAnd")}</p>
    </li>
  </ul>
  <ul>
    <li>
      <h2>Avond</h2>
    </li>
    <li>
      <p>Een ${localStorage.getItem("userDinnerStart")}</p>
    </li>
    <li>
      <p>Met ${localStorage.getItem("userDinnerWith")}</p>
    </li>
    <li>
      <p>En ${localStorage.getItem("userDinnerAnd")}</p>
    </li>
  </ul>
        `;

 
function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter', 'li', 'ul', 'div', 'img');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#printToPage')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 20,
        bottom: 20,
        left: 20,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        }, margins
    );
}