function Person(name, surname) {
    this.name = name
    this.surname = surname
}

String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

function flName(){
    var fullName = document.getElementById("fullname").value.trim()
    var names = fullName.split(" ")
    var firstName = names[0].capitalize()
    var lastName = names.slice(1).join(" ").capitalize()

    var person = new Person(firstName, lastName)
    addToTable(person)
    resetInput()
}

function addToTable(person) {
    var tableBody = document.querySelector("table")
    var newRow = tableBody.insertRow()
    var nameCell = newRow.insertCell(0)
    var surnameCell = newRow.insertCell(1)

    newRow.classList.add("person-row")

    nameCell.textContent = person.name
    surnameCell.textContent = person.surname
}

function resetInput(){
    document.getElementById("fullname").value = ""
}