# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : Clément SÉFRIN
- Binôme : Aucun (nombre impair d'étudiants présents)
- Atelier utilisé (le mien, celui du binôme, la reprise) : le mien

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP 06

- J'ai prédit :
- Nous avons fait : Vérification que l'état de l'atelier est le bon avant de commencer les TPs après-midi
- J'ai observé : L'état est bon
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP : La ligne 7 `event.preventDefault();` empêche la page de se recharger à l'envoi en bloquant le comportant de base du bouton submit du formulaire.

### TP 07

- J'ai prédit :
- Nous avons fait : Affichage des messages envoyé par l'utilisateur et affichage du nombre de charactères dans le message pendant la frappe.
- J'ai observé : 
- J'ai compris : Tout
- Je n'ai pas compris : 
- Réponse à la question « Dans le suivi » du TP : la propriété texContent modifie le contenu dans l'élément html ciblé alors que innerHTML modifier le balisage html en lui-même. Envoyer `<b>gras</b>` avec innerHTML aurait afficher le mot "gras" en gras comme ceci : **gras**

### TP 08

- J'ai prédit : Un switch avec des messages de réponse pour les trois messages pré définis et un message d'erreur pour le reste.
- Nous avons fait : Un simple if else
- J'ai observé : En ne mettant que `import {...} from './brain'`, le navigateur n'arrivait pas à charger le fichier. Initialement, l'onglet Network de l'inspecteur du navigateur montrait un type incorrect, ce qui m'a fait pensé que le problème venait des modifications du fichier `server/app.js`. Après vérification, ce fichier était correct. En analysant la requête exacte, j'ai compris que le chemin était incorrect, et que le problème venait de l'import. J'ai donc mis un peu de temps avant de comprendre d'où venait l'erreur.
- J'ai compris : Il faut bien préciser l'extension du fichier dans les imports.
- Je n'ai pas compris : Comment ranger les règles dans un object pour le défi.
- Réponse à la question « Dans le suivi » du TP : Si `brain` utilise `document`, je pense que le navigateur aurait accès à des fichiers et données potentiellement privées. Cela risquerait de donner un accès non autorisé à des informations sensibles.

### TP 09

- J'ai prédit : On va séparer les fonctions selon leur rôle dans des fichiers spéifiques pour que chaque fichier ait un rôle, ce qui facilite la lisibilité et le maintien du code.
- Nous avons fait : 
- J'ai observé : 
- J'ai compris : 
- Je n'ai pas compris : Comment utiliser `li.dataset.role` pour le défi. Donc j'ai utilisé `flex` en donnant des `id` aux `li`
- Réponse à la question « Dans le suivi » du TP : `brain.js` gère la logique de réponse du chatbot. `view.js` gère la logique d'affichage des messages. Et `app.js` détecte les interactions de l'utilisateur pour faire le lien entre l'interface, la logique de réponse, et la logique d'affichage.

### TP 10

- J'ai prédit :
- Nous avons fait : Régler le fait que le champ de message ne se vide pas après l'envoi d'un message en remplaçant `textContent` par `value`.
- J'ai observé : 
- J'ai compris : Tout, j'avais déjà utilisé `localStorage` dans un projet précédent
- Je n'ai pas compris : 
- Réponse à la question « Dans le suivi » du TP : La conversation apparaitra dans un autre onglet et même dans une autre fenêtre car `localStorage` permet d'accéder au stockage du navigateur. Dans une session de navigation privée, la conversation n'apparaitra pas car la navigation privée à son propre contexte à part.

### TP 

- J'ai prédit :
- Nous avons fait :
- J'ai observé :
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :

### TP 

- J'ai prédit :
- Nous avons fait :
- J'ai observé :
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :
