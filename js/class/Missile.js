function Missile(type,dx,dy,vaisseau){
	
			var canvas = document.getElementById('Content');
	var context = canvas.getContext('2d');
	
	this.type  = type;
	this.image = new Image();
	this.size = 0;
	this.offset = 20;
	this.puissance = 0;
	this.dx = dx;
	this.dy = dy;
	this.image.src = "img/particle"+this.type+".png";
	
	if(this.type == 1 ){
		
	
		this.size = 20;
		this.puissance = 5;
		
		}
	if(this.type == 2 ){
		
	
		this.size = 30;
		this.puissance = 7;
		
		
		}
	if(this.type == 3 ){
		
	
		this.size = 40;
		this.puissance = 10;
		
		
		}
		
	if(this.type == 4){
		this.size = 20;
		this.puissance = 5;	
	}
		
	this.x = vaisseau.x + (vaisseau.width/2) - this.size / 2;
	this.y = vaisseau.y  - this.offset;
	
	
	this.Draw = function(){
		if(this.type == 5){
			if(this.size <= vaisseau.width*4)
			this.size+=10;
			
			this.y = vaisseau.y - this.size/2.5;
			this.x = vaisseau.x + (vaisseau.width/2) - this.size/2;
			
			
		}
			//context.drawImage(this.image, 100, 5);
			context.drawImage(this.image, this.x  , this.y, this.size, this.size);
		}
		
	this.Update = function(){
			this.y -= this.dy;
			this.x -= this.dx;
			
			
			
		}
		
	this.collisionEnnemi = function(mob){
			
			if(this.y < mob.y+mob.height 
			&& this.y > mob.y
			&& this.x < mob.x+mob.width 
			&& this.x+this.size > mob.x){
				
					mob.touched = true;
					mob.health -= this.puissance;
					
					return true;
				}
				
			
				
			
		}
		
	this.collisionLimite = function(){
		
			if(this.y+this.size < 0)
				return true;
				
			if(this.x <=0)
				this.dx = - this.dx;
				
			if(this.x+this.size >= canvas.width)
				this.dx = - this.dx;
		}
	
		
}


function MissileMob(type,dx,dy,mob){
	
			var canvas = document.getElementById('Content');
	var context = canvas.getContext('2d');
	
	this.type  = type;
	this.image = new Image();
	this.size = 20;
	this.offset = 20;
	this.puissance = 5;
	this.dx = dx;
	this.dy = dy;
	this.image.src = "img/particle"+4+".png";
	
	
		
	this.x = mob.x + (mob.width/2) - this.size / 2;
	this.y = mob.y  + mob.height;
	
	
	this.Draw = function(){
			//context.drawImage(this.image, 100, 5);
			context.drawImage(this.image, this.x  , this.y, this.size, this.size);
		}
		
	this.Update = function(){
			this.y += this.dy;
			this.x += this.dx;
			
			
			
		}
		
	this.collisionVaisseau = function(vaisseau){
			
			if(this.y < vaisseau.y+vaisseau.height 
			&& this.y+this.size > vaisseau.y
			&& this.x < vaisseau.x+vaisseau.width 
			&& this.x+this.size > vaisseau.x){
				
					vaisseau.touched = true;
					vaisseau.health -= this.puissance;
					
					return true;
				}
				
			
				
			
		}
		
	this.collisionLimite = function(){
		
			if(this.y+this.size > canvas.height+this.size)
				return true;
				
		
		}
                
        this.collisionBouclier = function(bouclier){
            
                        
                    if(this.y < bouclier.y+bouclier.rayon 
                    && this.y+this.size > bouclier.y-bouclier.rayon
                    && this.x > bouclier.x 
                    && this.x+this.size < bouclier.x+bouclier.rayon*2+5){
                
                         bouclier.health -= this.puissance;
                          
                         return true;
                    }
                      
                       
                           console.log(bouclier.health);
                          
        }
        
         this.collisionRepulsor = function(repulsor){
            
                        
                    if(this.y < repulsor.y+repulsor.rayon 
                    && this.y+this.size > repulsor.y-repulsor.rayon
                    && this.x > repulsor.x 
                    && this.x+this.size < repulsor.x+repulsor.rayon*2+5){
                
                            
                            if(this.x > repulsor.x + repulsor.rayon)
                                this.dx = 4
                            
                            else
                                this.dx = -4
                            
                            
                            this.dy= -this.dy;   
                         
                         return this;
                    }
                      
                       
                           
                          
        }
	
		
}
