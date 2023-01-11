# Vue3-DiDa

使用 Vue3 来实现滴答清单的功能

> 展示复杂前端项目应该如何测试

## Features
编程是门手艺 再真实的项目中不断地练习练习再练习

- 最前沿的技术栈 是的 不新不潮不用
- 只专注技术
  - 代码的实现是不是优雅 
  - 架构是不是整洁
  - 分层是不是清晰 
  - 功能不人性化？样式丑？能 run 就行

## why

做这个项目主要有两个点
- 带同学们刷副本 打怪升级
- 展示前端项目应该如何测试

### 刷副本 打怪升级
如果你问我最好最高效提高编程能力的方式是什么

我会告诉你做项目 做符合 i+1 难度的项目 一直做

i 是你当前的能力 在这个难度基础上再 +1 就是适合你的项目

同学们应该都玩过游戏打过副本吧

想要在游戏里面升级的话 你必须找到符合你当前等级的副本

同时最好是有人带你  这样刷副本的话 最快

而这个项目就是如此 非常适合工作 1-3 年的同学提高

我会把任务拆分成不同等级的难度，让你知道可以领什么样子的任务

然后会 review PR ， 告诉你有什么问题 应该如何解决

最后我会重构 让你知道好的代码结构应该是什么样子的

我们从实战中学习 同时也可以在开源社区建立个人影响力 持续不断的获得正向反馈 激励我们不断地前进 

> 不要在刷面试题 算法题 八股文了 那只会让你感觉编程是痛苦的

### 展示前端项目应该如何测试

我是一名前端测试布道者，在布道测试的时候听到最多的一句话就是： 测试很好 但是业务代码不适合/没法写

同时很多的测试教程资料也都是拿比较简单的 demo 来举例，和真实的业务场景不匹配 复杂性不够

所以我决定构建一个真实且偏复杂的前端项目为其加上对应的测试 展示业务代码应该如何测试

争取为推动前端社区测试方向贡献自己的力量

> 按照现在的互联网发展趋势来看已经到了"降本增效"的时代
程序员如何保证自己的代码质量以及提高工作效率将会成为重点问题
而测试就是这个问题的解


## 安装

执行下面的命令即可

```bash
pnpm bootstrap
```

执行这个命令安装依赖的话 会跳过 cypress 的安装
> 因为有很多同学反馈在安装 cypress 的时候超时

## 代码贡献指南

你需要安装 Node.js 16+ 版本和 PNPM 7+ 版本。

推荐使用 [ corepack ](https://nodejs.org/api/corepack.html) ，这样的话可以基于项目配置的包管理器版本来安装依赖。

### 1. 说明

- 一个 PR 只处理一件事，不要把无关代码提交上来，这样最好 Review 以及 Merged
- Issue 以 PR 为准，留言不算。
- PR 的标题要使用英文
- 当发生多个 PR 同时解决一个 Issue 的时候，会随机合并，注意没合并你的 PR 不代表你的实现不好，不要灰心，不要抱怨。你要做的是看看其他 PR 有没有可以学习的地方和可以优化的地方，友好的指出来，当你实现一遍后其实就已经学到很多了。

## 如何参与进来

项目要开发的功能直接参考滴答清单来就可以

我会把任务拆分放到 issues 列表里面

如果你想参与进来的话 可以直接去翻看 issues

当然你也可以主动发现问题/需求

比如说你发现了一个 bug ，然后就可以先去创建一个 issue 解决完成之后在发一个 pr 过来即可

在比如你发现一个滴答清单的功能 在项目的 issues 里面并没有被说明，那么你也可以创建一个 issue 然后实现完成后发一个 pr 过来

## 参与进来可以收获到什么

1. 这个项目使用到的技术栈全部都是社区里面最新的，可以让你学到很多新技术
2. 比普通前端项目复杂度要高，可以让你接触到更复杂的业务场景
3. 可以感受到测试的魅力，如何写测试以及如何使用测试来提高项目的质量
4. 每一个 pr 我都会去 review ，你可以在 review 的过程收获很多编程上的技巧
5. 暂时想不到了  想到了在说 - -#  

总之参与进来会对你技术提高有很大的帮助，而且开源合作方式就比较的自由，有时间了就来领个任务做做涨涨经验值 没时间了就该忙啥忙啥去

## Roadmap
1. 支持 Vim 的方式通过快捷键来操作 类似于 [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en)
2. 支持可以通过 github 账号登录，数据直接保存在自己的 github 上
