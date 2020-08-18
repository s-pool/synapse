const readText = async (src: string) => {
  const res = await fetch(src)
  const text = res.text()
  return text
}

export { readText }
