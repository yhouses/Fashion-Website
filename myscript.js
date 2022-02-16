$(document).ready(function(){
	let status=["no","no","no","no","no","no","no","no","no","no","no","no","no","no","no"];
	for(let n=1; n<=15; n++)
	{
		$("#apple"+n).click (function() {
			
			if(status[n]=="no")
	
			{	
				$("#apple"+n).css("width", "140%");
			
			
		status[n]="yes";
			}
	
	else{
		$("#apple"+n).css("width", "90%");
		status[n]="no";
	}
			
		});
	}
	

  });