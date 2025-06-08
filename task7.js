// Select DOM elements
const userContainer = document.getElementById('user-container');
const reloadBtn = document.getElementById('reloadBtn');

// Function to fetch and display users
async function fetchUsers() {
  try {
    // Fetch data from API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Check if fetch was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users = await response.json();

    // Clear previous content
    userContainer.innerHTML = '';

    // Loop through users and create cards
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;
      userContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    userContainer.innerHTML = `<p style="color: red;">Failed to load user data. Please try again later.</p>`;
  }
}

// Reload button click handler
reloadBtn.addEventListener('click', fetchUsers);

// Load users on page load
fetchUsers();
