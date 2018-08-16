//The country short code is set as Italy (it) so it would only take in zip code pertaining to Italy

//edit the code on the URL  --- from like this

//  fetch(`https://api.zippopotam.us/it/${input}`)

//TO 

  //fetch(`https://api.zippopotam.us/us/${input}`)

//us for USA
//ca for Canada 
//es spain
//de denmark
//au australia
//at austria
//br brazil
//in india

//visit www.zippopotam.us/  to see the number of countries they support


const form = document.querySelector('#form');
const holder = document.querySelector('.output');
form.addEventListener('submit', (e) => {
  let input = document.querySelector('#input').value;

  fetch(`https://api.zippopotam.us/it/${input}`)
  .then(response => {
    if(response.status !== 200){
     alert('Invalid zipcode! please try again');
    }else{
     return response.json()
    }
  })
  .then(data => {
    let output = '';
    
    data.places.forEach(place => {
      
    output+= `
   <ul>
    <li><strong>Name:</strong> ${place['place name']}</li>
    <li><strong>State:</strong> ${place['state']}</li>
    <li><strong>Longitude:</strong> ${place['longitude']}</li>
    <li><strong>Latitude:</strong> ${place['latitude']}</li>

</ul>

    `;
    })
    
    holder.innerHTML = output;
  })
  
  e.preventDefault();
})