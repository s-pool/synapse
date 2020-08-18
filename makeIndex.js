const fs = require('fs')

// index作成対象のディレクトリ
const targetDirs = [
  './src/atoms',
  './src/molecules',
  './src/organisms',
  './src/pages',
  './src/theme',
  './src/utils'
]

// 拡張子
const ext = [
  '.ts',
  '.tsx',
  '.js',
  '.jsx'
]

// 除外
const excludes = [
  'index.ts'
]

// ファイル一覧からexportの文を作る
const makeIndexContent = (files) => {
  let content = ''
  files.forEach((item) => {
    if (!excludes.includes(item)) {
      const file = item.split('.', 2)[0]
      content += `export * from './${file}'\n`
    }
  })
  return content
}

targetDirs.forEach((dir) => {
  // ファイル読み込み
  fs.readdir(dir, (err, files) => {
    if (err) throw err
    const fileList = files.filter((file) => {
      const regexp = new RegExp(`.*(${ext.join('|')})$`)
      return fs.statSync(`${dir}/${file}`).isFile() && regexp.test(file) // 絞り込み
    })
    const content = makeIndexContent(fileList)
    fs.writeFile(dir + '/index.ts', content, (err) => {
      if (err) console.log(err)
    })
  })
})
