export const TypeCard = {
    pt: {
      adventures: "Aventuras",
      characters: "Personagens",
      creatures: "Criaturas",
      items: "Itens",
      lands: "Terras",
      magics: "Mágicas"
    },
    en: {
      adventures: "Adventures",
      characters: "Characters",
      creatures: "Creatures",
      items: "Items",
      lands: "Lands",
      magics: "Magics"
    },
    es: {
      adventures: "Aventuras",
      characters: "Personajes",
      creatures: "Criaturas",
      items: "Objetos",
      lands: "Terrenos",
      magics: "Mágicas"
    }
  } as const;

  export type TypeCardLang = keyof typeof TypeCard; // 'pt' | 'en' | 'es'
  export type TypeCardCategory = keyof typeof TypeCard[TypeCardLang]; 

  export function getTypeCardLabel(lang: TypeCardLang, category: TypeCardCategory): string {
    return TypeCard[lang][category];
  }
  