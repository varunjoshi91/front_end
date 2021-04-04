const gridBody = document.querySelector('.grid-body');
const selectedCount = document.querySelector('.selected-count');
const selectAll = document.getElementById('select-all');
const downloadButton = document.querySelector('.download a');

// loading data
async function getData() {
    const connection = await fetch('data.json');
    const data = await connection.json();
    return data;
}

// handles checkbox behaviors
const handleCheckboxes = () => {
    const dataRowsLength = document.querySelectorAll('.grid-body input:not([disabled])').length;
    const selectedCheckedBoxesLength = document.querySelectorAll('.grid-body input:checked').length;

    // Change text to show number of rows selected
    if (selectedCheckedBoxesLength) {
        selectedCount.textContent = `Selected ${selectedCheckedBoxesLength}`;
    } else {
        selectedCount.textContent = 'None Selected';
    }

    /* 
        Handle the SELECT ALL checkbox state 
        Works for the NON-DISABLED checkboxes only.
        Checked when all checkboxes selected
        Indeterminate when some (not all) checkboxes selected
        Unchecked when 0 checkboxes are selected
    */
    
    if (dataRowsLength === selectedCheckedBoxesLength) {
        selectAll.indeterminate = false;
        selectAll.checked = true;
    } else if (selectedCheckedBoxesLength && dataRowsLength > selectedCheckedBoxesLength) {
        selectAll.indeterminate = true;
    } else {
        selectAll.indeterminate = false;
        selectAll.checked = false;
    }
};

// creates the data-grid
const createDownloadGrid = async () => {
    const data = await getData();
    const frag = new DocumentFragment();

    data.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('grid-body-rows');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        row.append(checkbox);

        for (let prop in item) {
          const block = document.createElement("div");
          block.classList.add(prop);

          if (prop.toLowerCase() === 'status') {
              if (item[prop].toLowerCase() !== "available") {
                checkbox.disabled = true;
              } else {
                const circle = document.createElement("div");
                block.append(circle);
              }
          }

          block.append(
            (document.createElement("span").textContent = item[prop])
          );
          row.append(block);
        }

        frag.append(row);
    });

    gridBody.append(frag);
    handleCheckboxes();
}

// Listeners

// when body loads
document.addEventListener('DOMContentLoaded', async () =>  {
    createDownloadGrid();
});

// selecting rows
gridBody.addEventListener('click', (event) => {
    const row = event.target.closest('.grid-body-rows');
    const checkbox = row.querySelector('input');

    // preventing unintended clicks
    if (!row || checkbox.disabled) {
        return;
    }

    // if not clicking on the checkbox but anywhere on the row
    // toggle checkbox state and row selection style
    if (event.target.tagName !== 'INPUT') {
        checkbox.checked = !checkbox.checked;
    }
    row.classList.toggle('selected');
    handleCheckboxes();
});

// click of the selectAll checkbox
// toggles state of all ENABLED checkboxes
selectAll.addEventListener('click', (event) => {
    const getCheckedBoxes = document.querySelectorAll('.grid-body input:not([disabled])');
    getCheckedBoxes.forEach(checkbox => {
        checkbox.checked = event.target.checked;
        if (checkbox.checked) {
            checkbox.parentNode.classList.add('selected');
        } else {
            checkbox.parentNode.classList.remove('selected');
        }
    });
    handleCheckboxes();
});

// click of Download selected button
// formatting message as per requirement.
downloadButton.addEventListener('click', () => {
    const selectedCheckboxes = document.querySelectorAll('.grid-body input:checked');
    if (selectedCheckboxes.length < 1) {
        alert('None selected');
    } else {
        let message = '';
        selectedCheckboxes.forEach(checkbox => {
            const parent = checkbox.parentNode;
            const device = parent.querySelector('.device').textContent;
            const path = parent.querySelector('.path').textContent;
            message += `${device} : ${path} \n`;
        });
        alert(message);
    }
});