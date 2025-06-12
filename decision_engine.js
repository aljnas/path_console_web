
let cli = document.getElementById('cli');
let input = document.getElementById('input');
let profile = null;

fetch('profiles.json')
  .then(r => r.json())
  .then(data => {
      profile = data.perfil;
      cli.innerHTML += '\nPerfil cargado: ' + profile.nombre + ' (' + profile.tipo + ')';
  });

function handleCommand(e) {
    if (e.key === 'Enter') {
        let cmd = input.value.trim();
        cli.innerHTML += '\n> ' + cmd;

        if (cmd === './status.sh') {
            cli.innerHTML += '\nEstado: agotado pero avanzando. Revisa tus límites hoy.';
        } else if (cmd === './roast.sh') {
            cli.innerHTML += '\n“¿Ya hiciste todo esto para esconderlo otra vez? Vamos, tú puedes más.”';
        } else if (cmd === './detectar_pistas_ocultas.sh') {
            cli.innerHTML += '\nPista: alguien cercano espera que le hables. ¿Qué pierdes si lo haces hoy?';
        } else if (cmd === 'analizar') {
            if (profile.tipo === 'inmigrante') {
                cli.innerHTML += '\nRecomendación: aplica a PATH_Housing y PATH_LegalAid.';
            } else if (profile.tipo === 'veterano') {
                cli.innerHTML += '\nRecomendación: conectar con recursos para veteranos + PATH VA Support.';
            } else {
                cli.innerHTML += '\nRecomendación: contactar guía PATH personalizada.';
            }
        } else {
            cli.innerHTML += '\nComando no reconocido.';
        }

        input.value = '';
        cli.scrollTop = cli.scrollHeight;
    }
}
input.addEventListener('keypress', handleCommand);
