import { useSelector } from "react-redux";

//this component has the role of blocking vertical scroll thanks to the css property
//overscrollBehavior: "contain",
//the idea is simple we create this long ass element and we manipulate its z-index
//and since "overscrollBehavior: "contain" prevent scroll propagation to beneth elems ..., well u got it future me
//"why didnt u block scrolling event listener then reactivate it when u need" ?
//well already tried and blocking was easy but failed reactivating it due to my lack of expertise

export default function ScrollBlocker() {
  const selectedResume = useSelector((state) => state.section2.selectedResume);
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "120vh",
        background: "red",
        overflow: "auto",
        zIndex: `${selectedResume.active ? "999" : "99"}`,
        opacity: "0",
        overscrollBehavior: "contain",
      }}
      className="scroll-blocker"
    >
      `Le lorem ipsum est, en imprimerie, une suite de mots sans signification
      utilisée à titre provisoire pour calibrer une mise en page, le texte
      définitif venant remplacer le faux-texte dès qu &apos; il est prêt ou que
      la mise en page est achevée. Généralement, on utilise un texte en faux
      latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une
      suite de mots sans signification utilisée à titre provisoire pour calibrer
      une mise en page, le texte définitif venant remplacer le faux-texte dès qu
      &apos; il est prêt ou que la mise en page est achevée. Généralement, on
      utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum
      est, en imprimerie, une suite de mots sans signification utilisée à titre
      provisoire pour calibrer une mise en page, le texte définitif venant
      remplacer le faux-texte dès qu &apos; il est prêt ou que la mise en page
      est achevée. Généralement, on utilise un texte en faux latin, le Lorem
      ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie,
      une suite de mots sans signification utilisée à titre provisoire pour
      calibrer une mise en page, le texte définitif venant remplacer le
      faux-texte dès qu &apos; il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
      Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans
      signification utilisée à titre provisoire pour calibrer une mise en page,
      le texte définitif venant remplacer le faux-texte dès qu &apos; il est
      prêt ou que la mise en page est achevée. Généralement, on utilise un texte
      en faux latin, le Lorem ipsum ou Lipsum.`
    </div>
  );
}
