var canvas = document.getElementById("myCanvas");
	//alert(typeof(canvas));
	var ctx = canvas.getContext("2d");
	
	
	
	ctx.strokeStyle = 'black';
	ctx.font = "20px Arial";
	for(i=0;i<400;i=i+50)
	{
	ctx.strokeRect(0,i,50,50);
	}
	
	for(i=50;i<600;i=i+50)
	{
	ctx.strokeRect(i,350,50,50);
	}
	
	for(i=300;i>=0;i=i-50)
	{
	ctx.strokeRect(350,i,50,50);
	}
	
	for(i=50;i<250;i=i+50)
	{
	ctx.strokeRect(i,0,50,50);
	}
	
	for(i=50;i<350;i=i+50)
	{
	ctx.strokeRect(i,175,50,50);
	}
	
	
	ctx.fillStyle = "#0FF8F7";
	ctx.fillRect(0,0,50,100);
	ctx.fillRect(350,300,50,100);
	
	
	
	
	ctx.fillStyle = "#000000";
	for(i=0;i<8;i++)
	{
		ctx.fillText(i+1, 20, 130+(i*50));
	}
	
	for(i=0;i<6;i++)
	{
		ctx.fillText(7+i, 70+(i*50), 30+(7*50));
	}
	
	for(i=0;i<6;i++)
	{
		ctx.fillText(13+i, 370, 280-(i*50));
	}
	for(i=0;i<4;i++)
	{
		ctx.fillText(i+18, 60+(i*50), 30);
	}
	for(i=0;i<6;i++)
	{
		ctx.fillText(i+22, 65+(i*50), 210);
	}
	
	ctx.fillText("Entry",280,30);