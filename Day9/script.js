var root = document.getElementById("root");
const API = "http://demo.hoangduykhanh.com/api/products?fbclid=IwAR1yb3C_T8TNkxkoVILaibQIkZ4uqcVIkc3Og6TtM0szMCiXLTF0szH8k2U";

// const res = fetch(API);

// const res2 = res.then(data => data.json()).then(val => {
//     var arr = [];
//     var data = val.data;
//     for(let i = 0 ; i < data.length; i++){
//         arr.push(`
//         <div class="card" style="width: 18rem;">
//         <img src="${data[i].thumb}" class="card-img-top" alt="">
//         <div class="card-body">
//           <h5 class="card-title">${data[i].name}</h5>
//           <p class="card-text">${data[i].description}</p>
//           <a href="#" class="btn btn-primary">${data[i].price}</a>
//         </div>
//       </div>
        
//         `)
//     }
//     console.log(arr);
//     root.innerHTML = arr.join("");

// });

async function fetchData(api) {
    const res = await fetch(api);
    
    const data = await res.json();
     console.log(data);
}
 fetchData(API);

