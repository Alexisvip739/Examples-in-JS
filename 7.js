const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
              
  
  
const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    } 
}



/**
 * Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.
 * Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
 * La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. 
 * @param {*} obj 
 * @returns 
 */

function iterate(obj) {
    let res = [];// esto seria un arreglo en donde se guardaran los objetos
    for (let property in obj) {
      const child = obj[property];
      if (typeof child === 'object') {
            res = [...iterate(child)]// los 3 puntos indica que se remplazara todo lo que este ahi dentro 
        }
      res.push(child);
    }
    return res;
  }
  
  function contains(store, product) {

    return iterate(store).some((item) => item === product)
  }


console.log(contains(otroAlmacen,'mando'))