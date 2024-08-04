function solve() {
  const [checkBtn, resetBtn] = Array.from(document.querySelectorAll('button'));
  const tableRows = Array.from(document.querySelectorAll('tbody > tr'));
  let tableBorder = document.querySelector('table');
  let output = document.querySelector('#check > p');
  let [matrix, solved] = [[], true];

  function resetResult() {
    tableRows.forEach(x => {
      Array.from(x.querySelectorAll('td > input')).forEach(y => {
        y.value = '';
      });
    });
    tableBorder.style.border = '';
    output.textContent = '';
    output.style.color = '';
  }

  function checkSudomu() {
    for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      let col = matrix.map(row => row[i]);
      if (col.length !== new Set(col).size || row.length !== new Set(row).size) {
        solved = false;
        break;
      }
    }
  }

  function checkResult() {
    matrix = [];
    for (const item of tableRows) {
      let row = Array.from(item.querySelectorAll('td > input'));
      let rowData = [];
      for (const item of row) {
        let number = Number(item.value);
        rowData.push(number);
      }
      matrix.push(rowData);
    }
    solved = true;
    checkSudomu();
    if (solved) {
      tableBorder.style.border = '2px solid green';
      output.textContent = 'You solve it! Congratulations!';
      output.style.color = 'green';
    } else {
      tableBorder.style.border = '2px solid red';
      output.textContent = 'NOP! You are not done yet...';
      output.style.color = 'red';
    }
  }

  checkBtn.addEventListener('click', checkResult);
  resetBtn.addEventListener('click', resetResult);
}