import React, { useEffect } from "react";
import { usePanier } from "../../hooks/usePanier";
import { useCode } from "../../hooks/useCode";

const HomePage = () => {
  const [
    basketTable,
    panier,
    addToBasketTable,
    takeOffToBasketTable
  ] = usePanier();
  const [code, prix, setCode] = useCode();
  const [qte, setQte] = React.useState(0);
  const [btnDisable, setBtnDisable] = React.useState(true);

  //BUGG : gérer saisie manuelle utilisateur >100

  //TODO affichage conditionnel du prix de départ
  //TODO affichage conditionnel du panier au clic sur le bouton ajouter
  //TODO découper mon application en deux composants GestionPanier et Panier
  //TODO somme totale du panier

  //hook d'effet qui désactive le bouton Ajout au panier tant que la qte et le code ne sont pas renseignés
  useEffect(() => {
    if (
      parseInt(code) === 0 ||
      isNaN(code) ||
      code === "" ||
      parseInt(qte) === 0 ||
      isNaN(qte) ||
      qte === ""
    ) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }, [code, qte]);

  //Affichera uniquement les produits qte>0 dans le panier

  return (
    <React.Fragment>
      <body>
        <fieldset>
          <legend> Gestion du panier : </legend>
          <div className="input_gestion">
            <label htmlFor="code_article">Code produit:</label>
            <input
              type="number"
              id="code_article"
              min="1"
              max="100"
              placeholder="Min1, max 100"
              onChange={event => setCode(event.target.value)}
              value={code}
            ></input>
            <br></br>
            <label htmlFor="qte_article">Quantité produit:</label>
            <input
              type="number"
              id="qte_article"
              min="1"
              max="100"
              placeholder="Min1, max 100"
              value={qte}
              onChange={event => setQte(event.target.value)}
            ></input>
            <br></br>
            <label className="price " htmlFor="prix_article">
              Prix :{prix}€
            </label>
          </div>
          <br></br>
          <button
            onClick={() => {
              addToBasketTable(code, qte);
              setCode(0);
              setQte(0);
            }}
            disabled={btnDisable}
          >
            Ajouter
          </button>
        </fieldset>
        <div id="panier">
          <fieldset>
            <legend> Panier : </legend>
            <div className="panier">
              {panier.map(item => {
                return (
                  <React.Fragment>
                    <div className="produit">
                      <label className="panier">Produit :{item.title} </label>
                      <label className="panier">Quantité :{item.qte}</label>
                      <label className="panier">
                        Prix :{item.price} €{" "}
                        <button
                          class="supprimer"
                          onClick={() => {
                            takeOffToBasketTable(item.title);
                          }}
                        >
                          Supprimer
                        </button>
                      </label>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </fieldset>
        </div>
      </body>
    </React.Fragment>
  );
};

export { HomePage };
