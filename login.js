function Fjala() {
    const Personi={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
    
    }
    var vargu=[Personi.email,Personi.password]
    for(let i=0; i<vargu.length; i++) {
        console.log(vargu[i]);
    }
}