# puzzle-challenge

This is a simple React Native app that renders a carousel component which is reusable.

## Installation

Use the package manager [npm](https://www.npmjs.com) to install dependencies.

```bash
npm install
```

To render the app make sure to have [Expo](http://www.expo.io) installed, and simply run 

```bash
npm start
```

## Usage

The Carousel component expcts an array of objects to be passed as *blocks* to render, each object of this array should contain a **title** key and a **image** key.

```javascript
<Carousel blocks={yourArrayHere} />
```

Types  of the blocks props are specified in the example given below:
```javascript
Array [
  Object {
    title: string,
    image: string[]
    }
   ]
```
## Ui Example
<kbd>
    <img src="https://github.com/Edropem/puzzle-challenge/blob/master/images/CarouselExampleGif.gif?raw=true" style="border: 1px solid black" />
</kbd>
