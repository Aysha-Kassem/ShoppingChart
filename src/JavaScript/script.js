// open list of smaller nav
document.getElementById("open").onclick = () => {
  document.getElementById("list").classList.remove("hidden");
  document.getElementById("list").classList.add("grid");
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.getElementById("list_user").classList.add("hidden");
  document.getElementById("close_user").classList.add("hidden");
  document.getElementById("user").classList.remove("hidden");
};
// close list of smaller nav
document.getElementById("close").onclick = () => {
  document.getElementById("list").classList.remove("grid");
  document.getElementById("list").classList.add("hidden");
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
};
// see user profile
document.getElementById("user").onclick = () => {
  document.getElementById("list_user").classList.remove("hidden");
  document.getElementById("list_user").classList.add("grid");
  document.getElementById("close_user").classList.remove("hidden");
  document.getElementById("user").classList.add("hidden");
  document.getElementById("list").classList.add("hidden");
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
};
document.getElementById("close_user").onclick = () => {
  document.getElementById("list_user").classList.remove("grid");
  document.getElementById("list_user").classList.add("hidden");
  document.getElementById("user").classList.remove("hidden");
  document.getElementById("close_user").classList.add("hidden");
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
                    <div class="w-9 md:w-20 grid justify-center items-center rounded-md p-1">Day <span class="text-sm md:text-xl">${days}</span></div>
                    <p class="text-sm">:</p>
                    <div class="w-9 md:w-20 grid justify-center items-center rounded-md p-1">Hour <span class="text-sm md:text-xl">${hours}</span></div>
                    <p class="text-sm">:</p>
                    <div class="w-9 md:w-20 grid justify-center items-center rounded-md p-1">minutes <span class="text-sm md:text-xl">${minutes}</span></div>
                    <p class="text-sm">:</p>
                    <div class="w-9 md:w-20 grid justify-center items-center rounded-md p-1">seconds <span class="text-sm md:text-xl">${secondsRemaining}</span></div>
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
      AllProduct(product);
      localStorage.setItem("products", JSON.stringify(products));
    });
  });

// after logein
let user = document.getElementById("user_login");
let SignUp1 = document.getElementById("SignUp1");
let SignUp2 = document.getElementById("SignUp2");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let random = document.getElementById("random");
let Products = document.getElementById("Products");

if (localStorage.getItem("Email")) {
  SignUp1.classList.add("hidden");
  SignUp2.classList.add("hidden");
  // see user profile
  user.classList.remove("hidden");
  user.classList.add("flex");
  document.getElementById("user_name").innerText = localStorage.getItem("Name");
}

// Add all products to home page
function AllProduct(product) {
  if (product.category === "beauty") {
    document.getElementById("beauty").innerHTML += `
      <div class="grid gap-10 w-44 border rounded-md p-5 text-xs">
        <div class="grid gap-3">
          <div onclick="productpage(${product.id})"><img class="max-h-40" src="${product.images[0]}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
          </div>
        </div>
        <div class="flex gap-2 items-center">
        <button onclick="addToCart(${product.id})" href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
         <div onclick="addTolove(${product.id})" class="text-lg hover:text-red-900"><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
      `;
  } else if (product.category === "fragrances") {
    document.getElementById("fragrances").innerHTML += `
      <div class="grid gap-10 w-44 border rounded-md p-5 text-xs">
        <div class="grid gap-3">
          <div onclick="productpage(${product.id})"><img class="max-h-40" src="${product.images[0]}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
          </div>
        </div>
          <div class="flex gap-2 items-center">
        <button onclick="addToCart(${product.id})" href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
         <div onclick="addTolove(${product.id})" class="text-lg hover:text-red-900"><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
      `;
  } else if (product.category === "furniture") {
    document.getElementById("furniture").innerHTML += `
      <div class="grid gap-10 w-44 border rounded-md p-5 text-xs">
        <div class="grid gap-3">
          <div onclick="productpage(${product.id})"><img class="max-h-40" src="${product.images[0]}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
          </div>
        </div>
         <div class="flex gap-2 items-center">
        <button onclick="addToCart(${product.id})" href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
         <div onclick="addTolove(${product.id})" class="text-lg hover:text-red-900"><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
      `;
  } else if (product.category === "groceries") {
    document.getElementById("groceries").innerHTML += `
      <div class="grid gap-10 w-44 border rounded-md p-5 text-xs">
        <div onclick="productpage(${product.id})" class="grid gap-3">
          <div><img class="max-h-40" src="${product.images[0]}" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500">$${product.price}</p>
            </div>
          </div>
        </div>
          <div class="flex gap-2 items-center">
        <button onclick="addToCart(${product.id})" href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
         <div onclick="addTolove(${product.id})" class="text-lg hover:text-red-900"><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
      `;
  }
  if (product.price >= 50 && product.price <= 500) {
    document.getElementById("random").innerHTML += `
      <div class="grid gap-10 w-44 border rounded-md p-5 text-xs">
        <div class="grid gap-3">
          <div onclick="productpage(${product.id})" ><img class="max-h-40" src="${
      product.images[0]
    }" alt=""></div>
          <div class="grid justify-center items-center gap-7">
            <div>
              <h3 class="font-bold">${product.title}</h3>
              <p class="text-red-500 line-through">$${product.price}</p>
              <p class="text-red-700 text-[10px]">$${Number(
                (product.price * 0.8).toFixed(5)
              )}</p>
            </div>
          </div>
        </div>
          <div class="flex gap-2 items-center">
        <button onclick="addToCart(${
          product.id
        })" href="#" class="px-5 py-2 rounded-md border border-black">Add to card</button>
         <div onclick="addTolove(${
           product.id
         })" class="text-lg hover:text-red-900"><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
        `;
  }
}

let addedItem = [];
let loveItem = [];
// Add to card
function addToCart(id) {
  if (localStorage.getItem("Email")) {
    const productcart = JSON.parse(localStorage.getItem("products")).find(
      (p) => p.id === id
    );
    if (!productcart) {
      alert("Product not found in cart");
      return;
    }
    let productimfo = {
      ...productcart,
      number: 1,
    };
    if (localStorage.getItem("addedItem")) {
      const addedItem = JSON.parse(localStorage.getItem("addedItem")) || [];
      const product = addedItem.find((p) => p.id === id);
      if (product) {
        product.number++;
        localStorage.setItem("addedItem", JSON.stringify(addedItem));
      } else {
        addedItem.push(productimfo);
        localStorage.setItem("addedItem", JSON.stringify(addedItem));
      }
      alert("Product added to cart successfully");
    } else {
      addedItem = [...addedItem, productimfo];
      localStorage.setItem("addedItem", JSON.stringify(addedItem));
      alert("Product added to cart successfully");
    }
    document.getElementById("cartMumber").innerText = addedItem.length;
  } else {
    window.location.href = "/register.html";
  }
}

// Remove from cart
function removeFromCart(id) {
  if (localStorage.getItem("addedItem")) {
    console.log("Removing")
    const addedItem = JSON.parse(localStorage.getItem("addedItem")) || [];
    const product = addedItem.find((p) => p.id === id);
    if (product) {
      addedItem.splice(addedItem.indexOf(product), 1);
      localStorage.setItem("addedItem", JSON.stringify(addedItem));
      alert("Product removed from cart successfully");
    } else {
      alert("Product not found in cart");
    }
    window.location.href = "/Cart.html"
  }
}

// add number to cart
function increaseQuantity(id) {
  if (localStorage.getItem("addedItem")) {
    const addedItem = JSON.parse(localStorage.getItem("addedItem")) || [];
    const product = addedItem.find((p) => p.id === id);
    if (product) {
      product.number++;
      localStorage.setItem("addedItem", JSON.stringify(addedItem));
    } else {
      alert("Product not found in cart");
    }
  }
}

// decrease number from cart
function decreaseQuantity(id) {
  if (localStorage.getItem("addedItem")) {
    const addedItem = JSON.parse(localStorage.getItem("addedItem")) || [];
    const product = addedItem.find((p) => p.id === id);
    if (product) {
      if (product.number > 1) {
        product.number--;
        localStorage.setItem("addedItem", JSON.stringify(addedItem));
      } else {
        removeFromCart(id);
      }
    } else {
      alert("Product not found in cart");
    }
  }
}

// Add to love
function addTolove(id) {
  if (localStorage.getItem("Email")) {
    const productliked = JSON.parse(localStorage.getItem("products")).find(
      (p) => p.id === id
    );
    if (!productliked) {
      alert("Product not found in Liked");
      return;
    }
    if (localStorage.getItem("loveItem")) {
      const loveItem = JSON.parse(localStorage.getItem("loveItem")) || [];
      const product = loveItem.find((p) => p.id === id);
      console.log(product);
      if (product) {
        alert("Product already added to Liked");
      } else {
        loveItem.push(productliked);
        localStorage.setItem("loveItem", JSON.stringify(loveItem));
        alert("Product added to Liked successfully");
      }
    } else {
      loveItem = [...loveItem, productliked];
      localStorage.setItem("loveItem", JSON.stringify(loveItem));
      alert("Product added to Liked successfully");
    }
    document.getElementById("hesrtMumber").innerText = loveItem.length;
  } else {
    window.location.href = "/register.html";
  }
}

// remove from love
function removeFromlove(id) {
  if (localStorage.getItem("loveItem")) {
    const loveItem = JSON.parse(localStorage.getItem("loveItem")) || [];
    const product = loveItem.find((p) => p.id === id);
    if (product) {
      loveItem.splice(loveItem.indexOf(product), 1);
      localStorage.setItem("loveItem", JSON.stringify(loveItem));
      alert("Product removed from Liked successfully");
    } else {
      alert("Product not found in Liked");
    }
    window.location.href = "/liked.html"
  }
}

// open product page
function productpage(id) {
  if (localStorage.getItem("Email")) {
    const products = JSON.parse(localStorage.getItem("products")).find(
      (p) => p.id === id
    );
    localStorage.setItem("product", JSON.stringify(products));
    window.location.href = "/product.html";
  } else {
    window.location.href = "/register.html";
  }
}
