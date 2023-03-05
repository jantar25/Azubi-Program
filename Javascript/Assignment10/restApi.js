
const tableBody = document.querySelector('#table-body')
const button = document.querySelector('#fetchBtn')

// PROMISES
const fetchDataWithPromise = () => {
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

// ASYNC/AWAIT
const fetchDataWithAsyncAwait = async () => {
    try {
        const rawData = await fetch('https://reqre.in/api/users?page=2',{
            headers: { 'content-Type': 'application/json'},
            method: 'GET'
        })
        const readabledata = await rawData.json()
        tableBody.innerHTML = readabledata.data.map(array => `
        <tr>
            <td>
                <img src=${array.avatar} alt='Avatar' />
            </td>
            <td>${array.first_name}</td>
            <td>${array.last_name}</td>
            <td>${array.email}</td>
        </tr>
    `).join('')
    } catch (error) {
        tableBody.innerHTML = `<h2>${error}</h2>`
        tableBody.style.color = 'red'
        console.log(error)
    }
}

button.addEventListener('click',fetchDataWithAsyncAwait)