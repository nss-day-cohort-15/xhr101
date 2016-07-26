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

// SYNCHRONOUS CALLBACKS
// DIY SYNC forEach function (ARRAY: array, FUNCTION: callback)
// callback function (OBJECT: currentValue)

function forEach (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

// USAGE:

var foods = ['apple', 'banana', 'carrot']

forEach(foods, function (food) {
  console.log(food)
})
