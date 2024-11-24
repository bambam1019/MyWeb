document.addEventListener('DOMContentLoaded', () => {
    const carForm = document.getElementById('car-form');
    const carList = document.getElementById('car-list');

  
    document.getElementById('add-car').addEventListener('click', () => {
        const make = document.getElementById('make').value.trim();
        const model = document.getElementById('model').value.trim();
        const year = document.getElementById('year').value.trim();
        const speed = document.getElementById('speed').value.trim();

        if (make && model && year && speed) {
            const li = document.createElement('li');
            li.textContent = `${make} ${model} (${year}) - Top Speed: ${speed} mph`;

           
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                const updatedMake = prompt('Edit Make:', make) || make;
                const updatedModel = prompt('Edit Model:', model) || model;
                const updatedYear = prompt('Edit Year:', year) || year;
                const updatedSpeed = prompt('Edit Speed (mph):', speed) || speed;
                li.textContent = `${updatedMake} ${updatedModel} (${updatedYear}) - Top Speed: ${updatedSpeed} mph`;
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
            });


            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => li.remove());

            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            carList.appendChild(li);

       
            carForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});