import teddyPic from "../assets/pecs/toys/teddy.jpeg";
import plainMilk from "../assets/pecs/drinks/milk-bottle.jpeg";
import lolliesPic from "../assets/pecs/candy/candy.jpeg";
//importing sounds
import teddySound from "../assets/sounds/teddy-audio.m4a";
import milkSound from "../assets/sounds/milk-sound.m4a";
import lollySound from "../assets/sounds/lolly-sound.m4a";
export const pecsData = [
  {
    _id: "pec_1",
    category: "Toys",
    name: "Teddy Bear",
    picture: teddyPic,
    sound: teddySound,
  },
  {
    _id: "pec_2",
    category: "Drinks",
    name: "Plain Milk",
    picture: plainMilk,
    sound: milkSound,
  },
  {
    _id: "pec_3",
    category: "Candy",
    name: "lollies",
    picture: lolliesPic,
    sound: lollySound,
  },
];
