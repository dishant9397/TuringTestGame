const csvHelper = (cards, choices) => {
    const headers = [
        "id",
        "original",
        "reference",
        "human translation",
        "neuro translation",
        "staty translation",
        "player's choice"
    ];
    const parsedArr = cards.map(
        (card, index) => {
            const id = [`${index + 1}`]
            const cardArr = Object.values(card)
            const originToHuman = cardArr.slice(0, 3)
            const neuroTrans = cardArr[4]
            const statyTrans = cardArr[6]
            return [id, originToHuman, neuroTrans, statyTrans, choices[index]].flat()
        }
    )
    const csvFile = [headers, ...parsedArr]
    return csvFile;
}

export default csvHelper