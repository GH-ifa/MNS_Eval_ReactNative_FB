# Projet React-Native pour Franck B.

## Plusieurs écrans

L'application utilise plusieurs écrans :

- **Home** avec les boutons permettant d'accéder aux autres écrans
- **Villagers** qui affiche la liste des villageois d'Animal Crossing
- **Details** qui affiche le portrait d'un des villageois d'Animal Crossing au choix dans la liste
- **Camera** qui, après demande des permissions, affiche la caméra du mobile

## Utilisation d'une API

L'application utilise l'API http://acnhapi.com/ permettant de récupérer la liste de tous les personnages du jeu Animal Crossing

## Utilisation des fonctionnalités du matériel

### Camera

L'application utilise la caméra du téléphone grâce à _react-native-vision-camera_
L'écran correspondant demande les permissions à l'utilisateur, puis affiche la vue de la caméra du téléphone, un bouton Flash en haut à gauche permettant d'activer ou désactiver le flash, un bouton rond en bas permettant la capture d'une photo. La photo prise apparait au dessus du bouton.

### Document Picker

L'application utilise le document picker grâce à _react-native-document-picker_
Après pression du bouton correspondant, l'appli ouvre le document picker ne permettant de sélectionner que les fichiers de type images. Une fois le fichier sélectionné, son URI s'affiche dans la console.

## Affiche d'une liste

L'application affiche la liste des personnages d'Animal Crossing (récupérée par l'API). Celle-ci étant un peu conséquente (plus de 300 éléments) et afin d'éviter des ralentissements j'ai utilisé une FlatList permettant l'affichage des éléments seulements quand ils apparaissent dans notre vue. J'ai créé un component ListItem pour celà.
Au clic sur un élément de la liste, l'appli ouvre la page de détails du personnage sélectionné.

## Notifications

L'application envoie des notifications grâce à **@notifee/react-native**
Après pression sur le bouton correspondant, le téléphone reçoit une notification.

## Icône personnalisé

L'application possède un icône personnalisé. C'est plus beau.
