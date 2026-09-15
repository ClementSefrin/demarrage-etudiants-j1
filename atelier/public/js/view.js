export function renderMessage(messages, container) {
    const lignes = messages.map(message => {
        const el = document.createElement('li')
        el.textContent = message.role + ' : ' + message.text
        message.role === "Vous" ? el.classList.add("vous")  : el.classList.add("agent")
        return el
    });
    container.replaceChildren(...lignes)
}