fetch('http://127.0.0.1:5000/generate-srs', {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json'
   },
   body: JSON.stringify({
      title: "My Project"
   })
 })
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Error:', error));
 