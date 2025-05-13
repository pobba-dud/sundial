// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  for(let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    
    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// Initial check in case elements are already visible
reveal();

// Character Modal Functions
document.addEventListener('DOMContentLoaded', function() {
  // Set up character card click handlers
  document.querySelectorAll('.character').forEach(card => {
    card.addEventListener('click', function() {
      const character = this.getAttribute('data-character');
      openCharacterModal(character);
    });
  });

  // Set up close modal handlers
  document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.character-modal');
      closeModal(modal.id);
    });
  });

  // Close modal when clicking outside content
  document.querySelectorAll('.character-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(this.id);
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.character-modal.active').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });
});

function openCharacterModal(character) {
  const modal = document.getElementById(`${character}-modal`);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Re-enable scrolling
}

