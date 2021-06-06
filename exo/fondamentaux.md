# Exercice : Les fondamentaux

## 1. Afficher un nom complet

Créer les variables suivante

```js
let nom = "Dupont";
let prenom = "Jean";
```

Afficher dans la console en utilisant `console.log`
le nom complet: "Jean Dupont"

## 2. Déterminer la majorité

Avec le code suivant :

```js
let age = 30;
```

Afficher dans la console :

1. `"Je suis mineur"` : Si l'age est inférieur à 18
2. `"Je suis majeur"` : Si l'age est supérieur ou égale à 18 et inférieur à 60
3. `"Je suis senior"` : Si l'age est supérieur ou égale à 60

## 3. Afficher un élément de tableaux

Avec le code suivant :

```js
let noms = ["Jean", "Jack", "John", "David"];
```

Afficher dans la console "John"

## 4. Boucler sur un tableaux (for .. in)

Avec le code suivant :

```js
let noms = ["Jean", "Jack", "John", "David"];
```

Afficher dans la console tout les noms en utilisant
une boucle **`for ... in`**

## 5. Boucler sur un tableaux (for .. of)

Avec le code suivant :

```js
let noms = ["Jean", "Jack", "John", "David"];
```

Afficher dans la console tout les noms en utilisant
une boucle **`for ... of`**

## 6. Afficher les élément d'un objet

Avec le code suivant :

```js
let eleve = {
	nom: "Dupont",
	prenom: "Jean",
	age: 42,
};
```

Afficher dans la console la phrase suivante:

```
"Bonjour Jean Dupont, vous avez 42 ans."
```

## 7. Affichage les élément d'un objet (avancée)

Avec le code suivant :

```js
let eleve = {
	nom: "Dupont",
	prenom: "Jean",
	age: 42,
	note: [12, 8, 16, 19, 18],
};
```

Afficher dans la console la phrase suivante:

```
"Bonjour Jean Dupont, vous avez 42 ans."
```

Puis afficher dans la console la phrase suivante:

```
"Vos notes: 12/20, 8/20, 16/20, 19/20, 18/20"
```

## 8. Fonction moyenne

Avec le code suivant, compléter tout les `...` :

```js
let eleve = {
	nom: "Dupont",
	prenom: "Jean",
	age: 42,
	note: [12, 8, 16, 19, 18],
};

const moyenne = function (notes) {
	...
}

console.log(`${eleve.prenom} ${eleve.nom} : ${moyenne(...)} / 20`);
```
