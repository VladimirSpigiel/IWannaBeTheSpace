function Mob(x,y,Size){
	
	var canvas = document.getElementById('Content');
	var context = canvas.getContext('2d');
	
	this.PixelSize =  Size ;

	
	
	this.type = Math.floor((Math.random()*3)+1);
	
	this.health = 100;
	
	
	
	this.width = 11*this.PixelSize;
	this.height = 8*this.PixelSize;
	this.x = x;
	this.y = y;
	this.dx = 0.2;
	this.dy = 0.6;
	this.touched = false;
        this.enTremblement = false;
	this.TremblementCompteur = 0;
	this.dx_tremblement = 0;
	this.dy_tremblement = 0;
        this.latest = false;
	
	this.PixelTouched = [];
	this.PixelTouched['Taille'] = 0;
	this.PixelTouched['Vitesse'] = 1;
	this.PixelTouched['Alpha'] = 1.0;
	this.color;
		
	
	this.Modal = function(){
		
		
			context.fillRect (this.x+2*this.PixelSize+this.dx_tremblement, this.y+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+8*this.PixelSize+this.dx_tremblement, this.y+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+1*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+7*this.PixelSize+this.dx_tremblement, this.y+1*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			for(var i=2;i<2+7;i++)
			context.fillRect (this.x+i*this.PixelSize+this.dx_tremblement, this.y+2*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			context.fillRect (this.x+1*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+2*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+8*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+9*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			for(var i=0; i<=10;i++)
			context.fillRect (this.x+i*this.PixelSize+this.dx_tremblement, this.y+4*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			for(var i=0; i<=10;i++){
				if(i!= 1 && i!= 9)
			context.fillRect (this.x+i*this.PixelSize+this.dx_tremblement, this.y+5*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			}
			
			context.fillRect (this.x+0*this.PixelSize+this.dx_tremblement, this.y+6*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+2*this.PixelSize+this.dx_tremblement, this.y+6*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+8*this.PixelSize+this.dx_tremblement, this.y+6*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+10*this.PixelSize+this.dx_tremblement, this.y+6*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+7*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+7*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+7*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			context.fillRect (this.x+7*this.PixelSize+this.dx_tremblement, this.y+7*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			
			// Barre de vie 
			if(this.health >=80){
				context.fillStyle = "#00FF00";
				context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+7*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			}
			
			if(this.health < 80 && this.health >=60){

				context.fillStyle = "#00FF00";
				context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect(this.x+7*this.PixelSize+this.dx_tremblement, this.x+9*this.PixelSize+this.dy_tremblement, this.PixelSize, this.PixelSize);

			}
			
			if(this.health < 60 && this.health >=40){

				context.fillStyle = "#00FF00";
				context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect(this.x+7*this.PixelSize+this.dx_tremblement, this.x+9*this.PixelSize+this.dy_tremblement, this.PixelSize, this.PixelSize);

			}
			
			if(this.health < 40 && this.health >=20){

				context.fillStyle = "#FF9900";
				context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect(this.x+7*this.PixelSize+this.dx_tremblement, this.x+9*this.PixelSize+this.dy_tremblement, this.PixelSize, this.PixelSize);

			}
			
			if(this.health < 20){

				context.fillStyle = "#F00";
				context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.clearRect(this.x+7*this.PixelSize+this.dx_tremblement, this.x+9*this.PixelSize+this.dy_tremblement, this.PixelSize, this.PixelSize);

			}
			
			
				
			
			
			for(var i=3;i<=7;i++)
			context.strokeRect (this.x+i*this.PixelSize+this.dx_tremblement, this.y+9*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
		}
	
	
	this.Draw = function(){
		
			
			
			
			context.beginPath(); //On démarre un nouveau tracé.
			if(this.type == 1){
				this.color = "#AAA";
			context.fillStyle = this.color;
			context.strokeStyle = "#808080";
			
			this.Modal();
			}
			
			if(this.type == 2){
				
				this.color = "#006171";
				
				context.fillStyle = this.color;
				context.strokeStyle = "#808080";
				
				this.Modal();
				
				context.fillStyle = "#000";			
				context.fillRect (this.x+2*this.PixelSize+this.dx_tremblement, this.y+0*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+8*this.PixelSize+this.dx_tremblement, this.y+0*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+3*this.PixelSize+this.dx_tremblement, this.y+1*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+7*this.PixelSize+this.dx_tremblement, this.y+1*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+2*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+2*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				
				context.fillRect (this.x+4*this.PixelSize+this.dx_tremblement, this.y+5*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+5*this.PixelSize+this.dx_tremblement, this.y+5*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				context.fillRect (this.x+6*this.PixelSize+this.dx_tremblement, this.y+5*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			}
			
			if(this.type == 3){
				
				this.color = "#F3C100";
				context.fillStyle = this.color;
				context.strokeStyle = "#808080";
				
				
			
				this.Modal();
				
				context.fillStyle = "#000";	
				
				for(var i = 1;i<=9;i++)
				context.fillRect (this.x+i*this.PixelSize+this.dx_tremblement, this.y+3*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
				
				for(var i = 2;i<=8;i++)
				if(i != 5)
				context.fillRect (this.x+i*this.PixelSize+this.dx_tremblement, this.y+4*this.PixelSize+this.dy_tremblement, this.PixelSize, -this.PixelSize);
			
			}
			this.Tremblement();
                        
                        
			context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
			context.stroke();
			context.closePath();
			
			
		}
		
		this.Update = function(){
			this.y += this.dy;	
                        
			this.Touched();
		}
		
		
		this.collisionLimite = function(){
			if(this.y + this.height > canvas.height)
				return true;
			
			}
		
		this.Touched = function(){
			if(this.touched){
					
					this.PixelTouched['Taille']++;
					this.PixelTouched['Vitesse']+=2;
					
					
					if(this.PixelTouched['Taille'] <= 20){
						
					context.fillStyle = this.color;
					
					if(this.PixelTouched['Taille'] % 5 == 0)
					{
						if(this.PixelTouched['Alpha'] > 0.0)
								this.PixelTouched['Alpha']-=0.25;
								
								console.log(this.PixelTouched['Alpha']);
					}
					
					//if(this.PixelTouched['Alpha'] <= 0.0)
					
						
					context.globalAlpha=this.PixelTouched['Alpha'];
					
					
					context.fillRect (this.x+2*this.PixelSize-this.PixelTouched['Vitesse'], 
									  this.y+6*this.PixelSize+this.PixelTouched['Vitesse'],
									  this.PixelSize, 
									  -this.PixelSize);
									  
					context.fillRect (this.x+8*this.PixelSize+this.PixelTouched['Vitesse'], 
									  this.y+6*this.PixelSize+this.PixelTouched['Vitesse'],
									  this.PixelSize, 
									  -this.PixelSize);
									  
					context.fillRect (this.x+8*this.PixelSize+this.PixelTouched['Vitesse'], 
									  this.y+2*this.PixelSize-this.PixelTouched['Vitesse'],
									  this.PixelSize, 
									  -this.PixelSize);
									  
					context.fillRect (this.x+2*this.PixelSize-this.PixelTouched['Vitesse'], 
									  this.y+2*this.PixelSize-this.PixelTouched['Vitesse'],
									  this.PixelSize, 
									  -this.PixelSize);
									  
					  //this.PixelTouched['Alpha'] = 1.0;
					context.globalAlpha=1.0;			  
									  
					}
					else{
						this.touched = false;
						this.PixelTouched['Alpha'] = 1.0;
						this.PixelTouched['Taille'] = 0;
						this.PixelTouched['Vitesse'] = 1;
					}
				}
		}
                
                
          this.Tremblement = function(){
              if(this.enTremblement){
                if(this.TremblementCompteur <= 7)
                          this.TremblementCompteur +=0.1;
                          this.dx_tremblement = Math.floor((Math.random()*this.TremblementCompteur)+1);
                          this.dy_tremblement = Math.floor((Math.random()*this.TremblementCompteur)+1);
              }
              if(!this.enTremblement){
                  if(this.TremblementCompteur > 0){
			this.TremblementCompteur -=0.1;
                        if(this.TremblementCompteur != 0){
                            this.dx_tremblement = Math.floor((Math.random()*this.TremblementCompteur)+1);
                            this.dy_tremblement = Math.floor((Math.random()*this.TremblementCompteur)+1); 
                        }
                        else{
                            this.dx_tremblement=0;
                            this.dy_tremblement=0;
                        }
                            
                  } 
              }
          }
	
}