# ATP
atom-page([ATP](http://atom-page.com/))

## ATP是什么？
ATP 为 atom-page 的简称，即原子化页面，其重要思想源自 [atomic design](http://www.patternlab.io/)，
原子化设计是把页面从大到小分级划分页面，然后再设计页面中的每一个细节。而借助这个思路，可以研究前端代码的组织，
把整个页面的代码划分成不同级别的代码段，从而便于在开发中随时扩展和修改。
模范化前端开发的目录，自动化生成样式、文档、页面和交互的一体化前端解决方案。

## 特点
1. **职责单一**且**语义化**的目录结构，以便在迭代开发中，灵活修改和扩展。
2. **可配置**的样式系统，不依赖于任何样式框架，为每个项目*打造自己的样式框架*。
3. 结构、样式、交互分离，页面**分级**可复用。
4. **自动化**生成页面结构、样式和交互为一体的文档。
5. 交互（正在开发中...）。

## 页面的拆分
页面从大到小进行划分，一次划分为模板、有机体、分子、原子，而页面为一个模板的实例。
在写代码时，把不同的代码一次写入不同的文件中，按照一定的规则来管理这些文件，这样做到文件和页面某个结构，某个样式，某个功能的一一对应，
即使在复杂的项目开发。

### 什么是原子？
原子代表的是单一标签能够表示的元素，比如：表单元素(button、select、input等)。
### 什么是分子？
分子代表的是有几个标签就可以简单单配出的页面模块，在页面中可以完成单一的组件性的功能，比如：gird、menu、breadcrumb、form、table、pagination等。
### 什么是有机体？
有机体代表页面的一个组成部分，一般可以代表完整的业务模块，比如：header、data-gird（包括：search-form、table、pagination等分子或者原子组成）、footer。
###什么是模板？
模板代表的是一个页面全局的版面，比如数据展示页（由header、data-gird、footer等有机体组成），它形成完整的页面。
###什么是页面？
页面代表前端具体产出的一个页面产品，模板就像是一个类，而页面是其模板的实例，在文档中，模板是用mock数据渲染成的页面，而产出的页面是由模板通过真实数据渲染出在页面，或者通过配置做完哪些模块是通过AJAX后台获取（配置后台获取正在构思中）。

##怎么做到自动化
自动化就需要用一定的规范来约束，约束总是让人感觉不舒服，而让人感觉舒服的约束必须遵循语义化。

##入门指南

### 第一步
如果你没有安装[NodeJS](http://nodejs.org/)，请先安装它

### 第二步
安装了NodeJS之后，我们需要全局安装[`slush`](http://slushjs.github.io/)的客户端、[`gulp`](http://gulpjs.com/)和基于slush的ATP脚手架slush-atp

```
npm install -g gulp slush slush-atp
```
请确认slush可以运行

```
slush -v
```
在命令行中会出现slush的版本号
### 第三步
在项目中执行脚手架，把整个目录结构复制到项目目录
```
slush atp
```
可以在目录中看到如下目录

```
src
 ├── atoms //原子级
 │     ├── core //核心
 │     └── elements //元素
 ├── molecules //分子级
 │     ├── collections // 集合
 │     └── components // 组件
 ├── organisms //有机体
 │     ├── header //头部
 │     ├── article //内容
 │     ├── section //公共模块
 │     └── footer //尾部
 └── templates //模板
       ├── admin //后台管理
       ├── blog //博客
       └── mall //商城
```
### 第四步
运行对于的命令

```
gulp config // 运行调色板等配置任务
```
```
gulp style // 运行生成样式任务
```
```
gulp doc // 运行生成文档任务
```