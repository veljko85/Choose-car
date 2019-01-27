
function findBrand(brand){
		switch (brand)	{
		
		case "audi":
		document.getElementById("mercedesBrand").style.display = "none";
		document.getElementById("peugeotBrand").style.display = "none";
		document.getElementById("opelBrand").style.display = "none";
		break;

		case "mercedes":
		document.getElementById("peugeotBrand").style.display = "none";
		document.getElementById("opelBrand").style.display = "none";
		document.getElementById("audiBrand").style.display = "none";
		break;

		case "peugeot":
		document.getElementById("mercedesBrand").style.display = "none";
		document.getElementById("opelBrand").style.display = "none";
		document.getElementById("audiBrand").style.display = "none";
		break;

		case "opel":
		document.getElementById("mercedesBrand").style.display = "none";
		document.getElementById("peugeotBrand").style.display = "none";
		document.getElementById("audiBrand").style.display = "none";
		break;

		default:
		document.getElementById("mercedesBrand").style.display = "none";
		document.getElementById("peugeotBrand").style.display = "none";
		document.getElementById("opelBrand").style.display = "none";
		document.getElementById("audiBrand").style.display = "none";
		document.getElementById("price").innerHTML = "";
		document.getElementById("year").innerHTML = "";
		document.getElementById("image").src = "";
		document.getElementById("brandModel").innerHTML = "";
		document.getElementById("fuel").innerHTML = "";
		document.getElementById("numOfSeats").innerHTML = "";
	}


	document.getElementById(brand + "Brand").style.display = "block";
}

function findModel(model){

	switch	(model)	{

		case "Audi A1":
			document.getElementById("price").innerHTML = "Price: 7.500 euros";
			document.getElementById("year").innerHTML = "Year: 2012";
			break;

		case "Audi A2":
			document.getElementById("price").innerHTML = "Price: 4.700 euros";
			document.getElementById("year").innerHTML = "Year: 2012";
			break;

		case "Audi A4":
			document.getElementById("price").innerHTML = "Price: 12.000 euros";
			document.getElementById("year").innerHTML = "Year: 2015";
			break;

		case "Audi A6":
			document.getElementById("price").innerHTML = "Price: 14.500 euros";
			document.getElementById("year").innerHTML = "Year: 2014";
			break;

		case "Mercedes A Class":
			document.getElementById("price").innerHTML = "Price: 5.200 euros";
			document.getElementById("year").innerHTML = "Year: 2010";
			break;

		case "Mercedes B Class":
			document.getElementById("price").innerHTML = "Price: 6.300 euros";
			document.getElementById("year").innerHTML = "Year: 2012";
			break;

		case "Mercedes C Class":
			document.getElementById("price").innerHTML = "Price: 13.500 euros";
			document.getElementById("year").innerHTML = "Year: 2014";
			break;

		case "Mercedes E Class":
			document.getElementById("price").innerHTML = "Price: 16.800 euros";
			document.getElementById("year").innerHTML = "Year: 2015";
			break;

		case "Peugeot 206":
			document.getElementById("price").innerHTML = "Price: 2.500 euros";
			document.getElementById("year").innerHTML = "Year: 2007";
			break;

		case "Peugeot 307":
			document.getElementById("price").innerHTML = "Price: 3.500 euros";
			document.getElementById("year").innerHTML = "Year: 2006";
			break;

		case "Peugeot 407":
			document.getElementById("price").innerHTML = "Price: 7.800 euros";
			document.getElementById("year").innerHTML = "Year: 2009";
			break;

		case "Peugeot 607":
			document.getElementById("price").innerHTML = "Price: 10.500 euros";
			document.getElementById("year").innerHTML = "Year: 2013";
			break;

		case "Opel Corsa":
			document.getElementById("price").innerHTML = "Price: 4.500 euros";
			document.getElementById("year").innerHTML = "Year: 2010";
			break;

		case "Opel Astra":
			document.getElementById("price").innerHTML = "Price: 7.300 euros";
			document.getElementById("year").innerHTML = "Year: 2011";
			break;

		case "Opel Zafira":
			document.getElementById("price").innerHTML = "Price: 7.800 euros";
			document.getElementById("year").innerHTML = "Year: 2012";
			break;

		case "Opel Insignia":
			document.getElementById("price").innerHTML = "Price: 13.100 euros";
			document.getElementById("year").innerHTML = "Year: 2014";
			break;

		default:
			document.getElementById("brandModel").innerHTML = "No Car Selected"

	}
	
	document.getElementById("image").src = "img/" + model + ".jpg";

	document.getElementById("brandModel").innerHTML = model;

	if (model == "Audi A1" || model == "Audi A4" || model == "Mercedes C Class" || model == "Mercedes E Class" || model == "Peugeot 407" || model == "Opel Insignia") {
		document.getElementById("fuel").innerHTML = "Fuel: Diesel";
	}
	else {
		document.getElementById("fuel").innerHTML = "Fuel: Petrol";
	}

	if (model == "Audi A4" || model == "Audi A6" || model == "Mercedes B Class" || model == "Mercedes E Class" || model == "Peugeot 407" || model == "Peugeot 607" || 
	model == "Opel Insignia" || model == "Opel Zafira") {
		document.getElementById("numOfSeats").innerHTML = "Num. of seats: 5";
	}
	else	{
		document.getElementById("numOfSeats").innerHTML = "Num. of seats: 4";
	}

}


