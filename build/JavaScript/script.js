// open list of smaller nav
document.getElementById("open").onclick = () => {
  document.getElementById("list").classList.remove("hidden");
  document.getElementById("list").classList.add("grid");
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
};
// close list of smaller nav
document.getElementById("close").onclick = () => {
  document.getElementById("list").classList.remove("grid");
  document.getElementById("list").classList.add("hidden");
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
};

// For Timer in Section 1 of Flash Sales
function UpdateTimer() {
  const now = new Date();
  const remainingTime = new Date("2024-10-25T20:59:59");
  const seconds = Math.floor((remainingTime - now) / 1000);
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secondsRemaining = Math.floor(seconds % 60);
  document.getElementById("timer").innerHTML = `
                    <div class="w-9 md:w-20 flex flex-col items-center rounded-md p-1">Day <span class="text-sm md:text-xl">${days}</span></div>
                    <p class="text-sm">:</p>
                    <div class="w-9 md:w-20 flex flex-col items-center rounded-md p-1">Hour <span class="text-sm md:text-xl">${hours}</span></div>
                    <p class="text-sm">:</p>
                    <div class="w-9 md:w-20 flex flex-col items-center rounded-md p-1">minutes <span class="text-sm md:text-xl">${minutes}</span></div>
                    <p class="text-sm">:</p>
                    <div class="w-9 md:w-20 flex flex-col items-center rounded-md p-1">seconds <span class="text-sm md:text-xl">${secondsRemaining}</span></div>
    `;
}
setInterval(UpdateTimer, 1000);

// fetch Data from API server (Search product)
// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(console.log);

// fetch Data from API server
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => data.products)
  .then((products) => {
    products.forEach((product) => {
      if (product.category === "beauty") {
        document.getElementById("beauty").innerHTML += `
        <div onclick="productpage(${product})" class="grid gap-5 w-44 border rounded-md p-5 text-xs">
          <div><img src="${product.images}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
            <button href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
          </div>
        </div>
        `;
      } else if (product.category === "fragrances") {
        document.getElementById("fragrances").innerHTML += `
        <div class="grid gap-5 w-44 border rounded-md p-5 text-xs">
          <div><img src="${product.images}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
            <button href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
          </div>
        </div>
        `;
      } else if (product.category === "furniture") {
        document.getElementById("furniture").innerHTML += `
        <div class="grid gap-5 w-44 border rounded-md p-5 text-xs">
          <div><img src="${product.images}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
            <button href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
          </div>
        </div>
        `;
      } else if (product.category === "groceries") {
        document.getElementById("groceries").innerHTML += `
        <div class="grid gap-5 w-44 border rounded-md p-5 text-xs">
          <div><img src="${product.images}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
            <button href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
          </div>
        </div>
        `;
      }
      if (product.price >= 50 && product.price <= 500) {
        document.getElementById("random").innerHTML += `
          <div class="grid gap-5 w-44 border rounded-md p-5 text-xs">
            <div><img src="${product.images}" alt=""></div>
            <div class="grid justify-center items-center gap-7">
              <div>
                <h3 class="font-bold">${product.title}</h3>
                <p class="text-red-500 line-through">$${product.price}</p>
                <p class="text-red-700 text-[10px]">$${Number(
                  (product.price * 0.8).toFixed(5)
                )}</p>
              </div>
              <button href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
            </div>
          </div>
          `;
      }
    });
  });

// function productpage(product) {
//   console.log(product);
//   document.getElementById("productPage").innerHTML = `
//        <!-- Announcement of discounts -->
//      <div class=" bg-black text-white flex justify-center gap-2 text-[7px] md:text-xs lg:text-base p-2">
//         <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
//         <a href="#">ShopNow</a>
//     </div>

//     <!-- Navigation Bar -->
//     <nav class="relative border-b-2">
//         <div class=" flex justify-around items-center text-[12px] md:text-xs lg:text-base">
//             <a href="/index.html">
//                 <img src="/build/IMG/Logo.jpg" alt="The Logo" class="w-16">
//             </a>
//             <div class="md:flex gap-2 md:gap-5 hidden">
//                 <a href="#">Home</a>
//                 <a href="#Contact">Contact</a>
//                 <a href="#About">About</a>
//                 <a href="build/HTML/login.html">Loge in</a>
//                 <a href="#" class="hidden">Loge out</a>
//             </div>
//             <div class="flex items-center gap-3 md:gap-5 md:w-1/3">
//                 <div class="bg-zinc-200 px-4 py-2 flex items-center justify-around w-full rounded-md text-[10px] ">
//                     <input type="search" name="" id="" placeholder="What are you looking for?"
//                         class="bg-inherit w-full">
//                     <i class="fa-solid fa-magnifying-glass"></i>
//                 </div>
//                 <div class="flex gap-3 items-center">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-shopping-cart"></i>
//                     <div class="hidden">
//                         <i class="fa-solid fa-user"></i>
//                     </div>
//                     <div class="md:hidden">
//                         <div id="open">
//                             <i class="fa-solid fa-bars"></i>
//                         </div>
//                         <div id="close" class="hidden">
//                             <i class="fa-solid fa-xmark"></i>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div id="list" class="border-b-2 absolute top-full w-full gap-2 justify-center items-center bg-white border-t-2 p-5 text-center hidden font-thin">
//             <div class="hover:border-b-2 border-b-zinc-600 hover:text-zinc-600"><a href="#">Home</a></div>
//             <div class="hover:border-b-2 border-b-zinc-600 hover:text-zinc-600"><a href="#Contact">Contact</a></div>
//             <div class="hover:border-b-2 border-b-zinc-600 hover:text-zinc-600"><a href="#About">About</a></div>
//             <div class="hover:border-b-2 border-b-zinc-600 hover:text-zinc-600"><a href="build/HTML/login.html">Loge in</a></div>
//             <div class="hover:border-b-2 border-b-zinc-600 hover:text-zinc-600"><a href="#" class="hidden">Loge out</a></div>
//         </div>
//     </nav>

//     <!-- product page -->
//     <div  class="py-10 px-5 grid md:grid-cols-2 gap-5 items-center justify-center">
//         <div class="w-1/2"><img src="${product.images}" alt="he img"> </div>
//         <div class=" grid gap-5">
//          <div class="grid gap-5 font-serif">
//              <div class="text-2xl grid gap-2">
//                  <h1 class="font-bold">${product.title}</h1>
//                  <p class="text-red-500">$${product.price}</p>
//              </div>
//              <p class="text-sm">${product.description}</p>
//          </div>
//          <hr>
//          <div class="flex justify-around items-center">
//              <div class="inline-flex rounded-md shadow-sm font-mono" role="group">
//                  <button type="button" class="px-4 py-2 text-sm  text-black bg-white border border-black rounded-s-lg hover:bg-gray-100 hover:text-zinc-700">
//                      <i class="fa-solid fa-minus"></i>
//                  </button>
//                  <button id="cont" type="button" class="px-10 py-2 text-sm  text-black bg-white border-t border-b border-black hover:bg-gray-100 hover:text-zinc-700">
//                    0
//                  </button>
//                  <button type="button" class="px-4 py-2 text-sm  text-white bg-zinc-600 border border-black rounded-e-lg hover:bg-gray-100 hover:text-zinc-700">
//                      <i class="fa-solid fa-plus"></i>
//                  </button>
//              </div>
//              <div class="bg-zinc-600 text-white px-10 py-2 rounded-md">Buy Now</div>
//              <div class="p-2 text-xs border border-black rounded-md"><i class="fa-solid fa-heart"></i></div>
//          </div>
//      </div>
//     </div>
//      `;
//   Window.open(`build/HTML/product.html`);
// }


let x = 1;
// Loge In
localStorage.setItem("Email", "Ayshakassem59@gmail.com");
localStorage.setItem("password", "Aysha");
// console.log(localStorage.getItem("Email"))
// localStorage.clear();
const login = async () => {
  const Email = Email_input.value
  const password = password_input.value
  console.log(Email);
  console.log(password);


//   const login_api = 'https://dummyjson.com/auth/login';
//   // Create a JS object incluing the login data
//   const login_data = {
//       Email: Email,
//       password: password
//   }
//   console.log(login_data);

//   // Convert the JS Object to JSON string
//   const json_login_data = JSON.stringify(login_data);
//   console.log(json_login_data);

//   // Create the init object to send to the API
//   const init_obj = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: json_login_data
//   };


//   // Send login information to API, and get the response
//   const res = await fetch(login_api, init_obj)
//   console.log(res);

//   // // Get the JS data from the response
//   // const data = await res.json();
//   // console.log(data);


//   // // Check if the login information is not correct
//   // if (res.status == 400) {
//   //     error.innerText = data.message;

//   //     return
//   // }

//   // // If the login info is correct
//   // if (res.status == 200) {

//   //     // convert user data to JSON
//   //     const json_data = JSON.stringify(data);
//   //     console.log(json_data)
      
//   //     // Save the user data to the browser storage
//   //     sessionStorage.user_data = json_data;

      
//   //     // Navigate to home page
//   //     location.href = '/';
//   // }



}
