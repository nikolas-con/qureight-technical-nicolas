const errorMiddleware = (err, _1, res, _2) => {
  res.status(err.status || 500)
  res.json({ message : 'An error occurred' })
}

export { errorMiddleware }