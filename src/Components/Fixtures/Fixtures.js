import React from "react";
let i;
const products = [];
//introduction des données dans le tableau de produits : titre et prix random
for (i = 1; i < 100; i++) {
  products.push({
    title: i,
    price: Math.floor(Math.random() * Math.floor(100)),
    qte: 0
  });
}

export { products };
