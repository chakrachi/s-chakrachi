import App from './components/App.html';
// import Rainbow from './components/Rainbow.html';

const AppComponent = new App({
  target: document.querySelector('#app'),
  data: { name: 'Chakra~Chi',  planets: {sun: "https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/sendtolight2.png?alt=media&token=daf94277-e92b-419a-a051-9958419391b0", moon: "https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/moon.png?alt=media&token=0100ec94-6adc-4b00-984c-12ce21ec140a"}, chakras: [
    "Root",
    "Sacral",
    "Solar Plexus",
    "Heart",
    "Throat",
    "Third Eye",
    "Crown"
  ].reverse(), value: null, chakrasrc: ["https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/chakras%2FRoot.png?alt=media&token=50221fcd-8483-40e9-b859-2fa35427c88b", "https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/chakras%2FSacral.png?alt=media&token=5ca168c2-216f-40bd-a557-040f8e026d65", "https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/chakras%2FSolar%20Plexus.png?alt=media&token=7e55088b-9d9f-4c73-a953-9452b28924b3", "https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/chakras%2FHeart.png?alt=media&token=bd55ed9d-c1fd-4efa-a4d5-95d6b84c9d23", "https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/chakras%2FThroat.png?alt=media&token=4adcb127-f252-472d-84de-630632b7163a", "https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/chakras%2FThird%20Eye.png?alt=media&token=28c6906f-fbd3-4693-bfa7-f7721258a21e","https://firebasestorage.googleapis.com/v0/b/chakra-62276.appspot.com/o/chakras%2FCrown.png?alt=media&token=6b2a56c1-3ec9-4c67-9a61-730a9bdf1ee6"].reverse(), sanskrit: [
      "Muladhara",
      "Svadhishthana",
      "Manipura",
      "Anahata",
      "Vishuddha",
      "Ajna",
      "Sahasrara"
    ].reverse(), description: [
      "root chakra is located at the base of the spine in the coccygeal region of the subtle body. This chakra is where the three main nadi separate and begin their upward movement. Dormant Kundalini is believed to be resting here, wrapped three and a half times around the black Svayambhu linga, the lowest of three obstructions to her full rising (also known as knots or granthis). It is symbolised as a four-petaled lotus. Muladhara is represented with the colour red. The yogi starts his or her spiritual journey by focusing on this station. The seed syllable is Lam (pronounced lum), the deity is Ganesh, and the Shakti is Dakini. The associated animal is the elephant.",

      "sacral chakra is believed to be located at the root of sexual organs, along the spine in the subtle body. It is symbolised as a six-petaled lotus. Svadhisthana is represented with a white lotus within which is a crescent moon, with six vermilion, or orange petals. The seed mantra is Vam, and the presiding deity is Brahma, with the Shakti being Rakini (or Chakini). In esoteric Buddhism, it is called Nirmana and is generally considered to be the petal lotus of 'Creation' and corresponding to the first state of Four Noble Truths. ",

      "solar plexus/navel chakra, is located in the naval region along the subtle body's spinal column. For the Nath yogi meditation system, this is described as the Madhyama-Shakti or the intermediate stage of self discovery. It is symbolised as a ten-petaled lotus.[3] The Chakra is represented as a downward pointing triangle with ten petals, along with the colour yellow. The seed syllable is Ram, and the presiding deity is Braddha Rudra, with Lakini as the Shakti.",

      "heart chakra is the subtle center of inner divine melody, believed to be located next to heart, located behind it along the subtle spinal column. It is believed to be the psychic energy center. It is symbolised by a lotus with twelve petals. It is represented as a circular flower with twelve green petals called the heartmind. Within it is a yantra of two intersecting triangles, forming a hexagram, symbolising a union of the male and female. The seed mantra is Yam, the presiding deity is Ishana Rudra Shiva, and the Shakti is Kakini. In esoteric Buddhism, this Chakra is called Dharma and is generally considered to be the petal lotus of 'Essential nature' and corresponding to the second state of Four Noble Truths.",

      "throat chakra is located at the base of subtle body's throat. It is symbolized as a sixteen petaled lotus. The Vishuddha is iconographically represented as a silver crescent within a white circle, with 16 light or pale blue, or turquoise petals. The seed mantra is Ham, and the residing deity is Panchavaktra shiva, with 5 heads and 4 arms, and the Shakti is Shakini. In esoteric Buddhism, it is called Sambhoga and is generally considered to be the petal lotus of 'Enjoyment' and corresponding to the third state of Four Noble Truths.",

      "third-eye chakra is the subtle center of energy, believed to be located between the eyebrows, located behind it along the subtle (non-physical) spinal column. It is so called because this is the spot where the tantra guru touches the seeker during the initiation ritual (saktipata). He or she commands the awakened kundalini to pass through this center. It is symbolised by a lotus with two petals. It is at this point that the two side nadi Ida (yoga) and Pingala are said to terminate and merge with the central channel Sushumna, signifying the end of duality, the characteristic of being dual (e.g. light and dark, or male and female). It corresponds to the colours violet, indigo or deep blue, though it is traditionally described as white.",

      "crown chakra is the topmost chakra in the subtle body, located in the crown of the head. In esoteric Hinduism and New Age western systems, it is generally considered to be the highest spiritual center and the state of pure consciousness, within which there is neither object nor subject. When the feminine Kundalini Shakti rises to this point, it unites with the masculine Shiva, the yogi or yogini achieves self realization and a state of liberating samadhi is attained. The chakra is symbolized by a lotus with one thousand multi-coloured petals. In esoteric Buddhism, it is called Mahasukha and is generally considered to be the petal lotus of 'Great Bliss' and corresponding to the fourth state of Four Noble Truths."
    ].reverse()},
})

// const RainbowComponent = new Rainbow({
//     target: document.querySelector('#root'),
//     data: {
      
//     }
//   })