/**
 * Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
 * Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que 
 * además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
 * Por ejemplo, si tenemos las ovejas: 
 * 
 * 
 * 
 *  
 */



const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]


function contarOvejas(ovejas,color,letra1,letra2){
    
    const filter=ovejas.filter(oveja=>{
        oveja.name=oveja.name.toLowerCase();
        if(oveja.name.includes(letra1) && oveja.name.includes(letra2) && oveja.color.includes(color)){
            return ovejas
        }
      });
      return filter

    
}

console.log(contarOvejas(ovejas,'rojo','a','n'))


