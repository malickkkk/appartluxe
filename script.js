const container = document.querySelector('#burger-container')

// Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML

// Etape 1
// Pour chacun des burgers affiche le nom dans la console
const burgerList = [ {
    


    "nom": "Maison / Villa • Valmasque-Notre Dame de Vie, Mougins",
    "description": "Cette propriété exceptionnelle est située dans l'un des quartiers les plus prisés de Mougins. Elle se compose d'une magnifique bastide rénovée de 400 m² avec une grande piscine chauffée de 16 x 6 mètres, ainsi que d'une maison d'amis de 161 m² avec sa propre piscine, le tout sur un terrain plat et paysager de 6031 m².",
    "prix":   40000000,
    "img": "https://v.seloger.com/s/cdn/x/visuels/0/k/s/h/0kshdpk10u9mr5mpcitcyemnsxx98khhpfldiobds.jpg",
    "Caracteristiques": ["10  Pièces  •   8   Chambres   •   Surface de 561 m²"]},
    {
        "nom": "Villa • La Croix-Valmer",
        "description": "Adresse recherchée, secteur Gigaro-La Croix Valmer, élégante Propriété en position dominante et bénéficiant de vues mers et collines panoramiques ; Le Bien présente un terrain de tennis privatif au sein de son jardin paysager de 8516 m2 ainsi qu'une piscine chauffée de 13 mètres sur 6 mètres ainsi qu'un terrain de pétanque.  Villa de 4 grandes chambres ' en suite', double séjour lumineux, cuisine indépendante, cellier, double garage,  Surface d'environ 307 m2 complété d'une belle surface de double garage.  De nombreuses terrasses et une cuisne d'été complète ce rare ensemble, idéalement situé, à l'abri des regrads et au calme, au sein d'un écrin ciel/terre/mer.",
        "prix": 6500000 ,
        "img": "https://v.seloger.com/s/crop/933x645/visuels/0/u/o/6/0uo6gd7pi6imey1nll3ve2pnsex9nsvlf2gyrhwxs.jpg",
        "Caracteristiques": ["7    Pièces    •    4    Chambres    •    Surface de 307 m²"]


    },
    {
        "nom": "Villa • Village-Le Val-Cabrieres, Mougins",
        "description": " Mougins - Domaine fermé - Vue mer panoramique - 5 chambres Exceptionnelle propriété d'environ 381 m2 au coeur d'un petit domaine sécurisé dans un des quartiers des plus prisés de Mougins, à quelques pas du village de Mougins. Elle offre de larges volumes et une belle luminosité, une superbe vue panoramique, sans vis-à-vis, et au calme absolu, elle se compose au rez-de-chaussée d'une entrée, un vaste séjour avec cheminée / salle à manger ouvrant sur jardin, cuisine, une suite avec salle de bains, au 1er ètage, une chambre de Maitre avec dressing et salle de bains en suite, 1 suite avec salle de bains, et 1 autre chambre avec salle de bains, au rez-de-jardin, salon cinéma, chambre avec salle de bains, appartement indépendant avec cuisine, 2 chambres avec salle de douche en suite ouvrant sur terrasse, une chambre avec salle de douche en suite pour le personnel. Superbe parc paysager de plus de 2400 m2 et large piscine. Abri 4 voitures et plusieurs parkings.",
        "prix": 4750000 ,
        "img": "https://v.seloger.com/s/crop/933x645/visuels/0/d/y/1/0dy1o816fkaxs9z74dx8rdb5pcla0gu5w22wjjlog.jpg",
        "Carcateristiques": ["11      Pièces      •    8    Chambres    •   Surface de 381 m²"]



    },
    {
        "nom": "Maison d'architecte • Sainte Marguerite, Marseille 9ème",
        "description": " Dans le 9ème arrondissement de Marseille, propriété ultra-contemporaine à vendre avec piscine chauffée et sous-sol.Nous vous présentons cette propriété située au calme, dans le quartier prisé de Sainte-Marguerite. Avec plus de 300 m² habitables, cette luxueuse maison familiale offre des prestations de qualité. Elle se déploie sur 3 étages et un grand sous-sol reliés par un ascenseur.  Le rez-de-chaussée offre un vaste double séjour ainsi qu'une sublime cuisine avec une hauteur sous plafond de plus de 4,50 mètres. Ce niveau est ouvert sur l'extérieur avec une terrasse et une piscine de 18 mètres chauffée.  À l'étage supérieur, une mezzanine de 32 m² avec sa salle de bain.  Le dernier étage constitue la partie nuit avec 2 grandes chambres et une belle suite parentale.  Au sous-sol, une surface de plus de 95 m² est entièrement aménagée pour créer de nouveaux espaces comme un appartement, un espace sauna /détente et une cave à vin.  Le rooftop est accessible pour créer une terrasse supplémentaire.",
        "prix":  1690000,
        "img": "https://v.seloger.com/s/crop/933x645/visuels/0/l/p/k/0lpkvx8r2ex1xitc44u9i8mgnz38i3kdmlilsx4ao.jpg",
        "Caracteristiques": ["7   Pièces  •  3  Chambres  •  Surface de 300 m²"]
     },
        {
            "nom": "Maison / Villa • Les Carroz d'Arraches",
            "description": "Sur le Domaine skiable du Grand Massif, emplacement exceptionnel, en bordure de piste de ski (Ski In, Ski Out), au bout d'une impasse bénéficiant d'une vue panoramique sur les massifs, Magnifique complexe hôtelier composé d'une ferme plus deux chalets pour un total d'environ 1177 m2 habitables, mélange de vieux bois et belles pierres à l'atmosphère authentique savoyarde vous raviront",
            "prix": 7900000,
            "img": "https://v.seloger.com/s/crop/933x645/visuels/1/i/z/e/1izeqffiw9712wfeclrmrzh9tb635xpy8lwt9ltvk.jpg",
            "Caracteristiques": ["7     Pièces    •    3    Chambres    •    Surface de 300 m²"]
            }
    


]
   

    burgerList.forEach(e => {
    console.log(e)
  })
// Etape 2
// Dans #burger-container afficher le nom des burgers
const burgercontainer = document.querySelector('#burger-container')
burgerList.forEach(burgerList => {
burgercontainer .innerHTML += `     
<div class="bg-red-100 rounded shadow p-4 m-2 cursor-pointer transition transform hover:scale-105">
<img class="w-40 h-40 object-cover" src="${burgerList.img}">
<div class="text-indigo-500 text-xs font-medium">${burgerList.nom}</div>
<div class="text-gray-900 text-lg font-medium">${burgerList.prix}</div>
<div class="text-base">${burgerList.description}</div> 
<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"> Caractéristiques: ${burgerList.Caracteristiques} </div>`

 
})
