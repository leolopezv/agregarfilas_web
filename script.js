document.getElementById('addRow').addEventListener('click', function() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').checked;

    if (input1 && input2) {
        var tableBody = document.getElementById('tableBody');
        var newRow = tableBody.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.textContent = input1;
        cell2.textContent = input2;
        cell3.textContent = input3 ? 'Si':'No';

        // Clear the input fields after adding the row
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').checked = false;
    } else {
        alert('Please fill in all fields');
    }
});