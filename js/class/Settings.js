function Settings(){
	this.typeMissile = 1;
	this.vitesseMissile = 15;
	this.maxTypeMissile = 3;
	this.mobSize = 6;
	
	this.OffsetMob = 0;
	
	if(this.mobSize == 1 || this.mobSize == 2)
		this.OffsetMob = 1.5;
	else if(this.mobSize ==3)
		this.OffsetMob = 3.5;
	else if(this.mobSize == 4 || this.mobSize == 5)
		this.OffsetMob = 2.5;
	else if (this.mobSize == 6)
		this.OffsetMob = 1;
}