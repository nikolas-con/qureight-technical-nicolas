const errorMiddleware = (err, _1, res, _2) => {
  console.log(err.message)
  res.status(err.status || 500)
  res.json({ message: 'An error occurred' })
}

export { errorMiddleware }