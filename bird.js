class Bird{                                    //定义一个名为Bird的类，这个类定义了翼龙的一些属性和方法
    constructor(){                             //构造函数，通过它可以定义和设置类的一些属性
       this.img= imgBird[1];                   //定义类的图像，并设置它的初始值为图一
       this.w= this.img.width*1.3;             //定义类的宽度，并设置宽度值为它的图像的宽度的1.5倍
       this.h= this.img.height*1.3 ;           //定义类的高度，并设置高度值为它的图像的高度的1.5倍
       this.x= width;                          //定义类的横坐标，并设置它的初始值为画布的宽度
       this.y= height -this.h-random(1*height/8,height/6);  //定义类的纵坐标，并设置它的初始值为一个随机值
       this.score =0;                          //定义类的得分，设置初始值为0，用来记录恐龙是否经过了这个翼龙
     }

     move(){               //定义仙人掌类的移动方法
        this.x -=9;        //使仙人掌有水平方向的位移，始终以固定的速度向左移动
     }
    
     show(){                                                   //定义翼龙类的显示方法
        image(imgBird[index%2+1],this.x,this.y,this.w,this.h); //显示当前翼龙的图片
     }
    
     update(){                         //定义翼龙的更新方法，把翼龙设置为当前状态的图片
        this.img = imgBird[index%2+1]; //使恐龙的图片为图3和图4交替显示
     } 
}


    