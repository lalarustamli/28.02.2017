function chess (tableWidth, tableHeight,rowCount,blackCount,whiteCount){
	document.write('<table style="margin: 0 auto; border: 10px double black; box-sizing: border-box;width:'+tableWidth+'px; height:'+tableHeight+'px">')
	for ( var k = 0; k<rowCount; k++) {
		document.write('<tr>')
		if (k % 2 == 0) {
			for(j=0; j<whiteCount; j++){
			document.write('<td class="white" style="border: 1px solid grey;background:white; width:'+tableWidth/whiteCount+'px";height='+tableWidth/whiteCount+'px">')
			document.write('<td class="black" style="border: 1px solid grey;background:black;width:'+tableWidth/blackCount+'px";height='+tableWidth/blackCount+'px">')}
			
		}
		else{
		for (i=0; i<blackCount; i++) {
		document.write('<td class="black" style="border: 1px solid grey;background:black;width:'+tableWidth/blackCount+'px";height='+tableWidth/blackCount+'px">')
		document.write('<td class="white" style="border: 1px solid grey;background:white;width:'+tableWidth/whiteCount+'px";height='+tableWidth/whiteCount+'px">')
		

	}
		}
		
		
	}
	
		


}
chess(560,560,8,4,4)