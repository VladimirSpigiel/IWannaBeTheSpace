function Repulsor(vaisseau){
	
				var canvas = document.getElementById('Content');
	var context = canvas.getContext('2d');
	
	this.image = new Image();
	this.size = 0;
	this.offset = 20;
	
	this.image.src = "img/particle"+5+".png";
	
	this.size = 60;
	this.puissance = 3;
	this.health = 100;
        this.rayon = 0;
        this.pixelSize = 8;
	
	this.x = vaisseau.x + (vaisseau.width/2) - this.size / 2;
	this.y = vaisseau.y  - this.offset;
	var ang = 0;

        var cache = this; //cache the local copy of image element for future reference
    
	
	this.Draw = function(){
             if(this.rayon < 100)
                    this.rayon += 10;
            
            this.x = vaisseau.x + (vaisseau.width/2) - this.rayon;
            this.y = vaisseau.y + vaisseau.width/2;
		
                        context.beginPath();
			
                        context.arc(this.x+this.rayon, this.y, this.rayon, 0, Math.PI*2); //On trace la courbe délimitant notre forme
                        context.lineWidth = 5;	
                        context.strokeStyle="#000";
                        context.stroke();
                         context.lineWidth = 1;

			context.closePath();
		
		}	
	
	
}