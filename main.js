const API_URL = "https://fakestoreapi.com";
const loading = document.querySelector(".loading");
let pro = document.querySelector("#pro");

async function fetchPosts() {
  const response = await fetch(`${API_URL}/products`);
  let data = await response.json();

  if (data) {
    hideLoader()

  }
  show(data);
}

function hideLoader(){
    document.body.style.overflowY=("auto")
    loading.style.display = "none";
}

function show(melumat) {
  melumat.map((mehsul) => {
    pro.innerHTML += `
        <div class="box">
        <img class="img-fluid" src=${mehsul.image} alt="">
        <h5>${mehsul.title}</h5>
        <p>${mehsul.description}</p>
        </div>
        `;
  });
}

fetchPosts();
