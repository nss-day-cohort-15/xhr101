var tbody = document.querySelector('tbody')

var xhr = new XMLHttpRequest()
xhr.open('GET', 'data.json')
xhr.addEventListener('load', didLoadData)
xhr.send()

function didLoadData () {
  var foods = JSON.parse(xhr.responseText).foods

  foods.forEach(function (food) {
    tbody.innerHTML += `
      <tr>
        <td>${food.name}</td>
        <td>${food.qty}</td>
      </tr>`
  })
}





