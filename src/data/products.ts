export interface Product {
  id: string;
  name: string;
  tag: string;
  poster: string;
  description: string;
  highlights: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "bacon-brabo",
    name: "Bacon Brabo",
    tag: "Feito pra quem e",
    poster: "/images/baconbrabo.webp",
    description:
      "Blend artesanal, queijo derretido, bacon crocante e maionese da casa. O favorito de quem gosta de sabor de verdade.",
    highlights: ["Bacon crocante", "Queijo derretido", "Maionese da casa"],
  },
  {
    id: "cheese-explosion",
    name: "Cheese Explosion",
    tag: "Novo",
    poster: "/images/cheeseexplosion.webp",
    description:
      "Mussarela empanada, cheddar, bacon crocante e alface fresca. Explode sabor em cada mordida.",
    highlights: ["Mussarela empanada", "Cheddar", "Bacon crocante"],
  },
  {
    id: "rei-do-sertao",
    name: "Rei do Sertao",
    tag: "O sabor que reina",
    poster: "/images/reidosertao.webp",
    description:
      "Queijo coalho, bacon, maionese da casa e geleia de sweet chilli. Uma homenagem ao sabor nordestino.",
    highlights: ["Queijo coalho", "Geleia sweet chilli", "Bacon"],
  },
  {
    id: "tropical-brasileiro",
    name: "Tropical Brasileiro",
    tag: "Lancamento",
    poster: "/images/tropicalbrasileiro.webp",
    description:
      "Cheddar, bacon crocante, picles, cebola roxa e maionese da casa. Uma explosao de sabores com a cara do Brasil.",
    highlights: ["Picles crocante", "Cebola roxa", "Cheddar"],
  },
];
