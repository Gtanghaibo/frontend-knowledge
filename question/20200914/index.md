### 1、我们将 [2,0,8,1,4,0] 排序成 [0,0,1,2,4,8] ，使用三路快排进行排序？
### 2、this指向问题
```
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

    // console.log打印输出
    parent.show(); //1
    child1.show(); //2
    child2.show(); //3

    child1.change();
    child2.change();

    parent.show(); //4
    child1.show(); //5
    child2.show(); //6
```