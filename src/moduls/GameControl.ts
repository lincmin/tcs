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
    direction:string = ''

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
}

export default GameControl