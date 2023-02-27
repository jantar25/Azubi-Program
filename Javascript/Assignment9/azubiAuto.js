const clientArray = [
    {company: "Toyota", contact: "John", country: "U.S.A"},
    {company: "Benz", contact: "Philip", country: "Germany"},
    {company: "Vodafone", contact: "Samuel", country: "Kenya"},
    {company: "Glo", contact: "Lindamell", country: "Ghana"}
];

const tableBody = document.querySelector('#table-body')
tableBody.innerHTML = clientArray.map(array => `
    <tr>
        <td>${array.company}</td>
        <td>${array.contact}</td>
        <td>${array.country}</td>
    </tr>
`).join('')

const runEvent = (e) => {
    e.preventDefault()
    const company = document.querySelector('#company')
    const contact = document.querySelector('#contact')
    const country = document.querySelector('#country')
    const newObject = {
        company:company.value,
        contact:contact.value,
        country:country.value
    }
    clientArray.push(newObject)
    tableBody.innerHTML = clientArray.map(array => `
    <tr>
        <td>${array.company}</td>
        <td>${array.contact}</td>
        <td>${array.country}</td>
    </tr>
`).join('')

    company.value = ''
    contact.value = ''
    country.value = ''
}

const form = document.querySelector('form')
form.addEventListener('submit',runEvent)



