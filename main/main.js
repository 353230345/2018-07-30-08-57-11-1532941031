module.exports = function main(data) {
	var obj={0:'._.'+'\n'+'|.|'+'\n'+'|_|',1:'...'+'\n'+'..|'+'\n'+'..|',2:'._.'+'\n'+'._|'+'\n'+'|_.',
	3:'._.'+'\n'+'._|'+'\n'+'._|',4:'...'+'\n'+'|_|'+'\n'+'..|',5:'._.'+'\n'+'|_.'+'\n'+'._|',
	6:'._.'+'\n'+'|_.'+'\n'+'|_|',7:'._.'+'\n'+'..|'+'\n'+'..|',8:'._.'+'\n'+'|_|'+'\n'+'|_|',
	9:'._.'+'\n'+'|_|'+'\n'+'..|'};
	if(data>=0&&data<10){
		var a=data%10;
		conlog.(obj.a);
	}else if(data<100){
		var a=(data/10)%10;
		var b=data%10;
		conlog.(obj.a);
		conlog.(obj.b);
	}else if(data<1000){
		var a=data/100;
	    var b=(data/10)%10;
	    var c=data%10;
        conlog.(obj.a);
        conlog.(obj.b);
        conlog.(obj.c);
	}else{
		break;
	}
  
};


