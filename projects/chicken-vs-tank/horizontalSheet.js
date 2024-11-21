function horizontalSheet(i,indexImage,x,y,v,Vx,Vy,jumping,grounded,ticsParImage,nbImages,L,H,xDebut,contexte,sheet) 
{
	//variables
	this.i = 0;
	this.indexImage = 0;
	//proprietes
	this.x=x;//coord sur le canevas
	this.y=y;
	this.v=v;
	this.Vx=Vx;
	this.Vy=Vy;
	this.jumping=jumping;
	this.grounded=grounded;
	this.ticsParImage = ticsParImage;//durée sur une sheet
	this.nbImages = nbImages;
	this.L = L;
	this.H = H;
	this.xDebut=xDebut;
	this.contexte = contexte;
	this.sheet = sheet;
		
	//1 methode
	this.afficher = function ()
	{
		if (this.i > this.ticsParImage) 
		{
			this.i=0;
			
			// If the current frame index is in range
			if (this.indexImage < this.nbImages - 1) 
			{	
				// Go to the next frame
				this.indexImage += 1;
			} else 
			{
				this.indexImage = 0;
			}
		}
		this.contexte.drawImage(this.sheet,this.xDebut+this.indexImage * this.H, 0, this.L,this.H,this.x,this.y,this.L,this.H);
		this.i += 1;
	};		
}
