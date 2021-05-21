let strToJson = (str) => {
  let result
  if (Array.isArray(str)) {
    result = []
    str.forEach(dict_str => result.push(JSON.parse(dict_str)))
  } else {
    result = JSON.parse(str)
  }
  return result
}

module.exports = {
  strToJson
}
