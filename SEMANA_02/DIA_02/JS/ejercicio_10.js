let coins = []
coins[0] = 1 //céntimo
coins[1] = 2 //céntimos
coins[2] = 5 //céntimos
coins[3] = 10 //céntimos
coins[4] = 20 //céntimos
coins[5] = 50 //céntimos


function getCoins(vuelto) {
    console.log(vuelto)
    let monedas = [0, 0, 0, 0, 0, 0];
    let i = coins.length - 1

    do {
        let cociente = Math.floor(vuelto / coins[i])
        if (cociente >= 1) {
            vuelto = vuelto - (coins[i] * (cociente))
            monedas[i] = monedas[i] + cociente
        } else {
            i--
        }
    } while (vuelto !== 0)
    return monedas
}

function getCoins2(vuelto) {
    let acc = vuelto

    return acc
        .reverse()
        .map()

}

console.log(getCoins(51))
console.log(getCoins(3))
console.log(getCoins(5))
console.log(getCoins(16))
console.log(getCoins(100))
