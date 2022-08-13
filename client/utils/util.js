/**
   * 
   * @param data 
   * @returns JSON from GraphQL query changed into array of Task objects 
   */
export function graphQlToObjects(data) {
    let readableArray = []
    data.map(obj => {
        let newObj = {}
        for (let i = 1; i < Object.keys(obj).length; i++) {
            newObj[Object.keys(obj)[i]] = Object.values(obj)[i]
        }
        readableArray.push(newObj);
    })
    return(readableArray)
}