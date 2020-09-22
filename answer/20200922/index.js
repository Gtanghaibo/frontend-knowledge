// 1、实现一个lazyMan,满足如下的功能。
class LazyMan {
    constructor (name) {
        this.tasks = [];
        const task = () => {
            console.log(`Hi  This is ${name}`);
            this.next();
        }
        this.tasks.push(task);
        setTimeout(() => {
            this.next();
        }, 0)
    }
    next () {
        const task = this.tasks.shift();
        task && task();
    }
    sleep (time) {
        this._sleepWrapper(time, false);
        return this;
    }
    sleepFirst (time) {
        this._sleepWrapper(time, true);
        return this;
    }
    _sleepWrapper (time, flag) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${time}`);
                this.next();
            }, time * 1000);
        }
        if (flag) {
            this.tasks.unshift(task);
        } else {
            this.tasks.push(task);
        }
    }
    eat (name) {
        const task = () => {
            console.log(`Eat ${name}~~~`);
            this.next();
        }
        this.tasks.push(task);
        return this;
    }
}

// 2、实现一个正则表达式来邮箱验证功能。（基本验证）
// 1、基本的邮箱格式认知
// 2、基本的元字符的认知
// 3、@前必须有且为a-zA-Z0-9_.-一种
// 4、@和.之间必须有内容且为a-zA-Z0-9-（1个或多个）
// 5、最后一个.之后必须有内容且为a-zA-Z0-9长度为2-6位
const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;