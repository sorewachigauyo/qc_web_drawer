const urlParams = new URLSearchParams(window.location.search);
var seq = urlParams.get("seq");
const sequence = seq === null ? [] : seq.split(",");
const circuit = new Q.Circuit(1, sequence.length + 1)
for (let i = 0; i < sequence.length; i++) {
    let gate = sequence[i];
    switch (gate) {
        case "xgate":
            circuit.set$(Q.Gate.PAULI_X, i + 1, 1);
            break;
        case "ygate":
            circuit.set$(Q.Gate.PAULI_Y, i + 1, 1);
            break;
        case "zgate":
            circuit.set$(Q.Gate.PAULI_Z, i + 1, 1);
            break;
    }
}
circuit.set$(Q.Gate.MEASURE, sequence.length + 1, 1)
document.body.appendChild( circuit.toDom() );
/* var txt  = circuit.toDiagram();
console.debug(circuit.toDiagram(true));
var tCtx = document.getElementById('textCanvas').getContext('2d'); //Hidden canvas
var lines = txt.split('\n');
var x = 30;
var y = 30;
var lineheight = 15;
for (var i = 0; i < lines.length; i++) {
    var str = "";
    var line = lines[i];
    var found = false;
     if (line) {
        for (let k = 0; k < line.length; k++) {
            str += line[k];
            if (i % 2 == 0 && line[k] == " " && !found) {
                str += "    ";
                found = true;
            }
        }
    }
    tCtx.fillText(str, 0, 10 + i * lineheight);
} */
// Text input element
