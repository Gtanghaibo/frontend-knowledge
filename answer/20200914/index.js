// 1、我们将 [2,0,1,1,2,0] 排序成 [0,0,1,1,2,2] ，使用三路快排进行排序？
var sortColors = function(nums) {
    // 从两侧往中间排
    let left = -1;
    let right = nums.length;
    let i = 0;
    while (i < right) {
      if (nums[i] == 0) {
        swap(nums, i++, ++left);
      } else if (nums[i] == 1) {
        i++;
      } else {
        swap(nums, i, --right);
      }
    }
  };

//   2、this指向问题
function Parent() {
    this.a = 1;
    this.b = [1, 2, this.a];
    this.c = { demo: 8 };
    this.show = function () {
        console.log(this.a , this.b , this.c.demo );
    }
}
function Child() {
    this.a = 2;
    this.change = function () {
        this.b.push(this.a);
        this.a = this.b.length;
        this.c.demo = this.a;
    }
}
Child.prototype = new Parent(); 
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();
child1.a = 11;
child2.a = 12;
// console.log打印输出 字段继承与自身所属的判断
parent.show(); // 1 [ 1, 2, 1 ] 8
child1.show(); // 11 [ 1, 2, 1 ] 8
child2.show(); // 12 [ 1, 2, 1 ] 8
child1.change();
child2.change();
parent.show(); // 1 [ 1, 2, 1 ] 8
child1.show(); // [ 1, 2, 1, 11, 12 ] 5
child2.show(); // 5 [ 1, 2, 1, 11, 12 ] 5