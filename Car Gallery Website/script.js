// Tüm filtre düğmelerini ve filtrelenebilir kartları seçin.
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".featured-cards .featured_card");

// filterCards fonksiyonunu tanımlayın.
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  // Her filtrelenebilir kart üzerinde yineleme yapın.
  filterableCards.forEach(featured_card => {
    // Başlangıçta kartı gizlemek için gizleme sınıfını ekleyin.
    featured_card.classList.add("hide");
    // Kartın seçili filtreyle eşleşip eşleşmediğini kontrol edin, "tümü" seçili.
    if(featured_card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      featured_card.classList.remove("hide");
    }
  });

};

// Her filtre düğmesine tıklama olayı dinleyicisi ekleyin
filterButtons.forEach(button => button.addEventListener("click", filterCards));



// Kodlar CodingNepal'e aittir.