[2]: https://github.com/yonicb
[1]: https://github.com/yonicb/wavescrollbar-react

<p align="center">
  <a href="https://github.com/yonicb/wavescrollbar-react" target="blank"><img src="https://i.ibb.co/0KhDcfW/ezgif-1-368d1a644eb7.png" width="120" alt="Wavescrollbar Logo" /></a>
</p>

<p align="center">
🚀 Wavescrollbar React 🌐 is a javascript library, which adds modern progress bar at the top.
</p>
<p align="center" style="max-width: 450px; margin: auto;">
   <a href="https://github.com/yonicb/wavescrollbar-react"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
   <a href="https://www.npmjs.com/wavescrollbar-react" target="_blank">
   <img src="https://img.shields.io/npm/v/wavescrollbar-react" alt="NPM Version" /></a>
   <a href="https://www.npmjs.com/wavescrollbar-react" target="_blank">
   <img src="https://img.shields.io/npm/l/wavescrollbar-react" alt="Package License" /></a>
   <a href="https://www.npmjs.com/wavescrollbar-react" target="_blank">
   <img src="https://img.shields.io/npm/dm/wavescrollbar-react" alt="NPM Downloads" /></a>
   <a href="https://github.com/yonicb/wavescrollbar-react" target="_blank">
   <img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
   <a href="https://github.com/yonicb/wavescrollbar-react"><img src="https://img.shields.io/badge/Github%20Page-Wavescrollbar-yellow?style=flat-square&logo=github" /></a>
   <a href="https://github.com/yonicb"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
   <a href="https://twitter.com/yonicb" target="_blank">
   <img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>
</p>

## 🌐 Description

<p>
Wavescrollbar is a library to create a modern, efficient and scalable scroll bar. It uses modern JavaScript, is built with TypeScript (retains compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming).
</p>

<p>Under the hood, Wavescrollbar uses javascript, but also provides compatibility with a wide range of other libraries, such as p. Eg ReactJs, Vuejs, Angular, which allows easy use of the countless third-party add-ons that are available.</p>

## 📝 Philosophy

<p>Wavescrollbar aims to provide a ready-to-use application architecture that allows effortless creation of applications with progress bar at the top, and highly verifiable, scalable, poorly coupled and easy to maintain.</p>


## 📦 Installation

To start using Wavescrollbar you need to install it with the package manager npm or yarn, as shown in the next section or download it directly!

``` ts
// To install using npm
npm install wavescrollbar -S

// Para instalar mediante yarn
yarn add wavescrollbar
```

<!-- ## Getting started -->
## ▶️ Getting started

<p>
<!-- Como lo habia mencionado anteriormente, Wavescroll tambien esta disponible para las biblitecas Reactjs, Vuejs y Angular. -->
</p>

### HTML
``` html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Wavescrollbar</title>
   <link rel="stylesheet" href="css/wavescrollbar-react.css">
</head>
<body>
   <wavescrollbar>
   </wavescrollbar-react>

   <script src="js/wavescrollbar-react.js"></script>
   <script>
      var wavescrollbar = new Wavescrollbar()
   </script>
</body>
</html>
```

Add the javascript and css file to make it work properly!

``` html
<!-- Import the CSS file -->
<link rel="stylesheet" href="css/wavescrollbar-react.css">

<!-- Import the javascript file -->
<script src="js/wavescrollbar-react.js"></script>
```

## 📝 Features

| N°  | Method                 | Parameter |
| --- | ---------------------- | --------- |
| 1   | setAnimation           | None      |
| 2   | setContainerBackground | color     |
| 3   | setGradient            | options   |
| 4   | setBackground          | color     |
| 5   | setTransition          | options   |
| 6   | setHeight              | value     |

#### 📚 Method setAnimation
Example:
```js
// We instantiate the animation method
wavescrollbar.setAnimation() //It does not need parameters.
```

#### 📚 Method setContainerBackground
Example:
``` js
/**
 * @param color
 * */
// 
// Default-> #eeeeee
const color = "#eafbea"
wavescrollbar.setContainerBackground(color)
```

#### 📚 Method setGradient
Example:
```js
/**
 * @param options: object
 * */

const options = {
   // default-> 90deg
   angle: "45deg", // 0deg - 360deg
   // Default-> ["#11998e", "#38ef7d"]
   colors: [
      "#11998e",
      "#38ef7d",
      "red",
      "blue"
   ]
}
wavescrollbar.setGradient(options)
```

#### 📚 Method setBackground
Example:
```js
/**
 * @param color
 * */
// Default-> pink
const color = "red"
wavescrollbar.setBackground(color)
```

#### 📚 Method setTransition
Example:
```js
/**
 * @param options
 * */

const options = {
   // Default-> .2s
   duration: "100ms",
   // Default-> 0s
   delay: '0s',
   // Default-> linear
   timing: "ease-in-out" // "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out"
}
wavescrollbar.setTransition(options)
```

#### 📚 Method setHeight
Example:
```js
/**
 * @param value
 * */
// Default-> 5px
const height = "10px"
wavescrollbar.setHeight(height)
```

## ⭐ Support for

Wavescrollbar is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Contributors

<p>

[<img src="https://avatars0.githubusercontent.com/u/58490737?s=400&v=4" alt="Yoni Stack" width="50" style="background: #fff; padding: 5px; border-radius: 50%;" />](https://github.com/yonicb)
[<img src="https://avatars0.githubusercontent.com/u/57115324?s=460&v=4" alt="Yoni Stack" width="50" style="background: #fff; padding: 5px; border-radius: 50%;" />](https://github.com/yonicalsin)

</p>

## 🎩 Stay in touch

* Author [Yoni Calsin](https://github.com/yonicb)
* Twitter [Yoni Calsin](https://twitter.com/yonicalsin)

## 📜 License

Wavescrollbar is [MIT licensed](LICENSE).

[2]: https://github.com/yonicb
[1]: https://github.com/yonicb/wavescrollbar-react