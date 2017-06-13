/**
 * [funkcja losująca numer z podanej tablicy]
 * @param  {[number]} length [długość tablicy do losowania]
 * @return {[number]}        [zwraca wylosowany numer]
 */
const randomNumber= ( length ) => {
    return Math.floor(( Math.random() * length ))
}

export {randomNumber};
