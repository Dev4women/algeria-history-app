const periods = [
  {
    id: 1,
    title: "L'Algérie antique",
    description: "Des royaumes berbères aux échanges méditerranéens",
    lessons: [
      {
        id: 1,
        title: "La Numidie et Massinissa",
        content: `La Numidie était un royaume berbère antique situé dans le nord de l'Algérie actuelle. Son roi le plus célèbre, Massinissa, régna au IIe siècle avant J.-C. et parvint à unifier la quasi-totalité du territoire sous son autorité. Sa capitale, Cirta (l'actuelle Constantine), devint un centre politique et culturel important. Massinissa noua des alliances stratégiques, notamment avec Rome, ce qui lui permit de renforcer son royaume face aux puissances rivales de la région, dont Carthage.`,
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
        ],
      },
      {
        id: 2,
        title: "Carthage et les échanges en Méditerranée",
        content: `Carthage, fondée par les Phéniciens sur la côte de l'actuelle Tunisie, exerçait une influence commerciale et militaire considérable sur toute la région, y compris sur le territoire de l'actuelle Algérie. Les échanges entre Carthage et les royaumes berbères voisins, dont la Numidie, étaient à la fois commerciaux et parfois conflictuels. Les guerres puniques, qui opposèrent Carthage à Rome, eurent des répercussions directes sur les royaumes numides, contraints de choisir leur camp dans ce conflit.`,
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
        content: `Après la conquête arabo-musulmane du VIIe siècle, le territoire de l'actuelle Algérie connut une succession de dynasties berbères islamisées. Les Almoravides, originaires du Sahara, puis les Almohades, étendirent leur influence sur une large partie du Maghreb et de l'Espagne musulmane (Al-Andalus). Ces dynasties marquèrent profondément la culture, l'architecture et la religion de la région.`,
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
        ],
      },
      {
        id: 4,
        title: "La régence d'Alger sous les Ottomans",
        content: `En 1518, le corsaire Khayr ad-Din, connu sous le nom de Barberousse, plaça Alger sous la protection de l'Empire ottoman afin de contrer la pression espagnole sur les côtes nord-africaines. Cette période marqua le début de la régence d'Alger, une entité semi-autonome au sein de l'Empire ottoman, dirigée localement par des deys, tout en reconnaissant la souveraineté du sultan ottoman.`,
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
        content: `La France envahit l'Algérie en 1830, sous prétexte d'un incident diplomatique avec le dey d'Alger. Cette invasion marqua le début d'une colonisation qui allait durer plus d'un siècle. La résistance à la conquête française fut menée notamment par l'Émir Abdelkader, qui organisa une résistance armée structurée pendant plus d'une décennie avant sa reddition en 1847.`,
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
        ],
      },
      {
        id: 6,
        title: "Les massacres de Sétif, Guelma et Kherrata (1945)",
        content: `Le 8 mai 1945, alors que l'Europe célébrait la victoire sur le nazisme, des manifestations nationalistes algériennes à Sétif furent réprimées dans la violence par les autorités coloniales françaises. Cette répression s'étendit à Guelma et Kherrata, faisant des milliers de victimes parmi la population algérienne. Cet événement est considéré comme un tournant majeur, renforçant le sentiment nationaliste qui conduira à la guerre de libération.`,
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
        content: `Le 1er novembre 1954, le Front de Libération Nationale (FLN) déclenche une insurrection armée à travers plusieurs régions d'Algérie, marquant le début officiel de la guerre de libération. Des figures comme Larbi Ben M'hidi, Mostefa Ben Boulaïd ou Didouche Mourad organisèrent cette lutte, qui allait durer près de huit ans et coûter de nombreuses vies, tant civiles que militaires.`,
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
        ],
      },
      {
        id: 8,
        title: "L'indépendance (1962)",
        content: `Après huit années de guerre, les accords d'Évian, signés le 18 mars 1962, mirent fin aux combats entre la France et le FLN. Un référendum d'autodétermination eut lieu le 1er juillet 1962, où la population algérienne se prononça massivement en faveur de l'indépendance. Celle-ci fut officiellement proclamée le 5 juillet 1962, mettant fin à 132 ans de colonisation française.`,
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
        ],
      },
    ],
  },
];

export default periods;