// Define an array of camera objects with the correct image paths
const cameras = [
    {
        id: 1,
        name: "Canon EOS 5D",
        price: "$50 per day",
        image: "https://cdn.pixabay.com/photo/2016/04/30/05/04/camera-1362419_640.jpg",
        description: "A full-frame DSLR camera perfect for professional shoots."
    },
    {
        id: 2,
        name: "Canon EOS R50 mirrorless",
        price: "$50 per day",
        image: "https://cdn.pixabay.com/photo/2020/10/17/07/19/camera-5661401_960_720.jpg",
        description: "A lightweight mirrorless camera with great performance."
    },
    {
        id: 3,
        name: "Sony Alpha 7 III",
        price: "$50 per day",
        image: "https://cdn.pixabay.com/photo/2020/02/09/15/37/camera-4833557_960_720.jpg",
        description: "A high-quality mirrorless camera with outstanding features."
    },
    {
        id: 4,
        name: "Sony E Mount FE 200",
        price: "$50 per day",
        image: "https://media.istockphoto.com/id/471089169/photo/dslr-camera-with-telephoto-lens.jpg?s=1024x1024&w=is&k=20&c=5NMIEvqH_GbMhYSNd_JoqmDo5fXkPrxIvOzm15Fg0TU=",
        description: "A professional DSLR camera with an advanced lens."
    },
    {
        id: 5,
        name: "Eddioklp 4K Digital",
        price: "$50 per day",
        image: "https://media.istockphoto.com/id/1494048731/photo/isolated-slr-camera-on-white-background-suitable-for-your-device-concept.jpg?s=1024x1024&w=is&k=20&c=OmgOXg5DYFH-t3WKqGRAHn4QR99YM8QUV36QeY9Laf0=",
        description: "A compact digital camera with 4K recording capability."
    }
];

// Function to display cameras dynamically on the page
function displayCameras() {
    const cameraGrid = document.getElementById("camera-grid");

    // Clear any existing camera items
    cameraGrid.innerHTML = '';

    // Loop through cameras array and create camera elements dynamically
    cameras.forEach(camera => {
        const cameraItem = document.createElement("div");
        cameraItem.classList.add("camera-item");

        // Insert HTML for each camera item with its image, name, price, description, and button
        cameraItem.innerHTML = `
            <img src="${camera.image}" alt="${camera.name}">
            <h3>${camera.name}</h3>
            <p>${camera.price}</p>
            <p>${camera.description}</p>
            <button><a href="/user_info/index.html">Rent Now</a></button>
        `;

        // Append the camera item to the grid
        cameraGrid.appendChild(cameraItem);
    });
}


// Call displayCameras function when the page loads
window.onload = displayCameras;
