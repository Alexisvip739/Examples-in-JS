/**
 * ¡Es hora de poner el árbol de navidad en casa! 🎄
 * Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
 * Si le pasamos el argumento 5, se pintaría esto: 
*/

/**
____*____
___***___
__*****__
_*******_
*********
____#____
____#____ 
*/







function createXmasTree(height) {
    let arbol = "";
    const arbolObj ={
      asterico:  "*",
      barra:  "_",
      tronco:  "#",
    };
    const {asterico, barra, tronco} = arbolObj;
  
    for(let i=1; i<=height; i++){
      arbol = arbol.concat(barra.repeat(height - i), asterico.repeat(i+i-1), barra.repeat(height - i),'\n');
    }
    arbol = arbol.concat(barra.repeat(height - 1), tronco, barra.repeat(height - 1), '\n')
    arbol = arbol.concat(barra.repeat(height - 1), tronco, barra.repeat(height - 1))
    return arbol;
  }
  
  console.log(createXmasTree(10));
  