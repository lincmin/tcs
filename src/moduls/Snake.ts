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
    //新旧值相同,则直接返回不修改值
    if(this.X == value){
      return
    }
    //X值的合法范围0-290
    if(value < 0 || value > 290){
      //蛇撞墙,抛出异常
      throw new Error('蛇撞墙了')
    }
    this.head.style.left = value + 'px'
  }
  set Y(value:number){
    if(this.Y == value){
      return
    }
    //Y值的合法范围0-290
    if(value < 0 || value > 290){
      //蛇撞墙
      throw new Error('蛇撞墙了')
    }
    this.head.style.top = value + 'px'
  }
  //设置蛇增加身体的方法
  addBody(){
    //向 element 中添加一个 div
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }
}

export default Snake