let fs = require('fs');
let mock = {};
let pathMock = {};
let repeatData = {};

// wind模块引入的isRepeat函数，很难理解一个函数占用一个文件还放在根目录，果断挪进来，删掉原文件
let isRepeat = function (src, v) {
  let keys = Object.keys(src);
  if (keys.indexOf(v) > -1) {
    return true;
  }
  return false;
}

// 递归读文件
let recursionRead = (dirName) => {

  // 遍历文件
  require('fs').readdirSync(require('path').join(__dirname + dirName))
    .forEach(function (file) {

      let stats = fs.lstatSync('.' + dirName + '/' + file);

      if (stats.isFile()) {

        try {
          // Mock 文件路径
          var path = '.' + dirName + '/' + file;
          // Mock 导出的模块
          var module = require('.' + dirName + '/' + file);
        } catch (e) {
          console.error(e);
        }

        // Module 去重
        module = distinct(mock, module, path);

        for (let key in module) {
          pathMock[key] = path;
        }

        Object.assign(mock, module);

      } else if (stats.isDirectory()) {
        recursionRead(dirName + '/' + file);
      }
  });
}


// Mock 路径去重
let distinct = (a, b, path) => {
  for (let key in b) {
    if (isRepeat(a, key)) {
      repeatData[key] = repeatData[key] || [pathMock[key]];
      repeatData[key].push(path);
      delete b[key];
    }
  }
  return b;
}

recursionRead('/mock');

module.exports = mock;