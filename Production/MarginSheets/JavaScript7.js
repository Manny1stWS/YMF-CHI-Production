var rIndex,
	table = document.getElementById("table");

function addHtmlTableRow() 
	{
		var newRow = table.insertRow(table.length),
			cell1 = newRow.insertCell(0),
			cell2 = newRow.insertCell(1),
			cell3 = newRow.insertCell(2),
			cell4 = newRow.insertCell(3),
			cell5 = newRow.insertCell(4),
			cell6 = newRow.insertCell(5),
			cell7 = newRow.insertCell(6),
			cell8 = newRow.insertCell(7),
			cell9 = newRow.insertCell(8),
			cell10 = newRow.insertCell(9),
			cell11 = newRow.insertCell(10),
			cell12 = newRow.insertCell(11),
			cell13 = newRow.insertCell(12),
			cell14 = newRow.insertCell(13),
			cell15 = newRow.insertCell(14),

			customer = document.getElementById("customer").value,
			poType = document.getElementById("poType").value,
			brand = document.getElementById("brand").value,
			ports = document.getElementById("ports").value,
			buyCommission = document.getElementById("buyCommission").value,
			poNo = document.getElementById("poNo").value;
				if (!poNo) {
					alert('ENTER PO NUMBER');
					let table1 = document.getElementById("table1"), colorChange5 ='';

					for (var i = 0; i < table.rows.length; i++)
					{
						colorChange5 = (table.rows[i].cells[5]);
					}
						colorChange5.style.background="red";
				};

			styleDescription = document.getElementById("styleDescription").value;
				if (!styleDescription) {
					alert('ENTER DESCRIPTION');
					let table1 = document.getElementById("table1"), colorChange6 ='';

					for (var i = 0; i < table.rows.length; i++)
					{
						colorChange6 = (table.rows[i].cells[6]);
					}
						colorChange6.style.background="red";
				};

			containerSqm = document.getElementById("containerSqm").value;
			skuSqm = document.getElementById("skuSqm").value;
			pricePerSqm = document.getElementById("pricePerSqm").value;
			dutyPercent = document.getElementById("dutyPercent").value;
			oceanFreight = document.getElementById("oceanFreight").value;
			sellPrice = document.getElementById("sellPrice").value;

			LDP = '';
				if (poType === "STOCK") {

				LDP = ((((pricePerSqm * 100 - 150) * skuSqm * 1000) / 100000) + (((parseInt(pricePerSqm * 100 - 150)) * (skuSqm * 1000)) * 
				(dutyPercent * 100) / 1000000000) + (150 * skuSqm * 1000 / 100000) + ((parseInt(oceanFreight) + 500) / containerSqm * skuSqm));

				} else if (poType === "POE") {

				LDP = ((((pricePerSqm * 100 - 150) * skuSqm * 1000) / 100000) + (((parseInt(pricePerSqm * 100 - 150)) * (skuSqm * 1000)) * 
				(dutyPercent * 100) / 1000000000) + (150 * skuSqm * 1000 / 100000) + (oceanFreight / containerSqm * skuSqm));

				} else if (poType === "MDDP") {

				LDP = ((((pricePerSqm * 100 - 150) * skuSqm * 1000) / 100000) + (((parseInt(pricePerSqm * 100 - 150)) * (skuSqm * 1000)) * 
				(dutyPercent * 100) / 1000000000) + (150 * skuSqm * 1000 / 100000));

				} else if (poType === "DI") {

				LDP = ((((pricePerSqm * 100) * skuSqm * 1000) / 100000));

				};

			margin = '';
			if (brand === "YMF") {
				margin = (((sellPrice * 100) - (LDP * 100)) / sellPrice)
			} else if (brand !== "YMF") {
				margin = (((sellPrice * 100) - (sellPrice * 10) - (LDP * 100)) / sellPrice)
			} else if (!sellPrice) {
					margin = 0;
			};
	
			cell1.innerHTML = customer;
			cell2.innerHTML = poType;
			cell3.innerHTML = brand;
			cell4.innerHTML = buyCommission;			
			cell5.innerHTML = ports;
			cell6.innerHTML = poNo;
			cell7.innerHTML = styleDescription;
			cell8.innerHTML = containerSqm;
			cell9.innerHTML = skuSqm;
			cell10.innerHTML = "$" + pricePerSqm;
			cell11.innerHTML = dutyPercent + "%";
			cell12.innerHTML = oceanFreight;
			cell13.innerHTML = "$" + LDP.toFixed(3);
			cell14.innerHTML = "$" + sellPrice;
			cell15.innerHTML = margin.toFixed(3) + "%";

}