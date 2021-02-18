class Snake{
  //表示蛇头的元素
   head:HTMLElement
   //身体
   bodies:HTMLCollection
   //获取蛇的容器
   element:HTMLElement
  constructor(){
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.bodies =  this.element.getElementsByTagName('div')
  }

  //获取蛇头的坐标
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    return this.head.offsetTop
  }
  //设置蛇头坐标
  set X(value:number){
    this.head.style.left = value + 'px'
  }
  set Y(value:number){
    this.head.style.top = value + 'px'
  }
  //设置蛇增加身体的方法
  addBody(){
    //向 element 中添加一个 div
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }
}