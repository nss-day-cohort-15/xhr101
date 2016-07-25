var tbody = document.querySelector('tbody')

var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://api.randomuser.me/?results=50')
xhr.addEventListener('load', didLoadData)
xhr.send()

function didLoadData () {
  var people = JSON.parse(xhr.responseText).results

  people.forEach(function (person) {
    tbody.innerHTML += `
      <tr>
        <td><img src="${person.picture.thumbnail}"></td>
        <td>${person.name.first} ${person.name.last}</td>
        <td>${person.phone}</td>
      </tr>`
  })
}





