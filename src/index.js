
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!arguments.length) return [];
  if(!matrix.length) return [];
  return matrix.reduce((ac, e, i) => {
    if(i % 2 !== 0){
      e.reverse();
    }
    return ac.concat(e);
  }, [])
}
