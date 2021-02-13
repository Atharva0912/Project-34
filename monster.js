class Enemy
	{
		constructor(x,y,r)
		{
			var options={
				isStatic:true,
				}
			this.x=x;
			this.y=y;
			this.r=r;
			this.image=loadImage("images/Monster-01.png");
			this.body=Bodies.circle(this.x, this.y, this.r/2, options)
			World.add(world, this.body);
	

		}
		display()
		{
				var pos=this.body.position;		
				push()
				translate(pos.x, pos.y);
				fill(0);
				imageMode(CENTER);
				ellipseMode(RADIUS)
				image(this.image, 0,0,this.r*2, this.r*2)
				pop()
				
		}
	

	}

