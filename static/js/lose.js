export let startLoseAnimation = {

    startLoseAnimation: function () {
        let canvas = document.getElementById('lose-canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            canvas.width = 200;
            canvas.height = 220;
            // 22 * 20
            var sz = 10;
            var boxes = [
                //y1
                {x: sz * 6, y: sz * 0, color: 'white'},
                {x: sz * 14, y: sz * 0, color: 'white'},
                //y2
                {x: sz * 5, y: sz * 1, color: 'white'},
                {x: sz * 6, y: sz * 1, color: 'white'},
                {x: sz * 14, y: sz * 1, color: 'white'},
                {x: sz * 15, y: sz * 1, color: 'white'},
                //y3
                {x: sz * 8, y: sz * 2, color: 'white'},
                {x: sz * 9, y: sz * 2, color: 'white'},
                {x: sz * 10, y: sz * 2, color: 'white'},
                {x: sz * 11, y: sz * 2, color: 'white'},
                {x: sz * 12, y: sz * 2, color: 'white'},
                //y4
                {x: sz * 7, y: sz * 3, color: 'white'},
                {x: sz * 8, y: sz * 3, color: 'white'},
                {x: sz * 9, y: sz * 3, color: 'white'},
                {x: sz * 10, y: sz * 3, color: 'white'},
                {x: sz * 11, y: sz * 3, color: 'white'},
                {x: sz * 12, y: sz * 3, color: 'white'},
                {x: sz * 13, y: sz * 3, color: 'white'},
                //y5
                {x: sz * 7, y: sz * 4, color: 'white'},
                {x: sz * 10, y: sz * 4, color: 'white'},
                {x: sz * 13, y: sz * 4, color: 'white'},
                //y6
                {x: sz * 7, y: sz * 5, color: 'white'},
                {x: sz * 8, y: sz * 5, color: 'white'},
                {x: sz * 9, y: sz * 5, color: 'white'},
                {x: sz * 10, y: sz * 5, color: 'white'},
                {x: sz * 11, y: sz * 5, color: 'white'},
                {x: sz * 12, y: sz * 5, color: 'white'},
                {x: sz * 13, y: sz * 5, color: 'white'},
                //y7
                {x: sz * 8, y: sz * 6, color: 'white'},
                {x: sz * 9, y: sz * 6, color: 'white'},
                {x: sz * 10, y: sz * 6, color: 'white'},
                {x: sz * 11, y: sz * 6, color: 'white'},
                {x: sz * 12, y: sz * 6, color: 'white'},
                //y8
                {x: sz * 5, y: sz * 7, color: 'white'},
                {x: sz * 6, y: sz * 7, color: 'white'},
                {x: sz * 8, y: sz * 7, color: 'white'},
                {x: sz * 10, y: sz * 7, color: 'white'},
                {x: sz * 12, y: sz * 7, color: 'white'},
                {x: sz * 14, y: sz * 7, color: 'white'},
                {x: sz * 15, y: sz * 7, color: 'white'},
                //y9
                {x: sz * 6, y: sz * 8, color: 'white'},
                {x: sz * 14, y: sz * 8, color: 'white'},
                //y12
                {x: sz * 1, y: sz * 11, color: 'white'},
                {x: sz * 2, y: sz * 11, color: 'white'},
                {x: sz * 3, y: sz * 11, color: 'white'},
                {x: sz * 6, y: sz * 11, color: 'white'},
                {x: sz * 7, y: sz * 11, color: 'white'},
                {x: sz * 10, y: sz * 11, color: 'white'},
                {x: sz * 14, y: sz * 11, color: 'white'},
                {x: sz * 16, y: sz * 11, color: 'white'},
                {x: sz * 17, y: sz * 11, color: 'white'},
                {x: sz * 18, y: sz * 11, color: 'white'},
                {x: sz * 19, y: sz * 11, color: 'white'},
                //y13
                {x: sz * 0, y: sz * 12, color: 'white'},
                {x: sz * 5, y: sz * 12, color: 'white'},
                {x: sz * 8, y: sz * 12, color: 'white'},
                {x: sz * 10, y: sz * 12, color: 'white'},
                {x: sz * 11, y: sz * 12, color: 'white'},
                {x: sz * 13, y: sz * 12, color: 'white'},
                {x: sz * 14, y: sz * 12, color: 'white'},
                {x: sz * 16, y: sz * 12, color: 'white'},
                //y14
                {x: sz * 0, y: sz * 13, color: 'white'},
                {x: sz * 2, y: sz * 13, color: 'white'},
                {x: sz * 3, y: sz * 13, color: 'white'},
                {x: sz * 5, y: sz * 13, color: 'white'},
                {x: sz * 6, y: sz * 13, color: 'white'},
                {x: sz * 7, y: sz * 13, color: 'white'},
                {x: sz * 8, y: sz * 13, color: 'white'},
                {x: sz * 10, y: sz * 13, color: 'white'},
                {x: sz * 12, y: sz * 13, color: 'white'},
                {x: sz * 14, y: sz * 13, color: 'white'},
                {x: sz * 16, y: sz * 13, color: 'white'},
                {x: sz * 17, y: sz * 13, color: 'white'},
                {x: sz * 18, y: sz * 13, color: 'white'},
                //y15
                {x: sz * 0, y: sz * 14, color: 'white'},
                {x: sz * 3, y: sz * 14, color: 'white'},
                {x: sz * 5, y: sz * 14, color: 'white'},
                {x: sz * 8, y: sz * 14, color: 'white'},
                {x: sz * 10, y: sz * 14, color: 'white'},
                {x: sz * 14, y: sz * 14, color: 'white'},
                {x: sz * 16, y: sz * 14, color: 'white'},
                //y16
                {x: sz * 1, y: sz * 15, color: 'white'},
                {x: sz * 2, y: sz * 15, color: 'white'},
                {x: sz * 3, y: sz * 15, color: 'white'},
                {x: sz * 5, y: sz * 15, color: 'white'},
                {x: sz * 8, y: sz * 15, color: 'white'},
                {x: sz * 10, y: sz * 15, color: 'white'},
                {x: sz * 14, y: sz * 15, color: 'white'},
                {x: sz * 16, y: sz * 15, color: 'white'},
                {x: sz * 17, y: sz * 15, color: 'white'},
                {x: sz * 18, y: sz * 15, color: 'white'},
                {x: sz * 19, y: sz * 15, color: 'white'},
                //y18
                {x: sz * 1, y: sz * 17, color: 'white'},
                {x: sz * 2, y: sz * 17, color: 'white'},
                {x: sz * 5, y: sz * 17, color: 'white'},
                {x: sz * 9, y: sz * 17, color: 'white'},
                {x: sz * 11, y: sz * 17, color: 'white'},
                {x: sz * 12, y: sz * 17, color: 'white'},
                {x: sz * 13, y: sz * 17, color: 'white'},
                {x: sz * 14, y: sz * 17, color: 'white'},
                {x: sz * 16, y: sz * 17, color: 'white'},
                {x: sz * 17, y: sz * 17, color: 'white'},
                {x: sz * 18, y: sz * 17, color: 'white'},
                //y19
                {x: sz * 0, y: sz * 18, color: 'white'},
                {x: sz * 3, y: sz * 18, color: 'white'},
                {x: sz * 5, y: sz * 18, color: 'white'},
                {x: sz * 9, y: sz * 18, color: 'white'},
                {x: sz * 11, y: sz * 18, color: 'white'},
                {x: sz * 16, y: sz * 18, color: 'white'},
                {x: sz * 19, y: sz * 18, color: 'white'},
                //y20
                {x: sz * 0, y: sz * 19, color: 'white'},
                {x: sz * 3, y: sz * 19, color: 'white'},
                {x: sz * 5, y: sz * 19, color: 'white'},
                {x: sz * 9, y: sz * 19, color: 'white'},
                {x: sz * 11, y: sz * 19, color: 'white'},
                {x: sz * 12, y: sz * 19, color: 'white'},
                {x: sz * 13, y: sz * 19, color: 'white'},
                {x: sz * 16, y: sz * 19, color: 'white'},
                {x: sz * 17, y: sz * 19, color: 'white'},
                {x: sz * 18, y: sz * 19, color: 'white'},
                {x: sz * 19, y: sz * 19, color: 'white'},
                //y21
                {x: sz * 0, y: sz * 20, color: 'white'},
                {x: sz * 3, y: sz * 20, color: 'white'},
                {x: sz * 6, y: sz * 20, color: 'white'},
                {x: sz * 8, y: sz * 20, color: 'white'},
                {x: sz * 11, y: sz * 20, color: 'white'},
                {x: sz * 16, y: sz * 20, color: 'white'},
                {x: sz * 18, y: sz * 20, color: 'white'},
                //y22
                {x: sz * 1, y: sz * 21, color: 'white'},
                {x: sz * 2, y: sz * 21, color: 'white'},
                {x: sz * 7, y: sz * 21, color: 'white'},
                {x: sz * 11, y: sz * 21, color: 'white'},
                {x: sz * 12, y: sz * 21, color: 'white'},
                {x: sz * 13, y: sz * 21, color: 'white'},
                {x: sz * 14, y: sz * 21, color: 'white'},
                {x: sz * 16, y: sz * 21, color: 'white'},
                {x: sz * 19, y: sz * 21, color: 'white'},
            ];

            var counter = 0;

            var fps = 60;
            var now;
            var then = Date.now();
            var interval = 1000 / fps;
            var delta;

            function animate() {
                var Raf = requestAnimationFrame(animate);
                now = Date.now();
                delta = now - then;
                if (delta > interval) {
                    then = now - (delta % interval);
                    //ctx.clearRect(0,0,canvas.width,canvas.height);
                    if (counter < boxes.length) {
                        ctx.fillStyle = boxes[counter].color;
                        ctx.fillRect(boxes[counter].x, boxes[counter].y, sz, sz);
                        counter++;
                    } else {
                        cancelAnimationFrame(Raf);
                    }
                }
            }

            animate();

            /*------------------------------------------------------------------------------
            ------------------------------------------------------------------------------*/
        } else { // Canvas support
            console.log('Canvas is not supported !!!');
        }
    }
}
