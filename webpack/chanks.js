const chanks = (webpack) => (arr) => {
  let prevChanks = "";
  const results = arr.map(([name, chank],) => {
    prevChanks = `${prevChanks}${prevChanks && "|"}(${chank})`;
    return [name, prevChanks];
  })
  .map(([name, chank]) => {
    return new webpack.optimize.CommonsChunkPlugin({
        name,
        minChunks: (m) => new RegExp(chank).test(m.context)
    });
  })
  .reverse();
  results.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    })
  );
  return results;
}

module.exports = chanks;
