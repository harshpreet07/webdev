document.getElementById('box').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'red';
});


document.getElementById('box').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'lightblue';
});

function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}