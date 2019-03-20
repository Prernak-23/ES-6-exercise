const user={
  firstName: 'Sahil',
  lastName: 'Dua',
  Address: {							
 	   Line1:'address line 1',
               Line2:'address line 1',
	    State: 'Delhi',
	    Pin: 110085,
 	   Country: 'India',
  	   City: 'New Delhi'
  	},
  phoneNo: 9999999999
};
											

const {Address: { Line1, Line2,State,Pin,Country,City}} = user;

document.write( "Line1: "+Line1 +"<br>"+ "Line2: " + Line2 + "<br>" +"State: " + State +"<br>"+ "Pin: " + Pin +"<br>"+ "Country: "+ Country +"<br>"+"City: "+ City );
