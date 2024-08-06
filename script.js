// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => {
            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const table = document.getElementById('data-table');

            // Ensure the table exists
            if (!table) {
                throw new Error('Table element with ID "data-table" not found.');
            }

            data.forEach(item => {
                const row = document.createElement('tr');

                // Sentence column
                const sentenceCell = document.createElement('td');
                sentenceCell.className = 'sentence';
                sentenceCell.textContent = item.sentence;
                row.appendChild(sentenceCell);

                // Tooltip text column
                const tooltipTextCell = document.createElement('td');
                const tooltipText = document.createElement('span');
                tooltipText.className = 'tooltip-text';
                tooltipText.textContent = item.tooltipText; 
                tooltipTextCell.appendChild(tooltipText);
                row.appendChild(tooltipTextCell);

                // Tooltip column
                const tooltipColumnCell = document.createElement('td');
                tooltipColumnCell.className = 'tooltip-column';

                const tooltipLabel = document.createElement('label');
                tooltipLabel.className = 'tooltip';
                tooltipLabel.innerHTML = '[?]'; // Use innerHTML to avoid issues with text content

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.style.display = 'none'; // Hide the checkbox
                
                const tooltipSpan = document.createElement('span');
                tooltipSpan.textContent = item.tooltipContent;

                tooltipLabel.appendChild(checkbox);
                tooltipLabel.appendChild(tooltipSpan);
                tooltipColumnCell.appendChild(tooltipLabel);

                row.appendChild(tooltipColumnCell);

                table.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
