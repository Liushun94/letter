const fullStyle = [
    `
        /*
           *亲爱的丽丽！
           *在家封城隔离了这么多天，也是让我两异地这么久了，
           *期间有过不愉快或者不开心，再此向你真诚的道歉了。
           *但是不管怎样都是十分的想念你，
           *所以在网上也搜索了许许多多讨好女朋友的方式，所以就想着为你做点什么东西。
           *因此就有了这个网页。很高兴你可以看到。

           /* 首先给所有元素加上过渡效果 */
           * {
                transition: all .3s;
           }
           /* 代码高亮 */
            .token.selector{ color: rgb(133,153,0); }
            .token.property{ color: rgb(187,137,0); }
            .token.punctuation{ color: yellow; }
            .token.function{ color: rgb(42,161,152); }
           /* 白色背景太单调了，我们来点背景 */
            html {
                color: rgb(222,222,222); background: rgb(0,43,54);
            }
            /* 文字离边框太近了 */
            .styleEditor {
                padding: .5em;
                border: 1px solid;
                margin: .5em;
                overflow: auto;
                width: 50vw; height: 90vh;
            }
            /* 加点 3D 效果呗 */
            html{
                perspective: 1000px;
            }
            .styleEditor {
                position: fixed; left: 0; top: 0;
                -webkit-transition: none;
                transition: none;
                -webkit-transform: rotateY(10deg) translateZ(-100px) ;
                        transform: rotateY(10deg) translateZ(-100px) ;
            }
            /* 接下来我给自己准备一个编辑器 */
            .markedEditor{
                position: fixed; right: 0; top: 0;
                padding: .5em;  margin: .5em;
                width: 50vw; height: 90vh;
                border: 1px solid;
                background: white; color: #222;
                overflow: auto;
            }
            .markedEditor {
                transition: none;
                -webkit-transform: rotateY(-10deg) translateZ(-100px) ;
                        transform: rotateY(-10deg) translateZ(-100px) ;
            }
        */
    `,
    `
    /* 这个页面好像差点什么
     * 对了，这是 Markdown 格式的，我需要变成更友好的格式
     * 简单，用开源工具翻译成 HTML 就行了
     */
    `,
    /* 再对 HTML 加点样式 */
    `
.markedEditor{
    padding: 2em;
  }
  .markedEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
  }
  .markedEditor ul,.markedEditor ol{
    list-style: none;
  }
  .markedEditor ul> li::before{
    content: '•';
    margin-right: .5em;
  }
  .markedEditor ol {
    counter-reset: section;
  }
  .markedEditor ol li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
    margin-right: .5em;
  }
  .markedEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
  }
  .markedEditor { 
    transition: none;
    -webkit-transform: rotateY(0deg) translateZ(0px) ;
            transform: rotateY(0deg) translateZ(0px) ;
    width: 90vw;
    transform: translateX(-3vw);
    height: 100vw;
 }
  `
]

export default fullStyle