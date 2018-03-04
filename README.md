#### 谷雨日本公司端项目

##### 开发人员：

1. 前端： 雷全，徐明

2. 后端： 张书龙，卢禹

3. 产品经理： 高珊

4. UE设计：司传文


##### 启动步骤：

1. npm install

2. npm run mock

3. npm start

##### 目录结构：

+ mock/      Mock文件存放目录

+ src/       源代码目录

##### 从源代码里 抽取i18n
```bash
node tools/extractI18n.js  key
```
> 四种模式
> 1. keyOnly
> 如在代码里使用translate('key') 这样的国际化翻译，则只会抽取键名，键值为空，放在src/language/module_name/i18n.js
> 2. key
> 如在代码里使用translate('key') || '默认文案' 这样的国际化翻译，则会抽取键名和默认文案，放在src/language/module_name/i18n.js

> 3. module
> 如在代码里使用translate('module_name', 'key') || '默认文案' 这样的国际化翻译，则会抽取键名和默认文案，放在src/language/module_name/i18n.js

> 4. note
> 如在代码里使用translate('key') // '默认文案' 这样的国际化翻译，则会抽取键名和默认文案，放在src/language/module_name/i18n.js
其中默认文案作为行注释写在translate后面


##### 语言包转换工具 i18nInit.js---需要优化

1. '-m, --module [value]', '模块名称')   必填

2. '-t, --type [value]', '转换类型：xls2js，js2xls，xls2xls，js2js')  必填
3. type说明：xls2js:将xlsx文件转换出多个语言包文件(现在是4个)，没有翻译的为空字符串；
4. js2xls:将模块文件夹下的语言包文件(现在是4个)，统一整理到xlsx文件里，用于整体看哪些没有翻译
5. xls2xls: 第一步xls2js, 第二步js2xls 已excel文件为准，统一数据
6. js2js: 第一步js2xls, 第二步xls2js 以js文件为准，统一数据
7. '-x, --excelName [value]', 'Excel名称（*.xlsx)，默认i18n.xlsx') 非必填

````bash
node tools/i18nInit.js -m [moduleName] -t [Type Enum] (-x [excelName])

如：

node tools/i18nInit.js -m test1 -t xls2js -x test1.xlsx
```


