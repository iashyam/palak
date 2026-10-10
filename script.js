'use strict';

/* =====================================================================
   EASY CUSTOMISATION — change these before you share the link 💗
   ===================================================================== */
const CONFIG = {
  // Leave '' to stay anonymous, or put a name like 'Rahul'. Shown as a small signature.
  senderName: '',

  // The heartfelt message on Level 60.
  finalMessage:
    'Palak, 60 baar poochhne ke baad bhi ek hi baat kehni hai... I\'m genuinely sorry. ' +
    'Tum mere liye bahut special ho. Agar tum ready ho, toh kya hum baat karke sab theek kar sakte hain? 💗',

  // Shown if Palak taps "Abhi nahi" on the last level. No pressure.
  softCloseMessage: 'Koi baat nahi, Palak. Jitna time chahiye lo. Main yahin hoon, bina kisi pressure ke. 💗',

  // The gift-icon popup.
  secretMessage:
    'Psst... ek secret. Is website ke peeche koi hai jo tumhari smile wapas dekhna chahta hai. 💗',

  hugMessage: 'Sending you the biggest teddy hug ever! 💗',
};

/* =====================================================================
   60 LEVELS
   face : happy | shy | cry | teary | embarrassed | shocked | hopeful | excited | love | smirk
   prop : none | flower | bouquet | giantBouquet | chocolate | rose | balloon | letter | sign | violin |
          crown | heart | moon | cake | gift | tissue | megaphone | cap | clapper | shades | umbrella |
          popcorn | trumpet | flag | wand | magicFlower
   fur  : 0 classic · 1 pink · 2 cream · 3 lavender · 4 peach · 5 white · 6 golden
   ===================================================================== */
const LEVELS = [
  // ---- 1–10: Shy and sweet ----
  { message: 'Palak, please na 🥺', face: 'shy', prop: 'flower', count: 1, fur: 0, anim: 'sway', bg: ['🌸', '✨'], reaction: 'Teddy ne chupke se phool sungha 🌸' },
  { message: 'Ek baar smile kar do, please?', face: 'hopeful', prop: 'flower', count: 1, fur: 2, anim: 'bob', bg: ['🌼', '🌷'], reaction: 'Teddy ki aankhein chamak gayi ✨' },
  { message: 'Galti ho gayi yaar, sorry na 💗', face: 'embarrassed', prop: 'none', count: 1, fur: 4, anim: 'shiver', bg: ['💗', '💦'], reaction: 'Teddy ne sharma ke muh chhupa liya 🙈' },
  { message: 'Maan jao na please 👉👈', face: 'shy', prop: 'none', count: 1, fur: 1, anim: 'sway', bg: ['👉', '👈', '💕'], reaction: 'Teddy ki ungliyan aapas mein takra gayi 👉👈' },
  { message: 'Subah se kuch nahi khaya. Sorry ke tension mein bhookh hi nahi lagi 🥲', face: 'embarrassed', prop: 'none', count: 1, fur: 3, anim: 'wiggle', bg: ['🍪', '💭'], reaction: 'Teddy ka pet gurgur kar gaya 🍪' },
  { message: 'Dekho, main chhota sa hoon. Zyada der gussa mat raho na?', face: 'teary', prop: 'flower', count: 1, fur: 5, anim: 'bob', bg: ['🌿', '🥺'], scale: 0.8, reaction: 'Teddy aur chhota ho gaya, sharam se 🥺' },
  { message: 'Ye phool tumhare liye. Maine khud toda... matlab gamle se uthaya 🌼', face: 'hopeful', prop: 'flower', count: 1, fur: 6, anim: 'sway', bg: ['🌼', '🌻'], reaction: 'Gamle wale phool ne bhi sorry bola 🌼' },
  { message: 'Sheeshe ke saamne 40 baar sorry bolne ki practice ki. Ab real mein bol raha hoon!', face: 'embarrassed', prop: 'none', count: 1, fur: 0, anim: 'wiggle', bg: ['🪞', '💬'], reaction: '41vi baar bhi sorry, free mein 😅' },
  { message: 'Ek tiny si "haan" bol do? Bas itni si 🤏', face: 'hopeful', prop: 'none', count: 1, fur: 4, anim: 'bob', bg: ['🤏', '✨'], reaction: 'Teddy ne ungli aur chhoti kar di 🤏' },
  { message: 'Teddy ki aankhon mein aansu aane wale hain... aane hi wale hain... 🥹', face: 'teary', prop: 'none', count: 1, fur: 1, anim: 'shiver', bg: ['💧', '🥹'], reaction: 'Ek aansu tapak gaya, bas ek 💧' },

  // ---- 11–20: Cute gifts ----
  { message: 'Chocolate chahiye? 🍫 Please maan jao!', face: 'happy', prop: 'chocolate', count: 1, fur: 0, anim: 'bob', bg: ['🍫', '🍬'], reaction: 'Teddy ne chocolate ka ek tukda chakh liya... sorry! 🍫' },
  { message: 'Palak ji, teddy ki izzat ka sawaal hai 😭', face: 'cry', prop: 'rose', count: 1, fur: 2, anim: 'sob', bg: ['😭', '🌹'], reaction: 'Teddy ki izzat thodi si gir gayi 😭' },
  { message: 'Ek hug se kaam chal jayega kya? 🥹', face: 'hopeful', prop: 'heart', count: 1, fur: 1, anim: 'sway', bg: ['🫂', '💞'], reaction: 'Teddy ne baahein failayi... hawa ko hug kiya 🫂' },
  { message: 'Ek rose, ek sorry, aur ek bahut sad teddy 🌹', face: 'teary', prop: 'rose', count: 1, fur: 3, anim: 'bob', bg: ['🌹', '🥀'], reaction: 'Rose ne bhi teddy ki taraf se sifarish ki 🌹' },
  { message: 'Gubbare le aaya hoon! Gussa udhao, hawa mein jaane do 🎈', face: 'excited', prop: 'balloon', count: 1, fur: 4, anim: 'float', bg: ['🎈', '🎉'], reaction: 'Ek gubbara phat gaya. Sorry gubbare ke liye bhi 🎈' },
  { message: 'Maine ek chitthi likhi hai. Spelling mistakes ke liye bhi sorry 💌', face: 'shy', prop: 'letter', count: 1, fur: 5, anim: 'sway', bg: ['💌', '✍️'], reaction: 'Chitthi mein "sory" likha tha... fir theek kiya ✍️' },
  { message: 'Dairy Milk, Kitkat, sab laaya hoon. Ab toh haan bol do 🍫', face: 'excited', prop: 'chocolate', count: 1, fur: 6, anim: 'wiggle', bg: ['🍫', '🍪', '🍩'], reaction: 'Teddy ne chocolate ki poori dukaan khol di 🍬' },
  { message: 'Ye gift wrap maine khud kiya. Thoda tedha hai, par dil seedha hai 🎁', face: 'happy', prop: 'gift', count: 1, fur: 3, anim: 'bob', bg: ['🎁', '🎀'], reaction: 'Tape teddy ke haath mein chipak gayi 🎀' },
  { message: 'Sorry cake! Isme sirf pyaar aur thodi si cheeni hai 🍰', face: 'hopeful', prop: 'cake', count: 1, fur: 1, anim: 'sway', bg: ['🍰', '🕯️'], reaction: 'Teddy ne moombatti phoonk di, wish: "Palak maan jaye" 🕯️' },
  { message: 'Gubbare ke saath udne ki koshish ki. Gir gaya. Phir bhi sorry 🥲', face: 'shocked', prop: 'balloon', count: 1, fur: 2, anim: 'jump', bg: ['🎈', '☁️'], reaction: 'Dhap! Teddy zameen par, sorry abhi bhi zinda 🎈' },

  // ---- 21–30: Teddy emotional drama ----
  { message: 'Teddy union ki emergency meeting hui hai!', face: 'shocked', prop: 'sign', sign: 'EMERGENCY', count: 3, fur: 0, anim: 'bob', bg: ['🚨', '📢'], reaction: 'Meeting mein samose khatam, mudda wahi ka wahi 🚨' },
  { message: 'Hum sab milke sorry bol rahe hain. PLEASEEE!', face: 'cry', face2: 'hopeful', prop: 'megaphone', count: 3, fur: 4, anim: 'wiggle', bg: ['📣', '🥺'], reaction: 'Megaphone mein se "sorryyy" 3 baar goonja 📣' },
  { message: 'Ek chhoti si smile? Bas itni si? 🥺', face: 'hopeful', face2: 'teary', prop: 'flower', count: 2, fur: 1, anim: 'sway', bg: ['🙂', '🌸'], reaction: 'Dono teddies ne smile ka naap liya: 0.5 cm 🙂' },
  { message: 'Humne board pe likha hai... padh lo please 🥹', face: 'teary', prop: 'sign', sign: 'PLZ MAAN JAO', count: 3, fur: 3, anim: 'sob', bg: ['🪧', '🥹'], reaction: 'Board ulta pakda tha. Ab seedha 🪧' },
  { message: 'Committee ne vote kiya: 4-0 se Palak sahi hain aur teddy galat!', face: 'embarrassed', prop: 'sign', sign: '4-0', count: 4, fur: 2, anim: 'bob', bg: ['🗳️', '⚖️'], reaction: 'Ek teddy ne apne hi khilaf vote diya, imaandaar hai 🗳️' },
  { message: 'Aansuon ka matka le aaya hoon. Bhar gaya toh zimmedar aap hogi 😭', face: 'cry', prop: 'tissue', count: 1, fur: 5, anim: 'sob', bg: ['💧', '💦', '🫗'], reaction: 'Matka chhalak gaya. Poocha nahi, pochha laga lo 💦' },
  { message: 'Ek teddy rota hai, doosra usse chup karata hai. Dono tumhari smile ka wait kar rahe hain', face: 'cry', face2: 'happy', prop: 'tissue', count: 2, fur: 6, anim: 'sway', bg: ['🫂', '💧'], reaction: 'Chup karate karate dusra bhi rone laga 😭' },
  { message: 'Breaking news: Palak ji abhi tak naraz hain! Teddies in shock!', face: 'shocked', prop: 'megaphone', count: 4, fur: 1, anim: 'jump', bg: ['📺', '😱'], reaction: 'News reporter teddy behosh ho gaya 😱' },
  { message: 'Hum protest pe baithe hain jab tak tum haan nahi bologi ✊', face: 'smirk', face2: 'cry', prop: 'sign', sign: 'SORRY', count: 4, fur: 4, anim: 'wiggle', bg: ['✊', '🪧'], reaction: 'Protest 5 minute mein bhookh hadtal mein badla 🍕' },
  { message: 'Teddies ne pocket money jod ke ye sorry card banaya 💌', face: 'hopeful', face2: 'shy', prop: 'letter', count: 3, fur: 5, anim: 'bob', bg: ['💌', '🪙'], reaction: 'Card ka glitter poore ghar mein phail gaya ✨' },

  // ---- 31–40: Bollywood drama ----
  { message: 'Aap haan bol do, background mein violins bajenge 🎻', face: 'love', prop: 'violin', count: 1, fur: 0, anim: 'sway', bg: ['🎻', '🎶'], reaction: 'Violin ki ek taar toot gayi, drama full 🎻' },
  { message: 'Maine toh sorry mein PhD kar li!', face: 'excited', prop: 'cap', count: 1, fur: 3, anim: 'jump', bg: ['🎓', '📜'], reaction: 'Thesis ka title: "Palak ko manane ke 101 tareeke" 🎓' },
  { message: 'Teddy shocked hai, par hope abhi baaki hai!', face: 'shocked', prop: 'none', count: 1, fur: 2, anim: 'shiver', bg: ['⚡', '😲'], reaction: 'Teddy ke kaan khade ho gaye ⚡' },
  { message: 'Palak... tum meri life ki heroine ho, aur main... side-teddy 🎬', face: 'teary', prop: 'clapper', count: 1, fur: 1, anim: 'sway', bg: ['🎬', '⭐'], reaction: 'Director bola "Cut!" Teddy bola "Nahi, dobara!" 🎬' },
  { message: 'Itna bada bouquet laaya hoon! Auto mein nahi aaya, helicopter se aaya 🚁', face: 'excited', prop: 'giantBouquet', count: 1, fur: 4, anim: 'bob', bg: ['🚁', '💐'], reaction: 'Helicopter ka kiraya EMI pe hai 🚁' },
  { message: 'Kuch kuch hota hai, Palak. Aur tumhare bina kuch kuch nahi hota 💔', face: 'cry', prop: 'rose', count: 1, fur: 6, anim: 'sob', bg: ['💔', '🌹'], reaction: 'Teddy ne slow motion mein baal jhatke 💔' },
  { message: 'Ek haan ki keemat tum kya jaano, Palak babu! 😎', face: 'smirk', prop: 'shades', count: 1, fur: 0, anim: 'wiggle', bg: ['😎', '🔥'], reaction: 'Chashma gir gaya. Dialogue bhi 😎' },
  { message: 'Slow motion mein daud ke aaya. Baarish bhi bulwayi. Ab toh maan jao 🌧️', face: 'cry', prop: 'umbrella', count: 1, fur: 5, anim: 'sob', bg: ['🌧️', '💧', '🌈'], reaction: 'Chhatri ulti ho gayi, drama poora 🌧️' },
  { message: 'Interval ho gaya! Popcorn lo, par pehle haan bolo 🍿', face: 'happy', prop: 'popcorn', count: 1, fur: 2, anim: 'bob', bg: ['🍿', '🎞️'], reaction: 'Popcorn chhat tak uchhal gaya 🍿' },
  { message: 'Climax mein hero ko maafi milti hai. Script yahi kehti hai 🎬', face: 'hopeful', prop: 'clapper', count: 1, fur: 3, anim: 'sway', bg: ['📜', '🎭'], reaction: 'Script mein "Palak maan jaati hai" highlight kiya 📜' },

  // ---- 41–50: Teddy kingdom ----
  { message: 'Teddy parliament mein sirf ek bill pass hua: Palak maan jao!', face: 'happy', prop: 'sign', sign: 'THE BILL', count: 3, fur: 6, anim: 'bob', bg: ['🏛️', '📜'], reaction: 'Opposition ne bhi support kiya, chai pe 🏛️' },
  { message: 'Poora teddy kingdom aapka intezaar kar raha hai!', face: 'hopeful', prop: 'crown', count: 5, fur: 4, anim: 'bob', bg: ['🏰', '👑'], reaction: 'Kingdom ki bell baji: dong dong dong 🔔' },
  { message: 'Teddy orchestra ready hai: dhol, shehnai, aur ek bahut besura trumpet 🎺', face: 'excited', prop: 'trumpet', count: 4, fur: 1, anim: 'wiggle', bg: ['🎺', '🥁', '🎶'], reaction: 'Trumpet wale ne galat note maara. Sab hans pade 🎺' },
  { message: 'Royal ceremony shuru: Palak ji ko "Queen of Maafi" ki padvi milegi 👑', face: 'love', prop: 'crown', count: 2, fur: 2, anim: 'sway', bg: ['👑', '🎊'], reaction: 'Taaj thoda bada nikla, aankhon pe aa gaya 👑' },
  { message: 'Humne toh moon se bhi request kar di 🌙', face: 'hopeful', prop: 'moon', count: 1, fur: 3, anim: 'float', bg: ['🌙', '⭐', '✨'], reaction: 'Chaand ne kaha: "Pehle Palak se poochho" 🌙' },
  { message: 'Aasman bhar diya dilon se. Ek heart tumhara bhi hai ❤️', face: 'love', prop: 'heart', count: 3, fur: 1, anim: 'bob', bg: ['❤️', '💖', '💗', '💞'], reaction: 'Itne dil, ki aasman pink ho gaya 💖' },
  { message: 'Teddy army ne salute kiya: "Palak ma\'am, humein maaf kar do!"', face: 'smirk', face2: 'shy', prop: 'flag', count: 5, fur: 0, anim: 'jump', bg: ['🫡', '🚩'], reaction: 'Poori army ek saath chheenk padi. Salute tuta 🫡' },
  { message: 'Royal chef ne sorry-pudding banaya hai. Taste kar lo, phir gussa karna 🍮', face: 'happy', prop: 'cake', count: 1, fur: 6, anim: 'bob', bg: ['🍮', '🧑‍🍳'], reaction: 'Chef ne khud hi pudding chakh liya, quality check 🍮' },
  { message: 'Raja teddy apna taaj utaar ke aapke kadmon mein rakh raha hai 👑', face: 'cry', prop: 'crown', count: 1, fur: 4, anim: 'sob', bg: ['👑', '🥺'], reaction: 'Taaj ludhak ke palang ke neeche chala gaya 👑' },
  { message: 'Itna sab ho gaya! Kingdom mein chhutti ghoshit: "Palak Day" 🎉', face: 'excited', prop: 'wand', count: 3, fur: 3, anim: 'jump', bg: ['🎉', '🎆', '✨'], reaction: 'Aatishbaazi mein teddy ki poonchh jal gayi. Bas thodi si 🎆' },

  // ---- 51–59: Legendary cuteness ----
  { message: 'Final-final-final request. Pakka wala final. 🥺', face: 'teary', prop: 'flower', count: 1, fur: 5, anim: 'bob', scale: 1.15, bg: ['🥺', '🌟'], reaction: 'Teddy ne ungliyan cross ki. Dono haath se 🤞' },
  { message: 'Baby teddies bhi aa gaye: "Didi, please maan jao na..." 🍼', face: 'hopeful', face2: 'shy', prop: 'none', count: 3, fur: 1, anim: 'wiggle', scale: 0.7, bg: ['🍼', '🧸', '💕'], reaction: 'Ek baby teddy so gaya, doosra tutla raha hai 🍼' },
  { message: 'Palak, tumhari smile bahut pyaari hai 💗', face: 'love', prop: 'heart', count: 1, fur: 1, anim: 'float', bg: ['💗', '😊', '✨'], reaction: 'Teddy ke gaal itne laal, tamatar bhi sharma gaya 🍅' },
  { message: 'Ye jaadui phool sirf sachche sorry pe khilta hai. Dekho, khil gaya! ✨', face: 'excited', prop: 'magicFlower', count: 1, fur: 3, anim: 'float', bg: ['🪄', '✨', '🦋'], reaction: 'Phool ne glitter chhoda aur sharma gaya ✨' },
  { message: 'Ek chance de do? Main sach mein try karunga.', face: 'hopeful', prop: 'bouquet', count: 1, fur: 2, anim: 'sway', bg: ['🌷', '🌿'], reaction: 'Teddy ne seene pe haath rakha. Pakka promise 🤝' },
  { message: 'Mujhe pata hai maine tumhe hurt kiya. Wo mera irada nahi tha, par asar toh hua. Sorry 💌', face: 'teary', prop: 'letter', count: 1, fur: 0, anim: 'bob', bg: ['💌', '🕊️'], reaction: 'Chitthi ek baar aur padhi. Ab sabse sachchi wali 💌' },
  { message: 'Gussa hoti ho toh bhi cute lagti ho, par main tumhe hasta hua dekhna chahta hoon 🌷', face: 'shy', prop: 'bouquet', count: 1, fur: 4, anim: 'sway', bg: ['🌷', '😊'], reaction: 'Teddy ki baat sunke bouquet ne bhi sar hilaya 🌷' },
  { message: 'Sabse bada teddy aaya hai: "Chhoti si baat pe itna bada sorry!"', face: 'happy', prop: 'heart', count: 1, fur: 6, anim: 'bob', scale: 1.2, bg: ['🧸', '⭐'], reaction: 'Bada teddy jhuka... aur dari ke chhota teddy ban gaya 🧸' },
  { message: 'Bas ek aakhri baar... agla level kuch special hai 💗', face: 'excited', prop: 'giantBouquet', count: 1, fur: 1, anim: 'jump', bg: ['🎁', '💗', '✨'], reaction: 'Teddy ne drumroll bajaya. Dhad dhad dhad 🥁' },

  // ---- 60: Grand finale ----
  { message: CONFIG.finalMessage, face: 'love', prop: 'giantBouquet', count: 1, fur: 1, anim: 'float', scale: 1.1, bg: ['💗', '🌹', '✨', '💖', '🌷', '⭐'], reaction: 'Teddy ne dil thaam liya 💗' },
];

/* =====================================================================
   TEDDY DRAWING (inline SVG, no images)
   ===================================================================== */
const INK = '#4a2a35';

const PALETTES = [
  { f: '#c98f5e', e: '#e9b98f', m: '#f3d6b3', d: '#a56d42' },
  { f: '#f6a9c4', e: '#ffd0e0', m: '#ffe6ee', d: '#d77d9f' },
  { f: '#f2d3a4', e: '#ffe9c9', m: '#fff4e0', d: '#cfa56d' },
  { f: '#c7b0f2', e: '#e4d8fb', m: '#f3ecff', d: '#9a80d1' },
  { f: '#f8b793', e: '#ffd9c4', m: '#ffeee3', d: '#d98a62' },
  { f: '#fff0f3', e: '#ffd6df', m: '#ffffff', d: '#e2b5c0' },
  { f: '#e6b94c', e: '#f6d98a', m: '#fff0bd', d: '#b88a1f' },
];

const heartAt = (x, y, s, fill) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0 5 C-10 -2 -7 -10 0 -5 C7 -10 10 -2 0 5Z" fill="${fill}"/>`;

const starAt = (x, y, s, fill, cls = '') =>
  `<path class="${cls}" transform="translate(${x} ${y}) scale(${s})" d="M0 -12 L3.5 -4 L12 -3.5 L5.5 2.5 L7.5 11 L0 6.5 L-7.5 11 L-5.5 2.5 L-12 -3.5 L-3.5 -4Z" fill="${fill}"/>`;

function flowerHead(cx, cy, s, color) {
  let out = '';
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3;
    out += `<circle cx="${(cx + Math.cos(a) * 9 * s).toFixed(1)}" cy="${(cy + Math.sin(a) * 9 * s).toFixed(1)}" r="${(7 * s).toFixed(1)}" fill="${color}"/>`;
  }
  return out + `<circle cx="${cx}" cy="${cy}" r="${(5.5 * s).toFixed(1)}" fill="#ffd95e"/>`;
}

const bouquetSvg = () =>
  '<path d="M78 148 L122 148 L100 198Z" fill="#fff" stroke="#f3b6c8" stroke-width="2" stroke-linejoin="round"/>' +
  '<path d="M86 152 L100 192 L114 152" fill="#ffd1e0" opacity=".85"/>' +
  '<path d="M90 146 q-14 -8 -12 -18 q12 4 12 18z M110 146 q14 -8 12 -18 q-12 4 -12 18z" fill="#79c585"/>' +
  flowerHead(86, 138, 0.8, '#ff9ec1') + flowerHead(114, 138, 0.8, '#c9b3f0') + flowerHead(100, 126, 0.95, '#ffb48a');

/* Each prop returns { back, hold, top } SVG strings (all optional). */
const PROPS = {
  none: () => ({}),
  flower: () => ({
    hold: '<path d="M100 196 L100 148" stroke="#5fae6b" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M100 178 q-18 -2 -20 -14 q16 0 20 14z" fill="#79c585"/>' + flowerHead(100, 142, 1, '#ff9ec1'),
  }),
  bouquet: () => ({ hold: bouquetSvg() }),
  giantBouquet: () => ({
    hold: '<g transform="translate(100 168) scale(1.45) translate(-100 -168)">' + bouquetSvg() +
      flowerHead(72, 144, 0.7, '#ffd95e').replace(/#ffd95e/g, '#ffb3c7') + flowerHead(128, 144, 0.7, '#ff8fb1') + '</g>',
  }),
  chocolate: () => ({
    hold: '<g transform="rotate(-8 100 168)"><rect x="70" y="146" width="60" height="44" rx="6" fill="#7a4a2e"/>' +
      '<path d="M86 158 V190 M100 158 V190 M114 158 V190 M70 174 H130" stroke="#5a331f" stroke-width="2"/>' +
      '<rect x="70" y="146" width="60" height="13" rx="6" fill="#ff6b8b"/>' + heartAt(100, 153, 0.9, '#fff') + '</g>',
  }),
  rose: () => ({
    hold: '<path d="M100 198 L100 148" stroke="#4f9d5d" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M100 180 q-16 -2 -18 -12 q14 0 18 12z M100 170 q16 -2 18 -12 q-14 0 -18 12z" fill="#79c585"/>' +
      '<circle cx="100" cy="140" r="12" fill="#e8365d"/><path d="M91 140 q9 -11 18 0 q-9 9 -18 0z" fill="#ff6f8f"/>' +
      '<circle cx="100" cy="139" r="4.5" fill="#c41e45"/>',
  }),
  balloon: () => ({
    back: '<path d="M62 168 Q34 130 30 84 M138 168 Q168 126 170 80 M100 170 Q104 130 102 60" stroke="#b79ab0" stroke-width="2" fill="none"/>' +
      '<ellipse cx="30" cy="64" rx="17" ry="21" fill="#ff8fb1"/><ellipse cx="170" cy="58" rx="17" ry="21" fill="#c9b3f0"/>' +
      '<ellipse cx="102" cy="36" rx="15" ry="19" fill="#ffd36b"/>' +
      '<ellipse cx="24" cy="56" rx="4" ry="7" fill="#fff" opacity=".6"/><ellipse cx="164" cy="50" rx="4" ry="7" fill="#fff" opacity=".6"/>',
  }),
  letter: () => ({
    hold: '<rect x="70" y="150" width="60" height="40" rx="5" fill="#fffaf0" stroke="#e8b4c4" stroke-width="2"/>' +
      '<path d="M70 154 L100 176 L130 154" fill="none" stroke="#e8b4c4" stroke-width="2" stroke-linejoin="round"/>' + heartAt(100, 177, 1.2, '#ff5a79'),
  }),
  sign: () => ({
    hold: '<rect x="97" y="180" width="6" height="30" fill="#b98255"/>' +
      '<rect x="54" y="146" width="92" height="38" rx="8" fill="#fffaf0" stroke="#e39ab2" stroke-width="3"/>' +
      '<text class="sign-text" x="100" y="171" text-anchor="middle" lengthAdjust="spacingAndGlyphs" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-size="15" font-weight="800" fill="#d43a64"></text>',
  }),
  violin: () => ({
    hold: '<g transform="rotate(-22 100 168)"><ellipse cx="100" cy="176" rx="21" ry="15" fill="#a8582a"/><ellipse cx="100" cy="161" rx="15" ry="11" fill="#b8683a"/>' +
      '<rect x="97" y="126" width="6" height="36" rx="2" fill="#6b3a1e"/><path d="M92 172 q-3 4 0 8 M108 172 q3 4 0 8" stroke="#5a2e12" stroke-width="2" fill="none"/></g>' +
      '<line x1="58" y1="196" x2="146" y2="152" stroke="#6b3a1e" stroke-width="3" stroke-linecap="round"/>',
    back: starAt(28, 70, 0.9, '#ffb3c7', 'twinkle') + '<text x="164" y="64" font-size="26" fill="#c9b3f0">♪</text>',
  }),
  crown: () => ({
    top: '<path d="M68 46 L76 18 L90 38 L100 12 L110 38 L124 18 L132 46 Z" fill="#ffd34e" stroke="#e0a800" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<circle cx="100" cy="30" r="4" fill="#ff5a79"/><circle cx="82" cy="38" r="3" fill="#7ec8ff"/><circle cx="118" cy="38" r="3" fill="#7ec8ff"/>',
  }),
  heart: () => ({ hold: heartAt(100, 166, 4.6, '#ff5a79') + '<ellipse cx="86" cy="152" rx="5" ry="3" fill="#fff" opacity=".6" transform="rotate(-30 86 152)"/>' }),
  moon: () => ({
    back: '<path d="M168 18 A26 26 0 1 0 186 66 A21 21 0 1 1 168 18Z" fill="#ffe9a0" stroke="#f5cd5a" stroke-width="2"/>' +
      starAt(30, 40, 0.8, '#ffd34e', 'twinkle') + starAt(52, 14, 0.6, '#ffd34e', 'twinkle'),
    hold: '<path d="M64 164 L136 164" stroke="none"/>',
  }),
  cake: () => ({
    hold: '<rect x="72" y="164" width="56" height="28" rx="7" fill="#ffc2d4"/><rect x="72" y="156" width="56" height="14" rx="7" fill="#fff"/>' +
      '<circle cx="86" cy="156" r="5" fill="#ff4d6d"/><circle cx="114" cy="156" r="5" fill="#ff4d6d"/>' +
      '<rect x="98" y="138" width="4" height="18" rx="1" fill="#8fd3ff"/><ellipse class="flame" cx="100" cy="133" rx="3.4" ry="5.5" fill="#ffb02e"/>',
  }),
  gift: () => ({
    hold: '<rect x="72" y="156" width="56" height="40" rx="5" fill="#b69cf0"/><rect x="96" y="156" width="8" height="40" fill="#ff7aa2"/>' +
      '<rect x="72" y="171" width="56" height="8" fill="#ff7aa2"/><ellipse cx="90" cy="152" rx="11" ry="7" fill="#ff7aa2" transform="rotate(-20 90 152)"/>' +
      '<ellipse cx="110" cy="152" rx="11" ry="7" fill="#ff7aa2" transform="rotate(20 110 152)"/><circle cx="100" cy="155" r="4" fill="#e0366a"/>',
  }),
  tissue: () => ({
    hold: '<path d="M88 164 q4 -26 12 -10 q6 -22 12 10z" fill="#fff" stroke="#d9ecff" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="72" y="164" width="56" height="30" rx="7" fill="#bfe3ff"/>' + heartAt(100, 180, 1.3, '#fff'),
  }),
  megaphone: () => ({
    hold: '<g transform="rotate(-14 100 168)"><path d="M66 158 L122 138 L122 194 L66 176Z" fill="#ff6b8b"/><rect x="54" y="156" width="16" height="22" rx="5" fill="#fff" stroke="#f3b6c8" stroke-width="2"/>' +
      '<ellipse cx="122" cy="166" rx="7" ry="28" fill="#ffd3b6"/></g>',
    back: '<path d="M150 118 q14 8 14 22 M156 106 q22 12 22 34" stroke="#ff8fb1" stroke-width="3" fill="none" stroke-linecap="round"/>',
  }),
  cap: () => ({
    top: '<path d="M58 42 L100 22 L142 42 L100 62Z" fill="#3b3550"/><path d="M78 52 v13 q22 11 44 0 v-13 L100 62Z" fill="#4c4568"/>' +
      '<path d="M142 42 L148 70" stroke="#ffd34e" stroke-width="3" stroke-linecap="round"/><circle cx="148" cy="72" r="4.5" fill="#ffd34e"/>',
    hold: '<rect x="68" y="162" width="64" height="16" rx="8" fill="#fff6e0" stroke="#e8c98f" stroke-width="2"/><rect x="94" y="162" width="12" height="16" fill="#ff5a79"/>',
  }),
  clapper: () => ({
    hold: '<rect x="70" y="166" width="60" height="30" rx="4" fill="#3a3a48"/>' +
      '<path d="M70 156 L130 146 L130 160 L70 168Z" fill="#fff"/><path d="M82 154 L90 164 M98 151 L106 161 M114 149 L122 159" stroke="#3a3a48" stroke-width="6"/>' +
      '<path d="M78 178 H122 M78 186 H108" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>',
  }),
  shades: () => ({
    top: '<rect x="56" y="70" width="38" height="22" rx="9" fill="#1f1f2b"/><rect x="106" y="70" width="38" height="22" rx="9" fill="#1f1f2b"/>' +
      '<rect x="92" y="75" width="16" height="4" fill="#1f1f2b"/><path d="M62 76 l10 -3 M112 76 l10 -3" stroke="#fff" stroke-width="3" opacity=".6" stroke-linecap="round"/>',
  }),
  umbrella: () => ({
    back: '<path d="M100 56 V176 q0 12 -12 12" stroke="#8a5a44" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<path d="M14 58 Q100 -34 186 58 Q164 46 143 58 Q122 46 100 58 Q78 46 57 58 Q36 46 14 58Z" fill="#ff8fb1"/>' +
      '<path d="M100 8 Q60 24 57 58 Q78 46 100 58 Q122 46 143 58 Q140 24 100 8Z" fill="#ffd1e0"/>',
  }),
  popcorn: () => ({
    hold: '<circle cx="86" cy="152" r="9" fill="#fff3c4"/><circle cx="102" cy="146" r="10" fill="#fff8d9"/><circle cx="116" cy="154" r="9" fill="#fff3c4"/><circle cx="96" cy="158" r="8" fill="#fff8d9"/>' +
      '<path d="M74 160 L126 160 L119 198 L81 198Z" fill="#fff" stroke="#ffc1cf" stroke-width="2"/>' +
      '<path d="M84 160 L91 160 L89 198 L83 198Z M101 160 L109 160 L107 198 L99 198Z" fill="#ff7a96"/>',
  }),
  trumpet: () => ({
    hold: '<g transform="rotate(-20 100 168)"><rect x="60" y="164" width="58" height="8" rx="4" fill="#ffc83d"/>' +
      '<path d="M114 156 L146 144 L146 192 L114 180Z" fill="#ffd966" stroke="#e0a800" stroke-width="2" stroke-linejoin="round"/>' +
      '<circle cx="80" cy="160" r="4" fill="#e0a800"/><circle cx="94" cy="160" r="4" fill="#e0a800"/></g>',
  }),
  flag: () => ({
    hold: '<rect x="98" y="116" width="5" height="96" rx="2" fill="#b98255"/><path d="M103 124 L146 138 L103 154Z" fill="#ff5a79"/>' + heartAt(115, 138, 0.9, '#fff'),
  }),
  wand: () => ({
    hold: '<line x1="82" y1="196" x2="128" y2="146" stroke="#ffd34e" stroke-width="5" stroke-linecap="round"/>' + starAt(132, 136, 1.4, '#ffd34e', 'twinkle'),
    back: starAt(160, 100, 0.7, '#ffb3c7', 'twinkle') + starAt(34, 90, 0.8, '#c9b3f0', 'twinkle'),
  }),
  magicFlower: () => ({
    back: '<circle class="pulse" cx="100" cy="146" r="36" fill="#fff6b0" opacity=".55"/>' + starAt(36, 100, 0.8, '#ffd34e', 'twinkle') + starAt(166, 96, 0.7, '#ffb3c7', 'twinkle'),
    hold: '<path d="M100 198 L100 150" stroke="#5fae6b" stroke-width="4" stroke-linecap="round"/><path d="M100 180 q-18 -2 -20 -14 q16 0 20 14z" fill="#79c585"/>' +
      flowerHead(100, 142, 1.25, '#c9b3f0'),
  }),
};

function eyesAndMouth(face) {
  const dot = (x, y, r = 6, hi = true) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${INK}"/>` + (hi ? `<circle cx="${x + 2}" cy="${y - 2}" r="${r / 3}" fill="#fff"/>` : '');
  const arc = (x, y) => `<path d="M${x - 8} ${y + 4} Q${x} ${y - 8} ${x + 8} ${y + 4}" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  const closed = (x, y) => `<path d="M${x - 8} ${y - 3} Q${x} ${y + 7} ${x + 8} ${y - 3}" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  const mouth = (d, fill = 'none') => `<path d="${d}" stroke="${INK}" stroke-width="3" fill="${fill}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const L = 76, R = 124, Y = 80;

  switch (face) {
    case 'shy':
      return { eyes: `<g class="blink">${dot(L, Y + 3, 5)}${dot(R, Y + 3, 5)}</g>`, mouth: mouth('M93 110 Q100 114 107 110'), blush: 0.9 };
    case 'cry':
      return {
        eyes: closed(L, Y) + closed(R, Y) +
          '<path class="tear" d="M70 88 q-6 12 0 17 q6 -5 0 -17z" fill="#8fd3ff"/><path class="tear tear2" d="M130 88 q-6 12 0 17 q6 -5 0 -17z" fill="#8fd3ff"/>',
        mouth: mouth('M88 117 Q100 104 112 117', '#ffb3c7'), blush: 0.6,
      };
    case 'teary':
      return {
        eyes: `<g class="blink">${dot(L, Y, 7.5)}${dot(R, Y, 7.5)}<circle cx="${L + 3}" cy="${Y + 3}" r="2" fill="#fff"/><circle cx="${R + 3}" cy="${Y + 3}" r="2" fill="#fff"/></g>` +
          `<ellipse cx="${L}" cy="${Y + 9}" rx="9" ry="3" fill="#8fd3ff" opacity=".75"/><ellipse cx="${R}" cy="${Y + 9}" rx="9" ry="3" fill="#8fd3ff" opacity=".75"/>` +
          '<path class="tear" d="M70 92 q-5 10 0 14 q5 -4 0 -14z" fill="#8fd3ff"/>',
        mouth: mouth('M91 115 Q100 107 109 115'), blush: 0.7,
      };
    case 'embarrassed':
      return {
        eyes: arc(L, Y) + arc(R, Y) + '<path d="M156 52 q-7 11 0 16 q7 -5 0 -16z" fill="#8fd3ff" stroke="#6bbbe8" stroke-width="1"/>',
        mouth: mouth('M88 111 q4 -5 8 0 t8 0 t8 0'), blush: 1,
      };
    case 'shocked':
      return {
        eyes: `<circle cx="${L}" cy="${Y}" r="11" fill="#fff" stroke="${INK}" stroke-width="3"/><circle cx="${R}" cy="${Y}" r="11" fill="#fff" stroke="${INK}" stroke-width="3"/>` +
          `<circle cx="${L}" cy="${Y}" r="3.5" fill="${INK}"/><circle cx="${R}" cy="${Y}" r="3.5" fill="${INK}"/>`,
        mouth: `<ellipse cx="100" cy="116" rx="6" ry="8" fill="#8a3b52" stroke="${INK}" stroke-width="2.5"/>`, blush: 0.4,
      };
    case 'hopeful':
      return {
        eyes: `<g class="blink">${dot(L, Y, 7.5)}${dot(R, Y, 7.5)}<circle cx="${L - 3}" cy="${Y + 3}" r="2" fill="#fff"/><circle cx="${R - 3}" cy="${Y + 3}" r="2" fill="#fff"/></g>` +
          `<path d="M64 68 L86 61 M114 61 L136 68" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,
        mouth: mouth('M92 109 Q100 115 108 109'), blush: 0.7,
      };
    case 'excited':
      return {
        eyes: arc(L, Y) + arc(R, Y) + starAt(44, 70, 0.7, '#ffd34e', 'twinkle') + starAt(158, 66, 0.8, '#ffb3c7', 'twinkle'),
        mouth: mouth('M86 106 Q100 132 114 106 Z', '#c23a62') + '<ellipse cx="100" cy="118" rx="7" ry="4" fill="#ff8fa8"/>', blush: 0.8,
      };
    case 'love':
      return {
        eyes: heartAt(L, Y, 1.5, '#ff4d7d') + heartAt(R, Y, 1.5, '#ff4d7d'),
        mouth: mouth('M88 108 Q100 122 112 108'), blush: 1,
      };
    case 'smirk':
      return {
        eyes: `<g class="blink">${dot(L, Y, 6)}${dot(R, Y, 6)}</g><path d="M66 70 L86 74 M114 74 L134 70" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,
        mouth: mouth('M90 111 Q102 117 114 105'), blush: 0.5,
      };
    default: // happy
      return { eyes: `<g class="blink">${dot(L, Y)}${dot(R, Y)}</g>`, mouth: mouth('M88 108 Q100 122 112 108'), blush: 0.55 };
  }
}

function teddySvg(opts) {
  const p = PALETTES[opts.fur % PALETTES.length];
  const face = eyesAndMouth(opts.face || 'happy');
  const prop = (PROPS[opts.prop] || PROPS.none)(p);
  const stroke = `stroke="${p.d}" stroke-width="2.5"`;
  const holding = Boolean(prop.hold);
  const poke = !holding && (opts.face === 'shy' || opts.face === 'embarrassed') && !opts.pose;

  let arms;
  if (opts.pose === 'open') {
    arms = `<ellipse cx="40" cy="130" rx="13" ry="27" transform="rotate(-39 40 130)" fill="${p.f}" ${stroke}/>` +
      `<ellipse cx="160" cy="130" rx="13" ry="27" transform="rotate(39 160 130)" fill="${p.f}" ${stroke}/>`;
  } else if (opts.wave) {
    arms = `<ellipse cx="72" cy="164" rx="13" ry="25" transform="rotate(-48 72 164)" fill="${p.f}" ${stroke}/>` +
      `<g class="wave"><ellipse cx="156" cy="116" rx="13" ry="26" transform="rotate(27 156 116)" fill="${p.f}" ${stroke}/></g>`;
  } else if (holding || poke) {
    arms = `<ellipse cx="72" cy="168" rx="13" ry="25" transform="rotate(-50 72 168)" fill="${p.f}" ${stroke}/>` +
      `<ellipse cx="128" cy="168" rx="13" ry="25" transform="rotate(50 128 168)" fill="${p.f}" ${stroke}/>`;
    if (poke) {
      arms += `<circle cx="93" cy="182" r="8" fill="${p.f}" ${stroke}/><circle cx="107" cy="182" r="8" fill="${p.f}" ${stroke}/>`;
    }
  } else {
    arms = `<ellipse cx="50" cy="160" rx="13" ry="26" transform="rotate(18 50 160)" fill="${p.f}" ${stroke}/>` +
      `<ellipse cx="150" cy="160" rx="13" ry="26" transform="rotate(-18 150 160)" fill="${p.f}" ${stroke}/>`;
  }

  return (
    '<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" focusable="false">' +
    (prop.back || '') +
    // legs
    `<ellipse cx="68" cy="203" rx="22" ry="15" fill="${p.f}" ${stroke}/><ellipse cx="132" cy="203" rx="22" ry="15" fill="${p.f}" ${stroke}/>` +
    `<ellipse cx="68" cy="206" rx="10" ry="7" fill="${p.m}"/><ellipse cx="132" cy="206" rx="10" ry="7" fill="${p.m}"/>` +
    // body + belly
    `<ellipse cx="100" cy="162" rx="48" ry="50" fill="${p.f}" ${stroke}/><ellipse cx="100" cy="170" rx="30" ry="32" fill="${p.m}"/>` +
    // ears + head
    `<circle cx="52" cy="50" r="21" fill="${p.f}" ${stroke}/><circle cx="148" cy="50" r="21" fill="${p.f}" ${stroke}/>` +
    `<circle cx="52" cy="50" r="11" fill="${p.e}"/><circle cx="148" cy="50" r="11" fill="${p.e}"/>` +
    `<ellipse cx="100" cy="85" rx="58" ry="52" fill="${p.f}" ${stroke}/>` +
    // face
    `<ellipse cx="100" cy="102" rx="25" ry="19" fill="${p.m}"/><ellipse cx="100" cy="94" rx="8.5" ry="6" fill="${INK}"/>` +
    `<ellipse cx="95" cy="92" rx="2.5" ry="1.5" fill="#fff" opacity=".7"/>` +
    `<ellipse cx="60" cy="99" rx="11" ry="7" fill="#ff7f9f" opacity="${face.blush}"/><ellipse cx="140" cy="99" rx="11" ry="7" fill="#ff7f9f" opacity="${face.blush}"/>` +
    face.eyes + face.mouth +
    // props held in paws
    (prop.hold || '') + arms + (prop.top || '') +
    '</svg>'
  );
}

/* Build a row of teddies for one level. Trusted, hard-coded markup only. */
function teddyRowHtml(level) {
  const n = level.count || 1;
  let html = '';
  for (let i = 0; i < n; i++) {
    const face = i % 2 === 1 && level.face2 ? level.face2 : level.face;
    const style = level.scale ? ` style="--s:${level.scale}"` : '';
    html += `<div class="teddy"${style}>${teddySvg({ face, prop: level.prop, fur: level.fur + i })}</div>`;
  }
  return html;
}

/* =====================================================================
   APP
   ===================================================================== */
const $ = (id) => document.getElementById(id);
const els = {
  intro: $('screen-intro'), level: $('screen-level'), yay: $('screen-yay'),
  introTeddy: $('introTeddy'), introYes: $('introYes'), introNo: $('introNo'),
  levelBody: $('levelBody'), floaters: $('floaters'), bubble: $('bubble'), levelTeddy: $('levelTeddy'),
  message: $('message'), levelSig: $('levelSig'), yesBtn: $('yesBtn'), noBtn: $('noBtn'),
  confetti: $('confetti'), hugStage: $('hugStage'), hugRow: $('hugRow'), jumper: $('jumper'),
  hugBtn: $('hugBtn'), hugMsg: $('hugMsg'), yaySig: $('yaySig'), restartBtn: $('restartBtn'),
  giftBtn: $('giftBtn'), modal: $('modal'), modalClose: $('modalClose'), secretText: $('secretText'), bgHearts: $('bgHearts'),
};

const LOCK_MS = 2800; // time the teddy's reaction stays readable before the next level
const state = { screen: 'intro', index: 0, locked: false, closed: false, timer: null };

const FLOATER_SPOTS = [
  { left: '2%', top: '8%' }, { right: '3%', top: '6%' }, { left: '4%', bottom: '10%' },
  { right: '4%', bottom: '12%' }, { left: '38%', top: '-2%' }, { right: '36%', bottom: '-2%' },
];

function showScreen(name) {
  state.screen = name;
  els.intro.hidden = name !== 'intro';
  els.level.hidden = name !== 'level';
  els.yay.hidden = name !== 'yay';
  window.scrollTo(0, 0);
}

function setSignature(el) {
  const name = CONFIG.senderName.trim();
  el.hidden = !name;
  el.textContent = name ? `— ${name} 🧸` : '';
}

function fillSigns(root) {
  root.querySelectorAll('.sign-text').forEach((t) => {
    const text = LEVELS[state.index].sign || '';
    t.textContent = text;
    t.setAttribute('textLength', String(Math.min(78, text.length * 10)));
  });
}

/* Single rendering function for the level screen. */
function renderLevel() {
  const level = LEVELS[state.index];
  const n = state.index + 1;
  const last = n === LEVELS.length;


  els.message.textContent = state.closed ? CONFIG.softCloseMessage : level.message;
  els.levelBody.classList.toggle('level-final', last);
  if (last) setSignature(els.levelSig); else els.levelSig.hidden = true;

  els.noBtn.textContent = state.closed ? 'Start over 🔄' : last ? 'Abhi nahi 🥺' : 'NO 😤';
  els.noBtn.setAttribute('aria-label', state.closed ? 'Start over' : last ? 'Not yet' : 'No');

  const shown = state.closed ? { ...level, face: 'cry', prop: 'tissue', count: 1, anim: 'sob', scale: 1 } : level;
  els.levelTeddy.className = `teddy-wrap n${Math.min(shown.count || 1, 5)} anim-${shown.anim}`;
  els.levelTeddy.innerHTML = teddyRowHtml(shown);
  fillSigns(els.levelTeddy);

  els.floaters.textContent = '';
  (level.bg || []).slice(0, FLOATER_SPOTS.length).forEach((emoji, i) => {
    const span = document.createElement('span');
    span.textContent = emoji;
    Object.assign(span.style, FLOATER_SPOTS[i], { animationDelay: `${(i * 0.45).toFixed(2)}s` });
    els.floaters.appendChild(span);
  });

  els.levelBody.classList.remove('enter');
  void els.levelBody.offsetWidth; // restart the entrance animation
  els.levelBody.classList.add('enter');
}

function hideBubble() {
  els.bubble.hidden = true;
  els.bubble.textContent = '';
}

function startLevels() {
  state.index = 0;
  state.closed = false;
  hideBubble();
  showScreen('level');
  renderLevel();
}

function onNo() {
  if (state.locked) return;
  state.locked = true;

  if (state.screen === 'intro') {
    startLevels();
    state.timer = setTimeout(unlock, 450);
    return;
  }
  if (state.closed) {
    restart();
    state.locked = false;
    return;
  }

  // reaction animation + funny line, then advance exactly one level
  els.bubble.textContent = LEVELS[state.index].reaction;
  els.bubble.hidden = false;
  els.levelTeddy.classList.remove('react');
  void els.levelTeddy.offsetWidth;
  els.levelTeddy.classList.add('react');

  state.timer = setTimeout(() => {
    hideBubble();
    if (state.index >= LEVELS.length - 1) {
      state.closed = true; // 60th NO: gentle, no-pressure ending
    } else {
      state.index += 1;
    }
    renderLevel();
    state.timer = setTimeout(unlock, 250);
  }, LOCK_MS - 250);
}

function unlock() {
  state.locked = false;
  state.timer = null;
}

/* ---------- Celebration ---------- */
function buildHugScene() {
  els.hugRow.innerHTML =
    `<div class="teddy">${teddySvg({ face: 'love', prop: 'none', fur: 0, pose: 'open' })}</div>` +
    `<div class="teddy">${teddySvg({ face: 'excited', prop: 'none', fur: 1, pose: 'open' })}</div>`;
  els.jumper.innerHTML = teddySvg({ face: 'excited', prop: 'flower', fur: 6 });
}

function buildConfetti() {
  const colors = ['#ff7aa2', '#ffd34e', '#c9b3f0', '#ffb48a', '#8fd3ff', '#ff4d7d', '#ffffff'];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 38; i++) {
    const piece = document.createElement('i');
    piece.style.setProperty('--x', `${Math.random() * 100}%`);
    piece.style.setProperty('--w', `${6 + Math.random() * 6}px`);
    piece.style.setProperty('--d', `${4 + Math.random() * 4}s`);
    piece.style.setProperty('--delay', `${-Math.random() * 6}s`);
    piece.style.setProperty('--c', colors[i % colors.length]);
    frag.appendChild(piece);
  }
  els.confetti.textContent = '';
  els.confetti.appendChild(frag);
}

function onYes() {
  if (state.timer) { clearTimeout(state.timer); state.timer = null; }
  state.locked = false;
  hideBubble();
  buildHugScene();
  buildConfetti();
  els.hugStage.classList.remove('hugging');
  els.hugMsg.textContent = '';
  els.hugBtn.textContent = 'SEND A VIRTUAL HUG 🫂';
  setSignature(els.yaySig);
  showScreen('yay');
}

function onHug() {
  els.hugStage.classList.remove('hugging');
  void els.hugStage.offsetWidth;
  els.hugStage.classList.add('hugging');
  els.hugMsg.textContent = CONFIG.hugMessage;
  els.hugBtn.textContent = 'ONE MORE HUG 🫂';

  const emojis = ['💗', '💕', '✨', '🧸', '💖'];
  for (let i = 0; i < 10; i++) {
    const h = document.createElement('span');
    h.className = 'hug-burst';
    h.textContent = emojis[i % emojis.length];
    h.style.setProperty('--dx', `${Math.round((Math.random() - 0.5) * 220)}px`);
    h.style.setProperty('--dy', `${-60 - Math.round(Math.random() * 110)}px`);
    h.style.animationDelay = `${(i * 0.06).toFixed(2)}s`;
    els.hugStage.appendChild(h);
    setTimeout(() => h.remove(), 1700);
  }
}

function restart() {
  if (state.timer) { clearTimeout(state.timer); state.timer = null; }
  state.locked = false;
  state.closed = false;
  state.index = 0;
  els.confetti.textContent = '';
  els.hugStage.classList.remove('hugging');
  hideBubble();
  showScreen('intro');
}

/* ---------- Secret popup ---------- */
function openModal() {
  els.secretText.textContent = CONFIG.secretMessage;
  els.modal.hidden = false;
  els.modalClose.focus();
}
function closeModal() {
  els.modal.hidden = true;
  els.giftBtn.focus();
}

/* ---------- Ambient floating hearts ---------- */
function buildBackgroundHearts() {
  const glyphs = ['💗', '💕', '🌸', '✨', '💖', '⭐'];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('span');
    s.textContent = glyphs[i % glyphs.length];
    s.style.setProperty('--x', `${(i * 7.3 + Math.random() * 6) % 96}%`);
    s.style.setProperty('--fs', `${14 + Math.random() * 16}px`);
    s.style.setProperty('--d', `${9 + Math.random() * 8}s`);
    s.style.setProperty('--delay', `${-Math.random() * 14}s`);
    frag.appendChild(s);
  }
  els.bgHearts.appendChild(frag);
}

/* ---------- Boot ---------- */
function init() {
  if (LEVELS.length !== 60) console.warn(`Expected 60 levels, found ${LEVELS.length}`);

  els.introTeddy.className = 'teddy-wrap n1 anim-bob';
  els.introTeddy.innerHTML =
    `<div class="teddy">${teddySvg({ face: 'shy', prop: 'bouquet', fur: 0, wave: true })}</div>`;

  buildBackgroundHearts();

  els.introYes.addEventListener('click', onYes);
  els.introNo.addEventListener('click', onNo);
  els.yesBtn.addEventListener('click', onYes);
  els.noBtn.addEventListener('click', onNo);
  els.hugBtn.addEventListener('click', onHug);
  els.restartBtn.addEventListener('click', restart);
  els.giftBtn.addEventListener('click', openModal);
  els.modalClose.addEventListener('click', closeModal);
  els.modal.addEventListener('click', (e) => { if (e.target === els.modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !els.modal.hidden) closeModal(); });
}

init();
