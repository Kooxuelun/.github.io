//upperleft 
var angle;
var rectx = 0;
var recty = 0;
var whitex1 = 160;
var whitey1 = 90;
var whitex2 = 480;
var pupilX = -100;
var pupilY = 0;
var eyea = 75;
var eyeb = 75;
var x1 = 0;
var y1 = 360;
var x2 = 640;
var y2 = 360;
var x3 = 320;
var y3 = 180;
var radiusOfMovement = 150; // Added radius of movement
var moveStage = 0;
var eyeHeight = 0;
var casecount = 0;
var waiting = 800;
var eyeHeight2 =0;

//upperright
let angle2;
let radiusOfMovement2 = 200;
let angle22 = 0;
let ballY = 0; // Initial y-coordinate for the spinning ball
let ballDirection = 1; // Initial direction of the ball movement
let offset = 0; // Offset for stripe animation
let offset2 = 0; // Offset for stripe animation


//bottomleft
var bottomx = 0;
var bottomy = 360;
var bottomw = 640;
var bottomh = 360;
var bottomr = 0;

var bigx = 0;
var bigy = 360;
var bigw = 640;
var bigh = 360;
var zhongx = 260;
var zhongy = 260;
var zhongw = 100;
var zhongh = 220;
var xiaox = 305;
var xiaoy = 310;
var xiaow = 10;
var xiaoh = 125;
var stage = 0;
var generalr = 50;
var t = 0;
var botcount = 0;


//bottomright
let expansion = 0;
let expansionSpeed = 0.5;
let maxExpansion = 70;
let expanding = true;
let c = 960;
let v = 540;
let tx1 = 640;
let ty1 = 360;
let tx2 = 1280;
let ty2 = 360;
let tx3 = 640;
let ty3 = 720;
let whx1 = 1280;
let why1 = 360;
let whx2 = 960;
let why2 = 540;
let whx3 = 1280;
let why3 = 720;
let step = 0;
var spin1 = 0;
var spin2 = 0;
var spin3 = 0;
var spin4 = 0;
var rightcount = 0;
let lerpFactor = 0;
let lerpComplete = false;
let whiteEllipse = 250;
let case3spin2 = 0;
var secexpand = 0;
var secexpandSpeed = 0.5;
var maximumExpand = 70;
var secondExpanding = true;
var spin = true;

let img;
function setup() {
    createCanvas(1280, 720);

    frameRate(60);
    background(220);
    angle2 = PI;
    img = loadImage('cic3.png');
    img1 = loadImage('cic.png')


}

function draw() {
    noStroke();

    bottomright();

    bottomleft();

    push();
    upperleft();
    pop();
    
    upperright();
    
    
}
function upperleft(){
    // fill(22,19,141)
    // rect(0,0,640,360);
    fill(22,19,141)
    image(img1,0,0,640,360);
    push();
    // Black triangle nose
    fill(0);
    triangle(x1, y1, x2, y2, x3, y3);
    pop();


    
    // Red background rectangle
    fill(231,45,12);
    noStroke();
    rect(rectx, recty, 640, 180);

    // White eyes
    fill(255);
    ellipse(whitex1, whitey1, 320, 180);
    ellipse(whitex2, whitey1, 320, 180);

    // Black pupils with animation
    fill(0);
    image(img, whitex1 + pupilX - eyea / 2, whitey1 + pupilY - eyeb / 2, eyea, eyeb);
    image(img, whitex2 + pupilX - eyea / 2, whitey1 + pupilY - eyeb / 2, eyea, eyeb);
    push();

    // Movement stages for pupils and eyes
    switch (moveStage) {
        case 0:
            moveStage = 1; // Move to the next stage after the waiting time

            angle = PI; // Initialize the angle

            break;
        case 1:
            recty += 5;
            whitey1 += 5; // Move the eyes down



            if (recty >= 180) {
                recty = 180;
                whitey1 = 270;
                moveStage = 2; // Proceed to the next stage
                caseCount = millis(); // Start counting time when entering stage 2
            }
            pupilX = (0.80 * cos(angle)) * radiusOfMovement;
            pupilY = (0.35  * sin(angle)) * radiusOfMovement;
            angle -= 0.15;
            if (-angle >= 0) {
                angle = 0;
            }
            
            break;
        case 2:
            push();
            var targetX1 = 0, 
                targetY1 = 0, 
                targetX2 = 640,
                targetY2 = 0, 
                targetX3 = 320, 
                targetY3 = 180; 

            // Gradually move the triangle towards the target position
            x1 += (targetX1 - x1) * 0.1;
            y1 += (targetY1 - y1) * 0.1;
            x2 += (targetX2 - x2) * 0.1;
            y2 += (targetY2 - y2) * 0.1;
            x3 += (targetX3 - x3) * 0.1;
            y3 += (targetY3 - y3) * 0.1;
            pop();
            if(eyeHeight <= 90){
                eyeHeight += 10;
            }
            fill(231,45,12);
            noStroke();
            rect(0,360-eyeHeight,640,eyeHeight);
            if (millis() - caseCount >= waiting) {
                moveStage = 3; // Move to the next stage after the waiting time
                casecount = millis();
            }
            break;
        case 3:
            if (eyeHeight > 0) {
                eyeHeight -= 20; // Decrease eyeHeight to make the rectangle fall
            }
            fill(231,45,12);
            noStroke();
            rect(0, 360 - eyeHeight, 640, eyeHeight);



            push();
            var newTargetX1 = 0;
            var newTargetY1 = 180;
            var newTargetX2 = 0;
            var newTargetY2 = 0;
            var newTargetX3 = 320;
            var newTargetY3 = 180;

            // Gradually move the triangle towards the new target position
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
            if (pupilX != 0) {
                pupilX += (0 - pupilX) * 0.1;
            }

            if (millis() - casecount >= waiting) {
                moveStage = 4; // Move to the next stage after the waiting time
                casecount = millis();
            }
            pop(); 
 
            break;
        case 4:
            var newTargetX1 = 320;
            var newTargetY1 = 180;
            var newTargetX2 = 0;
            var newTargetY2 = 0;
            var newTargetX3 = 640;
            var newTargetY3 = 0;

            // Gradually move the triangle towards the new target position
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;

            if (eyea <= 100 && eyeb <= 100) { 
              eyea += 5;
              eyeb += 5;
          }
          if (millis() - casecount >= waiting) {
            moveStage = 5; // Move to the next stage after the waiting time
            casecount = millis();
        }
          break;
        case 5:
            push();
            var newTargetX1 = 320;
            var newTargetY1 = 180;
            var newTargetX2 = 640;
            var newTargetY2 = 0;
            var newTargetX3 = 640;
            var newTargetY3 = 360;

            // Gradually move the triangle towards the new target position
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
            pop();
            if (abs(newTargetX1 - x1) < 1 && abs(newTargetY1 - y1) < 1 && 
                abs(newTargetX2 - x2) < 1 && abs(newTargetY2 - y2) < 1 && 
                abs(newTargetX3 - x3) < 1 && abs(newTargetY3 - y3) < 1) {
                if (millis() - casecount >= waiting) {
                    moveStage = 6; // Move to the next stage after the waiting time
                    casecount = millis();
                }
            }
            break;
        case 6:
            var newTargetX1 = 0;
            var newTargetY1 = 0;
            var newTargetX2 = 640;
            var newTargetY2 = 0;
            var newTargetX3 = 320;
            var newTargetY3 = 180;
        
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
            if (eyea >= 75 && eyeb >= 75) { // Limit the maximum size
                eyea -= 5;
                eyeb -= 5;
                }
                if (eyea <= 75 && eyeb <= 75) {
                    if (millis() - casecount >= waiting) {

                    moveStage = 7; // Move to the next stage after the waiting time
                    casecount = millis();
                    }
                }
                break;
        case 7:
            push();
            var newTargetX1 = 0;
            var newTargetY1 = 360;
            var newTargetX2 = 640;
            var newTargetY2 = 360;
            var newTargetX3 = 320;
            var newTargetY3 = 180;
        
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
            pop();
            recty -= 5;
            whitey1 -= 5; // Move the eyes down
            if (recty <= 0) {
                recty = 0;
                whitey1 = 90;
            }
            // Gradually move the pupil to the top of the white eyes
            pupilY += (-54 - pupilY) * 0.1;
            if (millis() - casecount >= waiting) {
                moveStage = 8;
                casecount = millis();
            }
            break;

        case 8:
            var newTargetX1 = 0;
            var newTargetY1 = 180;
            var newTargetX2 = 0;
            var newTargetY2 = 360;
            var newTargetX3 = 320;
            var newTargetY3 = 180;
        
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
            
            if (angle <= (1/3*PI)) {
                pupilX = (0.8 * cos(angle)) * radiusOfMovement;
                pupilY = (0.30 * sin(angle)) * radiusOfMovement;
                angle += 0.05;
            }
            if (millis() - casecount >= waiting) {
                moveStage = 9;
                casecount = millis();
            }
            break;
        case 9:
            var newTargetX1 = 320;
            var newTargetY1 = 180;
            var newTargetX2 = 0;
            var newTargetY2 = 360;
            var newTargetX3 = 640;
            var newTargetY3 = 360;
        
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
            if(eyeHeight <= 35){
                eyeHeight += 5;
            }
            fill(231,45,12);
            noStroke();
            rect(0,180-eyeHeight,640,eyeHeight);
            if(eyeHeight2 <= 55){
                eyeHeight2 += 5;
            }
            fill(231,45,12);
            noStroke();
            rect(0,0,640,eyeHeight2);
            if (millis() - casecount >= waiting) {
                moveStage = 10;
                casecount = millis();
            }
            break;
        case 10:
            var newTargetX1 = 640;
            var newTargetY1 = 180;
            var newTargetX2 = 320;
            var newTargetY2 = 180;
            var newTargetX3 = 640;
            var newTargetY3 = 360;
        
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
            if (eyeHeight2 > 0) {
                eyeHeight2 -= 5; // Decrease eyeHeight to make the bottom rectangle fall
            }
            fill(231, 45, 12);
            noStroke();
            rect(0,0,640,eyeHeight2);
            eyeHeight = 35;
            rect(0,180-eyeHeight,640,eyeHeight);
            if (millis() - casecount >= 500) {
                moveStage = 11;
                casecount = millis();
            }
            break;
        case 11:
            fill(231, 45, 12);
            eyeHeight = 35;
            rect(0,180-eyeHeight,640,eyeHeight);
            if (angle <= (0.4*PI)) {
                pupilX = (0.8 * cos(angle)) * radiusOfMovement;
                pupilY = (0.30 * sin(angle)) * radiusOfMovement;
                angle += 0.02;
            }
            if (millis() - casecount >= waiting) {
                moveStage = 12;
                casecount = millis();
            }
            break;
        case 12:
            var newTargetX1 = 0;
            var newTargetY1 = 360;
            var newTargetX2 = 640;
            var newTargetY2 = 360;
            var newTargetX3 = 320;
            var newTargetY3 = 180;
        
            x1 += (newTargetX1 - x1) * 0.1;
            y1 += (newTargetY1 - y1) * 0.1;
            x2 += (newTargetX2 - x2) * 0.1;
            y2 += (newTargetY2 - y2) * 0.1;
            x3 += (newTargetX3 - x3) * 0.1;
            y3 += (newTargetY3 - y3) * 0.1;
        
            if (angle >= 0) {
            // Update angle and calculate new pupil position
            angle -= 0.15;
            pupilX = (-0.8 * cos(angle)) * radiusOfMovement;
            pupilY = (-0.30 * sin(angle)) * radiusOfMovement;
            }
            if (millis() - casecount >= waiting) {
                moveStage = 0; // Move back to stage 0
                casecount = millis(); // Reset the case count
            }
            break;
        // Add more cases as needed for further stages

}
}

function upperright(){
    push();
    offset -= 1; // Adjust this value to change the speed of the animation
    if (offset <= -40) {
        offset = 0;
    }
    offset2 += 1; // Adjust this value to change the speed of the animation
    if (offset2 >= 40) {
        offset2 = 0;
    }
    // Draw stripes for the left rectangle
    fill(255, 255, 255); // Base color
    rect(640, 0, 320, 360);

    for (let y = 340; y > -20; y -= 40) { // Adjust to move stripes from bottom to top
        fill('rgba(173,122,66, 0.8)');
        rect(640, y + offset, 320, 20);
        fill('rgba(255, 255, 255, 0.8)');
        rect(640, y - 20 + offset, 320, 20);
    }
    push();
    fill(255);
    noStroke();
    rect(640,340,320,20);
    pop();

    // Draw stripes for the right rectangle
    fill(255, 255, 255); // Base color
    rect(960, 0, 320, 360);
    
    for (let y = -50; y < 310; y += 40) { // Adjust to move stripes from top to bottom
        fill('rgba(255, 255, 255, 0.8)');
        rect(960, y + offset2, 320, 20);
        fill('rgba(173,122,66, 0.8)');
        rect(960, y + 20 + offset2, 320, 20);
        // image(img,960 - 320/2,y + 20 + offset - 20/2 , 320, 20);
    }


    // Update the spinning ball
    translate(960,180);
    if (angle2 < 0) {
        angle2 = PI;
    }
    let x = 1 * cos(angle2) * radiusOfMovement2;
    fill(255, 0, 0);
    ellipse(x, ballY, 90, 90);
    // image(img,x - 90/2, ballY - 90/2, 90, 90);

    angle2 -= 0.05;
    ballY += 1 * ballDirection;
    if (ballY >= 120) {
        ballDirection *= -1; // Reverse the direction
    }
    if(ballY <= -100){
        ballDirection += 10;
    }
    

    // Update the rotating ball
    if (-angle22 > PI) {
        angle22 = 0;
    }
    let a = 1 *cos(angle22) * radiusOfMovement2;
    fill(22,19,141)
    ellipse(a, ballY, 90, 90);
    angle22 -= 0.05;
    fill(255);
    pop();
    

}

function bottomleft() {
    

    switch(stage){
        case 0:
            fill(0);
            rect(bottomx, bottomy, bottomw, bottomh, 0, 0, bottomr,bottomr);
            push();
            fill(231, 45, 12);
            rect(bigx, bigy, bigw, bigh, 0, 0, 180, 180);
            pop();
            push();
            fill(255);
            rect(zhongx, zhongy, zhongw, zhongh, 0, 0, 50, 50);
            fill(231, 45, 12);
            rect(xiaox, xiaoy, xiaow, xiaoh, 0, 0, 50, 50);
            pop(); 
                stage = 1; // Move to the next stage after the waiting time

            break;
        case 1:

            //白色
            fill(255);
            rect(0,360,640,360);
            //超大去大
            var currentRadius1 = lerp(bottomr,180,t);
            fill(lerpColor(color(0), color(0), t)); // Interpolate color from red to white for the larger red rectangle
            rect(bigx, bigy, bottomw, bottomh, 0, 0, currentRadius1,currentRadius1);


            // 大去中等
            var currentX2 = lerp(bigx, zhongx, t);
            var currentWidth2 = lerp(bigw, zhongw, t);
            var currentHeight2 = lerp(bigh, zhongh, t);

            fill(lerpColor(color(231, 45, 12), color(231,45,12), t)); // Interpolate color from red to white for the larger red rectangle
            rect(currentX2, zhongy, currentWidth2, currentHeight2, 0, 0, 50, 50);

            // 中等去小
            var currentX1 = lerp(zhongx, xiaox, t);
            var currentWidth1 = lerp(zhongw, xiaow, t);
            var currentHeight1 = lerp(zhongh, xiaoh, t);
            var colorValue = lerpColor(color(255), color(255), t);

            fill(colorValue); 
            rect(currentX1, xiaoy, currentWidth1, currentHeight1, 0, 0, 50, 50);






            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 2;
            }

            break;
        case 2:
            fill(255);
            rect(bottomx,bottomy,bottomw,bottomh,0,0,0,0);
            fill(0)
            rect(bigx,bigy,bigw,bigh,0,0,180,180);
            fill(231, 45, 12); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, zhongy, 100, 220, 50, 50, 50, 50);
            fill(255); // Smaller red rectangle now red
            rect(xiaox, xiaoy, xiaow, xiaoh, 0, 0, 50, 50);

            if (millis() - botcount >= 600) {
                stage = 3; // Move to the next stage after the waiting time
                botcount = millis();

            }

            break;
        case 3:
            // blue
            fill(22,19,141);
            rect(0,360,640,360);

            //超大去大
            var currentRadius1 = lerp(bottomr,180,t);
            fill(lerpColor(color(255), color(255), t)); // Interpolate color from red to white for the larger red rectangle
            rect(bigx, bigy, bigw, bigh, 0, 0, currentRadius1,currentRadius1);


            // 大去中等
            var currentX2 = lerp(bigx, zhongx, t);
            var currentWidth2 = lerp(bigw, zhongw, t);
            var currentHeight2 = lerp(bigh, zhongh, t);

            fill(lerpColor(color(0), color(0), t)); // Interpolate color from red to white for the larger red rectangle
            rect(currentX2, zhongy, currentWidth2, currentHeight2, 0, 0, 50, 50);

            // 中等去小
            var currentX1 = lerp(zhongx, xiaox, t);
            var currentWidth1 = lerp(zhongw, xiaow, t);
            var currentHeight1 = lerp(zhongh, xiaoh, t);
            var colorValue = lerpColor(color(255,0,0), color(255,0,0), t);

            fill(colorValue); 
            rect(currentX1, xiaoy, currentWidth1, currentHeight1, 0, 0, 50, 50);
            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 4;
            }
            break;
        case 4:
            fill(22,19,141);
            rect(bottomx,bottomy,bottomw,bottomh,0,0,0,0);
            fill(255)
            rect(bigx,bigy,bigw,bigh,0,0,180,180);
            fill(0); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, zhongy, 100, 220, 50, 50, 50, 50);
            fill(231, 45, 12); // Smaller red rectangle now red
            rect(xiaox, xiaoy, xiaow, xiaoh, 0, 0, 50, 50);

            if (millis() - botcount >= 600) {
                stage = 5; // Move to the next stage after the waiting time
                botcount = millis();

            }
            break;
        case 5: 

            fill(231,45,12);
            rect(bottomx,bottomy,bottomw,bottomh);


            //大圆圈
            var currentX3 = lerp(320, 320, t);
            var currentY3 = lerp(800,540,t)
            var currentWidth3 = lerp(bottomw, 640, t);
            var currentHeight3 = lerp(bottomh, 360, t);
            fill(lerpColor(color(22,19,141), color(22,19,141), t)); // Interpolate color from red to white for the larger red rectangle
            ellipse(currentX3, currentY3, currentWidth3, currentHeight3);


            // 大去中等
            var currentX2 = lerp(bigx, zhongx, t);
            var currentWidth2 = lerp(bigw, zhongw, t);
            var currentHeight2 = lerp(bigh, zhongh, t);

            fill(lerpColor(color(255), color(255), t)); // Interpolate color from red to white for the larger red rectangle
            rect(currentX2, zhongy, currentWidth2, currentHeight2, 0, 0, 50, 50);

            // 中等去小
            var currentX1 = lerp(zhongx, xiaox, t);
            var currentWidth1 = lerp(zhongw, xiaow, t);
            var currentHeight1 = lerp(zhongh, xiaoh, t);
            var colorValue = lerpColor(color(0), color(231, 45, 12), t);

            fill(colorValue); 
            rect(currentX1, xiaoy, currentWidth1, currentHeight1, 0, 0, 50, 50);
            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 6;
            }
            break;
        case 6:
            fill(231, 45, 12);
            rect(bottomx,bottomy,bottomw,bottomh,0,0,0,0);
            fill(22,19,141)
            ellipse(320,540,640,360);
            fill(255); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, zhongy, 100, 220, 50, 50, 50, 50);
            fill(231, 45, 12); // Smaller red rectangle now red
            rect(xiaox, xiaoy, xiaow, xiaoh, 0, 0, 50, 50);

            if (millis() - botcount >= 900) {
                stage = 7; // Move to the next stage after the waiting time
                botcount = millis();

            }
            break;
        case 7:
            //大红色
            fill(lerpColor(color(231, 45, 12), color(231, 45, 12), t)); // Interpolate color from red to white for the larger red rectangle
            rect(0,320,640,400, 0, 0, 0,0,);

            //大圆圈不见
            var currentX3 = lerp(320, 320, t);
            var currentY3 = lerp(540,720,t)
            var currentWidth3 = lerp(640, 0, t);
            var currentHeight3 = lerp(360, 0, t);
            fill(lerpColor(color(22,19,141), color(22,19,141), t)); // Interpolate color from red to white for the larger red rectangle
            ellipse(currentX3, currentY3, currentWidth3, currentHeight3);

            //小白
            var newY2 = lerp(260,600,t)
            fill(255);
            rect(zhongx, newY2, zhongw, zhongh, 50, 50, 50, 50);
            
            //小红
            var newY1 = lerp(310,605,t)
            fill(231, 45, 12);
            rect(xiaox, newY1, xiaow, xiaoh, 50,50, 50, 50);
            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 8;
            }
            break;
        case 8:
            fill(0);
            rect(bottomx,bottomy,bottomw,bottomh);
            fill(231, 45, 12);
            rect(bigx,bigy,bigw,bigh,180,180,0,0);
            fill(255); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, 600, 100, zhongh,50,50,50,50);
            fill(231, 45, 12); // Smaller red rectangle now red
            rect(xiaox, 645, xiaow, xiaoh, 50, 50, 50, 50);
            if (millis() - botcount >= 900) {
                stage = 9; // Move to the next stage after the waiting time
                botcount = millis();

            }
            break;
        case 9:
            //白背
            fill(255);
            rect(0,360,640,360);
            //黑背变大
            var currentRadius1 = lerp(bottomr,180,t);
            fill(lerpColor(color(0), color(0), t)); // Interpolate color from red to white for the larger red rectangle
            rect(0, 360, 640, 360, currentRadius1,currentRadius1, 0,0);

            //大红变中
            var currentX2 = lerp(bigx, zhongx, t);
            var currentY2 = lerp(360,600,t);
            var currentWidth2 = lerp(bigw, zhongw, t);
            var currentHeight2 = lerp(bigh, zhongh, t);
            var radius = lerp(180,50,t)
            fill(lerpColor(color(231, 45, 12), color(231, 45, 12), t)); // Interpolate color from red to white for the larger red rectangle
            rect(currentX2, currentY2, currentWidth2, currentHeight2,radius,radius, 0, 0);

            // 小白变小
            var currentX1 = lerp(zhongx,xiaox,t);
            var currentY1 = lerp(600,645,t);
            var currentWidth1 = lerp(zhongw,xiaow,t);
            var currentHeight1 = lerp(zhongh,xiaoh,t);
            var colorValue = lerpColor(color(255), color(255), t);

            fill(colorValue); 
            rect(currentX1, currentY1, currentWidth1, currentHeight1, 50,50,0,0);

            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 10;
            }
            break;
        case 10:
            fill(255);
            rect(0,360,640,360);
            fill(0);
            rect(bigx,bigy,bigw,bigh,180,180,0,0)
            fill(231, 45, 12); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, 600, zhongw,zhongh,50,50,0,0);
            fill(255);
            rect(xiaox, 645, xiaow, xiaoh, 50, 50, 50, 50);
            if (millis() - botcount >= 900) {
                stage = 11; // Move to the next stage after the waiting time
                botcount = millis();

            }
            break;
        case 11:
            //blue
            fill(22,19,141);
            rect(0,360,640,360);
            //白背变大
            var currentRadius1 = lerp(bottomr,180,t);
            fill(lerpColor(color(255), color(255), t)); // Interpolate color from red to white for the larger red rectangle
            rect(0, 360, 640, 360, currentRadius1,currentRadius1, 0,0);

            //大黑变中
            var currentX2 = lerp(bigx, zhongx, t);
            var currentY2 = lerp(360,600,t);
            var currentWidth2 = lerp(bigw, zhongw, t);
            var currentHeight2 = lerp(bigh, zhongh, t);
            var radius = lerp(180,50,t)
            fill(lerpColor(color(0), color(0), t)); // Interpolate color from red to white for the larger red rectangle
            rect(currentX2, currentY2, currentWidth2, currentHeight2,radius,radius, 0, 0);

            // 小红变小
            var currentX1 = lerp(zhongx,xiaox,t);
            var currentY1 = lerp(600,645,t);
            var currentWidth1 = lerp(zhongw,xiaow,t);
            var currentHeight1 = lerp(zhongh,xiaoh,t);
            var colorValue = lerpColor(color(231, 45, 12), color(231, 45, 12), t);

            fill(colorValue); 
            rect(currentX1, currentY1, currentWidth1, currentHeight1, 50,50,0,0);

            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 12;
            }
            break;
        case 12:
            fill(22,19,141);
            rect(0,360,640,360);
            fill(255);
            rect(bigx,bigy,bigw,bigh,180,180,0,0)
            fill(0); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, 600, zhongw,zhongh,50,50,0,0);
            fill(231, 45, 12);
            rect(xiaox, 645, xiaow, xiaoh, 50, 50, 50, 50);
            if (millis() - botcount >= 900) {
                stage = 13; // Move to the next stage after the waiting time
                botcount = millis();

            }
            break;
        case 13:
            fill(231,45,12);
            rect(bottomx,bottomy,bottomw,bottomh);
            //大圆圈
            var currentX3 = lerp(320, 320, t);
            var currentY3 = lerp(320,500,t)
            var currentWidth3 = lerp(bottomw, 640, t);
            var currentHeight3 = lerp(bottomh, 360, t);
            fill(lerpColor(color(22,19,141), color(22,19,141), t)); // Interpolate color from red to white for the larger red rectangle
            ellipse(currentX3, currentY3, currentWidth3, currentHeight3);

            //大白变中
            var currentX2 = lerp(bigx, zhongx, t);
            var currentY2 = lerp(360,600,t);
            var currentWidth2 = lerp(bigw, zhongw, t);
            var currentHeight2 = lerp(bigh, zhongh, t);
            var radius = lerp(180,50,t)
            fill(lerpColor(color(255), color(255), t)); // Interpolate color from red to white for the larger red rectangle
            rect(currentX2, currentY2, currentWidth2, currentHeight2,radius,radius, 0, 0);

            // 小黑变小
            var currentX1 = lerp(zhongx,xiaox,t);
            var currentY1 = lerp(600,645,t);
            var currentWidth1 = lerp(zhongw,xiaow,t);
            var currentHeight1 = lerp(zhongh,xiaoh,t);
            var colorValue = lerpColor(color(0), color(231, 45, 12), t);

            fill(colorValue); 
            rect(currentX1, currentY1, currentWidth1, currentHeight1, 50,50,0,0);
            
            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 14;
            }
            break;
        case 14:
            fill(231,45,12);
            rect(bottomx,bottomy,bottomw,bottomh);
            fill(22,19,141);
            ellipse(320,540,640,360);
            fill(255); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, 600, zhongw,zhongh,50,50,0,0);
            fill(231, 45, 12);
            rect(xiaox, 645, xiaow, xiaoh, 50, 50, 50, 50);
            if (millis() - botcount >= 900) {
                stage = 15; // Move to the next stage after the waiting time
                botcount = millis();

            }
            break;
        case 15:
            fill(0);
            rect(bottomx,bottomy,bottomw,bottomh);
            fill(231,45,12);
            rect(bigx,bigy,bigw,bigh,0,0,180,180);
            //大圆圈不见
            var currentX3 = lerp(320, 320, t);
            var currentY3 = lerp(540,360,t)
            var currentWidth3 = lerp(640, 0, t);
            var currentHeight3 = lerp(360, 0, t);
            fill(lerpColor(color(22,19,141), color(22,19,141), t)); // Interpolate color from red to white for the larger red rectangle
            ellipse(currentX3, currentY3, currentWidth3, currentHeight3);
            //小白
            var newY2 = lerp(600,260,t)
            fill(255);
            rect(zhongx, newY2, zhongw, zhongh, 50, 50, 50, 50);
            
            //小红
            var newY1 = lerp(605,310,t)
            fill(231, 45, 12);
            rect(xiaox, newY1, xiaow, xiaoh, 0, 0, 50, 50);
            t += 0.05;
            if (t >= 1) {
                t = 0;
                stage = 16;
            }
            break;
        case 16:
            fill(0);
            rect(bottomx,bottomy,bottomw,bottomh);
            fill(231,45,12);
            rect(bigx,bigy,bigw,bigh,0,0,180,180);
            fill(255); // Larger red rectangle now in the position of the previous white rectangle
            rect(zhongx, 260, 100, zhongh,50,50,50,50);
            fill(231, 45, 12); // Smaller red rectangle now red
            rect(xiaox, 310, xiaow, xiaoh, 50, 50, 50, 50);
            if (millis() - botcount >= 900) {
                stage = 0; // Move to the next stage after the waiting time
                botcount = millis();

            }
            break;

    }
}

function bottomright() {
    background(220);
    switch(step){
        case 0:
            //左小角
            fill(255);
            arc(960,540,800,800,radians(90),radians(151));
            //右小角
            fill(158,119,60)
            arc(960,540,800,600,radians(29),radians(90));

            //蓝色大圆圈
            fill(22,19,141);
            arc(960,540,800,800,radians(150),radians(331));

            //大圆圈
            fill(231,45,12);
            ellipse(c, v, 240, 240);
            //左黑
            fill(0);
            arc(960,540,240,240,(HALF_PI),radians(151));
            //右小白
            fill(255);
            arc(960,540,240,240,radians(29),radians(90));
            //右边白色三角形
            fill(255);
            arc(960,540,800,800,radians(331),radians(389));
            //右小黑
            fill(0);
            arc(960,540,240,240,radians(330.5),radians(389.5));
            //中间红圆圈
            fill(231,45,12);
            ellipse(c,v,180,180);
            //白色半圆C
            fill(255);
            arc(c,v,180,180,radians(152),radians(330));
            //红色半圆
            fill(231,45,12);
            arc(c,v,135,135,radians(152),radians(330));

            if (millis() - rightcount >= 100) {
                step = 1; // Move to the next stage after the waiting time
                rightcount = millis();
            }
            break;
        case 1:
            let currentStartAngle = lerp(150, 210, lerpFactor);
            let currentEndAngle = lerp(330, 210, lerpFactor);
            //蓝色大圆圈
            fill(22, 19, 141);
            arc(960, 540, 800, 800, radians(currentStartAngle), radians(currentEndAngle));
      
            if (!lerpComplete) {
              lerpFactor += 0.05;
              if (lerpFactor >= 1) {
                lerpFactor = 1;
                lerpComplete = true;
              }
            }
            fill(22, 19, 141);
            rect(640,360,640,360);
            //大圆圈
            fill(231,45,12);
            ellipse(c, v, 240, 240);
            push();
            translate(960, 540);
            rotate(spin1);
            //右白
            fill(255);
            arc(0,0,800,800,radians(331),radians(435));

            //右黑
            fill(0);
            arc(0,0,240,240,radians(331),radians(435));

            pop();
            spin1 -= 0.10;
            if (spin1 < -radians(120)) {
                spin1 = -radians(120);
            }


            push();
            translate(960,540);
            rotate(spin2);
            //左白
            fill(255);
            arc(0,0,800,800,radians(90),radians(151));
            //黑
            fill(0);
            arc(0,0,240,240,radians(90),radians(151));
            pop();
            spin2 +=0.05;
            if (spin2 > radians(75)) {
                spin2 = radians(75);
            }

            push();
            translate(960,540);
            rotate(spin3);
            //褐
            fill(158,119,60)
            arc(0,0,800,800,radians(29),radians(60));
            //白
            fill(255);
            arc(0,0,250,250,radians(29),radians(60));
            pop();

            
            spin3 +=0.12;
            if (spin3 > radians(105)) {
                spin3 = radians(105);
            }

            //中间红圆圈
            fill(231,45,12);
            ellipse(c,v,180,180);

            push();
            translate(960,540);
            rotate(spin4);
            //白色半圆C
            fill(255);
            arc(0,0,180,180,radians(152),radians(330));
            //红色半圆
            fill(231,45,12);
            arc(0,0,135,135,radians(152),radians(330));
            pop();
            spin4 +=0.12;
            if (spin4 > radians(164)) {
                spin4 = radians(164);
            }

            if (millis() - rightcount >= waiting) {
                step = 2; // Move to the next stage after the waiting time
                rightcount = millis();
            }
            break;
        case 2:
            step1();
            if (expanding) {
                expansion += 1;
                if (expansion > maxExpansion) {
                    expansion = maxExpansion;
                    if(millis() - rightcount >= 750){
                        rightcount = millis()
                        expanding = false;
                    }               
                }
            } else {
                expansion -= 1;
                if (expansion < 0) {
                    expansion = 0;
                    if(millis() - rightcount >= 1500){
                        expanding = true;
                    }
                }
            }


            //大圆圈
            fill(231,45,12);
            ellipse(c, v, 240+expansion, 240+expansion);
            fill(0);
            arc(960, 540, 240 + expansion, 240 + expansion, radians(211), radians(315));
            //黑
            fill(0);
            arc(960, 540, 240 + expansion, 240 + expansion, radians(165), radians(226));
            //白
            fill(255);
            arc(960, 540, 240 + expansion, 240 + expansion, radians(134), radians(165));
            //中间红圆圈
            fill(231, 45, 12);
            ellipse(c, v, 180 + expansion, 180 + expansion);
            fill(255);
            arc(960, 540, 180 + expansion, 180 + expansion, radians(316), radians(494));
            //红色半圆
            fill(231, 45, 12);
            arc(960, 540, 135 + expansion, 135 + expansion, radians(316), radians(494));
            
            if (millis() - rightcount >= 1500) {
                step = 3; // Move to the next stage after the waiting time
                rightcount = millis();
            }
            break;
        case 3:
            fill(22, 19, 141);
            rect(640,360,640,360);
            //大圆圈
            fill(231,45,12);
            ellipse(c, v, 240, 240);
            push();
            translate(960, 540);
            rotate(spin1);
            //右白
            fill(255);
            arc(0,0,800,800,radians(290),radians(400));

            //右黑
            fill(0);
            arc(0,0,240,240,radians(290),radians(400));

            pop();
            spin1 += 0.05;
            if (spin1 > -radians(50)) {
                spin1 = -radians(50);
            }
            
            push();
            translate(960, 540);
            rotate(spin2);
            //下白
            fill(255);
            arc(0,0,800,800,radians(10),radians(120));

            //下黑
            fill(0);
            arc(0,0,240,240,radians(10),radians(120));

            pop();
            spin2 -= 0.05;
            if (spin2 < radians(50)) {
                spin2 = radians(50);
            }
            
            push();
            translate(960,540);
            rotate(spin3);
            //褐
            fill(158,119,60)
            arc(0,0,800,800,radians(14),radians(60));
            //白
            fill(255);
            arc(0,0,215,215,radians(14),radians(60));
            pop();

            
            spin3 +=0.05;
            if (spin3 > radians(180)) {
                spin3 = radians(180);
            }

            //中间红圆圈
            fill(231,45,12);
            ellipse(c,v,180,180);


            push();
            translate(960,540);
            rotate(spin4);
            //白色半圆C
            fill(255);
            arc(0,0,180,180,radians(152),radians(332));
            //红色半圆
            fill(231,45,12);
            arc(0,0,135,135,radians(152),radians(332));
            pop();
            spin4 -=0.05;
            if(spin4 <= radians(88)){
                spin4 = radians(88);
            }
            if (millis() - rightcount >= 800) {
                step = 4; // Move to the next stage after the waiting time
                rightcount = millis();
            }
            break;
        case 4:
            // Step 4 animation logic
            if (secondExpanding) {
                secexpand += 1;
                if (secexpand > 20) {
                    secexpand = 20;
                    secondExpanding = false;
                    
                }
            } else {
                secexpand -= 1;
                if (secexpand < 0) {
                    secexpand = 0;
                    if(millis() - rightcount >= 800){
                        secondExpanding = true;
                    }
                }
            }
            fill(22, 19, 141);
            rect(640,360,640,360);
            fill(231, 45, 12);
            ellipse(c, v, 240 + secexpand, 240 + secexpand);
            //右白
            fill(255);
            arc(960,540,800,800,radians(240),radians(350));
            //右黑
            fill(0);
            arc(960,540,240 +secexpand,240 +secexpand,radians(240),radians(350));
            //褐
            fill(158,119,60)
            arc(960,540,800,800,radians(194),radians(240));
            //白
            fill(255);
            arc(960,540,215,215,radians(194),radians(240));
            //下白
            fill(255);
            arc(960,540,800,800,radians(60),radians(170));
            //下黑
            fill(0);
            arc(960,540,240 + secexpand,240 +secexpand,radians(60),radians(170));
            //中间红圆圈
            fill(231, 45, 12);
            ellipse(c, v, 180 + secexpand, 180 + secexpand);
            //白色半圆C
            fill(255);
            arc(960,540,180 + secexpand ,180 +secexpand,radians(240),radians(420));
            //红色半圆
            fill(231,45,12);
            arc(960,540,135+secexpand,135+secexpand,radians(240),radians(420));

            if (millis() - rightcount >= 800) {
                step = 5; // Move to the next stage after the waiting time
                rightcount = millis();
            }
            break;
        case 5:
            fill(22, 19, 141);
            rect(640,360,640,360);
            //大圆圈
            fill(231,45,12);
            ellipse(c, v, 240, 240);
            push();
            translate(960, 540);
            rotate(spin1);
            //右白
            fill(255);
            arc(0,0,800,800,radians(240),radians(350));

            //右黑
            fill(0);
            arc(0,0,240,240,radians(240),radians(350));

            pop();
            if(spin){
            spin1 += 0.06;
            if (spin1 > radians(150)) {
                spin1 = radians(150);
                if (millis() - rightcount >= 500) {
                    rightcount = millis();
                    spin = false;
                }
            }
            }else{
                spin1 -= 0.05;
                if(spin1 < radians(91)){
                    spin1 = radians(91);
                    if(millis() - rightcount >=1000){
                        spin = true;
                    }
                }
            }
            

            push();
            translate(960, 540);
            rotate(case3spin2);
            //下白
            fill(255);
            arc(0,0,800,800,radians(10),radians(120));

            //下黑
            fill(0);
            arc(0,0,240,240,radians(10),radians(120));

            pop();
            case3spin2 -= 0.05;
            if (case3spin2 <= radians(30)) {
                case3spin2 = radians(30);
            }

            push();
            translate(960,540);
            rotate(spin3);
            //褐
            fill(158,119,60)
            arc(0,0,800,800,radians(29),radians(90));
            //白
            fill(255);
            arc(0,0,240,240,radians(29),radians(90));
            pop();

            
            spin3 -=0.05;
            if (spin3 <= radians(0)) {
                spin3 = radians(0);
            }
            //中间红圆圈
            fill(231,45,12);
            ellipse(c,v,180,180);


            push();
            translate(960,540);
            rotate(spin4);
            //白色半圆C
            fill(255);
            arc(0,0,180,180,radians(152),radians(332));
            //红色半圆
            fill(231,45,12);
            arc(0,0,135,135,radians(152),radians(332));
            pop();
            spin4 -=0.05;
            if(spin4 <= radians(-2)){
                spin4 = radians(-2);
            }
            if (millis() - rightcount >= 1000) {
                step = 0; // Move to the next stage after the waiting time
                rightcount = millis();
            }
            break;

    }

}



function step1(){
    let currentStartAngle1 = lerp(150, 210, lerpFactor);
    let currentEndAngle1 = lerp(330, 210, lerpFactor);
    //蓝色大圆圈
    fill(22, 19, 141);
    arc(960, 540, 800, 800, radians(currentStartAngle1), radians(currentEndAngle1));

    if (!lerpComplete) {
      lerpFactor += 0.05;
      if (lerpFactor >= 1) {
        lerpFactor = 1;
        lerpComplete = true;
      }
    }
    fill(22, 19, 141);
    rect(640,360,640,360);
    push();
    translate(960, 540);
    rotate(spin1);
    //右白
    fill(255);
    // arc(0,0,800,800,radians(331),radians(389));
    arc(0,0,800,800,radians(331),radians(435));

    //右黑
    fill(0);
    arc(0,0,240,240,radians(331),radians(435));

    pop();
    spin1 -= 0.10;
    if (spin1 < -radians(120)) {
        spin1 = -radians(120);
    }


    push();
    translate(960,540);
    rotate(spin2);
    //左白
    fill(255);
    arc(0,0,800,800,radians(90),radians(151));
    //黑
    fill(0);
    arc(0,0,240,240,radians(90),radians(151));
    pop();
    spin2 +=0.05;
    if (spin2 > radians(75)) {
        spin2 = radians(75);
    }

    push();
    whiteEllipse -= 1;

    translate(960,540);
    rotate(spin3);
    //褐
    fill(158,119,60)
    arc(0,0,800,800,radians(29),radians(60));
    //白
    fill(255);
    arc(0,0,whiteEllipse,whiteEllipse,radians(29),radians(60));
    if(whiteEllipse <= 240){
        whiteEllipse = 240;
    };
    pop();
    spin3 +=0.12;
    if (spin3 > radians(105)) {
        spin3 = radians(105);
    }


    //中间红圆圈
    fill(231,45,12);
    ellipse(c,v,180,180);


    
    push();
    translate(960,540);
    rotate(spin4);
    //白色半圆C
    fill(255);
    arc(0,0,180,180,radians(152),radians(330));
    //红色半圆
    fill(231,45,12);
    arc(0,0,135,135,radians(152),radians(330));
    pop();
    spin4 +=0.05;
    if (spin4 > radians(164)) {
        spin4 = radians(164);
    }
}

function step2(){

    fill(22, 19, 141);
    rect(640,360,640,360);
    //大圆圈
    fill(231,45,12);
    ellipse(c, v, 240, 240);
    push();
    translate(960, 540);
    // Start with the last known rotation state from case 2
    rotate(spin1);
    //右白
    fill(255);
    arc(0,0,800,800,radians(290),radians(400));

    //右黑
    fill(0);
    arc(0,0,240,240,radians(290),radians(400));

    pop();
    spin1 += 0.05;
    if (spin1 > -radians(50)) {
        spin1 = -radians(50);
    }
    
    push();
    translate(960, 540);
    rotate(case3spin2);
    //下黑
    fill(255);
    arc(0,0,800,800,radians(10),radians(120));

    //下白
    fill(0);
    arc(0,0,240,240,radians(10),radians(120));

    pop();
    case3spin2 += 0.05;
    if (case3spin2 > radians(50)) {
        case3spin2 = radians(50);
    }
    
    push();
    translate(960,540);
    rotate(spin3);
    //褐
    fill(158,119,60)
    arc(0,0,800,800,radians(14),radians(60));
    //白
    fill(255);
    arc(0,0,215,215,radians(14),radians(60));
    pop();

    
    spin3 +=0.05;
    if (spin3 > radians(180)) {
        spin3 = radians(180);
    }

    //中间红圆圈
    fill(231,45,12);
    ellipse(c,v,180,180);


    push();
    translate(960,540);
    rotate(spin4);
    //白色半圆C
    fill(255);
    arc(0,0,180,180,radians(152),radians(332));
    //红色半圆
    fill(231,45,12);
    arc(0,0,135,135,radians(152),radians(332));
    pop();
    spin4 -=0.05;
    if(spin4 <= radians(88)){
        spin4 = radians(88);
    }
}