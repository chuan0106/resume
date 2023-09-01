

function particle (ctx, canvas)
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;

    let setArr = [];
    let maxNum = 30;

    let timer1 = setInterval(() =>
    {
        if (setArr.length >= maxNum)
        {
            clearInterval(timer1);
        }
        let cX = 200 + Math.ceil(Math.random() * 200);
        let cY = 200 + Math.ceil(Math.random() * 200);
        let r = 5 + Math.ceil(Math.random() * 5);
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let alpha = 0.5 + Math.random() * 0.3;
        let sX = -1 + Math.ceil(Math.random() * 6);
        let sY = -1 + Math.ceil(Math.random() * 6);
        let obj = {
            cX: cX,
            cY: cY,
            r: r,
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
            sX: sX,
            sY: sY,
            bgColor: `rgba(${red},${green},${blue},${alpha})`,
        };
        if (obj.sX !== 0 || obj.sY !== 0)
        {
            setArr.push(obj);
        }
    }, 1000 / 20);
    const ballDraw = (arr) =>
    {
        setInterval(() =>
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            arr.forEach((item) =>
            {
                if (
                    item.cX + item.r >= canvas.width ||
                    item.cX - item.r <= 0
                )
                {
                    item.sX *= -1;
                }
                if (
                    item.cY + item.r >= canvas.height ||
                    item.cY - item.r <= 0
                )
                {
                    item.sY *= -1;
                }
                item.cX += item.sX;
                item.cY += item.sY;
                ctx.beginPath();
                ctx.fillStyle = item.bgColor;
                ctx.arc(item.cX, item.cY, item.r, 0, 2 * Math.PI);
                ctx.fill();
            });
        }, 1000 / 60);
    };
    ballDraw(setArr);
}

function rain (ctx, canvas)
{
    // 画布的宽高
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    var w = canvas.width;
    var h = canvas.height;
    // 存放雨滴的数组
    var arr = [];
    // 雨滴的数量
    var size = 150;
    // 雨滴的构造函数
    class Rain
    {
        x = random(w);
        y = random(h);
        ySpeed = random(2) + 5;
        show ()
        {
            drawLine(this.x, this.y);
        }
        run ()
        {
            if (this.y > h)
            {
                this.y = 0;
                this.x = random(w);
            }
            this.y = this.y + this.ySpeed;
        }
    }
    // 画线（雨滴）
    function drawLine (x1, y1)
    {
        ctx.beginPath();
        ctx.strokeStyle = "#cccccc";
        ctx.moveTo(x1, y1);
        // 雨长度为30
        ctx.lineTo(x1, y1 + 30);
        ctx.stroke();
    }
    // 生成随机数
    function random (num)
    {
        return Math.random() * num;
    }
    // 开始
    function start ()
    {
        for (var i = 0; i < size; i++)
        {
            var rain = new Rain();
            arr.push(rain);
            rain.show();
        }
        setInterval(() =>
        {
            ctx.clearRect(0, 0, w, h);
            for (var i = 0; i < size; i++)
            {
                arr[i].show();
                arr[i].run();
            }
        }, 10);
    }

    start();
}

export { rain, particle }