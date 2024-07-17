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
      console.log(product);
      document.getElementById("Products").innerHTML += `
          <div class="grid gap-10 w-40 text-xs p-2 border border-black rounded-sm">
            <div class="grid gap-5">    
                <img src="${product.images}" alt="">
                <div>
                    <h3>${product.title}</h3>
                    <p class="text-red-500">$${product.price}</p>
                </div>
            </div>
            <button href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
          </div>
    `;
    });
  });
