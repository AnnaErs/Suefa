import { io } from "socket.io-client";


export function createGame(context){
    const grid = 15;
    const socket = io('localhost:8080/mobile');
    const paddleHeight = grid * 5; // 80
    const maxPaddleY =context.canvas.height - grid - paddleHeight;
    socket.on('firstPingPongDownButtonClickOnMobile',()=>{
        leftPaddle.dy = paddleSpeed;
    });
    socket.on('secondPingPongDownButtonClickOnMobile',()=>{
        rightPaddle.dy = paddleSpeed;
    });
    socket.on('firstPingPongUpButtonClickOnMobile',()=>{
        leftPaddle.dy = -paddleSpeed;
    });
    socket.on('secondPingPongUpButtonClickOnMobile',()=>{
        rightPaddle.dy = -paddleSpeed;
    });
    socket.on('firstPingPongUpButtonIsUpOnMobile',()=>{
        leftPaddle.dy = 0;
    });
    socket.on('secondPingPongUpButtonIsUpOnMobile',()=>{
        rightPaddle.dy = 0;
    });
    socket.on('secondPingPongDownButtonIsUpOnMobile',()=>{
        rightPaddle.dy = 0;
    });
    socket.on('firstPingPongDownButtonIsUpOnMobile',()=>{
        leftPaddle.dy = 0;
    });
    socket.on("backButtonClickOnMobile", () => {
        window.history.back();
    });

    var paddleSpeed = 6;
    var ballSpeed = 5;

    const leftPaddle = {
        // start in the middle of the game on the left side
        x: grid * 2,
        y: context.canvas.height / 2 - paddleHeight / 2,
        width: grid,
        height: paddleHeight,

        // paddle velocity
        dy: 0
    };
    const rightPaddle = {
        // start in the middle of the game on the right side
        x: context.canvas.width - grid * 3,
        y: context.canvas.height / 2 - paddleHeight / 2,
        width: grid,
        height: paddleHeight,

        // paddle velocity
        dy: 0
    };
    const ball = {
        // start in the middle of the game
        x: context.canvas.width / 2,
        y: context.canvas.height / 2,
        width: grid,
        height: grid,

        // keep track of when need to reset the ball position
        resetting: false,

        // ball velocity (start going to the top-right corner)
        dx: ballSpeed,
        dy: -ballSpeed
    };

// check for collision between two objects using axis-aligned bounding box (AABB)
// @see https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    function collides(obj1, obj2) {
        return obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y;
    }

    function loop() {
        requestAnimationFrame(loop);
        context.clearRect(0,0,context.canvas.width,context.canvas.height);

        // move paddles by their velocity
        leftPaddle.y += leftPaddle.dy;
        rightPaddle.y += rightPaddle.dy;

        // prevent paddles from going through walls
        if (leftPaddle.y < grid) {
            leftPaddle.y = grid;
        }
        else if (leftPaddle.y > maxPaddleY) {
            leftPaddle.y = maxPaddleY;
        }

        if (rightPaddle.y < grid) {
            rightPaddle.y = grid;
        }
        else if (rightPaddle.y > maxPaddleY) {
            rightPaddle.y = maxPaddleY;
        }

        // draw paddles
        context.fillStyle = 'white';
        context.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
        context.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);

        // move ball by its velocity
        ball.x += ball.dx;
        ball.y += ball.dy;

        // prevent ball from going through walls by changing its velocity
        if (ball.y < grid) {
            ball.y = grid;
            ball.dy *= -1;
        }
        else if (ball.y + grid > context.canvas.height - grid) {
            ball.y = context.canvas.height - grid * 2;
            ball.dy *= -1;
        }

        // reset ball if it goes past paddle (but only if we haven't already done so)
        if ( (ball.x < 0 || ball.x > context.canvas.width) && !ball.resetting) {
            ball.resetting = true;

            // give some time for the player to recover before launching the ball again
            setTimeout(() => {
                ball.resetting = false;
                ball.x = context.canvas.width / 2;
                ball.y = context.canvas.height / 2;
            }, 400);
        }

        // check to see if ball collides with paddle. if they do change x velocity
        if (collides(ball, leftPaddle)) {
            ball.dx *= -1;

            // move ball next to the paddle otherwise the collision will happen again
            // in the next frame
            ball.x = leftPaddle.x + leftPaddle.width;
        }
        else if (collides(ball, rightPaddle)) {
            ball.dx *= -1;

            // move ball next to the paddle otherwise the collision will happen again
            // in the next frame
            ball.x = rightPaddle.x - ball.width;
        }

        // draw ball
        context.fillRect(ball.x, ball.y, ball.width, ball.height);

        // draw walls
        context.fillStyle = 'lightgrey';
        context.fillRect(0, 0, context.canvas.width, grid);
        context.fillRect(0, context.canvas.height - grid, context.canvas.width, context.canvas.height);

        // draw dotted line down the middle
        for (let i = grid; i < context.canvas.height - grid; i += grid * 2) {
            context.fillRect(context.canvas.width / 2 - grid / 2, i, grid, grid);
        }
    }
    requestAnimationFrame(loop);

}

// listen to keyboard events to move the paddles

// listen to keyboard events to stop the paddle if key is released
