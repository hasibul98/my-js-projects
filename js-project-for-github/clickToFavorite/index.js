let collections = [
  {
    imag: "https://i.pinimg.com/736x/47/84/43/478443ded3fb18d994346a0573940da5.jpg",
    title: "T-Shirt design with illustrated ship",
  },
  {
    imag: "https://i.pinimg.com/736x/5b/81/f7/5b81f7c444fdc838bf3c1cf039100a91.jpg",
    title: "ART ALL SİPİRİTÜEL FASHİON BEAUTY",
  },
  {
    imag: "https://i.pinimg.com/736x/17/c4/06/17c4063708b174b6ba87734ec50d0dd1.jpg",
    title: "Tamil Indian Funny Lungi Dance Sticker",
  },
  {
    imag: "https://i.pinimg.com/736x/1a/5c/18/1a5c18cf370f9f02f55523141f0e04f5.jpg",
    title: "ki dhongra baba",
  },
  {
    imag: "https://i.pinimg.com/736x/ab/2e/02/ab2e02d38192a2998d14bcb815d26293.jpg",
    title: "Bangla Typography - Alakar Borobhai",
  },
  {
    imag: "https://i.pinimg.com/736x/9c/3c/cb/9c3ccb676f3d314e5611ae29b7f00251.jpg",
    title: "Bangla Typography Design and Character art - Suronjit Tanu",
  },
];

let chooseGallary = document.querySelector(".choose-gallary");

function makeImage() {
  collections.map((collection, index) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.id = `card-${index}`;
    div.innerHTML = `
      
        <div class="image">
          <img
            src="${collection.imag}"
            alt=""
          />
        </div>
        <div class="title">${collection.title}</div>
        <div class="love-icon"><i class="fas fa-heart"></i> <span class='addFavourite'>add favourite</span></div>
      
    `;
    chooseGallary.appendChild(div);
  });
}

makeImage();
let lovEl = document.querySelectorAll(".love-icon");
let favoriteDiv = document.querySelector(".favorite");
let addFavourite = favoriteDiv.querySelectorAll(".addFavourite");

lovEl.forEach((love, index) => {
  love.addEventListener("click", () => {
    let cardId = love.parentElement.id;
    let existingCard = favoriteDiv.querySelector(`#${cardId}`);

    if (!existingCard) {
      let cardClone = love.parentElement.cloneNode(true);
      let cloneSpan = cardClone.querySelector(".addFavourite");
      cloneSpan.textContent = "remove favourite";
      favoriteDiv.appendChild(cardClone);

      // Add remove functionality
      cardClone.querySelector(".love-icon").addEventListener("click", () => {
        cardClone.remove();
      });
    }
  });
});
