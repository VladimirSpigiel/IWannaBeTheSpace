function Vaisseau(type,dx,dy){
	
		var canvas = document.getElementById('Content');
	var context = canvas.getContext('2d');
	
	this.type = type;
	this.width = 0;
	this.height = 0;
	if(type == 1){
			this.width = 70;
			this.height = 32;
	}
	if(type == 2){
			this.width = 105;
			this.height = 77;
	}
	

	this.dx = dx;
	this.dy = dy;
	this.touched = false;
	
	this.PixelSize = 10;
	this.PixelTouched = [];
	this.PixelTouched['Taille'] = 0;
	this.PixelTouched['Vitesse'] = 1;
	this.PixelTouched['Alpha'] = 1.0;
	this.color = "#AAA";
	

	
	
	this.size = 50;
	
	this.droite = false;
	this.gauche = false;
	this.tir = false;

	this.x = canvas.width/2 - this.width/2;
	this.y = canvas.height- this.height - 10;
	
	this.health = 100;
	
	this.image = new Image();
	this.image.src = "img/burst.png";
	this.imageFinalY = this.y + this.size + 5;
	this.imageY = this.imageFinalY
	this.imageDY = 0;
	
	
	
	this.Draw = function(){
		
                $('.v_life').html(this.health);
			
		var Xpixels = 0;
		var Ypixels = 0;
			
			if(type == 1){
			context.beginPath(); //On démarre un nouveau tracé.
			context.fillStyle = "#FFF";
			context.strokeStyle = "#808080";
				
				context.fillRect (this.x+30, this.y, 10, -10);
				context.strokeRect (this.x+30, this.y, 10, -10);
				
				context.fillRect (this.x+20, this.y+8, 10, -10);
				context.strokeRect (this.x+20, this.y+8, 10, -10);
				
				context.fillRect (this.x+40, this.y+8, 10, -10);
				context.strokeRect (this.x+40, this.y+8, 10, -10);
				
				context.fillRect (this.x+10, this.y+16, 10, -10);
				context.strokeRect (this.x+10, this.y+16, 10, -10);
				
				context.fillRect (this.x+50, this.y+16, 10, -10);
				context.strokeRect (this.x+50, this.y+16, 10, -10);
				
				context.fillRect (this.x, this.y+24, 10, -10);
				context.strokeRect (this.x, this.y+24, 10, -10);
				
				context.fillRect (this.x+60, this.y+24, 10, -10);
				context.strokeRect (this.x+60, this.y+24, 10, -10);
			
			
				
			
			
			
			context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
			context.stroke();
			context.closePath();	
			
			Xpixels = 0;	
			Ypixels = 0;	
			}
			
			if(type == 2){
				
				context.beginPath(); //On démarre un nouveau tracé.
			context.fillStyle = "#000";
			context.strokeStyle = "#808080";
			
			var PixelSize = 7;
			
			context.drawImage(this.image, this.x +  this.size/2 + 2  , this.imageY, this.size, this.size);
			
			context.fillRect (this.x+7*PixelSize, this.y, PixelSize, -PixelSize);
				//context.strokeRect (this.x+70, this.y, 10, -10);
				
				context.fillRect (this.x+6*PixelSize, this.y+PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+60, this.y+10, 10, -10);
				
				context.fillStyle = "#00CCFF";
				context.fillRect (this.x+7*PixelSize, this.y+PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+70, this.y+10, 10, -10);
				context.fillStyle = "#000";
				
				context.fillRect (this.x+8*PixelSize, this.y+PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+80, this.y+10, 10, -10);
				
				context.fillRect (this.x+5*PixelSize, this.y+2*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+50, this.y+20, 10, -10);
				
				context.fillRect (this.x+6*PixelSize, this.y+2*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+60, this.y+20, 10, -10);
				
				context.fillStyle = "#00CCFF";
				context.fillRect (this.x+7*PixelSize, this.y+2*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+70, this.y+20, 10, -10);
				context.fillStyle = "#000";
				
				context.fillRect (this.x+9*PixelSize, this.y+2*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+90, this.y+20, 10, -10);
				
				context.fillRect (this.x+8*PixelSize, this.y+2*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+80, this.y+20, 10, -10);
				
				context.fillRect (this.x+4*PixelSize, this.y+3*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+40, this.y+30, 10, -10);
				
				context.fillRect (this.x+7*PixelSize, this.y+3*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+70, this.y+30, 10, -10);
				
				context.fillRect (this.x+10*PixelSize, this.y+3*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+100, this.y+30, 10, -10);
				
				context.fillRect (this.x+3*PixelSize, this.y+4*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+30, this.y+40, 10, -10);
				
				context.fillRect (this.x+11*PixelSize, this.y+4*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+110, this.y+40, 10, -10);
				
				context.fillRect (this.x+2*PixelSize, this.y+5*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+20, this.y+50, 10, -10);
				
				context.fillRect (this.x+12*PixelSize, this.y+5*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+120, this.y+50, 10, -10);
				
				context.fillRect (this.x+1*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+10, this.y+60, 10, -10);
				
				context.fillRect (this.x+4*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+40, this.y+60, 10, -10);
				
				context.fillRect (this.x+10*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+100, this.y+60, 10, -10);
				
				context.fillRect (this.x+13*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+130, this.y+60, 10, -10);
				
				context.fillRect (this.x, this.y+7*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x, this.y+70, 10, -10);
				
				context.fillRect (this.x+3*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+30, this.y+70, 10, -10);
				
				context.fillRect (this.x+5*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+50, this.y+70, 10, -10);
				
				context.fillRect (this.x+9*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+90, this.y+70, 10, -10);
				
				context.fillRect (this.x+11*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+110, this.y+70, 10, -10);
				
				context.fillRect (this.x+14*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+140, this.y+70, 10, -10);
				
				context.fillRect (this.x, this.y+8*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x, this.y+80, 10, -10);
				
				context.fillRect (this.x+2*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+20, this.y+80, 10, -10);
				
				context.fillRect (this.x+5*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+50, this.y+80, 10, -10);
				
				context.fillRect (this.x+9*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+90, this.y+80, 10, -10);
				
				context.fillRect (this.x+12*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+120, this.y+80, 10, -10);
				
				context.fillRect (this.x+14*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+140, this.y+80, 10, -10);
				
				context.fillRect (this.x+1*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+10, this.y+90, 10, -10);
				
				context.fillRect (this.x+4*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+40, this.y+90, 10, -10);
				
				context.fillRect (this.x+6*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+60, this.y+90, 10, -10);
				
				context.fillRect (this.x+7*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+70, this.y+90, 10, -10);
				context.fillRect (this.x+8*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+80, this.y+90, 10, -10);
				context.fillRect (this.x+10*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				
				context.fillRect (this.x+13*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+100, this.y+90, 10, -10);
				
				context.fillRect (this.x+4*PixelSize, this.y+10*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+40, this.y+100, 10, -10);
				
				context.fillRect (this.x+6*PixelSize, this.y+10*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+60, this.y+100, 10, -10);
				
				context.fillStyle = "#FF9900";
				context.fillRect (this.x+7*PixelSize, this.y+10*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+70, this.y+100, 10, -10);
				context.fillStyle = "#000";
				
				context.fillRect (this.x+8*PixelSize, this.y+10*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+80, this.y+100, 10, -10);
				context.fillRect (this.x+10*PixelSize, this.y+10*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+100, this.y+100, 10, -10);
				
				context.fillRect (this.x+5*PixelSize, this.y+11*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+50, this.y+110, 10, -10);
				
				context.fillStyle = "#FF9900";
				context.fillRect (this.x+6*PixelSize, this.y+11*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+60, this.y+110, 10, -10);
				
				context.fillRect (this.x+8*PixelSize, this.y+11*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+80, this.y+110, 10, -10);
				
				context.fillStyle = "#000";
				context.fillRect (this.x+9*PixelSize, this.y+11*PixelSize, PixelSize, -PixelSize);
				
				
				context.fillStyle = "#AAA";
				
				
				context.fillRect (this.x+5*PixelSize, this.y+3*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+6*PixelSize, this.y+3*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+8*PixelSize, this.y+3*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+9*PixelSize, this.y+3*PixelSize, PixelSize, -PixelSize);
				
				for(var i = 4;i<11;i++)
				context.fillRect (this.x+i*PixelSize, this.y+4*PixelSize, PixelSize, -PixelSize);
				
				for(var i = 3;i<12;i++)
				context.fillRect (this.x+i*PixelSize, this.y+5*PixelSize, PixelSize, -PixelSize);
				
				context.fillRect (this.x+2*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+3*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+11*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+12*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);
				for(var i = 5; i < 10;i++)
				context.fillRect (this.x+i*PixelSize, this.y+6*PixelSize, PixelSize, -PixelSize);

				
				context.fillRect (this.x+1*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+2*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+6*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+7*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+8*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+12*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+13*PixelSize, this.y+7*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+6*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+7*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+8*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+1*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+13*PixelSize, this.y+8*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+5*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+9*PixelSize, this.y+9*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+5*PixelSize, this.y+10*PixelSize, PixelSize, -PixelSize);
				context.fillRect (this.x+9*PixelSize, this.y+10*PixelSize, PixelSize, -PixelSize);
				//context.strokeRect (this.x+90, this.y+110, 10, -10);
			
			context.fill(); //On utilise la méthode fill(); si l'on veut une forme pleine
			context.stroke();
			
			
			
			context.closePath();	
				
				this.Touched();
				
			}
		}
		
		this.Update = function(){
			
			
			
				if(this.droite)
					if(this.x < canvas.width - this.width)
						this.x += this.dx;
						
				if(this.gauche)
					if(this.x > 0)
						this.x -= this.dx;
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
}