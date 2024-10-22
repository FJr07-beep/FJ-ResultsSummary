fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const resultsContainer = document.createElement('div');
    data.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.innerHTML = `
        <img src="${result.icon}" alt="${result.category} icon">
        <h3>${result.category}</h3>
        <p>${result.score} / 100</p>
      `;
      resultsContainer.appendChild(resultItem);
    });
    document.body.appendChild(resultsContainer);
  })
  .catch(error => console.error('Error loading JSON:', error));
