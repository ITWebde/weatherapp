let apiKey = 'fe90ef27cdc82f78a658a073edd13e12'

let elForm = document.getElementById('elForm');
let elSearchInp = document.querySelector('.search-input');
let elBtn = document.getElementById('elBtn');
let btn = document.querySelectorAll('.btn-province')
let elList = document.querySelector('#elList');
let prov = document.querySelector('#province')
let limit = 5;


function handelSubmit(e) {
    e.preventDefault()
    elList.innerHTML = null
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=${limit}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            dataRender(data)
        })
        
        function dataRender(data) {
        data.forEach(element => {
            let childList = document.createElement('li');
            let childBtn = document.createElement('button')

            childBtn.textContent = element.name
            console.log(childBtn);
            childList.append(childBtn)
            elList.append(childList)
            
            childBtn.classList.add('btn-Js')
            childList.classList.add('btn-Li')
            console.log(childList);

            function handelClickBtn(e){
                localStorage.setItem('let',e.target.dataset.lat)
                localStorage.setItem('lon',e.target.dataset.lon)
                window.open('/city.html', '_blank')
            }
            childBtn.addEventListener('click', handelClickBtn)
        })
    }

}

elSearchInp.addEventListener('input', handelSubmit)


function handleData(e) {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e.target.textContent}&limit=1&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          dataHandel(data)
        });

    function dataHandel(data){
        data.forEach(elem => {
            let lat = e.target.dataset.lat = elem.lat
            let lon = e.target.dataset.lang = elem.lon
            localStorage.setItem('let', lat)
            localStorage.setItem('long', lon)
            window.open("/city.html", '_blank')
        });
    }
}

prov.addEventListener('click', handleData)

// console.log(`https://api.openweathermap.org/geo/1.0/direct?q=Andijon&limit=1&appid=${apiKey}`);
 
// console.log(`https://api.openweathermap.org/data/2.5/weather?lat=40.7833471&lon=72.3506746&appid=${apiKey}`);