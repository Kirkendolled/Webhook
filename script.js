document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var formElement = event.target;
    var formData = new FormData(formElement);

    // Send form data to JotForm
    axios.post('https://form.jotform.com/231306033534040', formData)
      .then(function(response) {
        // Handle successful submission
        var data = response.data; // Optional: Retrieve response data from JotForm

        // Populate the form answers into the document
        document.getElementById('name').textContent = formData.get('name');
        document.getElementById('email').textContent = formData.get('email');
        document.getElementById('message').textContent = formData.get('message');
      })
      .catch(function(error) {
        // Handle submission error
        console.error('Form submission failed:', error);
      });
  });