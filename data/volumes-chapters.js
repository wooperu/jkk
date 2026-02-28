const volumeList = document.getElementById("volume-list");

function renderVolumes(data) {
  volumeList.innerHTML = "";

  data.forEach(volume => {
    volumeList.innerHTML += `
      <li class="volume-card">
        <h3 class="volume-title">${volume.title}</h3>

        <a href="${volume.chapters[0].link}" class="volume-cover" target="_blank">
          <img src="${volume.cover}" alt="${volume.title}" loading="lazy">
        </a>

        <ul class="chapter-list">
          <h4>Chapters list:</h4>

          ${volume.chapters
            .map(chapter => `
              <li>
                <a href="${chapter.link}" 
                   class="chapter-title" 
                   target="_blank">
                  ${chapter.title}
                </a>
              </li>
            `)
            .join("")}
        </ul>
      </li>
    `;
  });
}

renderVolumes(volumes);

const volumes = [
  {
    title: "0 Blinding Darkness",
    cover: "images/volume-covers/Volume_0.webp",
    chapters: [
      {
        number: "000-1",
        title: "The Cursed Child (呪のろいの子こ Noroi no Ko?)",
        link: "https://www.netflix.com/ph-en/title/81602834"
      },
      {
        number: "000-2",
        title: "Blacker and Blacker (黒くろく黒くろく Kuroku Kuroku?)",
        link: "https://www.netflix.com/ph-en/title/81602834"
      },
      {
        number: "000-3",
        title: "Punishment for the Weak (弱じゃく者じゃに罰ばつを Jakusha ni Batsu o?)",
        link: "https://www.netflix.com/ph-en/title/81602834"
      },
      {
        number: "000-4",
        title: "Bright Darkness (眩まぶしい闇やみ Mabushii Yami?)",
        link: "https://www.netflix.com/ph-en/title/81602834"
      }
    ]
  },

  {
    title: "1 Ryomen Sukuna",
    cover: "images/volume-covers/Volume_1.webp",
    chapters: [
      {
        number: "001",
        title: "Ryomen Sukuna (両りょう面めん宿すく儺な Ryōmen Sukuna?)",
        link: "https://jjkaisen.com/chapter/1/"
      },
      {
        number: "002",
        title: "Secret Execution (秘ひ匿とく死し刑けい Hitoku Shikei?)",
        link: "https://jjkaisen.com/chapter/2/"
      },
      {
        number: "003",
        title: "For Myself (自じ分ぶんのために Jibun no Tameni?)",
        link: "https://jjkaisen.com/chapter/3/"
      },
      {
        number: "004",
        title: "Girl of Steel (鉄てっ骨こつ娘むすめ Tekkotsu Musume?)",
        link: "https://jjkaisen.com/chapter/4/"
      },
      {
        number: "005",
        title: "Start (始はじまり Hajimari?)",
        link: "https://jjkaisen.com/chapter/5/"
      },
      {
        number: "006",
        title: "Fearsome Womb (呪じゅ胎たい戴たい天てん Jutaitaiten?)",
        link: "https://jjkaisen.com/chapter/6/"
      },
      {
        number: "007",
        title: "Fearsome Womb, Part 2 (呪じゅ胎たい戴たい天てんー弐にー Jutaitaiten -ni-?)",
        link: "https://jjkaisen.com/chapter/7/"
      }
    ]
  },

  {
    title: "2 Fearsome Womb",
    cover: "images/volume-covers/Volume_2.webp",
    chapters: [
      {
        number: "008",
        title: "Fearsome Womb, Part 3 (呪じゅ胎たい戴たい天てんー参さんー Jutaitaiten -san-?)",
        link: "https://jjkaisen.com/chapter/8/"
      },
      {
        number: "009",
        title: "Fearsome Womb, Part 4 (呪じゅ胎たい戴たい天てんー肆しー Jutaitaiten -shi-?)",
        link: "https://jjkaisen.com/chapter/9/"
      },
      {
        number: "010",
        title: "After the Rain (雨う後ご Ugo?)",
        link: "https://jjkaisen.com/chapter/10/"
      },
      {
        number: "011",
        title: "A Dream (ある夢む想そう Aru Musō?)",
        link: "https://jjkaisen.com/chapter/11/"
      },
      {
        number: "012",
        title: "Pushing Forward (邁まい進しん Maishin?)",
        link: "https://jjkaisen.com/chapter/12/"
      },
      {
        number: "013",
        title: "Watching Movies (映えい画が鑑かん賞しょう Eiga Kanshō?)",
        link: "https://jjkaisen.com/chapter/13/"
      },
      {
        number: "014",
        title: "Assault (急きゅう襲しゅう Kyūshū?)",
        link: "https://jjkaisen.com/chapter/14/"
      },
      {
        number: "015",
        title: "Domain (展てん開かい Tenkai?)",
        link: "https://jjkaisen.com/chapter/15/"
      },
      {
        number: "016",
        title: "Affection (情じょう Jō?)",
        link: "https://jjkaisen.com/chapter/16/"
      }
    ]
  },

  {
  title: "3 Young Fish and Reverse Punishment",
  cover: "images/volume-covers/Volume_3.webp",
  chapters: [
    {
      number: "017",
      title: "Small Fry and Reverse Retribution (幼よう魚ぎょと逆さか罰ばつ Yōgyo to Sakabatsu?)",
      link: "https://jjkaisen.com/chapter/17/"
    },
    {
      number: "018",
      title: "Small Fry and Reverse Retribution, Part 2",
      link: "https://jjkaisen.com/chapter/18/"
    },
    {
      number: "019",
      title: "Small Fry and Reverse Retribution, Part 3",
      link: "https://jjkaisen.com/chapter/19/"
    },
    {
      number: "020",
      title: "Small Fry and Reverse Retribution, Part 4",
      link: "https://jjkaisen.com/chapter/20/"
    },
    {
      number: "021",
      title: "Small Fry and Reverse Retribution, Part 5",
      link: "https://jjkaisen.com/chapter/21/"
    },
    {
      number: "022",
      title: "Small Fry and Reverse Retribution, Part 6",
      link: "https://jjkaisen.com/chapter/22/"
    },
    {
      number: "023",
      title: "Small Fry and Reverse Retribution, Part 7",
      link: "https://jjkaisen.com/chapter/23/"
    }
  ]
},

{
  title: "4 I'm Gonna Kill You",
  cover: "images/volume-covers/Volume_4.webp",
  chapters: [
    {
      number: "024",
      title: "I'm Gonna Kill You (殺ころす Korosu?)",
      link: "https://jjkaisen.com/chapter/24/"
    },
    {
      number: "025",
      title: "Hidden Inventory",
      link: "https://jjkaisen.com/chapter/25/"
    },
    {
      number: "026",
      title: "To You Someday",
      link: "https://jjkaisen.com/chapter/26/"
    },
    {
      number: "027",
      title: "What If",
      link: "https://jjkaisen.com/chapter/27/"
    },
    {
      number: "028",
      title: "I'm Gonna Kill You, Part 2",
      link: "https://jjkaisen.com/chapter/28/"
    },
    {
      number: "029",
      title: "Growth",
      link: "https://jjkaisen.com/chapter/29/"
    },
    {
      number: "030",
      title: "Selfishness",
      link: "https://jjkaisen.com/chapter/30/"
    }
  ]
}

];