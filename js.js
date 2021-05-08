function getRandom() {
  let result = [];
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i = 0; result.length < 5; i++) {
    let a = letters.charAt(Math.floor(Math.random() *
      letters.length));
    if (!result.includes(a)) {
      result.push(a)
    }
  }
  console.log(i)
  for (j = 0; j < 5; j++) {
    document.getElementById([j]).innerHTML = (result[j]);
    document.getElementById([j]).value = (result[j]);
  }
}

getRandom();

function getList() {
  document.getElementById('selected').textContent = ' ';
  fetch('list.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        if (element.name.charAt(0) == document.getElementById('select').value) {
          document.getElementById('selected').innerHTML += element.name + "<br>"
        }
      });
      if (document.getElementById('selected').textContent == ' ') {
        document.getElementById('selected').textContent = "No matches result!"
      }
    });
}
