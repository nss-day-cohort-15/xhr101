var tbody = document.querySelector('tbody')

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

// ASYNC getJSON function (STRING: url, FUNCTION: callback)
// callback function (OBJECT: data)

function getJSON (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', function () {
    var data = JSON.parse(xhr.responseText)
    callback(data)
  })
  xhr.send()
}

// USAGE:

getJSON('http://api.randomuser.me/?results=50', function (data) {
  var people = data.results

  people.forEach(function (person) {
    tbody.innerHTML += `
      <tr>
        <td><img src="${person.picture.thumbnail}"></td>
        <td>${person.name.first} ${person.name.last}</td>
        <td>${person.phone}</td>
      </tr>`
  })
})
