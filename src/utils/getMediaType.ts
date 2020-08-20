import slash from 'slash'

const regImg = /^([\w]:\/\/|(\/)?\/|\.?\.\/)?([\w\d\-_./]+)+\.(svg|gif|png|jpg|jpeg|bmp)$/i
const regVideo = /^([\w]:\/\/|(\/)?\/|\.?\.\/)?([\w\d\-_./]+)+\.(mp4|webm)$/i

const getMediaType = (str:string): 'img'|'video'|false => {
  if (regImg.test(slash(str.toLowerCase()))) {
    return 'img'
  } else if (regVideo.test(slash(str.toLowerCase()))) {
    return 'video'
  } else {
    return false
  }
}

export { getMediaType }
