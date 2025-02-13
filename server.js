function startQuestionnaire() {
  const yourName = document.getElementById('your-name').value;
  const crushName = document.getElementById('crush-name').value;

  if (yourName && crushName) {
    // Kirim data ke backend tanpa memberi tahu pengguna
    fetch('http://localhost:3000/submit-crush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ yourName, crushName }),
    }).catch(error => {
      console.error('Error:', error); // Log di console saja jika terjadi error
    });

    // Tetap lanjutkan ke tampilan pertanyaan
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('crush-placeholder').textContent = crushName;
  } else {
    alert('Please enter both names.');
  }
}
