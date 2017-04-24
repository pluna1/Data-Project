function getData(){
    var endpoint = 'https://data.lacity.org/resource/akdk-f86v.json'
    
 fetch(endpoint)
    .then(function(data){
        return data.json()
    })// turn data into JSON
    .then(function(json){
        
     var finalHTML = ''
        
     json.forEach(function(item){
            var cardItem = `
             <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="https://c1.staticflickr.com/4/3255/2837373493_35f6a42de7.jpg">
          
         <span class="card-title">${item.facility_title}</span>
        </div>
        <div class="card-content">
          <p>Working Hours is ${item.hours_open} </p>
          <p>Contact is ${item.phone}</p>
          <p> Location is ${item.location_1_location
            + item.location_1_state + item.location_1_zip}</p>
        </div>
      </div>
    </div>
  </div>
             `
          
        
           // <p> Community Investment Service Locations + item.facility_title + item.hours_open + item.location_1_location
          //  + item.location_1_state + item.location_1_zip + item.phone     <span class="card-title">${item.facility_title}</span>
         //   .<p>
            finalHTML += cardItem
        })
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML= finalHTML
   })
           .catch(function(error){
        console.log(error )
        })
    
}
           
           