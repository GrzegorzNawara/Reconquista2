function nonul (expression, ifnull={}) {
  if(typeof expression === 'undefined')
    return ifnull;
  return expression;
}

export default nonul
