const header = document.querySelector(".header");
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 150) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const toggler = document.querySelector("#toggle-navbar");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Used only for generating products Html

// const productsGrid = document.getElementById("grid");

// fetch("../products.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => populateProducts(data));

// function populateProducts(products) {
//   products.forEach((product) => {
    
//     productsGrid.innerHTML += `
//       <li>
//         <article class="product">
//           <figure class="product-img">
//             <img
//               src="${product.image}"
//               alt="${product.title}">
//           </figure>
//           <h2 class="product-name">
//             ${product.title}
//           </h2>
//         </article>
//       </li>
//     `;
//   });
// }