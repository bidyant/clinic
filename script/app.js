
let items = [
    { name: 'BLOOD INVESTIGATION REPORT', units:' ', ref: 'HEAD'},

];

let options = [
    { name: 'WIDAL TEST', units:' ', ref: 'HEAD'},
    { name: 'RENAL FUNCTION TEST', units:' ', ref: 'HEAD'},
    { name: 'ELECTROLYTE PROFILE', units:' ', ref: 'HEAD'},
    { name: 'LIVER FUNCTION TEST', units:' ', ref: 'HEAD'},
    { name: 'BLOOD INVESTIGATION REPORT', units:' ', ref: 'HEAD'},
    { name: 'URINE TEST', units:' ', ref: 'HEAD'},
    { name: 'E.S.R', units: 'mm/1hr', ref: '(0-20)mm/1hr' },
    { name: 'MALARIA (Ag)', units: ' ', ref: ' ' },
    { name: 'HEMOGLOBIN', units: 'gm%', ref: '(12-16)gm%' },
    { name: 'V.D.R.L', units: ' ', ref: ' ' },
    { name: 'TOXO', units: ' ', ref: ' '},
    { name: 'A.S.O', units: ' ', ref: ' ' },
    { name: 'R.A (FACTOR)', units: ' ', ref: ' '},
    { name: 'H.I.V', units: ' ', ref: ' ' },
    { name: 'S BILIRUBIN TOTAL', units: 'mg/dL', ref: '(0.3-1.2)mg/dL' },
    { name: 'S BILIRUBIN DIRECT', units: 'mg/dL', ref: '(0-0.3)mg/dL' },
    { name: 'S BILIRUBIN INDIRECT', units: 'mg/dL', ref: '(0-0.9)mg/dL' },
    { name: 'S TYPHI O', units: ' ', ref: ' ' },
    { name: 'S TYPHI H', units: ' ', ref: ' ' },
    { name: 'S ParaTyphiA H', units: ' ', ref: ' ' },
    { name: 'S ParaTyphiB H', units: ' ', ref: ' ' },
    { name: 'TYPHOID (kit)', units: ' ', ref: ' ' },
    { name: 'B.T', units:'min sec.', ref:' '},
    { name: 'C.T', units:'min sec.', ref: ' '},
    { name: 'F.B.S', units: 'mg/dl', ref: '(70-120)mg/dl' },
    { name: 'R.B.S', units: 'mg/dl', ref: '(80-150)mg/dl' },
    { name: 'P.P.B.S', units: 'mg/dl', ref: '(80-150)mg/dl' },
    { name: 'P.G.B.S', units: 'mg/dl', ref: '(80-150)mg/dl' },
    { name: 'BLOOD UREA', units: 'mg/dl', ref: '(15-40)mg/dl' },
    { name: 'S CREATININE', units: 'mg/dl', ref: '(0.7-1.2)mg/dl' },
    { name: 'URIC ACID', units: 'mg/dl', ref: '(1.5-6)mg/dl' },
    { name: 'S. SODIUM (Na+)', units: 'mm/dl', ref: '(135-155)mm/dl' },
    { name: 'S POTASIUM (K+)', units: 'mm/dl', ref: '(3.5-5.5)mm/dl' },
    { name: 'I CALCIUM', units: 'mg/dl', ref: '(3.0-5.6)mg/dl' },
    { name: 'CHOLORIDE', units: 'mm/dl', ref: '(94-110)mm/dl' },
    { name: 'PREGNANCY TEST (Kit)', units: ' ', ref: ' ' },
    { name: 'UBG', units: ' ', ref: ' ' },
    { name: 'BIL', units: ' ', ref: ' ' },
    { name: 'KET', units: ' ', ref: ' ' },
    { name: 'BLD', units: ' ', ref: ' ' },
    { name: 'PRO', units: ' ', ref: ' ' },
    { name: 'NIT', units: ' ', ref: ' ' },
    { name: 'LEU', units: ' ', ref: ' ' },
    { name: 'GLU', units: ' ', ref: ' ' },
    { name: 'SG', units: ' ', ref: ' ' },
    { name: 'PH', units: ' ', ref: ' ' }
];




function populateSelectElement() {
    const optionSelect = document.getElementById('optionSelect');

    options.forEach((option, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index;
        optionElement.textContent = option.name;
        optionSelect.appendChild(optionElement);
    });
}

function addItem() {
    const optionSelect = document.getElementById('optionSelect');
    const selectedIndex = optionSelect.value;
    const selectedOption = options[selectedIndex];
    if (selectedOption) {
        items.push({ name: selectedOption.name, value: '', units: selectedOption.units, ref: selectedOption.ref });
        displayItems(items);
    }
}

function displayItems(itemsToDisplay) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    itemsToDisplay.forEach((item, index) => {
        
        if(item.ref!="HEAD"){
            const tr = document.createElement('tr');
            
            const selectTd = document.createElement('td');
            const selectCheckbox = document.createElement('input');
            selectCheckbox.type = 'checkbox';
            selectCheckbox.id='removeCheck';
            selectCheckbox.onchange = () => toggleSelectRow(tr, index);
            selectTd.appendChild(selectCheckbox);

            const nameTd = document.createElement('td');
            nameTd.textContent = item.name;
            const valueTd = document.createElement('td');
            valueTd.setAttribute('style',"width:max-content; text-align:center");
            const valueInput = document.createElement('input');
            valueInput.type = 'text';
            valueInput.value = item.value;
            valueInput.className = 'value-field';
            valueInput.onchange = (e) => updateValue(index, e.target.value);
            valueTd.appendChild(valueInput);
    
            const unitsTd = document.createElement('td');
            unitsTd.textContent = item.units;
    
            const refTd = document.createElement('td');
            refTd.textContent = item.ref;
            tr.appendChild(selectTd);
            tr.appendChild(nameTd);
            tr.appendChild(valueTd);
            tr.appendChild(unitsTd);
            tr.appendChild(refTd);
            itemList.appendChild(tr);
        }else{
            const tr = document.createElement('tr');
            const selectTd = document.createElement('td');
            const selectCheckbox = document.createElement('input');
            selectCheckbox.type = 'checkbox';
            selectCheckbox.id='removeCheck';
            selectCheckbox.onchange = () => toggleSelectRow(tr, index);
            selectTd.appendChild(selectCheckbox);
            const nameTd = document.createElement('td');
            nameTd.textContent = item.name;
            nameTd.classList.add('nameTd');
            nameTd.setAttribute('colspan',4);
            tr.appendChild(selectTd);
            tr.appendChild(nameTd);
            itemList.appendChild(tr);
        }
    });
}

function toggleSelectRow(row, index) {
    row.classList.toggle('selected');
    items[index].selected = !items[index].selected;
}

function deleteSelectedItems() {
    items = items.filter(item => !item.selected);
    displayItems(items);
}

function updateValue(index, newValue) {
    items[index].value = newValue;
}

function searchItems() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.value.toLowerCase().includes(query) ||
        item.units.toLowerCase().includes(query) ||
        item.ref.toLowerCase().includes(query)
    );
    displayItems(filteredItems);
}

// Populate select element with options
populateSelectElement();

// Initial display of items
displayItems(items);


