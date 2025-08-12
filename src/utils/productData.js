import tomatoImage from '../assets/vegitable/totmato.jpg';
import potatoImage from '../assets/vegitable/potato.jpg';
import onionImage from '../assets/vegitable/onion.jpg';
import broccoliImage from '../assets/vegitable/cauliflower.jpg';
import corianderImage from '../assets/vegitable/dhaniya.jpg';
import capsicumImage from '../assets/vegitable/capsicum.jpg';
import cornImage from '../assets/vegitable/makai.jpg';
import gingerImage from '../assets/vegitable/ginger.jpg';
import lemonImage from '../assets/vegitable/lemon.jpg';
import beetrootImage from '../assets/vegitable/beetrootImage.jpg';

// fruit 
import appleImage from '../assets/fruit/appleCom.jpg';
import kamalamImage from '../assets/fruit/redgraps.jpg';
import blueberryImage from '../assets/fruit/jamun.jpg';
import cherryImage from '../assets/fruit/apple.jpg';
import lichiImage from '../assets/fruit/lichi.jpg';
import starfruitImage from '../assets/fruit/nimbu.jpg';
import guavaImage from '../assets/fruit/guava.jpg';
import mangoImage from '../assets/fruit/mango.jpg';
import pineappleImage from '../assets/fruit/anaras.jpg';
import bananaImage from '../assets/fruit/banana.jpg';

export const vegetableData = [
  {
    category: "Vegetables",
    title: "Tomato - Hybrid",
    price: 5.0,
    oldPrice: 7.0,
    rating: 4.0,
    weight: "1 kg",
    quantity: null,
    badge: null,
    image: tomatoImage,
  },
  {
    category: "Tuber Root",
    title: "Potato",
    price: 15.0,
    oldPrice: 17.0,
    rating: 3.0,
    weight: "5 kg",
    quantity: null,
    badge: "SALE",
    image: potatoImage,
  },
  {
    category: "Tuber Root",
    title: "Onion - Hybrid",
    price: 25.0,
    oldPrice: 30.0,
    rating: 3.0,
    weight: "10 kg",
    quantity: null,
    badge: "SALE",
    image: onionImage,
  },
  {
    category: "Vegetables",
    title: "Coriander Bunch",
    price: 5.0,
    oldPrice: 7.0,
    rating: 2.5,
    weight: "250 g",
    quantity: null,
    badge: "NEW",
    image: corianderImage,
  },
  {
    category: "Vegetables",
    title: "Capsicum - Red",
    price: 2.0,
    oldPrice: 3.0,
    rating: 5.0,
    weight: null,
    quantity: "3 pcs",
    badge: "NEW",
    image: capsicumImage,
  },
  {
    category: "Vegetables",
    title: "Sweet Corn",
    price: 6.0,
    oldPrice: 9.0,
    rating: 4.0,
    weight: null,
    quantity: "2 pcs",
    badge: "SALE",
    image: cornImage,
  },
  {
    category: "Tuber Root",
    title: "Ginger - Organic",
    price: 2.0,
    oldPrice: 3.0,
    rating: 3.0,
    weight: "100 g",
    quantity: null,
    badge: null,
    image: gingerImage,
  },
  {
    category: "Vegetables",
    title: "Lemon - Seedless",
    price: 8.0,
    oldPrice: 9.0,
    rating: 3.0,
    weight: "1 kg",
    quantity: null,
    badge: null,
    image: lemonImage,
  },
  {
    category: "Vegetables",
    title: "Beetroot - Organic",
    price: 4.0,
    oldPrice: 5.0,
    rating: 3.5,
    weight: null,
    quantity: "3 pcs",
    badge: null,
    image: beetrootImage,
  },
  {
    category: "Vegetables",
    title: "Organic Fresh Broccoli",
    price: 10.0,
    oldPrice: 11.0,
    rating: 3.0,
    weight: "1 kg",
    quantity: null,
    badge: null,
    image: broccoliImage,
  }
];
export const fruitData = [
  {
    category: "Fresh Fruits",
    title: "Apple",
    price: 10.0,
    oldPrice: 12.0,
    rating: 4.0,
    quantity: "5 pcs",
    weight: null,
    badge: null,
    image: appleImage,
  },
  {
    category: "Fresh Fruit",
    title: "Kamalam Fruit",
    price: 15.0,
    oldPrice: 17.0,
    rating: 4.0,
    quantity: "3 pcs",
    weight: null,
    badge: "SALE",
    image: kamalamImage,
  },
  {
    category: "Fresh Fruits",
    title: "Blue Berry",
    price: 11.0,
    oldPrice: 12.0,
    rating: 3.0,
    quantity: null,
    weight: "500 g",
    badge: "SALE",
    image: blueberryImage,
  },
  {
    category: "Fresh Fruit",
    title: "Cherry",
    price: 20.0,
    oldPrice: 21.0,
    rating: 3.0,
    quantity: null,
    weight: "1 kg",
    badge: "NEW",
    image: cherryImage,
  },
  {
    category: "Fresh Fruit",
    title: "Lichi",
    price: 25.0,
    oldPrice: 35.0,
    rating: 5.0,
    quantity: null,
    weight: "500 g",
    badge: "NEW",
    image: lichiImage,
  },
  {
    category: "Fresh Fruit",
    title: "Star Fruit",
    price: 5.0,
    oldPrice: 6.0,
    rating: 4.0,
    quantity: null,
    weight: "1 kg",
    badge: "SALE",
    image: starfruitImage,
  },
  {
    category: "Fresh Fruits",
    title: "Guava",
    price: 10.0,
    oldPrice: 12.0,
    rating: 2.0,
    quantity: null,
    weight: "2 kg",
    badge: null,
    image: guavaImage,
  },
  {
    category: "Snacks",
    title: "Mango - Kesar",
    price: 50.0,
    oldPrice: 55.0,
    rating: 4.0,
    quantity: null,
    weight: "20 kg",
    badge: null,
    image: mangoImage,
  },
  {
    category: "Fresh Fruit",
    title: "Pineapple",
    price: 15.0,
    oldPrice: 16.0,
    rating: 4.0,
    quantity: "1 pcs",
    weight: null,
    badge: null,
    image: pineappleImage,
  },
  {
    category: "Fresh Fruit",
    title: "Banana",
    price: 9.0,
    oldPrice: 10.0,
    rating: 4.0,
    quantity: "12 pcs",
    weight: null,
    badge: null,
    image: bananaImage,
  }
];
