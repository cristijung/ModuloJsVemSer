//função para login
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      //se ok, passa para a outra página
      window.location.href = 'gatos.html';
    } else {
      alert('Usuário ou senha inválidos');
    }
}

//função para cadastro
async function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: newUsername, password: newPassword }),
    });
  
    if (response.ok) {
      alert('Usuário cadastrado com sucesso');
    } else {
      alert('Erro ao cadastrar usuário');
    }
}
