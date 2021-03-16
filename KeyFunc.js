function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-100});
	}
}