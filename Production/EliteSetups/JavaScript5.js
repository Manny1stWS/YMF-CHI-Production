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
			cell19 = newRow.insertCell(18),
			cell20 = newRow.insertCell(19),
			cell21 = newRow.insertCell(20),

			rugType = document.getElementById("rugType").value,
			yarnType = document.getElementById("yarnType").value,
			packType = document.getElementById("packType").value,
			gSm = document.getElementById("gSm").value,
			backType = document.getElementById("backType").value,
			backWeight = document.getElementById("backWeight").value,
			rugWidth = document.getElementById("rugWidth").value;
			if (!rugWidth) {
				alert('ENTER WIDTH OF RUG');
				let table1 = document.getElementById("table1"), colorChange6 ='';

				for (var i = 0; i < table.rows.length; i++)
				{
					colorChange6 = (table.rows[i].cells[6]);
				}
					colorChange6.style.background="red";
			};

			rugLength = document.getElementById("rugLength").value;
			if (!rugLength) {
				alert('ENTER LENGTH OF RUG');
				let table1 = document.getElementById("table1"), colorChange7 ='';

				for (var i = 0; i < table.rows.length; i++)
				{
					colorChange7 = (table.rows[i].cells[7]);
				}
					colorChange7.style.background="red";
			};

			casePack = document.getElementById("casePack").value;
			if (!casePack) {
				alert('ENTER CASE PACK');
				let table1 = document.getElementById("table1"), colorChange14 ='';

				for (var i = 0; i < table.rows.length; i++)
				{
					colorChange14 = (table.rows[i].cells[14]);
				}
					colorChange14.style.background="red";
			};

			containerPercentage = document.getElementById("containerPercentage").value;
			if (!containerPercentage) {
				alert('ENTER A NUMBER FROM 0 TO 1');
				let table1 = document.getElementById("table1"), colorChange16 ='';

				for (var i = 0; i < table.rows.length; i++)
				{
					colorChange16 = (table.rows[i].cells[16]);
				}
					colorChange16.style.background="red";
			};

			rugsPerSetup = '';
				if (rugType !== 'horizontalStripe') {rugsPerSetup = Math.floor(machineWidth / rugWidth);
				} else if (rugType === 'horizontalStripe') {
						rugsPerSetup = Math.floor(machineWidth / rugLength);
					}

			squareMeter = rugWidth * rugLength / sqmcmTosqmmeter;

			mOq = Math.floor(Math.ceil((minSqm / squareMeter / casePack / rugsPerSetup))) * casePack * rugsPerSetup;

			piecesPerDesign = mOq / rugsPerSetup;

			totalSquareMeters = squareMeter * mOq;

			mOqContainerCount = '';
				if (yarnType === 'BCF' && gSm === '500') {
				mOqContainerCount = totalSquareMeters / BCF500;
			} else if (yarnType === 'BCF' && gSm === '600') {
				mOqContainerCount = totalSquareMeters / BCF600;
			} else if (yarnType === 'N2HS' && gSm === '500') {
				mOqContainerCount = totalSquareMeters / N2HS500;
			} else if (yarnType === 'N2HS' && gSm === '600') {
				mOqContainerCount = totalSquareMeters / N2HS600;
			} else if (yarnType === 'N2HS' && gSm === '700') {
				mOqContainerCount = totalSquareMeters / N2HS700;
			} else if (yarnType === 'N2HS' && gSm === '800') {
				mOqContainerCount = totalSquareMeters / N2HS800;
			} else if (yarnType === 'Heatset' && gSm === '650') {
				mOqContainerCount = totalSquareMeters / HS650;
			} else if (yarnType === 'Heatset' && gSm === '700') {
				mOqContainerCount = totalSquareMeters / HS700;
			} else if (yarnType === 'Heatset' && gSm === '800') {
				mOqContainerCount = totalSquareMeters / HS800;
			} else if (yarnType === 'Frieze' && gSm === '700') {
				mOqContainerCount = totalSquareMeters / FZ700;
			} else if (yarnType === 'mpZ10' && gSm === '700') {
				mOqContainerCount = totalSquareMeters / MPZ10700;
			} else if (yarnType === 'mpZ10' && gSm === '800') {
				mOqContainerCount = totalSquareMeters / MPZ10800;
			} else if (yarnType === 'sdMP' && gSm === '900') {
				mOqContainerCount = totalSquareMeters / SDMP900;
			} else if (yarnType === 'm6' && gSm === '1200') {
				mOqContainerCount = totalSquareMeters / M61200;
			} else if (!mOqContainerCount) {
				alert(`YARN TYPE: ${yarnType} AND GSM: ${gSm} HAVE NOT BEEN ORDERED BEFORE.
TALK TO WEB MANAGER TO INCLUDE FORMULA.`);
				let table1 = document.getElementById("table1"), colorChange13 ='';

				for (var i = 0; i < table.rows.length; i++)
				{
					colorChange13 = (table.rows[i].cells[13]);
				}
					colorChange13.style.background="red";
			};

			piecesToFillContainer = '';
				if (yarnType === 'BCF' && gSm === '500') {
				piecesToFillContainer = Math.floor(Math.ceil(((BCF500 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'BCF' && gSm === '600') {
				piecesToFillContainer = Math.floor(Math.ceil(((BCF600 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'N2HS' && gSm === '500') {
				piecesToFillContainer = Math.floor(Math.ceil(((N2HS500 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'N2HS' && gSm === '600') {
				piecesToFillContainer = Math.floor(Math.ceil(((N2HS600 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'N2HS' && gSm === '700') {
				piecesToFillContainer = Math.floor(Math.ceil(((N2HS700 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'N2HS' && gSm === '800') {
				piecesToFillContainer = Math.floor(Math.ceil(((N2HS800 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'Heatset' && gSm === '650') {
				piecesToFillContainer = Math.floor(Math.ceil(((HS650 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'Heatset' && gSm === '700') {
				piecesToFillContainer = Math.floor(Math.ceil(((HS700 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'Heatset' && gSm === '800') {
				piecesToFillContainer = Math.floor(Math.ceil(((HS800 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'Frieze' && gSm === '700') {
				piecesToFillContainer = Math.floor(Math.ceil(((FZ700 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'mpZ10' && gSm === '700') {
				piecesToFillContainer = Math.floor(Math.ceil(((MPZ10700 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'mpZ10' && gSm === '800') {
				piecesToFillContainer = Math.floor(Math.ceil(((MPZ10800 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'sdMP' && gSm === '900') {
				piecesToFillContainer = Math.floor(Math.ceil(((SDMP900 / squareMeter) / casePack))) * casePack;
			} else if (yarnType === 'm6' && gSm === '1200') {
				piecesToFillContainer = Math.floor(Math.ceil(((M61200 / squareMeter) / casePack))) * casePack;
			};

			piecesInContainer = Math.floor(Math.ceil(((piecesToFillContainer * containerPercentage) / casePack))) * casePack;


			sqmInContainer = piecesInContainer * squareMeter;

			machineWidthWasted = '';
				if (rugType !== 'horizontalStripe') {
				machineWidthWasted = (machineWidth - (rugsPerSetup * rugWidth));
			} else if (rugType === 'horizontalStripe') {
				machineWidthWasted = (machineWidth - (rugsPerSetup * rugLength));
			};

			spaceWasted = '';
				if (rugType !== 'horizontalStripe') {
					spaceWasted = ((machineWidth - (rugsPerSetup * rugWidth)) * (piecesPerDesign * rugLength)) / sqmcmTosqmmeter;
				} else if (rugType === 'horizontalStripe') {
					spaceWasted = ((machineWidth - (rugsPerSetup * rugLength)) * (piecesPerDesign * rugWidth)) / sqmcmTosqmmeter;
					};

			cell1.innerHTML = rugType;
			cell2.innerHTML = yarnType;
			cell3.innerHTML = packType;
			cell4.innerHTML = gSm;
			cell5.innerHTML = backType;
			cell6.innerHTML = backWeight;
			cell7.innerHTML = rugWidth;
			cell8.innerHTML = rugLength;
			cell9.innerHTML = rugsPerSetup;
			cell10.innerHTML = squareMeter;
			cell11.innerHTML = mOq;
			cell12.innerHTML = piecesPerDesign;
			cell13.innerHTML = totalSquareMeters.toFixed(2);
			cell14.innerHTML = mOqContainerCount.toFixed(2);
			cell15.innerHTML = casePack;
			cell16.innerHTML = piecesToFillContainer;
			cell17.innerHTML = containerPercentage;
			cell18.innerHTML = piecesInContainer;
			cell19.innerHTML = sqmInContainer.toFixed(2);
			cell20.innerHTML = machineWidthWasted;
			cell21.innerHTML = spaceWasted.toFixed(2);
	
			let table1 = document.getElementById("table1"), sumVal1 = 0;

			for (var i = 0; i < table.rows.length; i++)
			{
				sumVal1 = sumVal1 + parseFloat(table.rows[i].cells[12].innerHTML);
			}

			let table2 = document.getElementById("table2"), sumVal2 = 0;

			for (var i = 0; i < table.rows.length; i++)
			{
				sumVal2 = sumVal2 + parseFloat(table.rows[i].cells[13].innerHTML);
			}

			let table3 = document.getElementById("table3"), sumVal3 = 0;

			for (var i = 0; i < table.rows.length; i++)
			{
				sumVal3 = sumVal3 + parseFloat(table.rows[i].cells[15].innerHTML);
			}

			let table4 = document.getElementById("table4"), sumVal4 = 0;

			for (var i = 0; i < table.rows.length; i++)
			{
				sumVal4 = sumVal4 + parseFloat(table.rows[i].cells[16].innerHTML);
			}

			let table5 = document.getElementById("table5"), sumVal5 = 0;

			for (var i = 0; i < table.rows.length; i++)
			{
				sumVal5 = sumVal5 + parseFloat(table.rows[i].cells[17].innerHTML);
			}

			let table6 = document.getElementById("table6"), sumVal6 = 0;

			for (var i = 0; i < table.rows.length; i++)
			{
				sumVal6 = sumVal6 + parseFloat(table.rows[i].cells[18].innerHTML);
			}

			let table7 = document.getElementById("table7"), sumVal7 = 0;

			for (var i = 0; i < table.rows.length; i++)
			{
				sumVal7 = sumVal7 + parseFloat(table.rows[i].cells[20].innerHTML);
			}

			val1.innerHTML = sumVal1.toLocaleString();
			val2.innerHTML = sumVal2.toFixed(2);
			val3.innerHTML = sumVal3.toLocaleString();
			val4.innerHTML = sumVal4.toFixed(2);
			val5.innerHTML = sumVal5.toLocaleString();
			val6.innerHTML = sumVal6.toLocaleString();
			val7.innerHTML = sumVal7.toLocaleString();

}