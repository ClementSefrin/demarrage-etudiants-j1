import { validateMessage, replyTo } from "./brain.js";
import { renderMessage } from "./view.js";

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message')
const liste = document.querySelector('#messages')
const effacer = document.querySelector('#effacer')

let historique = []

window.addEventListener('load', () => {
  try {
    const oldHist = localStorage.getItem('capweb.historique')
    if (oldHist === null) {
      return
    }

    historique = JSON.parse(oldHist)
    renderMessage(historique, liste)
  } catch (error) {
    console.error('Impossible de charger l\'historique')
  }
})

effacer?.addEventListener('click', (event) => {
  const response = confirm('Voulez-vous vraiment supprimer l\'historique de la conversation?')

  if (!response) {
    return
  }

  historique = []
  localStorage.removeItem('capweb.historique')
  renderMessage([], liste)
})

// J1 : interface seule, on bloque l’envoi et on l’explique.
formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();
  const validatedMessage = validateMessage(champ.value)

  if (!validatedMessage?.ok) {
    statut.textContent = validatedMessage?.error
    champ.focus()
    return
  }

  historique.push({
    role: 'Vous',
    text: champ.value
  })
  historique.push({
    role: 'Cap Web',
    text: replyTo(validatedMessage?.value)
  })

  renderMessage(historique, liste)
  localStorage.setItem('capweb.historique', JSON.stringify(historique))
  champ.value = ""
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
