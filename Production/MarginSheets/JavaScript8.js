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
			cell16 = newRow.insertCell(15),
			cell17 = newRow.insertCell(16),
			cell18 = newRow.insertCell(17),

			customer = document.getElementById("customer").value,
			poType = document.getElementById("poType").value,
			brand = document.getElementById("brand").value,
			ports = document.getElementById("ports").value,
			trendZone = document.getElementById("trendZone").value,
			containerSize = document.getElementById("containerSize").value,
			poNo = document.getElementById("poNo").value;
				if (!poNo) {
					alert('ENTER PO NUMBER');
					let table1 = document.getElementById("table1"), colorChange6 ='';

					for (var i = 0; i < table.rows.length; i++)
					{
						colorChange6 = (table.rows[i].cells[6]);
					}
						colorChange6.style.background="red";
				};

			styleDescription = document.getElementById("styleDescription").value;
				if (!styleDescription) {
					alert('ENTER DESCRIPTION');
					let table1 = document.getElementById("table1"), colorChange7 ='';

					for (var i = 0; i < table.rows.length; i++)
					{
						colorChange7 = (table.rows[i].cells[7]);
					}
						colorChange7.style.background="red";
				};

			boxLength = document.getElementById("boxLength").value;
				if (!boxLength) {
					alert('ENTER BOX LENGTH IN CM');
					let table1 = document.getElementById("table1"), colorChange8 ='';

					for (var i = 0; i < table.rows.length; i++)
					{
						colorChange8 = (table.rows[i].cells[8]);
					}
						colorChange8.style.background="red";
				};

			boxWidth = document.getElementById("boxWidth").value;
				if (!boxWidth) {
					alert('ENTER BOX WIDTH IN CM');
					let table1 = document.getElementById("table1"), colorChange9 ='';

					for (var i = 0; i < table.rows.length; i++)
					{
						colorChange9 = (table.rows[i].cells[9]);
					}
						colorChange9.style.background="red";
				};

			boxHeight = document.getElementById("boxHeight").value;
				if (!boxHeight) {
					alert('ENTER BOX HEIGHT IN CM');
					let table1 = document.getElementById("table1"), colorChange10 ='';

					for (var i = 0; i < table.rows.length; i++)
					{
						colorChange10 = (table.rows[i].cells[10]);
					}
						colorChange10.style.background="red";
				};

			pcsBox = document.getElementById("pcsBox").value;
			unitCost = document.getElementById("unitCost").value;
			dutyPercent = document.getElementById("dutyPercent").value;
			oceanFreight = document.getElementById("oceanFreight").value;
			sellPrice = document.getElementById("sellPrice").value;

			LDP = '';
				if (poType === "STOCK" && trendZone === "NO" && containerSize === "40HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((670000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "STOCK" && trendZone === "YES" && containerSize === "40HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((670000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "POE" && trendZone === "NO" && containerSize === "40HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((670000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "POE" && trendZone === "YES" && containerSize === "40HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((670000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "STOCK" && trendZone === "NO" && containerSize === "40") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((590000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "STOCK" && trendZone === "YES" && containerSize === "40") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((590000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "POE" && trendZone === "NO" && containerSize === "40") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((590000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "POE" && trendZone === "YES" && containerSize === "40") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((590000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "STOCK" && trendZone === "NO" && containerSize === "45HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((740000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "STOCK" && trendZone === "YES" && containerSize === "45HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((740000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "POE" && trendZone === "NO" && containerSize === "45HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((740000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "POE" && trendZone === "YES" && containerSize === "45HQ") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((740000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "STOCK" && trendZone === "NO" && containerSize === "20") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((270000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "STOCK" && trendZone === "YES" && containerSize === "20") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight) + 500) / ((270000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "POE" && trendZone === "NO" && containerSize === "20") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((270000 / (boxLength * boxWidth * boxHeight)) * pcsBox))) / 100;

				} else if (poType === "POE" && trendZone === "YES" && containerSize === "20") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + 
				((parseInt(oceanFreight)) / ((270000 / (boxLength * boxWidth * boxHeight)) * pcsBox)) + (unitCost * 2)) / 100;

				} else if (poType === "MDDP" && trendZone === "NO") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000)) / 100;

				} else if (poType === "MDDP" && trendZone === "YES") {

				LDP = ((unitCost * 100) + ((unitCost * 100) * (dutyPercent * 100) / 10000) + (unitCost * 2)) / 100;

				} else if (poType === "DI" && trendZone === "NO") {

				LDP = (unitCost * 100 / 100);

				} else if (poType === "DI" && trendZone === "YES") {

				LDP = ((unitCost * 100) + (unitCost * 2)) / 100;

				};

			margin = '';
			if (brand === "YMF" || brand === "Customer") {
				margin = (((sellPrice - LDP) * 100) / sellPrice);
			} else if (brand !== "YMF" || brand !== "Customer") {
				margin = (((sellPrice * 100) - (sellPrice * 10) - (LDP * 100)) / sellPrice);
			} else if (!sellPrice) {
					margin = 0;
			};
	
			cell1.innerHTML = customer;
			cell2.innerHTML = poType;
			cell3.innerHTML = brand;
			cell4.innerHTML = trendZone;
			cell5.innerHTML = containerSize;			
			cell6.innerHTML = ports;
			cell7.innerHTML = poNo;
			cell8.innerHTML = styleDescription;
			cell9.innerHTML = boxLength;
			cell10.innerHTML = boxWidth;
			cell11.innerHTML = boxHeight;
			cell12.innerHTML = pcsBox;
			cell13.innerHTML = "$" + unitCost;
			cell14.innerHTML = dutyPercent + "%";
			cell15.innerHTML = oceanFreight;
			cell16.innerHTML = "$" + LDP.toFixed(3);
			cell17.innerHTML = "$" + sellPrice;
			cell18.innerHTML = margin.toFixed(3) + "%";

}