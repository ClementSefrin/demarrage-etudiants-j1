const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message')
const liste = document.querySelector('#messages')

// J1 : interface seule, on bloque l’envoi et on l’explique.
formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = champ.value.trim()

  if (text === "") {
    statut.textContent = 'Le champ ne doit pas être vide.';
    champ.focus()
    return
  }
  const messageElt = document.createElement('li')
  messageElt.textContent = "Vous : " + text
  liste.append(messageElt)
  champ.textContent = ""
  statut.textContent = ""
  champ.focus()
  return
});

champ?.addEventListener('input', (event) => {
  // console.log(event)
  statut.textContent = event.target.value.length + "/280"
})

// Version du serveur local, échec discret si indisponible.
fetch('/version.json', { headers: { accept: 'application/json' } })
  .then((reponse) => (reponse.ok ? reponse.json() : null))
  .then((donnees) => {
    if (donnees && typeof donnees.version === 'string' && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
    }
  })
  .catch(() => { });
