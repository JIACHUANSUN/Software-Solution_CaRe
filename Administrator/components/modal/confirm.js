const confirmModal = (() => {
  // Create modal elements dynamically
  const modalHTML = `
      <div class="modal-wrap">
          <div class="modal-content">
              <div class="modal-header">
                  <h2 class="modal-title">Confirmation</h2>
              </div>
              <div class="modal-body">
                  <p id="confirm-modal-message">Do you want to save the changes?</p>
                  <div class="modal-buttons">
                      <button id="confirm-ok-btn" class="modal-btn">OK</button>
                      <button id="confirm-cancel-btn" class="modal-btn">Cancel</button>
                  </div>
              </div>
          </div>
      </div>
  `;

  // Create a modal container and append to the body
  const modalContainer = document.createElement('div');
  modalContainer.id = 'custom-confirm-modal';
  modalContainer.className = 'modal-mask';
  modalContainer.style.display = 'none';
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer);

  // Function to show the modal
  function show(message, onConfirm, onCancel, okText = 'OK', cancelText = 'Cancel') {
      // Set the message
      document.getElementById('confirm-modal-message').textContent = message;

      // Set button text
      document.getElementById('confirm-ok-btn').textContent = okText;
      document.getElementById('confirm-cancel-btn').textContent = cancelText;

      // Show the modal
      modalContainer.style.display = 'flex';

      // Set up event listeners for buttons
      document.getElementById('confirm-ok-btn').onclick = function() {
          if (onConfirm) onConfirm();
      };

      document.getElementById('confirm-cancel-btn').onclick = function() {
          if (onCancel) onCancel();
          hide();
      };
  }

  // Function to hide the modal
  function hide() {
      modalContainer.style.display = 'none';
  }

  // Public API
  return {
      show,
      hide
  };
})();

// Example usage:
confirmModal.show(
  "Are you sure you want to proceed?",
  () => {
      console.log("Confirmed!");
      // Additional logic for confirmation
  },
  () => {
      console.log("Cancelled!");
      // Additional logic for cancellation
  },
  "Proceed",  // Custom OK text
  "Abort"     // Custom Cancel text
);
