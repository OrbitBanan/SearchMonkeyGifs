document.getElementById("search-button").addEventListener("click", () => {
  const keyword = document.getElementById("keyword").value;
  fetchGifs(keyword);
});

async function fetchGifs(keyword) {
  const apiKey = "1Meo14txNJt4VMsKJtiNkQCyE8DZNgr0";
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}+обезьяна&limit=50`
  );
  const data = await response.json();
  displayGifs(data);
}

function displayGifs(data) {
  const gifsContainer = document.getElementById("gifs-container");
  gifsContainer.innerHTML = "";

  data.data.forEach((gif) => {
    const gifContainer = document.createElement("div");
    gifContainer.classList.add('gifContainer');
    gifContainer.style.marginBottom = "20px";

    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    img.alt = gif.title;
    gifContainer.appendChild(img);

    const link = document.createElement("a");
    link.href = gif.url;
    link.textContent = "Ссылка";
    link.target = "_blank";
    gifContainer.appendChild(link);

    gifsContainer.appendChild(gifContainer);
  });
}