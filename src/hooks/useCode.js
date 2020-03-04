import React, { useState, useEffect } from "react";
import { products } from "../Components/Fixtures/Fixtures";

const useCode = () => {
  //hook personnalisé
  const [code, setCode] = React.useState(0);
  const [prix, setPrix] = React.useState(0);
  useEffect(() => {
    //Je vérifie la valeur de code
    if (parseInt(code) != 0 && !isNaN(code) && code != "") {
      //je parcours mon tableau et cherche une correspondance avec mon produit
      const productFound = products.find(
        element => parseInt(element.title) === parseInt(code)
      );
      //mise à jour du hook
      setPrix(productFound.price);
    } else {
      //je réinitialise le prix à 0 lorsque la condition n'est pas respectée
      setPrix("");
    }
  }, [code]);
  return [code, prix, setCode];
};

export { useCode };
