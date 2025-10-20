// class Rectangle {
//     constructor(height, width, color) {
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }
//     area() {
//         const area = this.height * this.width;
//         return area;
//     }
//     paint() {
//         console.log(`The color of the rectangle is ${this.color}`);
//     }
// }


// const rect1 = new Rectangle(10, 20, "blue");
// console.log(rect1.area());
// console.log(rect1.paint());


// const now = new Date();
// console.log(now.toISOString());
// console.log(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
// console.log(now.toUTCString())


// const map = new Map();
// map.set('name', 'Sandipan');
// console.log(map.get('name'))


// function waitFor3Seconds(resolve) {
//     setTimeout(resolve, 3000);
// }

// function main() {
//     console.log('main is called');
// }

// waitFor3Seconds(main)

function func() {
    console.log('Function is called');
}
let p = new Promise(func);
console.log()