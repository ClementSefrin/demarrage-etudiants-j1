import { validateMessage, replyTo } from "./brain.js";

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message')
const liste = document.querySelector('#messages')

// J1 : interface seule, on bloque l’envoi et on l’explique.
formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();
  const validatedMessage = validateMessage(champ.value)
  console.log(validatedMessage)

  if (!validatedMessage?.ok) {
    statut.textContent = validatedMessage?.error
    champ.focus()
    return
  }

  const messageElt = document.createElement('li')
  messageElt.textContent = "Vous : " + champ.value
  liste.append(messageElt)
  const reponseElt = document.createElement('li')
  reponseElt.textContent = "Cap Web : " + replyTo(validatedMessage?.value)
  liste.append(reponseElt)
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
