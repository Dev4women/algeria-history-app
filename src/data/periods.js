const periods = [
  {
    id: 1,
    title: "L'Algérie antique",
    description: "Des royaumes berbères aux échanges méditerranéens",
    lessons: [
      {
        id: 1,
        title: "La Numidie et Massinissa",
        content: `La Numidie était un royaume berbère antique situé dans le nord de l'Algérie actuelle. Son roi le plus célèbre, Massinissa, régna au IIe siècle avant J.-C. et parvint à unifier la quasi-totalité du territoire sous son autorité. Sa capitale, Cirta (l'actuelle Constantine), devint un centre politique et culturel important. Avant son règne, le royaume était divisé, notamment avec son rival Syphax, roi d'une autre partie de la Numidie, allié de Carthage. Massinissa choisit quant à lui de s'allier à Rome, ce qui lui permit, après la victoire romaine sur Carthage, d'étendre considérablement son territoire. Son règne dura environ 60 ans, jusqu'à sa mort en 148 avant J.-C.`,
        quiz: [
          {
            question: "Qui était le roi numide qui unifia la quasi-totalité du nord de l'Algérie ?",
            options: ["Jugurtha", "Massinissa", "Syphax", "Juba II"],
            correctAnswer: "Massinissa",
          },
          {
            question: "Quelle était la capitale du royaume de Numidie ?",
            options: ["Hippone", "Cirta", "Tipasa", "Tlemcen"],
            correctAnswer: "Cirta",
          },
          {
            question: "Quel roi rival, allié de Carthage, s'opposait à Massinissa ?",
            options: ["Syphax", "Jugurtha", "Juba II", "Bocchus"],
            correctAnswer: "Syphax",
          },
          {
            question: "Avec quelle puissance Massinissa choisit-il de s'allier ?",
            options: ["Carthage", "Rome", "l'Égypte", "la Grèce"],
            correctAnswer: "Rome",
          },
          {
            question: "Pendant combien d'années environ Massinissa régna-t-il ?",
            options: ["20 ans", "40 ans", "60 ans", "80 ans"],
            correctAnswer: "60 ans",
          },
        ],
      },
      {
        id: 2,
        title: "Carthage et les échanges en Méditerranée",
        content: `Carthage, fondée par les Phéniciens sur la côte de l'actuelle Tunisie, exerçait une influence commerciale et militaire considérable sur toute la région, y compris sur le territoire de l'actuelle Algérie. Les échanges entre Carthage et les royaumes berbères voisins, dont la Numidie, étaient à la fois commerciaux et parfois conflictuels. Les guerres puniques, qui opposèrent Carthage à Rome sur près d'un siècle, eurent des répercussions directes sur les royaumes numides. Lors de la troisième guerre punique, Massinissa s'allia à Rome contre Carthage, contribuant à la destruction définitive de la cité en 146 avant J.-C.`,
        quiz: [
          {
            question: "Qui a fondé Carthage ?",
            options: ["Les Grecs", "Les Phéniciens", "Les Romains", "Les Berbères"],
            correctAnswer: "Les Phéniciens",
          },
          {
            question: "Carthage s'opposa principalement à quelle puissance lors des guerres puniques ?",
            options: ["L'Égypte", "La Grèce", "Rome", "La Perse"],
            correctAnswer: "Rome",
          },
          {
            question: "Sur quelle côte actuelle Carthage était-elle située ?",
            options: ["Le Maroc", "La Tunisie", "La Libye", "L'Algérie"],
            correctAnswer: "La Tunisie",
          },
          {
            question: "En quelle année Carthage fut-elle détruite ?",
            options: ["146 avant J.-C.", "44 avant J.-C.", "212 avant J.-C.", "30 avant J.-C."],
            correctAnswer: "146 avant J.-C.",
          },
          {
            question: "Avec qui Massinissa s'allia-t-il lors de la troisième guerre punique ?",
            options: ["Carthage", "Rome", "Syphax", "La Grèce"],
            correctAnswer: "Rome",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "L'Algérie médiévale et ottomane",
    description: "Dynasties musulmanes et la régence d'Alger",
    lessons: [
      {
        id: 3,
        title: "Les dynasties musulmanes",
        content: `Après la conquête arabo-musulmane du VIIe siècle, le territoire de l'actuelle Algérie connut une succession de dynasties berbères islamisées. Les Almoravides, des Berbères Sanhaja originaires du Sahara, fondèrent un vaste empire au XIe siècle, avec Marrakech comme capitale, et étendirent leur influence jusqu'en Espagne musulmane (Al-Andalus). Au XIIe siècle, les Almohades, menés initialement par Ibn Toumert, succédèrent aux Almoravides et étendirent encore davantage leur territoire sur le Maghreb et la péninsule ibérique. Ces dynasties marquèrent profondément la culture, l'architecture et la religion de la région.`,
        quiz: [
          {
            question: "D'où étaient originaires les Almoravides ?",
            options: ["Du Sahara", "De l'Espagne", "De l'Égypte", "De la Perse"],
            correctAnswer: "Du Sahara",
          },
          {
            question: "Quelle dynastie succéda aux Almoravides dans la région ?",
            options: ["Les Ottomans", "Les Almohades", "Les Fatimides", "Les Omeyyades"],
            correctAnswer: "Les Almohades",
          },
          {
            question: "Quelle était la capitale de l'empire almoravide ?",
            options: ["Cirta", "Fès", "Marrakech", "Tlemcen"],
            correctAnswer: "Marrakech",
          },
          {
            question: "Qui mena initialement le mouvement almohade ?",
            options: ["Ibn Toumert", "Khayr ad-Din", "Massinissa", "Hussein Dey"],
            correctAnswer: "Ibn Toumert",
          },
          {
            question: "Jusqu'où s'étendit l'influence almoravide puis almohade ?",
            options: ["Jusqu'en Égypte", "Jusqu'en Espagne (Al-Andalus)", "Jusqu'en Perse", "Jusqu'en Italie"],
            correctAnswer: "Jusqu'en Espagne (Al-Andalus)",
          },
        ],
      },
      {
        id: 4,
        title: "La régence d'Alger sous les Ottomans",
        content: `En 1518, le corsaire Khayr ad-Din, connu sous le nom de Barberousse, plaça Alger sous la protection de l'Empire ottoman afin de contrer la pression espagnole sur les côtes nord-africaines. Cette période marqua le début de la régence d'Alger, une entité semi-autonome au sein de l'Empire ottoman, dirigée localement par des deys, tout en reconnaissant la souveraineté du sultan ottoman. La régence devint une puissance maritime redoutée en Méditerranée, notamment grâce à l'activité de ses corsaires. Cette période dura jusqu'à la conquête française de 1830, qui mit fin à plus de trois siècles de présence ottomane.`,
        quiz: [
          {
            question: "Quel corsaire plaça Alger sous protection ottomane en 1518 ?",
            options: ["Khayr ad-Din (Barberousse)", "Hassan Pacha", "Hussein Dey", "Salah Raïs"],
            correctAnswer: "Khayr ad-Din (Barberousse)",
          },
          {
            question: "Comment appelait-on les dirigeants locaux de la régence d'Alger ?",
            options: ["Sultans", "Deys", "Émirs", "Califes"],
            correctAnswer: "Deys",
          },
          {
            question: "Quelle puissance européenne la régence d'Alger cherchait-elle à contrer en 1518 ?",
            options: ["La France", "L'Espagne", "L'Angleterre", "Le Portugal"],
            correctAnswer: "L'Espagne",
          },
          {
            question: "Quelle activité maritime rendit la régence d'Alger redoutée en Méditerranée ?",
            options: ["Le commerce d'épices", "La piraterie/course", "La pêche", "La construction navale"],
            correctAnswer: "La piraterie/course",
          },
          {
            question: "Quel événement mit fin à la régence ottomane d'Alger ?",
            options: ["La conquête française de 1830", "La guerre de libération de 1954", "Les accords d'Évian de 1962", "La bataille d'Isly"],
            correctAnswer: "La conquête française de 1830",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "La colonisation française",
    description: "De la conquête de 1830 aux massacres de 1945",
    lessons: [
      {
        id: 5,
        title: "La conquête de 1830 et la résistance",
        content: `La France envahit l'Algérie en 1830, sous prétexte d'un incident diplomatique avec le dey d'Alger. Cette invasion marqua le début d'une colonisation qui allait durer plus d'un siècle. La résistance à la conquête française fut menée notamment par l'Émir Abdelkader, désigné chef de la résistance le 27 novembre 1832 par les tribus de l'ouest algérien. Il établit sa capitale à Mascara et signa le traité de la Tafna en 1837, qui lui reconnaissait le contrôle de l'ouest et du centre de l'Algérie. Les combats reprirent cependant, et après plusieurs années de lutte acharnée face aux troupes du maréchal Bugeaud, Abdelkader se rendit au général de Lamoricière le 23 décembre 1847, mettant fin à quinze années de résistance organisée.`,
        quiz: [
          {
            question: "En quelle année la France a-t-elle commencé la colonisation de l'Algérie ?",
            options: ["1820", "1830", "1845", "1860"],
            correctAnswer: "1830",
          },
          {
            question: "Qui mena une résistance armée structurée contre la conquête française ?",
            options: ["L'Émir Abdelkader", "Cheikh Bouziane", "Ahmed Bey", "Lalla Fatma N'Soumer"],
            correctAnswer: "L'Émir Abdelkader",
          },
          {
            question: "Quelle ville l'Émir Abdelkader choisit-il comme capitale de sa résistance ?",
            options: ["Tlemcen", "Mascara", "Constantine", "Oran"],
            correctAnswer: "Mascara",
          },
          {
            question: "Quel traité, signé en 1837, reconnut à Abdelkader le contrôle de l'ouest et du centre de l'Algérie ?",
            options: ["Le traité de la Tafna", "Le traité d'Évian", "Le traité de Tlemcen", "Le traité Desmichels"],
            correctAnswer: "Le traité de la Tafna",
          },
          {
            question: "À quelle date Abdelkader se rendit-il, mettant fin à sa résistance ?",
            options: ["8 mai 1845", "23 décembre 1847", "1er novembre 1854", "5 juillet 1862"],
            correctAnswer: "23 décembre 1847",
          },
        ],
      },
      {
        id: 6,
        title: "Les massacres de Sétif, Guelma et Kherrata (1945)",
        content: `Le 8 mai 1945, alors que l'Europe célébrait la victoire sur le nazisme, des manifestations nationalistes algériennes à Sétif furent réprimées dans la violence par les autorités coloniales françaises. Cette répression s'étendit à Guelma et Kherrata, faisant des milliers de victimes parmi la population algérienne. Cet événement, survenu le même jour que la capitulation allemande marquant la fin de la Seconde Guerre mondiale en Europe, est considéré comme un tournant majeur, renforçant le sentiment nationaliste qui conduira, neuf ans plus tard, à la guerre de libération.`,
        quiz: [
          {
            question: "À quelle date ont eu lieu les massacres de Sétif, Guelma et Kherrata ?",
            options: ["8 mai 1945", "1er novembre 1954", "20 août 1955", "5 juillet 1962"],
            correctAnswer: "8 mai 1945",
          },
          {
            question: "Quel événement mondial coïncidait avec ces massacres ?",
            options: ["La fin de la Première Guerre mondiale", "La victoire alliée sur le nazisme", "La crise économique de 1929", "La guerre de Corée"],
            correctAnswer: "La victoire alliée sur le nazisme",
          },
          {
            question: "Quelles étaient les trois villes touchées par cette répression ?",
            options: ["Sétif, Guelma et Kherrata", "Alger, Oran et Constantine", "Sétif, Tlemcen et Annaba", "Guelma, Tipaza et Béjaïa"],
            correctAnswer: "Sétif, Guelma et Kherrata",
          },
          {
            question: "Qui réprima les manifestations nationalistes de mai 1945 ?",
            options: ["Les autorités coloniales françaises", "L'armée ottomane", "Les forces espagnoles", "Le FLN"],
            correctAnswer: "Les autorités coloniales françaises",
          },
          {
            question: "Combien d'années séparent ces massacres du début de la guerre de libération ?",
            options: ["3 ans", "9 ans", "15 ans", "20 ans"],
            correctAnswer: "9 ans",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "La guerre de libération",
    description: "De 1954 à l'indépendance de 1962",
    lessons: [
      {
        id: 7,
        title: "Le déclenchement de la révolution (1954)",
        content: `Le 23 octobre 1954, six chefs historiques se réunirent secrètement à Alger pour préparer le déclenchement de la révolution : Mohamed Boudiaf, Larbi Ben M'hidi, Mustapha Benboulaïd, Krim Belkacem, Didouche Mourad et Rabah Bitat. Ils décidèrent de fonder le Front de Libération Nationale (FLN) ainsi que sa branche armée, l'Armée de Libération Nationale (ALN). Le 1er novembre 1954, le FLN déclencha une insurrection armée à travers plusieurs régions d'Algérie, marquant le début officiel de la guerre de libération. Larbi Ben M'hidi, l'un des six chefs historiques, fut capturé par les forces françaises en février 1957 et mourut en détention la même année, devenant une figure emblématique des chouhada (martyrs) de la révolution. La lutte allait durer près de huit ans.`,
        quiz: [
          {
            question: "À quelle date a débuté la guerre de libération algérienne ?",
            options: ["8 mai 1945", "1er novembre 1954", "18 mars 1962", "5 juillet 1962"],
            correctAnswer: "1er novembre 1954",
          },
          {
            question: "Quel mouvement a organisé l'insurrection armée de 1954 ?",
            options: ["Le FLN", "L'UDMA", "Le MTLD", "L'AML"],
            correctAnswer: "Le FLN",
          },
          {
            question: "Combien de chefs historiques se réunirent le 23 octobre 1954 pour préparer la révolution ?",
            options: ["Quatre", "Six", "Huit", "Dix"],
            correctAnswer: "Six",
          },
          {
            question: "Quel chef historique fut capturé en février 1957 et mourut en détention la même année ?",
            options: ["Mustapha Benboulaïd", "Larbi Ben M'hidi", "Krim Belkacem", "Rabah Bitat"],
            correctAnswer: "Larbi Ben M'hidi",
          },
          {
            question: "Comment appelle-t-on les martyrs de la révolution algérienne ?",
            options: ["Les deys", "Les chouhada", "Les corsaires", "Les moudjahidines"],
            correctAnswer: "Les chouhada",
          },
        ],
      },
      {
        id: 8,
        title: "L'indépendance (1962)",
        content: `Après huit années de guerre, les accords d'Évian, signés le 18 mars 1962, mirent fin aux combats entre la France et le FLN. Un référendum d'autodétermination eut lieu le 1er juillet 1962, où la population algérienne se prononça massivement en faveur de l'indépendance, avec un score de 99,72% de "oui". Celle-ci fut officiellement proclamée le 5 juillet 1962, mettant fin à 132 ans de colonisation française. Ahmed Ben Bella devint le premier président de la République algérienne, élu en septembre 1963.`,
        quiz: [
          {
            question: "Quels accords ont mis fin aux combats de la guerre de libération ?",
            options: ["Les accords de Genève", "Les accords d'Évian", "Les accords d'Alger", "Les accords de Tripoli"],
            correctAnswer: "Les accords d'Évian",
          },
          {
            question: "À quelle date l'indépendance de l'Algérie a-t-elle été proclamée ?",
            options: ["1er juillet 1962", "18 mars 1962", "5 juillet 1962", "3 juillet 1962"],
            correctAnswer: "5 juillet 1962",
          },
          {
            question: "Quel pourcentage de \"oui\" obtint le référendum du 1er juillet 1962 ?",
            options: ["85%", "92%", "99,72%", "100%"],
            correctAnswer: "99,72%",
          },
          {
            question: "Combien d'années de colonisation française l'indépendance met-elle fin ?",
            options: ["100 ans", "115 ans", "132 ans", "150 ans"],
            correctAnswer: "132 ans",
          },
          {
            question: "Qui devint le premier président de la République algérienne ?",
            options: ["Ferhat Abbas", "Houari Boumédiène", "Ahmed Ben Bella", "Mohamed Boudiaf"],
            correctAnswer: "Ahmed Ben Bella",
          },
        ],
      },
    ],
  },
];

export default periods;