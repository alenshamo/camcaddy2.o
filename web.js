// Render camera cards
document.addEventListener('DOMContentLoaded', () => {
    const cameraGrid = document.getElementById('camera-grid');

    function renderCameras() {
        cameraGrid.innerHTML = cameras.map(camera => `
            <div class="camera-card">
                <img src="${camera.image}" alt="${camera.name}" class="camera-image">
                <div class="camera-content">
                    <h3 class="camera-title">${camera.name}</h3>
                    <p class="camera-price">Rent for ₹${camera.price}/day</p>
                    <button class="rent-button" onclick="rentCamera(${camera.id})">Rent Now</button>
                </div>
            </div>
        `).join('');
    }

    function rentCamera(id) {
        // Add rental functionality here
        console.log(`Renting camera with ID: ${id}`);
        alert('Rental feature coming soon!');
    }

    // Initialize the camera grid
    renderCameras();

    // Make rentCamera available globally
    window.rentCamera = rentCamera;
});
// Camera data
const cameras = [
    {
        id: 1,
        name: 'Canon EOS R5',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80'
    },
    {
        id: 2,
        name: 'Sony A7 III',
        price: 2000,
        image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80'
    },
    {
        id: 3,
        name: 'Nikon Z6',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80'
    }
];
// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
});





