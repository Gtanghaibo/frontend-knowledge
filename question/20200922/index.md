### 1、实现一个lazyMan,满足如下的功能。
```
    Lazyman(“Hank”).sleepFirst(10).eat('dinner')
    等待10秒..
    Wake up after 10
    Hi! This is Hank!
    Eat dinner~

    LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
    Hi! This is Hank!
    等待10秒..
    Wake up after 10
    Eat dinner~

    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~
```

2、实现一个正则表达式来邮箱验证功能。要求能实现基本的邮箱验证。