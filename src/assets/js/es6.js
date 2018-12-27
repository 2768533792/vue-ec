// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// 函数声明会提升，类声明不会提升，先声明，后访问

// 匿名类
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// 命名的类
let Rectangle = class Rectangle {
  constructor (height, width) {
    this.height = height
    this.width = width
  }
  get area () {
    return this.calcArea()
  }
  calcArea () {
    return this.height * this.width
  }
}

const square = new Rectangle(10, 10)
const result = square.area

// 静态方法
// static关键字用来定义一个类的静态方法，调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。

class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  static distance (a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)
console.log(Point.distance(p1, p2))

export {
  result
}
