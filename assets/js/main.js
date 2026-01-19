// User type selection with theme change
const userTypes = document.querySelectorAll('.user-type');
let selectedUserType = 'default'; // Default user type (NGO/SHG)

userTypes.forEach(type => {
    type.addEventListener('click', () => {
        userTypes.forEach(t => t.classList.remove('active'));
        type.classList.add('active');

        // Apply theme based on data-theme attribute
        const theme = type.getAttribute('data-theme');
        document.body.className = theme || '';

        // Update selected user type
        selectedUserType = type.getAttribute('data-theme');
    });
});

// Form submission
document.querySelector('.btn-primary').addEventListener('click', function (e) {
    e.preventDefault();
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    this.disabled = true;

    // Simulate authentication process
    setTimeout(() => {
        this.innerHTML = 'Login to Dashboard';
        this.disabled = false;

        // Redirect to respective dashboard based on user type
        if (selectedUserType === 'default') {
            window.location.href = 'ngo-dashboard.html'; // NGO/SHG Dashboard
        } else if (selectedUserType === 'mnc-theme') {
            window.location.href = 'mnc-dashboard.html'; // MNC Dashboard
        } else if (selectedUserType === 'nccr-theme') {
            window.location.href = 'nccr-dashboard.html'; // NCCR Admin Dashboard
        } else {
            alert('Invalid user type selected.');
        }
    }, 2000);
});
