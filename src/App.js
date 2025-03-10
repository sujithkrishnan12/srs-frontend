const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:5000/generate-srs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project_name: projectName,
        description: projectDescription,
        requirements: functionalRequirements.split(',')
      })
    });
  
    // ✅ Convert response to Blob (PDF)
    const blob = await response.blob();
  
    // ✅ Create URL for PDF Download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SRS_Document.pdf';
    a.click();
  };
  