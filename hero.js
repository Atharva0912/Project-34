class Hero
	{
		constructor(x,y,r)
		{
			var options={
				isStatic:false,
				friction:0,
				density:0.1
				}
			this.x=x;
			this.y=y;
			this.r=r
			this.image=loadImage("Superhero-01.png");
			this.body=Bodies.circle(this.x, this.y, this.r/2, options)
			World.add(world, this.body);
	

		}
		display()
		{
				var polygonpos=this.body.position;		
				push()
				translate(polygonpos.x, polygonpos.y);
				fill(0);
				imageMode(CENTER);
				ellipseMode(RADIUS)
				image(this.image, 0,0,this.r*2, this.r*2)
				pop()
				
		}
	

	}


  