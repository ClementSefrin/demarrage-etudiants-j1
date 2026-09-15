import test from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';

test('une chaine vide est refusee', async () => {
    const response = validateMessage('')
    assert.ok(!response.ok, 'une chaine vide n\'est pas ok')
})

test('" salut " est acceptee avec value egale a "salut"', async () => {
    const response = validateMessage(' salut ')
    assert.equal(response.value, 'salut', '" salut " doit renvoyer "salut"')
})

test('280 caractères passent, 281 sont refusés', async () => {
    let response = validateMessage('a'.repeat(280))
    assert.ok(response.ok, '280 caractères devraient passer')
    response = validateMessage('a'.repeat(281))
    assert.ok(!response.ok, '281 caractères ne devraient pas passer')
})

test("replyTo('SALUT') et replyTo('salut') donnent la même réponse", async () => {
    const replyToSALUT = replyTo('SALUT')
    const replyTosalut = replyTo('salut')
    assert.ok(replyToSALUT === replyTosalut, "replyTo('SALUT') et replyTo('salut') donnent la même réponse : 'Salut !'")
})

test('une phrase inconnue reçoit une réponse, différente de celle de « aide »', async () => {
    const replyToAide = replyTo(' Aide ')
    const replyToInconnu = replyTo('inconnu')

    assert.ok(replyToInconnu !== "", 'un message inconnu devrait renvoyer une reponse')
    assert.ok(replyToInconnu !== replyToAide, 'un message inconnu et le message "aide" devrait recevoir une reponse differente')
})