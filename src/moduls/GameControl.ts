//引入其他类
import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

//游戏控制器,控制其他所有内
class GameControl{
    //定义三个属性
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    //存储蛇的移动方向,按键方向
    direction:string = 'Right'

    //记录游戏是否结束
    isLive = true
    constructor(){
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    //游戏的初始化方法,调用后游戏即开始
    init(){
        //绑定键盘按键按下事件
        //谁调用,this就是谁,bind创建新函数,并绑定GameControl的this
        document.addEventListener('keydown',this.keydownHandler.bind(this))

        //调用run方法,使蛇移动
        this.run()
    }

    /**
     * ArrowUp  Up
       ArrowDown    Down
       ArrowLeft    Left
       ArrowRight   Right
     */
    //创建键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        //未绑定this前,这里的this指向调用者document
        //console.log(this)
        //打印用户按键名字
        console.log(event.key)

        //检查event.key的值是否合法(用户是否按了正确的按钮)

        //修改direction属性
        this.direction = event.key
    }

    //蛇的移动就是修改元素的偏移量left和top
    run(){
        /*根据方向this.direction使蛇位置改变
        向上 top 减少
        向下 top 增加
        向左 left 减少
        向右 left 增加
        */
       //获取蛇现在的坐标
       let X = this.snake.X
       let Y = this.snake.Y
       //根据按键方向修改x值和y值
       switch (this.direction) {
           case "ArrowUp":
           case "Up":
               Y -= 10
               break;
           case "ArrowDown":
           case "Down":
               Y += 10
               break;
           case "ArrowLeft":
           case "Left":
            X -= 10
               break;
           case "ArrowRight":
           case "Right":
            X += 10
               break;
            }
            //修改蛇的x和y值
            this.snake.X = X
            this.snake.Y = Y
     
            //开启定时调用
            this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }
}

export default GameControl