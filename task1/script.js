document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const inputValues = [
        document.getElementById('input1').value,
        document.getElementById('input2').value,
        document.getElementById('input3').value,
    ];

    const resultsDiv = document.getElementById('results');
    inputValues.forEach((value, index) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = value;
        paragraph.style.color = ['red', 'blue', 'green'][index];
        resultsDiv.appendChild(paragraph);
    });
});
