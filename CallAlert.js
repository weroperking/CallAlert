// Override the default alert function
window.alert = function (message, timeout = null) {
    // Check if an alert is already displayed
    if (document.querySelector('.custom-alert')) {
        return; // Prevent multiple alerts
    }

    // Create an overlay to block background interaction
    const overlay = document.createElement('div');
    overlay.classList.add('custom-alert-overlay');
    overlay.setAttribute('style', `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        z-index: 1100; /* Behind the alert */
    `);

    // Create the alert container
    const alert = document.createElement('div');
    alert.classList.add('custom-alert');
    alert.setAttribute('style', `
        position: fixed;
        top: 30%;    
        left: 50%;   
        padding: 20px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.5); 
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        transform: translateX(-50%);
        width: 80vw; /* Responsive width */
        max-width: 400px; /* Prevents it from being too wide on larger screens */
        height: auto;
        background: #222222;
        color: #ffffff;
        z-index: 1200; /* Above the overlay */
        box-sizing: border-box; /* Ensures padding doesn't affect dimensions */
    `);

    // Add the message inside the alert
    const messageSpan = document.createElement('span');
    messageSpan.setAttribute('style', `
        padding: 10px;
        text-align: center; /* Center align text for better responsiveness */
        word-wrap: break-word; /* Ensures long words wrap properly */
    `);
    messageSpan.innerText = message;
    alert.appendChild(messageSpan);

    // Create the "OK" button
    const alertButton = document.createElement('button');
    alertButton.innerText = "OK";
    alertButton.setAttribute('style', `
        padding: 10px 20px;
        border: none;
        background: #0099ff;
        color: #ffffff;
        border-radius: 7px;
        margin: 10px auto 0; /* Center the button and add spacing */
        cursor: pointer;
        text-align: center;
    `);

    // Add click event to remove the alert and overlay
    alertButton.addEventListener('click', () => {
        alert.remove(); // Remove alert from the DOM
        overlay.remove(); // Remove overlay from the DOM
    });

    // Append the button to the alert
    alert.appendChild(alertButton);

    // Automatically remove the alert after a timeout (if provided)
    if (timeout !== null) {
        setTimeout(() => {
            if (alert.parentElement) {
                alert.remove();
                overlay.remove();
            }
        }, Number(timeout));
    }

    // Append the overlay and the alert to the document body
    document.body.appendChild(overlay);
    document.body.appendChild(alert);
};