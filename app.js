const form = document.querySelector('.searchBar')
const searchInput = document.querySelector('.searchField')
const tableBody = document.querySelector('tbody')
const symbol = document.querySelector('.pair-symbol')
let pair = []




form.addEventListener('submit',handleSubmit);

function handleSubmit(e){
    e.preventDefault()
    let searchItem = searchInput.value
    searchInput.value = "";
    
    const api = `https://financialmodelingprep.com/api/v4/commitment_of_traders_report/${searchItem}?apikey=eaf1fb73ac44c1f375037f7eb20c6029`
    fetch(api)
    .then(res=>res.json())
    .then(displayData)


    function displayData(cotData){
        let dataHtml = ""

        pair = cotData.slice(0,5) 

        pair.forEach(pair=>{
        
        let date = pair.date
        let long = pair.noncomm_positions_long_all
        let short = pair.noncomm_positions_short_all
        let total = pair.noncomm_positions_long_all

        dataHtml += `
        <tr>
            <td>${date}</td>
            <td>${long}</td>
            <td>${short}</td>
            <td>${total}</td>
        
        </tr>
        `
            symbol.innerHTML = searchItem
            tableBody.innerHTML = dataHtml

        })

    }
}











// const api = 'https://financialmodelingprep.com/api/v4/commitment_of_traders_report/ES?apikey=eaf1fb73ac44c1f375037f7eb20c6029'

// const displayContainer = document.getElementById('non-comm')
// const pairSymbol = document.getElementById('pair-symbol')

// let pairs = [];

// fetch(api)
// .then(res=>res.json())
// .then(displayData)


// function displayData(cotData){
//     let dataHtml = "";

//     pairs = cotData.slice(0,10)
//     let symbol = pairs[0].symbol

//     console.log(pairs)


//     pairSymbol.innerHTML = symbol
//     pairs.forEach(data=>{
//         let date = data.date
//         let long = data.noncomm_positions_long_all
//         let short = data.noncomm_positions_short_all
//         let total = data.noncomm_positions_long_all
        


//         dataHtml += 
//         `
//         <tr>
//             <td>${date}</td>
//             <td>${long}</td>
//             <td>${short}</td>
//             <td>${total}</td>

//         </tr>`


//     displayContainer.innerHTML =dataHtml

//     } )

    
// }
