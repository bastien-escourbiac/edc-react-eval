import React from "react";
import { products } from "../Components/Fixtures/Fixtures";

const usePanier = () => {
  //hook personnalisé
  const [basketTable, setBasketTable] = React.useState(products);
  //products est crée au démarrage de l'application, je peux insérer directement dans le tableau
  //pas de vérification à faire

  //Ajout de l'attribut qte au produit
  const addToBasketTable = (idElement, qte) => {
    const newBasketTable = basketTable.map(item => {
      if (item.title === parseInt(idElement)) {
        return { ...item, qte: item.qte + parseInt(qte) };
      } //ajout de la qte renseignée
      return item;
    });
    //mise à jour de mon tableau de produits
    setBasketTable(newBasketTable);
  };

  //modifier l'attribut quantité du produit dans le panier
  const takeOffToBasketTable = idElement => {
    const newBasketTable = basketTable.map(item => {
      if (item.title === parseInt(idElement)) {
        return { ...item, qte: 0 };
      }
      return item;
    });
    setBasketTable(newBasketTable);
  };

  const panier = basketTable.filter(basketTable => basketTable.qte != 0);

  return [basketTable, panier, addToBasketTable, takeOffToBasketTable];
};
export { usePanier };
