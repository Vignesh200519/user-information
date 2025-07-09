fetch('data.json')
.then(response => response.json())
.then(data => {
    const profilediv =
    document.getElementById('profile');
    profilediv.innerHTML =`
    <p><strong>name:</strong> ${data.name}</p>
    <p><strong>email:</strong> ${data.email}</p>
    <p><strong>age:</strong> ${data.age}</p>`;

})
.catch(error => {
    console.error('error loading JSON:', error);
});