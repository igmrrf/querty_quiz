module.exports = async function (req, res) {
  console.log(req.body);
  const { words } = req.body;
  const existingWords = Word.find({ words });
  if (existingWords)
    return res
      .status(400)
      .send('Another array that consist of those words already exist');
  const word = new Word({
    words,
  });
  const saved = await word.save();
  res.send(201).send(saved);
};
