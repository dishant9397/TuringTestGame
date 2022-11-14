const csvHelper = (records) => {
    const headers = [
        "Id",
        "Original",
        "Reference",
        "HumanTranslation",
        "NeuroTranslation",
        "StatyTranslation",
        "PlayerChoice"
    ];
    const parsedArr = records.map(
        (card, index) => {
            const id = [`${index + 1}`]
            const cardArr = Object.values(card)
            const originToHuman = cardArr.slice(0, 3)
            const neuroTrans = cardArr[4]
            const statyTrans = cardArr[6]
            const choice = cardArr[8]
            return [id, originToHuman, neuroTrans, statyTrans, choice].flat()
        }
    )
    const csvFile = [headers, ...parsedArr]
    return csvFile;
}

export default csvHelper