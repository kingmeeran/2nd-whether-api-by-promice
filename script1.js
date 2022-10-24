function foo(){
    let r=fetch("https://restcountries.com/v3.1/all")
    r.then((data)=>data.json())
    .then((data1)=>data1.forEach((e)=>{
        try {
            let n=e.name.common
            let f=e.flags.png
            let r=e.region
            let c=e.capital
            let latlng=e.latlng
            let cc=e.cca3
            var div = document.createElement("div");
            div.innerHTML =`<div class="card-group">
            <div class="card">
            <h5 class="card-title">${n}</h5>
             <div><img src="${f}" title="'flag of ${n}';"alt="..."></div>
                <div class="card-body">                    
                  <h6 class="region">region:${r}</h6>
                  <p class="card-text">capital:${c}</p>
                  <p class="card-text">country code:${cc}</p>
                  <button type="submit" id="myBtn">clik for weather</button>
                </div>
            </div>
          </div>`
 
          document.body.append(div)
            // if(lotlong===undefined){
            //     throw new Error("invalid coordinates")
            // }
            doo(...latlng)
        
    }
    
    catch (error) {
        console.log(error);
        
    }
    }));  
    
    
}

async function doo(lat,lng){
    try {
        let r1=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3c03fb10c815bcb8cb2430683253d98f`)
        let r2=await r1.json();
        let b=document.getElementsByTagName("body")
    b.addEventListener("click",dee)
         function dee(){
             document.getElementsByTagName("body").innerHTML =r2.main.temp;
         }
    } 
    
    catch (error) {
        console.log(error.message);
        
    }
}
 

foo()
   

   
// let r=fetch("https://restcountries.com/v3.1/all")
// .then((data)=>data.json()).then((data1)=>data1.forEach((e) => {
//     try {
//        console.log(e.population); 
//     } catch (error) {
//         console.log(error);
//     }
    
// }));

