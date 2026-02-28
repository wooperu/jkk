const characters = [
  {
    name: "Yuji Itadori",
    image: "https://static-intl.biligame.net/jujutsuphanpara/gw/pc/images/character/illust/chara_illust_itadori.png?hash=258ddd67",
    description: "A high school student with immense physical strength who becomes the vessel of Sukuna."
  },
  {
    name: "Fushiguro Megumi",
    image: "https://static-intl.biligame.net/jujutsuphanpara/gw/pc/images/character/illust/chara_illust_fushiguro.png?hash=258ddd67",
    description: "A sorcerer who uses shadow-based techniques and summons shikigami."
  },
  {
    name: "Kugisaki Nobara",
    image: "https://static-intl.biligame.net/jujutsuphanpara/gw/pc/images/character/illust/chara_illust_kugisaki.png?hash=258ddd67",
    description: "A confident sorcerer who uses cursed tools like nails and a hammer."
  },
  {
    name: "Gojo Satoru",
    image: "https://static-intl.biligame.net/jujutsuphanpara/gw/pc/images/character/illust/chara_illust_gojo.png?hash=258ddd67",
    description: "The strongest jujutsu sorcerer with limitless cursed energy and Six Eyes."
  }
];

let currentIndex = 0;
let autoSlide;

const img = document.getElementById("character-img");
const characterName = document.getElementById("character-name");
const desc = document.getElementById("character-desc");
const card = document.getElementById("character-card");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const dotsContainer = document.getElementById("dots");

function updateCharacter() {
  const character = characters[currentIndex];

  img.src = character.image;
  characterName.textContent = character.name;
  desc.textContent = character.description;
}

button.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= characters.length) {
    currentIndex = 0;
  }

  updateCharacter();
});

updateCharacter();
