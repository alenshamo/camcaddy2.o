document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rentalForm');
    
    // Set minimum date for rental period
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = form.querySelector('input[name="startDate"]');
    const endDateInput = form.querySelector('input[name="endDate"]');
    
    startDateInput.min = today;
    startDateInput.addEventListener('change', function() {
      endDateInput.min = this.value;
      if (endDateInput.value && endDateInput.value < this.value) {
        endDateInput.value = this.value;
      }
    });
  
    // Form submission handler
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Validate dates
      if (data.endDate < data.startDate) {
        alert('End date cannot be before start date');
        return;
      }
  
      // Log form data (replace with your submission logic)
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Rental request submitted successfully!');
      form.reset();
    });
  
    // Phone number validation
    const phoneInputs = form.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
      input.addEventListener('input', function(e) {
        // Allow only numbers and common phone number characters
        this.value = this.value.replace(/[^\d+\-() ]/g, '');
      });
    });
  
    // Coupon code validation
    const couponInput = form.querySelector('input[name="couponCode"]');
    couponInput.addEventListener('input', function(e) {
      // Convert to uppercase and remove special characters
      this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    });
  });