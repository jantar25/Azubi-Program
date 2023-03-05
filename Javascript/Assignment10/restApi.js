
const tableBody = document.querySelector('#table-body')
const button = document.querySelector('#fetchBtn')

const fetchData = () => {
    fetch('https://reqres.in/api/users?page=2',{
        headers: { 'content-Type': 'application/json'},
        method: 'GET'
}).then((response) => response.json())
  .then((response) => tableBody.innerHTML = response.data.map(array => `
    <tr>
        <td>
            <img src=${array.avatar} alt='Avatar' />
        </td>
        <td>${array.first_name}</td>
        <td>${array.last_name}</td>
        <td>${array.email}</td>
    </tr>
`).join(''))
  .catch((error) => console.log(error))
    
}

button.addEventListener('click',fetchData)