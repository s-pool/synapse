import slash from 'slash'

const regex = /^([\w]:\/\/|(\/)?\/|\.?\.\/)?([\w\d\-_./]+)+\.(svg|gif|png|jpg|jpeg|bmp)$/i

const isImage = (str:string) => {
  return regex.test(slash(str.toLowerCase()))
}

export { isImage }
