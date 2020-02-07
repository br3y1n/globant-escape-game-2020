export const findPerfectSquares = (word1, word2, convToNum) => {

  const //functions

    getMappedChar = (text, isNumber = false) => {

      let mapChar = {}

      text.forEach((val, idx, array) => {

        const
          key = isNumber ? `n${val}` : val

        array.indexOf(val) == idx ? (mapChar[key] = [idx]) : (mapChar[key].push(idx))
      })

      return mapChar
    },


    getPossibilities = (globalMapPos, valRange) => {

      let possibilities = []

      for (let num = valRange.min; num <= valRange.max; num++) {

        const
          perfSqr = Math.ceil(Math.pow(num, 2)),
          nums = perfSqr.toString().split('')

        let
          valid = true,
          localMapPos = Object.values(getMappedChar(nums, true))

        globalMapPos.forEach((val, idx) => {
          if (JSON.stringify(localMapPos[idx]) != JSON.stringify(val))
            valid = false
        })

        if (valid)
          possibilities.push(perfSqr)
      }

      return possibilities
    },


    getWordPossibilities = (word) => {
      const
        text = word.trim().toLowerCase().split(''),
        digits = text.length

      let
        possiWord = {
          word: word,
          map: {},
          possibilities: []
        }

      if (digits > 0) {

        possiWord.map.byChar = getMappedChar(text)
        possiWord.map.byPos = Object.values(possiWord.map.byChar)

        const
          mapPos = possiWord.map.byPos,
          valRange = {
            max: Math.ceil(Math.sqrt(Math.pow(10, digits))) - 1,
            min: Math.ceil(Math.sqrt(Math.pow(10, digits - 1)))
          }

        possiWord.possibilities = getPossibilities(mapPos, valRange)
      }

      return possiWord
    },


    getMergePossibilities = (wP1, wP2, convToNum) => {

      let
        mergePossib = []

      const
        getRelativeChar = (mapChar1, mapChar2, word2) => {
          let
            relativeChar = {}

          Object.keys(mapChar1)

            .filter((val) => word2.includes(val)) //remove non-existent characters

            .forEach((val) => {

              relativeChar[val] = {
                posW1: mapChar1[val][0],
                posW2: mapChar2[val][0]
              }
            })

          return relativeChar
        },


        convertWord = (data) => {

          let
            word = data.word,
            abc = {}

          const
            { str: str1, num: num1 } = data.values.v1,
            { str: str2, num: num2 } = data.values.v2

          str1.split('').forEach((key, idx) => {
            abc[key] = num1.toString().split('')[idx]
          })

          str2.split('').forEach((key, idx) => {
            abc[key] = num2.toString().split('')[idx]
          })

          Object.entries(abc).forEach((val) => {
            const
              key = val[0],
              value = val[1],
              regExp = new RegExp(key, 'g')

            word = word.replace(regExp, value)
          })

          return isNaN(word) ? word.toUpperCase() : parseInt(word)
        }


      const
        { byChar: mapChar1} = wP1.map,
        { byChar: mapChar2} = wP2.map,
        possib1 = wP1.possibilities,
        possib2 = wP2.possibilities,
        word1 = wP1.word.replace(' ', '').toLowerCase(),
        word2 = wP2.word.replace(' ', '').toLowerCase(),
        ctn = convToNum.replace(' ', '').toLowerCase(),
        relChar = getRelativeChar(mapChar1, mapChar2, word2)


      possib1.forEach((val1) => {
        possib2.forEach((val2) => {

          let
            valid = true,
            possib = {}

          Object.values(relChar).forEach((rel) => {

            const
              valW1 = val1.toString().split('')[rel.posW1],
              valW2 = val2.toString().split('')[rel.posW2]

            if (valW1 != valW2)
              valid = false
          })

          if (valid) {

            possib = {
              word1ToNum: val1,
              word2ToNum2: val2,
              convert: convertWord({
                word: ctn,
                values: {
                  v1: {
                    str: word1,
                    num: val1
                  },
                  v2: {
                    str: word2,
                    num: val2
                  }
                }
              })
            }

            mergePossib.push(possib)
          }
        })
      })

      return mergePossib
    }

  const //possibilities
    wordPossib1 = getWordPossibilities(word1),
    wordPossib2 = getWordPossibilities(word2),
    mergePossib = getMergePossibilities(wordPossib1, wordPossib2, convToNum)

  return mergePossib
}


















