document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.parentNode.querySelector('.quantity-input');
        let value = parseInt(input.value);
        
        if (this.textContent === '+') {
            value++;
        } else if (this.textContent === '−' && value > 1) {
            value--;
        }
        
        input.value = value;
    });
});

// Handle color options
document.querySelectorAll('.color-option').forEach(color => {
    color.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            // Remove active class from all colors
            document.querySelectorAll('.color-option').forEach(c => {
                c.classList.remove('active');
                c.classList.add('inactive');
            });
            
            // Add active class to clicked color
            this.classList.add('active');
            this.classList.remove('inactive');
        }
    });
});

// Handle size tabs
document.querySelectorAll('.size-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.size-tab').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all size content
        document.querySelectorAll('.size-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show the corresponding size content
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Handle size selection
document.querySelectorAll('.size-item').forEach(item => {
    if (!item.classList.contains('disabled')) {
        item.addEventListener('click', function() {
            // Remove active class from all size items in the current tab
            const activeContent = document.querySelector('.size-content.active');
            activeContent.querySelectorAll('.size-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Add active class to clicked size item
            this.classList.add('active');
        });
    }
});