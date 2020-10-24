module.exports = async function (req, res) {
  console.log(req.body);
  const { words } = req.body;
  const existingWords = await Word.find({ words });
  if (existingWords)
    return res
      .status(400)
      .send('Another array that consist of those words already exist');
  const word = new Word({
    words,
  });
  const saved = await word.save();
  return res.status(201).send(saved);
};
