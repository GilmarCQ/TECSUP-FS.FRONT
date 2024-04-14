const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
    // aquí tu magia
    return ovejas.filter(oveja => {
      const isRedColor = oveja.color === 'rojo'
      const hasLetterN = oveja.name.includes('n') || oveja.name.includes('N')
      const hasLetterA = oveja.name.includes('a') || oveja.name.includes('A')
      return isRedColor && hasLetterN && hasLetterA
    })

    /*
    return ovejas.filter(oveja => {
        const isRedColor = oveja.color === 'rojo'
        const regex = /.*[nN].*[aA].*[aA].*[nN].*/
    /*    const validateNorA = regex.test(oveja.name)
        return isRedColor && validateNorA
    })*/

}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)