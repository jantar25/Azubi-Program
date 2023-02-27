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
