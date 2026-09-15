export function validateMessage(raw) {
    const cleanedText = raw.trim();
    if (typeof raw !== typeof "" || cleanedText.length === 0 || cleanedText.length > 280) {
        return {
            ok: false,
            error: typeof raw !== typeof "" ? 'Le champ doit être une chaîne de charactères !' :
                cleanedText.length === 0 ? 'Le champ ne doit pas être vide !' : 'Le champ est trop long (max : 280) !'
        }
    }
    return {
        ok: true,
        value: cleanedText
    }
}


export function replyTo(message) {
    const formattedMessage = message.toLowerCase().trim()
    if (formattedMessage === "bonjour" || formattedMessage === "salut") {
        return (formattedMessage === 'bonjour' ? 'Bonjour' : 'Salut') + ' !'
    } else if (formattedMessage === "aide") {
        return 'Si vous avez besoin d\'aide, écrivez "Aide". Pour faire un test, écrivez "Test".'
    } else if (formattedMessage === "test") {
        return "test"
    } else {
        return "Je ne connais que les mots Bonjour/Salut, Aide et Test."
    }
}