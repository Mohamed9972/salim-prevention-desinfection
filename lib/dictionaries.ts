import type { Locale } from "./i18n";

export type Dictionary = typeof fr;

export const fr = {
  nav: {
    home: "Accueil",
    services: "Services",
    about: "À propos",
    zones: "Zones d'intervention",
    faq: "FAQ",
    contact: "Contact",
    cta: "Demander une intervention",
    call: "Appeler",
    menu: "Menu",
    close: "Fermer",
  },
  hero: {
    badge: "Intervention professionnelle à Tunis et environs",
    title: "Protégez votre maison et votre entreprise contre les nuisibles",
    subtitle:
      "Solutions professionnelles de désinsectisation, dératisation, désinfection et traitement des nuisibles en Tunisie.",
    primary: "Demander une intervention",
    secondary: "Appeler le 50 431 208",
    points: [
      "Intervention professionnelle",
      "Conseils adaptés",
      "Solutions durables",
    ],
    cardTitle: "Que traitons-nous ?",
    cardItems: [
      "Cafards & fourmis",
      "Punaises de lit",
      "Puces",
      "Rats & souris",
      "Moustiques & mouches",
    ],
    cardNote: "Un doute sur le nuisible ? Décrivez-le, on vous oriente.",
    responseTitle: "Contact direct",
    responseText: "Réponse selon disponibilité de l'équipe.",
  },
  trust: {
    items: [
      {
        title: "Intervention adaptée",
        text: "Chaque situation est évaluée avant de proposer le traitement approprié.",
      },
      {
        title: "Particuliers & pros",
        text: "Maisons, appartements, commerces, bureaux et espaces professionnels.",
      },
      {
        title: "Conseils préventifs",
        text: "Des indications claires pour limiter les réinfestations.",
      },
      {
        title: "Contact direct",
        text: "Un numéro unique, facilement joignable : 50 431 208.",
      },
    ],
  },
  services: {
    eyebrow: "Nos services",
    title: "Nos solutions contre les nuisibles",
    subtitle:
      "Quatre pôles d'intervention pour les maisons, les commerces et les locaux professionnels.",
    cards: [
      {
        title: "Désinsectisation",
        text: "Traitement des insectes nuisibles dans les logements et les locaux professionnels.",
        list: [
          "Cafards",
          "Fourmis",
          "Punaises de lit",
          "Moustiques",
          "Mouches",
          "Termites",
          "Autres insectes nuisibles",
        ],
      },
      {
        title: "Dératisation",
        text: "Prise en charge des rongeurs avec une approche adaptée au lieu infesté.",
        list: ["Rats", "Souris", "Rongeurs"],
      },
      {
        title: "Traitement des nuisibles",
        text: "Interventions ciblées selon le nuisible rencontré et la configuration des lieux.",
        list: ["Araignées", "Lézards", "Serpents", "Autres nuisibles selon intervention"],
      },
      {
        title: "Désinfection & assainissement",
        text: "Assainissement professionnel des surfaces et des locaux pour un environnement plus sain.",
        list: [
          "Logements",
          "Bureaux & commerces",
          "Parties communes",
          "Locaux techniques",
        ],
      },
    ],
    cta: "Demander un diagnostic",
  },
  bedbugs: {
    eyebrow: "Cas fréquent",
    title: "Les punaises de lit vous empêchent de dormir ?",
    intro:
      "Les punaises de lit se cachent dans les matelas, sommiers, fissures et meubles. Elles piquent la nuit et reviennent vite si le traitement est incomplet.",
    signsTitle: "Signes d'infestation",
    signs: [
      "Piqûres regroupées, souvent la nuit",
      "Petites taches noires sur matelas et draps",
      "Traces de sang sur la literie",
      "Insectes visibles dans les coutures du matelas",
    ],
    whyTitle: "Pourquoi les solutions maison montrent leurs limites",
    why: [
      "Les insecticides grand public n'atteignent pas toujours les cachettes.",
      "Un traitement partiel déplace le problème au lieu de le régler.",
      "Sans méthode complète, l'infestation repart en quelques semaines.",
    ],
    prepTitle: "Avant notre passage",
    prep: [
      "Dégagez l'accès autour des lits et plinthes.",
      "Lavez le linge de lit à haute température quand c'est possible.",
      "Évitez de déplacer les meubles infestés dans d'autres pièces.",
    ],
    followup:
      "Selon la situation, un contrôle ou un second passage peut être recommandé. Nous vous l'indiquons clairement lors de l'évaluation.",
    cta: "Demander un diagnostic",
    call: "Appeler le 50 431 208",
  },
  clients: {
    eyebrow: "Pour qui ?",
    title: "Des solutions pour chaque type de lieu",
    subtitle:
      "Nous intervenons chez les particuliers comme dans les environnements professionnels exigeants.",
    cards: [
      {
        title: "Particuliers",
        text: "Maisons, appartements et villas : cuisine, chambres, caves, jardins.",
      },
      {
        title: "Entreprises",
        text: "Bureaux, commerces et locaux professionnels nécessitant un cadre sain.",
      },
      {
        title: "Restaurants & établissements",
        text: "Locaux nécessitant un environnement propre et maîtrisé au quotidien.",
      },
      {
        title: "Immeubles & espaces pro",
        text: "Parties communes, locaux techniques, cages d'escalier et sous-sols.",
      },
    ],
  },
  process: {
    eyebrow: "Comment ça marche ?",
    title: "Une intervention simple, en 3 étapes",
    steps: [
      {
        n: "01",
        title: "Contactez-nous",
        text: "Indiquez le nuisible rencontré et votre adresse. Par téléphone, WhatsApp ou formulaire.",
      },
      {
        n: "02",
        title: "Évaluation",
        text: "L'équipe identifie le problème et propose l'intervention adaptée à votre situation.",
      },
      {
        n: "03",
        title: "Intervention",
        text: "Traitement professionnel selon la configuration des lieux et le niveau d'infestation.",
      },
    ],
    cta: "Démarrer ma demande",
  },
  video: {
    eyebrow: "En action",
    title: "Nos interventions en vidéo",
    subtitle:
      "Un aperçu réel de notre travail sur le terrain, publié sur notre page Facebook.",
    watchOn: "Voir sur Facebook",
    cta: "Demander une intervention",
    frames: [
      "Intervention sur le terrain — vidéo Facebook 1",
      "Intervention sur le terrain — vidéo Facebook 2",
    ],
    localFrames: [
      "Intervention sur le terrain — vidéo 1",
      "Intervention sur le terrain — vidéo 2",
      "Intervention sur le terrain — vidéo 3",
      "Intervention sur le terrain — vidéo 4",
    ],
  },
  why: {
    eyebrow: "À propos",
    title: "Pourquoi faire appel à nous ?",
    subtitle:
      "Une approche sérieuse, sans promesses exagérées : on évalue, on traite, on conseille.",
    cards: [
      {
        title: "Intervention adaptée",
        text: "Chaque problème nécessite une approche appropriée, définie après évaluation.",
      },
      {
        title: "Conseils professionnels",
        text: "Vous recevez des indications concrètes sur les mesures préventives à adopter.",
      },
      {
        title: "Particuliers & professionnels",
        text: "Des solutions pensées pour les logements comme pour les locaux d'activité.",
      },
      {
        title: "Contact direct",
        text: "Un téléphone facilement accessible, sans intermédiaire : 50 431 208.",
      },
    ],
  },
  areas: {
    eyebrow: "Zone d'intervention",
    title: "Nos zones d'intervention",
    subtitle:
      "Basés à Tunis, nous intervenons de Bizerte à Mahdia.",
    list: [
      "Bizerte",
      "Grand Tunis",
      "Nabeul",
      "Hammamet",
      "Sousse",
      "Monastir",
      "Mahdia",
    ],
    note: "Contactez-nous pour vérifier la disponibilité de notre équipe dans votre zone.",
    cta: "Vérifier ma zone",
  },
  contact: {
    eyebrow: "Contact",
    title: "Un problème de nuisibles ? Parlons-en.",
    subtitle:
      "Remplissez le formulaire : nous préparons ensuite votre demande via WhatsApp ou par appel direct. Aucun envoi automatique — vous gardez le contrôle.",
    form: {
      name: "Nom",
      namePh: "Votre nom",
      phone: "Téléphone",
      phonePh: "Ex. 50 431 208",
      pest: "Type de nuisible",
      pestPh: "Ex. cafards, punaises de lit, rats…",
      pestOptions: [
        "Cafards",
        "Fourmis",
        "Punaises de lit",
        "Puces",
        "Moustiques / mouches",
        "Rats / souris",
        "Araignées / lézards / serpents",
        "Termites",
        "Autre / je ne sais pas",
      ],
      place: "Type de local",
      placeOptions: ["Maison / appartement", "Commerce / bureau", "Restaurant / établissement", "Immeuble / parties communes", "Autre"],
      address: "Adresse / zone",
      addressPh: "Ex. Bizerte, Sousse…",
      message: "Message",
      messagePh: "Décrivez le problème : où, depuis quand, surface approximative…",
      submit: "Demander une intervention",
      viaWhatsapp: "Envoyer via WhatsApp",
      viaCall: "Appeler directement",
      hint: "En cliquant, WhatsApp s'ouvre avec votre message pré-rempli. Vous n'avez qu'à appuyer sur Envoyer.",
      errors: {
        name: "Indiquez votre nom.",
        phone: "Indiquez un numéro de téléphone valide (8 chiffres).",
        pest: "Précisez le type de nuisible.",
        address: "Indiquez votre zone / adresse.",
      },
    },
    direct: {
      title: "Contact direct",
      call: "Appeler",
      whatsapp: "WhatsApp",
      email: "Email",
      address: "Adresse",
      hours: "Contactez-nous pour vérifier la disponibilité de l'équipe.",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    subtitle: "Des réponses courtes et honnêtes avant de nous contacter.",
    items: [
      {
        q: "Quels types de nuisibles traitez-vous ?",
        a: "Cafards, fourmis, punaises de lit, moustiques, mouches, termites, rats, souris, araignées, lézards, serpents et autres nuisibles selon la situation. Décrivez ce que vous avez vu, on vous oriente.",
      },
      {
        q: "Comment se déroule une intervention ?",
        a: "Vous nous contactez en précisant le nuisible et votre adresse. Nous évaluons la situation, proposons l'intervention adaptée, puis réalisons le traitement professionnel.",
      },
      {
        q: "Traitez-vous les punaises de lit ?",
        a: "Oui. Les punaises de lit demandent une méthode rigoureuse : inspection des cachettes, traitement complet et, si nécessaire, contrôle de suivi. Évitez les traitements partiels qui dispersent l'infestation.",
      },
      {
        q: "Traitez-vous les cafards ?",
        a: "Oui, dans les cuisines, salles de bain, commerces et parties communes. Le traitement est adapté au niveau d'infestation et complété par des conseils préventifs.",
      },
      {
        q: "Faites-vous de la dératisation ?",
        a: "Oui : rats, souris et rongeurs, chez les particuliers comme dans les locaux professionnels, avec une approche adaptée aux lieux.",
      },
      {
        q: "Intervenez-vous chez les particuliers ?",
        a: "Oui : maisons, appartements et villas, à Tunis et dans les zones couvertes selon disponibilité.",
      },
      {
        q: "Intervenez-vous dans les entreprises ?",
        a: "Oui : bureaux, commerces, restaurants, établissements et immeubles, y compris parties communes et locaux techniques.",
      },
      {
        q: "Comment demander une intervention ?",
        a: "Par téléphone au 50 431 208, via WhatsApp, ou avec le formulaire de contact. Précisez le nuisible et votre zone pour aller plus vite.",
      },
      {
        q: "Combien coûte une intervention ?",
        a: "Le tarif dépend du type de nuisible, du niveau d'infestation, de la surface et de la zone d'intervention. Contactez-nous pour obtenir les informations adaptées à votre situation.",
      },
      {
        q: "Que faut-il faire avant le traitement ?",
        a: "Dégagez l'accès aux zones concernées, rangez les aliments et la vaisselle exposée, et suivez les indications données lors de l'évaluation. Pour les punaises de lit, préparez le linge de lit comme indiqué.",
      },
    ],
  },
  footer: {
    tagline:
      "Lutte contre les nuisibles, désinfection et dératisation à Tunis. Contact direct, intervention adaptée.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    services: [
      "Désinsectisation",
      "Dératisation",
      "Traitement des nuisibles",
      "Désinfection & assainissement",
    ],
    contactTitle: "Contact",
    rights: "© 2026 شركة سليم للوقاية و التطهير — Tous droits réservés.",
    langLabel: "Langue",
  },
  mobileCta: {
    call: "Appeler",
    whatsapp: "WhatsApp",
  },
  servicesIndex: [
    { slug: "desinsectisation", name: "Désinsectisation" },
    { slug: "deratisation", name: "Dératisation" },
    { slug: "punaises-de-lit", name: "Punaises de lit" },
    { slug: "desinfection", name: "Désinfection" },
    { slug: "traitement-nuisibles", name: "Traitement des nuisibles" },
    { slug: "puces", name: "Traitement des puces" },
  ],
  home: {
    hero: {
      badge: "Intervention professionnelle à Tunis et environs",
      title: "Débarrassez-vous de tous les insectes, reptiles et rongeurs",
      subtitle: "Avec des solutions efficaces et sûres.",
      primary: "Demander une intervention",
      secondary: "50 431 208",
    },
    preview: {
      eyebrow: "Nos services",
      title: "Nos services",
      subtitle: "Élimination de tous types de nuisibles.",
      more: "En savoir plus",
      all: "Voir tous les services",
    },
    problem: {
      title: "Un problème de nuisibles ?",
      text: "Décrivez ce que vous avez constaté : nous vous orientons vers la solution adaptée à votre situation.",
      cta: "Parler à un professionnel",
    },
    areas: {
      eyebrow: "Zones d'intervention",
      title: "Nous intervenons de Bizerte à Mahdia",
      cta: "Voir toutes les zones",
    },
  },
  hub: {
    eyebrow: "Nos services",
    title: "Nos services de lutte contre les nuisibles",
    intro:
      "Six domaines d'intervention, une même exigence : évaluer avant de traiter. Choisissez un service pour le détail.",
    more: "En savoir plus",
    items: [
      {
        slug: "desinsectisation",
        desc: "Traitement ciblé des insectes nuisibles, du diagnostic aux conseils préventifs.",
        points: ["Cafards", "Fourmis", "Moustiques", "Termites"],
      },
      {
        slug: "deratisation",
        desc: "Détection et traitement des rats et souris, pour les logements comme les locaux pros.",
        points: ["Rats", "Souris", "Rongeurs"],
      },
      {
        slug: "punaises-de-lit",
        desc: "Diagnostic rigoureux et traitement complet contre les punaises de lit.",
        points: ["Matelas", "Sommiers", "Fissures"],
      },
      {
        slug: "desinfection",
        desc: "Assainissement professionnel des surfaces et des locaux.",
        points: ["Logements", "Bureaux", "Commerces"],
      },
      {
        slug: "traitement-nuisibles",
        desc: "Prise en charge des autres nuisibles selon la situation rencontrée.",
        points: ["Araignées", "Lézards", "Serpents"],
      },
      {
        slug: "puces",
        desc: "Diagnostic et traitement efficace contre les puces, avec des conseils pour limiter leur réapparition.",
        points: ["Tapis & tissus", "Literie", "Animaux domestiques"],
      },
    ],
  },
  servicePages: {
    desinsectisation: {
      heroTitle: "Désinsectisation professionnelle",
      heroSub:
        "Cafards, fourmis, moustiques, mouches, termites : un traitement ciblé selon l'insecte et le lieu.",
      intro: [
        "Les insectes nuisibles colonisent rapidement cuisines, salles de bain, réserves et locaux techniques. Sans traitement adapté, une petite présence devient vite une infestation.",
        "Nous identifions l'insecte et les zones touchées, puis appliquons le traitement approprié, complété par des conseils pour éviter leur retour.",
      ],
      blocks: [
        {
          title: "Quels insectes traitons-nous ?",
          items: [
            "Cafards",
            "Fourmis",
            "Moustiques",
            "Mouches",
            "Termites",
            "Autres insectes nuisibles",
          ],
        },
      ],
      stepsTitle: "Comment se déroule une intervention ?",
      steps: [
        {
          title: "Contact et description",
          text: "Vous décrivez l'insecte observé et votre zone, par téléphone, WhatsApp ou formulaire.",
        },
        {
          title: "Évaluation",
          text: "Nous identifions l'insecte, les zones touchées et le niveau d'infestation.",
        },
        {
          title: "Traitement ciblé",
          text: "Application du traitement adapté aux lieux et à la situation.",
        },
        {
          title: "Conseils préventifs",
          text: "Indications concrètes pour limiter les réinfestations.",
        },
      ],
      placesTitle: "Pour quels locaux ?",
      places: ["Maisons", "Appartements", "Bureaux", "Commerces", "Locaux professionnels"],
      faq: [
        {
          q: "Combien de temps dure une intervention ?",
          a: "Cela dépend du type d'insecte, de la surface et du niveau d'infestation. Contactez-nous pour obtenir les indications adaptées à votre situation.",
        },
        {
          q: "Faut-il quitter le logement pendant le traitement ?",
          a: "Cela dépend du traitement appliqué. Nous vous indiquons les précautions à prendre avant chaque intervention.",
        },
        {
          q: "Et si les insectes reviennent ?",
          a: "Contactez-nous : selon la situation, un contrôle ou un passage complémentaire peut être recommandé.",
        },
      ],
      ctaTitle: "Besoin d'une désinsectisation ?",
    },
    deratisation: {
      heroTitle: "Dératisation professionnelle à Tunis et ses environs",
      heroSub:
        "Rats et souris : détection des passages, traitement adapté et conseils de prévention.",
      intro: [
        "Les rongeurs laissent des traces caractéristiques : bruits nocturnes, excréments, emballages grignotés. Plus on attend, plus ils s'installent.",
        "Nous repérons les passages et les points d'accès, appliquons le traitement adapté au lieu, puis vous indiquons les mesures préventives à adopter.",
      ],
      blocks: [
        {
          title: "Signes d'infestation",
          items: [
            "Bruits nocturnes dans les cloisons ou plafonds",
            "Excréments le long des murs",
            "Traces de grignotage sur aliments et emballages",
            "Odeurs inhabituelles persistantes",
          ],
        },
        {
          title: "Pourquoi agir vite ?",
          items: [
            "Contamination des aliments et des réserves",
            "Dégradations : câbles, isolants, cloisons",
            "Nuisances sonores et inconfort au quotidien",
          ],
        },
      ],
      stepsTitle: "Comment se déroule une intervention ?",
      steps: [
        {
          title: "Inspection",
          text: "Repérage des passages, des points d'accès et des zones d'activité.",
        },
        {
          title: "Traitement adapté",
          text: "Mise en place de la solution appropriée selon le lieu et l'infestation.",
        },
        {
          title: "Contrôle",
          text: "Vérification de l'efficacité et ajustement si nécessaire.",
        },
        {
          title: "Prévention",
          text: "Conseils pour boucher les accès et éviter une nouvelle installation.",
        },
      ],
      placesTitle: "Pour quels locaux ?",
      places: ["Maisons", "Appartements", "Bureaux", "Commerces", "Locaux professionnels"],
      faq: [
        {
          q: "Comment savoir si j'ai des rats ou des souris ?",
          a: "Bruits la nuit, excréments, emballages grignotés : décrivez ce que vous avez constaté, nous vous aidons à identifier le problème.",
        },
        {
          q: "Combien coûte une dératisation ?",
          a: "Le tarif dépend du type de rongeur, du niveau d'infestation, de la surface et de la zone. Contactez-nous pour obtenir les informations adaptées.",
        },
        {
          q: "Intervenez-vous dans les commerces ?",
          a: "Oui : commerces, bureaux, restaurants et locaux professionnels, ainsi que chez les particuliers.",
        },
      ],
      ctaTitle: "Un problème de rongeurs ?",
    },
    "punaises-de-lit": {
      heroTitle: "Punaises de lit : identifiez le problème et agissez efficacement",
      heroSub:
        "Diagnostic rigoureux, traitement complet et suivi si nécessaire. Sans promesses irréalistes.",
      intro: [
        "Les punaises de lit se cachent dans les matelas, sommiers, fissures et meubles. Elles piquent la nuit et reviennent vite si le traitement est incomplet.",
        "Un traitement partiel ou approximatif déplace le problème au lieu de le régler. D'où l'importance d'une méthode complète, dès le départ.",
      ],
      blocks: [
        {
          title: "Comment reconnaître une infestation ?",
          items: [
            "Piqûres regroupées, souvent la nuit",
            "Petites taches noires sur matelas et draps",
            "Traces de sang sur la literie",
            "Insectes visibles dans les coutures du matelas",
          ],
        },
        {
          title: "Où se cachent les punaises de lit ?",
          items: [
            "Matelas, sommiers et têtes de lit",
            "Fissures, plinthes et prises",
            "Meubles, canapés et rideaux",
            "Bagages et vêtements",
          ],
        },
        {
          title: "Pourquoi les solutions temporaires peuvent échouer ?",
          items: [
            "Elles n'atteignent pas toujours les œufs et les cachettes",
            "Un traitement partiel disperse l'infestation",
            "Sans méthode complète, le problème repart en quelques semaines",
          ],
        },
        {
          title: "Que préparer avant l'intervention ?",
          items: [
            "Dégagez l'accès autour des lits et des plinthes",
            "Lavez le linge de lit à haute température quand c'est possible",
            "Évitez de déplacer les meubles infestés vers d'autres pièces",
          ],
        },
      ],
      stepsTitle: "Comment se déroule une intervention professionnelle ?",
      steps: [
        {
          title: "Inspection complète",
          text: "Repérage des cachettes : literie, meubles, fissures et zones à risque.",
        },
        {
          title: "Traitement ciblé",
          text: "Traitement de l'ensemble des zones identifiées, pas seulement du lit.",
        },
        {
          title: "Contrôle et suivi",
          text: "Selon la situation, un contrôle ou un second passage peut être recommandé.",
        },
      ],
      faq: [
        {
          q: "Faut-il jeter le matelas ?",
          a: "Pas nécessairement. L'évaluation détermine si le matelas peut être traité ou s'il vaut mieux le remplacer.",
        },
        {
          q: "Combien de passages sont nécessaires ?",
          a: "Cela dépend du niveau d'infestation et de la configuration des lieux. Nous vous l'indiquons clairement lors de l'évaluation.",
        },
        {
          q: "Les piqûres sont-elles dangereuses ?",
          a: "Les réactions varient selon les personnes. En cas de doute ou de réaction importante, consultez un professionnel de santé.",
        },
      ],
      ctaTitle: "Un doute sur des punaises de lit ?",
    },
    desinfection: {
      heroTitle: "Désinfection et assainissement",
      heroSub:
        "Assainissement professionnel des surfaces et des locaux, pour un environnement plus sain.",
      intro: [
        "Après une infestation, avant de réoccuper un local ou pour assainir un espace fréquenté, une désinfection professionnelle apporte un niveau d'hygiène supérieur au simple nettoyage.",
        "Nous traitons les surfaces et les locaux selon leur usage, puis vous indiquons les bonnes pratiques pour maintenir le résultat.",
      ],
      blocks: [
        {
          title: "Quand désinfecter ?",
          items: [
            "Après une infestation de nuisibles",
            "Locaux à forte fréquentation",
            "Remise en état d'un local",
            "Parties communes et locaux techniques",
          ],
        },
        {
          title: "Nos conseils",
          items: [
            "Aérez régulièrement les pièces",
            "Nettoyez les surfaces avant notre passage",
            "Suivez les indications données lors de l'évaluation",
          ],
        },
      ],
      stepsTitle: "Comment se déroule une intervention ?",
      steps: [
        {
          title: "Évaluation",
          text: "État des lieux : surfaces, usage du local et besoins spécifiques.",
        },
        {
          title: "Traitement des surfaces",
          text: "Application adaptée aux surfaces et à la configuration des lieux.",
        },
        {
          title: "Recommandations",
          text: "Indications pour maintenir un environnement sain après notre passage.",
        },
      ],
      placesTitle: "Pour quels locaux ?",
      places: ["Logements", "Bureaux", "Commerces", "Parties communes", "Locaux techniques"],
      faq: [
        {
          q: "La désinfection remplace-t-elle le nettoyage ?",
          a: "Non : un nettoyage préalable des surfaces est nécessaire pour un traitement efficace. Nous vous l'indiquons avant l'intervention.",
        },
        {
          q: "Combien de temps dure une désinfection ?",
          a: "Cela dépend de la surface et de la configuration des lieux. Contactez-nous pour obtenir les indications adaptées.",
        },
      ],
      ctaTitle: "Besoin d'une désinfection ?",
    },
    "traitement-nuisibles": {
      heroTitle: "Traitement des autres nuisibles",
      heroSub:
        "Araignées, lézards, serpents : décrivez ce que vous avez observé, nous vérifions la solution adaptée.",
      intro: [
        "Tous les nuisibles ne se traitent pas de la même façon. Face à un intrus inhabituel, la première étape est toujours la même : bien identifier ce qui a été observé.",
      ],
      note: "Contactez-nous pour nous décrire le nuisible rencontré et vérifier la solution adaptée.",
      blocks: [
        {
          title: "Nuisibles pris en charge",
          items: [
            "Araignées",
            "Lézards",
            "Serpents",
            "Autres nuisibles selon intervention",
          ],
        },
      ],
      stepsTitle: "Comment procéder ?",
      steps: [
        {
          title: "Décrivez la situation",
          text: "Nuisible observé, lieu, fréquence : par téléphone, WhatsApp ou formulaire.",
        },
        {
          title: "Évaluation",
          text: "Nous vérifions la solution adaptée à votre cas.",
        },
        {
          title: "Intervention",
          text: "Traitement professionnel selon la situation rencontrée.",
        },
      ],
      faq: [
        {
          q: "Intervenez-vous pour les serpents ?",
          a: "Décrivez la situation rencontrée (lieu, fréquence) : nous vérifions ensemble la solution adaptée.",
        },
        {
          q: "Que faire en attendant l'intervention ?",
          a: "Évitez tout contact, isolez la zone si possible, et contactez-nous rapidement.",
        },
      ],
      ctaTitle: "Un nuisible inhabituel ?",
    },
    puces: {
      heroTitle: "Traitement des puces à Tunis et ses environs",
      heroSub:
        "Diagnostic et traitement efficace contre les puces, avec des conseils pour limiter leur réapparition.",
      intro: [
        "Les puces sont de petits insectes piqueurs qui s'installent dans les tapis, les moquettes, la literie et les tissus d'ameublement. Elles piquent les humains comme les animaux domestiques et se multiplient très vite.",
        "Leurs œufs tombent dans l'environnement et éclosent en plusieurs vagues : sans traitement complet des lieux, l'infestation repart. Nous traitons l'ensemble des zones concernées et vous indiquons les mesures préventives à adopter.",
      ],
      blocks: [
        {
          title: "Où se cachent les puces ?",
          items: [
            "Tapis, moquettes et parquets",
            "Literie, canapés et coussins",
            "Paniers et couchages des animaux",
            "Fissures, plinthes et recoins sombres",
          ],
        },
        {
          title: "Signes d'infestation",
          items: [
            "Piqûres regroupées, souvent sur les jambes",
            "Démangeaisons persistantes",
            "Petits insectes sombres et sauteurs dans les tissus",
            "Présence accrue autour des animaux domestiques",
          ],
        },
        {
          title: "Pourquoi agir vite ?",
          items: [
            "Piqûres et inconfort au quotidien",
            "Multiplication rapide en quelques semaines",
            "Œufs disséminés dans tout le logement",
          ],
        },
        {
          title: "Que préparer avant l'intervention ?",
          items: [
            "Passez l'aspirateur sur tapis et tissus, puis jetez le sac",
            "Lavez le linge et les housses à haute température quand c'est possible",
            "Traitez ou faites contrôler vos animaux par un vétérinaire",
            "Dégagez l'accès aux zones concernées",
          ],
        },
      ],
      stepsTitle: "Comment se déroule une intervention professionnelle ?",
      steps: [
        {
          title: "Inspection",
          text: "Repérage des zones d'activité : tapis, literie, tissus et recoins.",
        },
        {
          title: "Traitement complet",
          text: "Traitement de l'ensemble des zones identifiées, y compris les œufs et les cachettes.",
        },
        {
          title: "Contrôle et suivi",
          text: "Selon la situation, un contrôle ou un second passage peut être recommandé.",
        },
        {
          title: "Prévention",
          text: "Conseils pour limiter leur réapparition, notamment autour des animaux domestiques.",
        },
      ],
      placesTitle: "Pour quels locaux ?",
      places: ["Maisons", "Appartements", "Bureaux", "Commerces", "Locaux professionnels"],
      faq: [
        {
          q: "Je n'ai pas d'animaux, puis-je avoir des puces ?",
          a: "Oui : les puces voyagent sur les vêtements, les bagages ou via le passage d'un animal. Décrivez ce que vous avez constaté, nous évaluons la situation.",
        },
        {
          q: "Faut-il traiter les animaux domestiques ?",
          a: "Oui, en parallèle du traitement des lieux : consultez votre vétérinaire pour le traitement adapté à l'animal pendant que nous traitons l'environnement.",
        },
        {
          q: "Combien de passages sont nécessaires ?",
          a: "Cela dépend du niveau d'infestation et de la configuration des lieux, car les œufs éclosent en plusieurs vagues. Nous vous l'indiquons clairement lors de l'évaluation.",
        },
      ],
      ctaTitle: "Un problème de puces ?",
    },
  },
  aboutPage: {
    heroTitle: "À propos de Salim — Prévention et Désinfection",
    heroSub:
      "Des solutions de prévention et de traitement contre les nuisibles, à Tunis.",
    intro: [
      "شركة سليم للوقاية و التطهير من جميع انواع الحشرات propose des solutions de prévention, de traitement des nuisibles, de désinfection et de dératisation pour les particuliers et les professionnels.",
      "Notre principe est simple : comprendre chaque situation avant d'intervenir, puis accompagner le client avec des conseils préventifs adaptés.",
    ],
    approachTitle: "Notre approche",
    approach: [
      {
        title: "Comprendre le problème",
        text: "Vous décrivez le nuisible observé, le lieu et la situation.",
      },
      {
        title: "Identifier le nuisible",
        text: "L'équipe détermine le nuisible et évalue le niveau d'infestation.",
      },
      {
        title: "Proposer une intervention adaptée",
        text: "Le traitement est choisi selon le cas, sans solution toute faite.",
      },
      {
        title: "Accompagner le client",
        text: "Des indications préventives pour limiter les réinfestations.",
      },
    ],
  },
  zonesPage: {
    heroTitle: "Zones d'intervention",
    heroSub:
      "Basés à Tunis, nous intervenons de Bizerte à Mahdia.",
    note: "Vous êtes dans une autre zone ? Contactez-nous pour vérifier la disponibilité de notre équipe.",
    relatedTitle: "Nos services dans votre zone",
    zones: [
      { name: "Bizerte", desc: "Bizerte et environs, selon disponibilité de l'équipe." },
      { name: "Grand Tunis", desc: "Tunis, Ariana, Ben Arous et Manouba : notre zone d'ancrage." },
      { name: "Nabeul", desc: "Nabeul et le Cap Bon, logements et locaux professionnels." },
      { name: "Hammamet", desc: "Villas, résidences et établissements touristiques." },
      { name: "Sousse", desc: "Logements, commerces et locaux professionnels." },
      { name: "Monastir", desc: "Logements et locaux professionnels." },
      { name: "Mahdia", desc: "Mahdia et environs, selon disponibilité de l'équipe." },
    ],
  },
  faqPage: {
    heroTitle: "Questions fréquentes",
    heroSub: "Des réponses courtes et honnêtes avant de nous contacter.",
    more: [
      {
        q: "Combien de temps dure une intervention ?",
        a: "Cela dépend du type de nuisible, de la surface et du niveau d'infestation. Contactez-nous pour obtenir les indications adaptées à votre situation.",
      },
      {
        q: "Peut-on rester dans le logement pendant le traitement ?",
        a: "Cela dépend du traitement appliqué. Nous vous indiquons les précautions à prendre avant chaque intervention.",
      },
    ],
  },
  contactPage: {
    heroTitle: "Besoin d'une intervention ?",
    heroSub:
      "Appelez-nous directement ou laissez votre demande : nous revenons vers vous selon la disponibilité de l'équipe.",
  },
  ctaBlock: {
    title: "Besoin d'une intervention ?",
  },
  reviews: {
    eyebrow: "Avis clients",
    title: "Ce que disent nos clients",
    subtitle:
      "Nos publications et les retours de nos clients, directement depuis notre page Facebook.",
    watchOn: "Voir sur Facebook",
    frameLabel: "Avis client publié sur Facebook",
  },
  seo: {
    services: {
      title: "Nos services anti-nuisibles à Tunis | Salim",
      desc: "Désinsectisation, dératisation, punaises de lit, désinfection : découvrez nos services de lutte contre les nuisibles à Tunis. Appelez le 50 431 208.",
    },
    desinsectisation: {
      title: "Désinsectisation en Tunisie | شركة سليم",
      desc: "Traitement professionnel des cafards, fourmis, moustiques et termites de Bizerte à Mahdia (Grand Tunis, Cap Bon, Sahel). Appelez le 50 431 208.",
    },
    deratisation: {
      title: "Dératisation à Tunis | شركة سليم",
      desc: "Traitement des rats et souris à Tunis et environs : détection, traitement, prévention. Appelez le 50 431 208.",
    },
    punaises: {
      title: "Punaises de lit à Tunis | Traitement professionnel",
      desc: "Piqûres nocturnes ? Diagnostic et traitement professionnel des punaises de lit à Tunis. Appelez le 50 431 208.",
    },
    desinfection: {
      title: "Désinfection & assainissement à Tunis | Salim",
      desc: "Désinfection et assainissement des logements et locaux professionnels à Tunis. Appelez le 50 431 208.",
    },
    nuisibles: {
      title: "Traitement des nuisibles à Tunis | Salim",
      desc: "Araignées, lézards, serpents et autres nuisibles : décrivez la situation, nous proposons la solution adaptée. 50 431 208.",
    },
    puces: {
      title: "Traitement des puces à Tunis | Salim",
      desc: "Puces dans les tapis ou la literie ? Diagnostic et traitement professionnel contre les puces à Tunis, avec conseils préventifs. 50 431 208.",
    },
    apropos: {
      title: "À propos | Salim Prévention et Désinfection",
      desc: "Salim : prévention, traitement des nuisibles, désinfection et dératisation à Tunis. Découvrez notre approche.",
    },
    zones: {
      title: "Zones d'intervention à Tunis | Salim",
      desc: "Nous intervenons à Bizerte, dans le Grand Tunis, à Nabeul, Hammamet, Sousse, Monastir et Mahdia. Vérifiez la disponibilité : 50 431 208.",
    },
    faq: {
      title: "Questions fréquentes | Salim Prévention et Désinfection",
      desc: "Punaises de lit, cafards, tarifs, déroulement : les réponses aux questions fréquentes sur nos interventions à Tunis.",
    },
    contact: {
      title: "Contact & demande d'intervention | Salim",
      desc: "Demandez une intervention : 50 431 208, WhatsApp ou formulaire. Rue Alfred Nobel, Lac 3, Tunis.",
    },
  },
  meta: {
    title: "Désinsectisation & dératisation à Tunis | Salim Prévention et Désinfection",
    description:
      "Désinsectisation, dératisation, traitement des punaises de lit et cafards, désinfection de Bizerte à Mahdia. Appelez le 50 431 208.",
  },
};

export const ar: Dictionary = {
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    zones: "مناطق التدخل",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
    cta: "اطلب تدخلاً الآن",
    call: "اتصل",
    menu: "القائمة",
    close: "إغلاق",
  },
  hero: {
    badge: "تدخل مهني في تونس الكبرى",
    title: "احمِ منزلك ومؤسستك من الحشرات والآفات",
    subtitle:
      "حلول مهنية لمكافحة الحشرات والقوارض والتطهير ومعالجة الآفات في تونس.",
    primary: "اطلب تدخلاً الآن",
    secondary: "اتصل بنا 50 431 208",
    points: ["تدخل مهني", "نصائح مناسبة لوضعيتك", "حلول دائمة"],
    cardTitle: "شنوّا نعالجو؟",
    cardItems: [
      "الصراصير والنمل",
      "بق الفراش",
      "البراغيث",
      "الجرذان والفئران",
      "الناموس والذباب",
    ],
    cardNote: "مش متأكد من نوع الحشرة؟ أوصف اللي شفتو ونوجّهوك.",
    responseTitle: "اتصال مباشر",
    responseText: "نجاوبوك حسب توفر الفريق.",
  },
  trust: {
    items: [
      {
        title: "تدخل مناسب",
        text: "كل وضعية نقيّموها قبل ما نقترحو المعالجة المناسبة.",
      },
      {
        title: "للخواص والمهنيين",
        text: "ديار، شقق، محلات، مكاتب وفضاءات مهنية.",
      },
      {
        title: "نصائح وقائية",
        text: "توضيحات واضحة باش تحدّ من رجوع الحشرات.",
      },
      {
        title: "اتصال مباشر",
        text: "رقم واحد وساهل: 50 431 208.",
      },
    ],
  },
  services: {
    eyebrow: "خدماتنا",
    title: "حلولنا ضد الحشرات والآفات",
    subtitle:
      "أربعة مجالات تدخل للديار والمحلات والفضاءات المهنية.",
    cards: [
      {
        title: "مكافحة الحشرات",
        text: "معالجة الحشرات الضارة في المساكن والمحلات المهنية.",
        list: [
          "الصراصير",
          "النمل",
          "بق الفراش",
          "الناموس",
          "الذباب",
          "النمل الأبيض",
          "حشرات ضارة أخرى",
        ],
      },
      {
        title: "مكافحة القوارض",
        text: "التعامل مع الجرذان والفئران بطريقة مناسبة للمكان.",
        list: ["الجرذان", "الفئران", "القوارض"],
      },
      {
        title: "معالجة الآفات",
        text: "تدخلات دقيقة حسب نوع الآفة وخصوصية المكان.",
        list: ["العناكب", "السحالي", "الأفاعي", "آفات أخرى حسب التدخل"],
      },
      {
        title: "التطهير والتعقيم",
        text: "تطهير مهني للأسطح والمحلات لبيئة أنظف وأصح.",
        list: ["المساكن", "المكاتب والمحلات", "الأجزاء المشتركة", "المحلات التقنية"],
      },
    ],
    cta: "اطلب تشخيص",
  },
  bedbugs: {
    eyebrow: "حالة شائعة",
    title: "بق الفراش حارمك من النوم؟",
    intro:
      "بق الفراش يتخبى في الفرش والصمامات والشقوق والأثاث. يقرص في الليل ويرجع بسرعة إذا كانت المعالجة ناقصة.",
    signsTitle: "علامات الإصابة",
    signs: [
      "قرصات متقاربة خاصة في الليل",
      "نقاط سوداء صغيرة على الفرش والأغطية",
      "آثار دم على المفروشات",
      "حشرات ظاهرة في خياطة الفرش",
    ],
    whyTitle: "علاش الحلول المنزلية ما تكفيش",
    why: [
      "المبيدات العادية ما توصلش لكل المخاخ.",
      "المعالجة الجزئية تنقل المشكلة بدل ما تحلها.",
      "من غير طريقة كاملة، الإصابة ترجع في أسابيع.",
    ],
    prepTitle: "قبل ما نجيك",
    prep: [
      "فرّغ الطريق حول الفرش والحواف.",
      "اغسل أغطية الفرش بالماء الساخن إذا أمكن.",
      "ما تنقلش الأثاث المصاب لبيوت أخرى.",
    ],
    followup:
      "حسب الوضعية، نجم نقترحو مراقبة أو تدخل ثانٍ. نوضحو لك هذا من وقت التقييم.",
    cta: "اطلب تشخيص",
    call: "اتصل بنا 50 431 208",
  },
  clients: {
    eyebrow: "لشكون؟",
    title: "حلول لكل نوع من الأماكن",
    subtitle: "نتدخلو عند الخواص كما في الفضاءات المهنية.",
    cards: [
      {
        title: "الخواص",
        text: "ديار، شقق وفيلات: كوجينة، بيوت نوم، أقبية وجنان.",
      },
      {
        title: "الشركات",
        text: "مكاتب ومحلات وفضاءات مهنية تحتاج محيط نظيف.",
      },
      {
        title: "المطاعم والمؤسسات",
        text: "محلات تتطلب بيئة نظيفة وتحت السيطرة يومياً.",
      },
      {
        title: "العمارات والفضاءات المهنية",
        text: "الأجزاء المشتركة، المحلات التقنية، الدروج والأقبية.",
      },
    ],
  },
  process: {
    eyebrow: "كيفاش نخدمو؟",
    title: "تدخل ساهل في 3 خطوات",
    steps: [
      {
        n: "01",
        title: "اتصل بينا",
        text: "اذكر نوع الحشرة والعنوان. بالتلفون أو واتساب أو الاستمارة.",
      },
      {
        n: "02",
        title: "التقييم",
        text: "الفريق يشخّص المشكلة ويقترح التدخل المناسب لوضعيتك.",
      },
      {
        n: "03",
        title: "التدخل",
        text: "معالجة مهنية حسب المكان ودرجة الإصابة.",
      },
    ],
    cta: "أبدا الطلب متاعي",
  },
  video: {
    eyebrow: "على الميدان",
    title: "تدخلاتنا بالفيديو",
    subtitle: "لمحة حقيقية عن خدمتنا على الميدان، منشورة على صفحتنا في فيسبوك.",
    watchOn: "شاهد على فيسبوك",
    cta: "اطلب تدخلاً الآن",
    frames: [
      "تدخل ميداني — فيديو فيسبوك 1",
      "تدخل ميداني — فيسبوك 2",
    ],
    localFrames: [
      "تدخل ميداني — فيديو 1",
      "تدخل ميداني — فيديو 2",
      "تدخل ميداني — فيديو 3",
      "تدخل ميداني — فيديو 4",
    ],
  },
  why: {
    eyebrow: "من نحن",
    title: "علاش تختارنا؟",
    subtitle: "طريقة جدية من غير وعود مبالغ فيها: نقيّمو، نعالجو، ننصحو.",
    cards: [
      {
        title: "تدخل مناسب",
        text: "كل مشكلة تستحق طريقة مناسبة تتحدد بعد التقييم.",
      },
      {
        title: "نصائح مهنية",
        text: "تاخو توضيحات عملية حول الإجراءات الوقائية.",
      },
      {
        title: "للخواص والمهنيين",
        text: "حلول مدروسة للمساكن كما للمحلات والأنشطة.",
      },
      {
        title: "اتصال مباشر",
        text: "تلفون ساهل ومن غير وسيط: 50 431 208.",
      },
    ],
  },
  areas: {
    eyebrow: "منطقة التدخل",
    title: "مناطق التدخل متاعنا",
    subtitle: "مقرنا في تونس، ونتدخلو من بنزرت حتى للمهدية.",
    list: [
      "بنزرت",
      "تونس الكبرى",
      "نابل",
      "الحمامات",
      "سوسة",
      "المنستير",
      "المهدية",
    ],
    note: "اتصل بينا باش تثبت من توفر الفريق في المنطقة متاعك.",
    cta: "ثبت المنطقة متاعك",
  },
  contact: {
    eyebrow: "اتصل بنا",
    title: "عندك مشكلة حشرات؟ خلّينا نحكيو.",
    subtitle:
      "عمّر الاستمارة: وبعد نحضّرو الطلب متاعك عبر واتساب أو اتصال مباشر. ما فماش إرسال تلقائي — القرار ليك.",
    form: {
      name: "الاسم",
      namePh: "اسمك",
      phone: "الهاتف",
      phonePh: "مثال: 50 431 208",
      pest: "نوع الحشرة",
      pestPh: "مثال: صراصير، بق الفراش، جرذان…",
      pestOptions: [
        "صراصير",
        "نمل",
        "بق الفراش",
        "براغيث",
        "ناموس / ذباب",
        "جرذان / فئران",
        "عناكب / سحالي / أفاعي",
        "نمل أبيض",
        "نوع آخر / ما نعرفش",
      ],
      place: "نوع المكان",
      placeOptions: ["دار / شقة", "محل / مكتب", "مطعم / مؤسسة", "عمارة / أجزاء مشتركة", "نوع آخر"],
      address: "العنوان / المنطقة",
      addressPh: "مثال: بنزرت، سوسة…",
      message: "الرسالة",
      messagePh: "أوصف المشكلة: وين، من وقتاش، المساحة التقريبية…",
      submit: "اطلب تدخلاً الآن",
      viaWhatsapp: "أبعث عبر واتساب",
      viaCall: "اتصل مباشرة",
      hint: "بالضغط، واتساب يتحل والرسالة حاضرة. ما عليك كان تضغط على إرسال.",
      errors: {
        name: "اكتب الاسم متاعك.",
        phone: "اكتب رقم تلفون صحيح (8 أرقام).",
        pest: "حدد نوع الحشرة.",
        address: "اكتب المنطقة / العنوان.",
      },
    },
    direct: {
      title: "اتصال مباشر",
      call: "اتصل",
      whatsapp: "واتساب",
      email: "البريد",
      address: "العنوان",
      hours: "اتصل بينا باش تثبت من توفر الفريق.",
    },
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة تتكرر برشا",
    subtitle: "أجوبة قصيرة وصادقة قبل ما تتصل بينا.",
    items: [
      {
        q: "شنوّا أنواع الحشرات اللي تعالجوها؟",
        a: "الصراصير، النمل، بق الفراش، الناموس، الذباب، النمل الأبيض، الجرذان، الفئران، العناكب، السحالي، الأفاعي وغيرها حسب الوضعية. أوصف اللي شفتو ونوجّهوك.",
      },
      {
        q: "كيفاش يتم التدخل؟",
        a: "تتصل بينا وتذكر نوع الحشرة والعنوان. نقيّمو الوضعية، نقترحو التدخل المناسب، وبعد نعملو المعالجة المهنية.",
      },
      {
        q: "تعالجو بق الفراش؟",
        a: "أي. بق الفراش يستحق طريقة دقيقة: تفقد المخاخ، معالجة كاملة، وإذا لزم مراقبة بعدية. تجنب المعالجة الجزئية اللي تفرّق الإصابة.",
      },
      {
        q: "تعالجو الصراصير؟",
        a: "أي، في الكوجينات والحمامات والمحلات والأجزاء المشتركة. المعالجة تتحدد حسب درجة الإصابة مع نصائح وقائية.",
      },
      {
        q: "تعملو مكافحة القوارض؟",
        a: "أي: جرذان وفئران وقوارض، عند الخواص كما في المحلات المهنية، بطريقة مناسبة للمكان.",
      },
      {
        q: "تتدخلو عند الخواص؟",
        a: "أي: ديار وشقق وفيلات في تونس والمناطق المغطاة حسب التوفر.",
      },
      {
        q: "تتدخلو عند الشركات؟",
        a: "أي: مكاتب ومحلات ومطاعم ومؤسسات وعمارات، بما فيها الأجزاء المشتركة والمحلات التقنية.",
      },
      {
        q: "كيفاش نطلب تدخل؟",
        a: "بالتلفون على 50 431 208، عبر واتساب، أو باستمارة الاتصال. اذكر نوع الحشرة والمنطقة باش نربحو الوقت.",
      },
      {
        q: "قداش يتكلف التدخل؟",
        a: "السعر يعتمد على نوع الحشرة ودرجة الإصابة والمساحة ومنطقة التدخل. اتصل بينا باش تاخو المعلومات المناسبة لوضعيتك.",
      },
      {
        q: "شنوّا نعمل قبل المعالجة؟",
        a: "فرّغ الطريق للمناطق المعنية، لمّ الماكلة والأواني المكشوفة، واتبع التعليمات اللي نعطيوهالك وقت التقييم. لبق الفراش، حضّر أغطية الفرش كما نوضحو لك.",
      },
    ],
  },
  footer: {
    tagline: "مكافحة الحشرات والتطهير ومكافحة القوارض في تونس. اتصال مباشر وتدخل مناسب.",
    navTitle: "التنقل",
    servicesTitle: "الخدمات",
    services: [
      "مكافحة الحشرات",
      "مكافحة القوارض",
      "معالجة الآفات",
      "التطهير والتعقيم",
    ],
    contactTitle: "اتصل بنا",
    rights: "© 2026 شركة سليم للوقاية و التطهير — جميع الحقوق محفوظة.",
    langLabel: "اللغة",
  },
  mobileCta: {
    call: "اتصل",
    whatsapp: "واتساب",
  },
  servicesIndex: [
    { slug: "desinsectisation", name: "مكافحة الحشرات" },
    { slug: "deratisation", name: "مكافحة القوارض" },
    { slug: "punaises-de-lit", name: "بق الفراش" },
    { slug: "desinfection", name: "التطهير والتعقيم" },
    { slug: "traitement-nuisibles", name: "معالجة الآفات" },
    { slug: "puces", name: "مكافحة البراغيث" },
  ],
  home: {
    hero: {
      badge: "تدخل مهني من بنزرت للمهدية",
      title: "تخلّص من جميع أنواع الحشرات والزواحف والقوارض",
      subtitle: "بحلول فعّالة وآمنة.",
      primary: "اطلب تدخلاً الآن",
      secondary: "50 431 208",
    },
    preview: {
      eyebrow: "خدماتنا",
      title: "خدماتنا",
      subtitle: "التخلّص من جميع أنواع الآفات",
      more: "اكتشف المزيد",
      all: "شوف الخدمات الكل",
    },
    problem: {
      title: "عندك مشكلة حشرات؟",
      text: "أوصف اللي لاحظتو: نوجّهوك للحل المناسب لوضعيتك.",
      cta: "احكي مع مختص",
    },
    areas: {
      eyebrow: "مناطق التدخل",
      title: "نتدخلو من بنزرت حتى للمهدية",
      cta: "شوف مناطق التدخل الكل",
    },
  },
  hub: {
    eyebrow: "خدماتنا",
    title: "خدماتنا في مكافحة الحشرات والآفات",
    intro:
      "ستة مجالات تدخل بنفس القاعدة: نقيّمو قبل ما نعالجو. اختار خدمة باش تشوف التفاصيل.",
    more: "اكتشف المزيد",
    items: [
      {
        slug: "desinsectisation",
        desc: "معالجة دقيقة للحشرات الضارة، من التشخيص حتى النصائح الوقائية.",
        points: ["الصراصير", "النمل", "الناموس", "النمل الأبيض"],
      },
      {
        slug: "deratisation",
        desc: "كشف ومعالجة الجرذان والفئران، للديار كما للمحلات المهنية.",
        points: ["الجرذان", "الفئران", "القوارض"],
      },
      {
        slug: "punaises-de-lit",
        desc: "تشخيص دقيق ومعالجة كاملة ضد بق الفراش.",
        points: ["الفرش", "الصمامات", "الشقوق"],
      },
      {
        slug: "desinfection",
        desc: "تطهير مهني للأسطح والمحلات.",
        points: ["المساكن", "المكاتب", "المحلات"],
      },
      {
        slug: "traitement-nuisibles",
        desc: "التعامل مع الآفات الأخرى حسب الوضعية.",
        points: ["العناكب", "السحالي", "الأفاعي"],
      },
      {
        slug: "puces",
        desc: "تشخيص ومعالجة فعّالة ضد البراغيث، مع نصائح للحدّ من عودتها.",
        points: ["الزرابي والأقمشة", "الفرش", "الحيوانات الأليفة"],
      },
    ],
  },
  servicePages: {
    desinsectisation: {
      heroTitle: "مكافحة الحشرات باحترافية",
      heroSub:
        "صراصير، نمل، ناموس، ذباب، نمل أبيض: معالجة دقيقة حسب الحشرة والمكان.",
      intro: [
        "الحشرات الضارة تستقر بسرعة في الكوجينات والحمامات والمخازن والمحلات التقنية. من غير معالجة مناسبة، وجود بسيط يولي إصابة كبيرة.",
        "نشخّصو الحشرة والمناطق المصابة، وبعد نطبقو المعالجة المناسبة مع نصائح باش تمنع رجوعها.",
      ],
      blocks: [
        {
          title: "شنوّا الحشرات اللي نعالجوها؟",
          items: [
            "الصراصير",
            "النمل",
            "الناموس",
            "الذباب",
            "النمل الأبيض",
            "حشرات ضارة أخرى",
          ],
        },
      ],
      stepsTitle: "كيفاش يتم التدخل؟",
      steps: [
        {
          title: "الاتصال والوصف",
          text: "أوصف الحشرة اللي شفتها والمنطقة، بالتلفون أو واتساب أو الاستمارة.",
        },
        {
          title: "التقييم",
          text: "نحددو الحشرة والمناطق المصابة ودرجة الإصابة.",
        },
        {
          title: "معالجة دقيقة",
          text: "نطبقو المعالجة المناسبة للمكان والوضعية.",
        },
        {
          title: "نصائح وقائية",
          text: "توضيحات عملية باش تحدّ من رجوع الحشرات.",
        },
      ],
      placesTitle: "لأي أماكن؟",
      places: ["الديار", "الشقق", "المكاتب", "المحلات", "الفضاءات المهنية"],
      faq: [
        {
          q: "قداش يدوم التدخل؟",
          a: "يعتمد على نوع الحشرة والمساحة ودرجة الإصابة. اتصل بينا باش تاخو التوضيحات المناسبة لوضعيتك.",
        },
        {
          q: "لازم نخرج من الدار وقت المعالجة؟",
          a: "يعتمد على المعالجة المستعملة. نوضحو لك الاحتياطات اللازمة قبل كل تدخل.",
        },
        {
          q: "وإذا رجعت الحشرات؟",
          a: "اتصل بينا: حسب الوضعية، نجم نقترحو مراقبة أو تدخل تكميلي.",
        },
      ],
      ctaTitle: "تحتاج مكافحة حشرات؟",
    },
    deratisation: {
      heroTitle: "مكافحة القوارض في تونس والمناطق المجاورة",
      heroSub: "جرذان وفئران: كشف الممرات، معالجة مناسبة ونصائح وقائية.",
      intro: [
        "القوارض تخلي آثار واضحة: حسّ في الليل، فضلات، تغليف مقروض. وكل ما تستنى، كل ما تستقر أكثر.",
        "نكشفو الممرات ونقاط الدخول، نطبقو المعالجة المناسبة للمكان، وبعد نوضحو لك الإجراءات الوقائية.",
      ],
      blocks: [
        {
          title: "علامات الإصابة",
          items: [
            "حسّ في الليل في الحيطان أو السقف",
            "فضلات على طول الحيطان",
            "آثار قرض على الماكلة والتغليف",
            "روائح غريبة متواصلة",
          ],
        },
        {
          title: "علاش لازم تتحرك بسرعة؟",
          items: [
            "تلوث الماكلة والمخزون",
            "تخريب: خيوط الضوء والعوازل والحيطان",
            "إزعاج يومي وقلق متواصل",
          ],
        },
      ],
      stepsTitle: "كيفاش يتم التدخل؟",
      steps: [
        {
          title: "المعاينة",
          text: "نكشفو الممرات ونقاط الدخول ومناطق النشاط.",
        },
        {
          title: "معالجة مناسبة",
          text: "نركبو الحل المناسب حسب المكان والإصابة.",
        },
        {
          title: "المراقبة",
          text: "نتحققو من النتيجة ونعدلو إذا لزم.",
        },
        {
          title: "الوقاية",
          text: "نصائح لسدّ المنافذ ومنع رجوعها.",
        },
      ],
      placesTitle: "لأي أماكن؟",
      places: ["الديار", "الشقق", "المكاتب", "المحلات", "الفضاءات المهنية"],
      faq: [
        {
          q: "كيفاش نعرف إذا عندي جرذان ولا فئران؟",
          a: "حسّ في الليل، فضلات، تغليف مقروض: أوصف اللي لاحظتو ونعاونوك تحدد المشكلة.",
        },
        {
          q: "قداش تتكلف مكافحة القوارض؟",
          a: "السعر يعتمد على نوع القارض ودرجة الإصابة والمساحة والمنطقة. اتصل بينا باش تاخو المعلومات المناسبة.",
        },
        {
          q: "تتدخلو في المحلات؟",
          a: "أي: محلات ومكاتب ومطاعم وفضاءات مهنية، كما عند الخواص.",
        },
      ],
      ctaTitle: "عندك مشكلة قوارض؟",
    },
    "punaises-de-lit": {
      heroTitle: "بق الفراش: شخّص المشكلة واتحرك بفعالية",
      heroSub: "تشخيص دقيق ومعالجة كاملة ومتابعة إذا لزم، من غير وعود خيالية.",
      intro: [
        "بق الفراش يتخبى في الفرش والصمامات والشقوق والأثاث. يقرص في الليل ويرجع بسرعة إذا كانت المعالجة ناقصة.",
        "المعالجة الجزئية أو التقريبية تنقل المشكلة بدل ما تحلها. لهذا لازم طريقة كاملة من الأول.",
      ],
      blocks: [
        {
          title: "كيفاش تعرف الإصابة؟",
          items: [
            "قرصات متقاربة خاصة في الليل",
            "نقاط سوداء صغيرة على الفرش والأغطية",
            "آثار دم على المفروشات",
            "حشرات ظاهرة في خياطة الفرش",
          ],
        },
        {
          title: "وين يتخبى بق الفراش؟",
          items: [
            "الفرش والصمامات وروس الفرش",
            "الشقوق والحواف والبريزات",
            "الأثاث والكنبيات والستائر",
            "الفاليزات والحوايج",
          ],
        },
        {
          title: "علاش الحلول المؤقتة تفشل؟",
          items: [
            "ما توصلش ديما للبيض والمخابئ",
            "المعالجة الجزئية تفرّق الإصابة",
            "من غير طريقة كاملة، المشكلة ترجع في أسابيع",
          ],
        },
        {
          title: "شنوّا تحضّر قبل التدخل؟",
          items: [
            "فرّغ الطريق حول الفرش والحواف",
            "اغسل أغطية الفرش بالماء الساخن إذا أمكن",
            "ما تنقلش الأثاث المصاب لبيوت أخرى",
          ],
        },
      ],
      stepsTitle: "كيفاش يتم التدخل المهني؟",
      steps: [
        {
          title: "معاينة كاملة",
          text: "نكشفو المخابئ: الفرش والأثاث والشقوق والمناطق المعرضة.",
        },
        {
          title: "معالجة دقيقة",
          text: "نعالجو كل المناطق المحددة، مش الفرش برك.",
        },
        {
          title: "مراقبة ومتابعة",
          text: "حسب الوضعية، نجم نقترحو مراقبة أو تدخل ثانٍ.",
        },
      ],
      faq: [
        {
          q: "لازم نلوح الفرش؟",
          a: "مش بالضرورة. التقييم يحدد إذا الفرش ينجم يتعالج ولا من الأفضل تبديلو.",
        },
        {
          q: "قداش من تدخل لازم؟",
          a: "يعتمد على درجة الإصابة وخصوصية المكان. نوضحو لك هذا من وقت التقييم.",
        },
        {
          q: "القرصات خطيرة؟",
          a: "ردة الفعل تختلف من شخص لآخر. إذا عندك شك أو ردة فعل قوية، استشير مختص في الصحة.",
        },
      ],
      ctaTitle: "شاكك في بق الفراش؟",
    },
    desinfection: {
      heroTitle: "التطهير والتعقيم",
      heroSub: "تطهير مهني للأسطح والمحلات لبيئة أنظف.",
      intro: [
        "بعد إصابة بالحشرات، قبل إعادة استعمال محل، أو لتطهير فضاء يستقبل برشا ناس، التطهير المهني يعطي مستوى نظافة أعلى من التنظيف العادي.",
        "نعالجو الأسطح والمحلات حسب الاستعمال، وبعد نوضحو لك الممارسات الصحيحة باش تحافظ على النتيجة.",
      ],
      blocks: [
        {
          title: "وقتاش نطهّرو؟",
          items: [
            "بعد إصابة بالحشرات",
            "محلات تستقبل برشا ناس",
            "إعادة تجهيز محل",
            "الأجزاء المشتركة والمحلات التقنية",
          ],
        },
        {
          title: "نصائحنا",
          items: [
            "هوّي البيوت بانتظام",
            "نظف الأسطح قبل ما نجيك",
            "اتبع التعليمات اللي نعطيوهالك وقت التقييم",
          ],
        },
      ],
      stepsTitle: "كيفاش يتم التدخل؟",
      steps: [
        {
          title: "التقييم",
          text: "معاينة: الأسطح واستعمال المحل والاحتياجات الخاصة.",
        },
        {
          title: "معالجة الأسطح",
          text: "تطبيق مناسب للأسطح وخصوصية المكان.",
        },
        {
          title: "التوصيات",
          text: "توضيحات باش تحافظ على بيئة نظيفة بعد التدخل.",
        },
      ],
      placesTitle: "لأي أماكن؟",
      places: ["المساكن", "المكاتب", "المحلات", "الأجزاء المشتركة", "المحلات التقنية"],
      faq: [
        {
          q: "التطهير يعوّض التنظيف؟",
          a: "لا: تنظيف الأسطح قبل التدخل ضروري باش تكون المعالجة فعالة. نوضحو لك هذا قبل التدخل.",
        },
        {
          q: "قداش يدوم التطهير؟",
          a: "يعتمد على المساحة وخصوصية المكان. اتصل بينا باش تاخو التوضيحات المناسبة.",
        },
      ],
      ctaTitle: "تحتاج تطهير؟",
    },
    "traitement-nuisibles": {
      heroTitle: "معالجة الآفات الأخرى",
      heroSub: "عناكب، سحالي، أفاعي: أوصف اللي شفتو ونتحققو من الحل المناسب.",
      intro: [
        "كل آفة ما تتعالجش بنفس الطريقة. قدام ضيف غير معتاد، أول خطوة ديما هي هي: نحددو مليح شنوّا اللي تشاف.",
      ],
      note: "اتصل بينا باش توصف الآفة اللي شفتها ونتحققو من الحل المناسب.",
      blocks: [
        {
          title: "الآفات اللي نتعاملو معاها",
          items: [
            "العناكب",
            "السحالي",
            "الأفاعي",
            "آفات أخرى حسب التدخل",
          ],
        },
      ],
      stepsTitle: "كيفاش نتصرفو؟",
      steps: [
        {
          title: "أوصف الوضعية",
          text: "الآفة اللي شفتها والمكان والتكرار: بالتلفون أو واتساب أو الاستمارة.",
        },
        {
          title: "التقييم",
          text: "نتحققو من الحل المناسب لحالتك.",
        },
        {
          title: "التدخل",
          text: "معالجة مهنية حسب الوضعية.",
        },
      ],
      faq: [
        {
          q: "تتدخلو للأفاعي؟",
          a: "أوصف الوضعية (المكان والتكرار): نتحققو مع بعض من الحل المناسب.",
        },
        {
          q: "شنوّا نعمل في انتظار التدخل؟",
          a: "تجنب أي اتصال، اعزل المنطقة إذا أمكن، واتصل بينا بسرعة.",
        },
      ],
      ctaTitle: "آفة غير معتادة؟",
    },
    puces: {
      heroTitle: "مكافحة البراغيث في تونس والمناطق المجاورة",
      heroSub: "تشخيص ومعالجة فعّالة ضد البراغيث، مع نصائح للحدّ من عودتها.",
      intro: [
        "البراغيث حشرات صغيرة تقرص الإنسان والحيوانات الأليفة وتستقر في الزرابي والموكيت والفرش والأقمشة. تتكاثر بسرعة وتنتشر في كامل المسكن.",
        "بيضها يتساقط في المحيط ويفقس على دفعات: من غير معالجة كاملة للمكان، الإصابة ترجع. نعالجو كل المناطق المعنية ونوضحو لك الإجراءات الوقائية، خاصة حول الحيوانات الأليفة.",
      ],
      blocks: [
        {
          title: "وين تتخبى البراغيث؟",
          items: [
            "الزرابي والموكيت والباركي",
            "الفرش والكنبيات والمخادد",
            "فرش ورقاد الحيوانات",
            "الشقوق والحواف والزوايا المظلمة",
          ],
        },
        {
          title: "علامات الإصابة",
          items: [
            "قرصات متقاربة خاصة في الساقين",
            "حكة متواصلة",
            "حشرات صغيرة داكنة تنقز في الأقمشة",
            "وجود مكثف حول الحيوانات الأليفة",
          ],
        },
        {
          title: "علاش لازم تتحرك بسرعة؟",
          items: [
            "قرص وإزعاج يومي",
            "تكاثر سريع في أسابيع",
            "بيض منتشر في كامل المسكن",
          ],
        },
        {
          title: "شنوّا تحضّر قبل التدخل؟",
          items: [
            "نظف الزرابي والأقمشة بالمكنسة الكهربائية ولوّح الكيس",
            "اغسل الأغطية والأغلفة بالماء الساخن إذا أمكن",
            "عالج الحيوانات متاعك ولا هزها للبيطري",
            "فرّغ الطريق للمناطق المعنية",
          ],
        },
      ],
      stepsTitle: "كيفاش يتم التدخل المهني؟",
      steps: [
        {
          title: "المعاينة",
          text: "نكشفو مناطق النشاط: الزرابي والفرش والأقمشة والزوايا.",
        },
        {
          title: "معالجة كاملة",
          text: "نعالجو كل المناطق المحددة، بما فيها البيض والمخابئ.",
        },
        {
          title: "مراقبة ومتابعة",
          text: "حسب الوضعية، نجم نقترحو مراقبة أو تدخل ثانٍ.",
        },
        {
          title: "الوقاية",
          text: "نصائح باش تحدّ من رجوعها، خاصة حول الحيوانات الأليفة.",
        },
      ],
      placesTitle: "لأي أماكن؟",
      places: ["الديار", "الشقق", "المكاتب", "المحلات", "الفضاءات المهنية"],
      faq: [
        {
          q: "ما عنديش حيوانات، نجم يكون عندي براغيث؟",
          a: "أي: البراغيث تتنقل على الحوايج والفاليزات ولا عبر مرور حيوان. أوصف اللي لاحظتو ونقيّمو الوضعية.",
        },
        {
          q: "لازم نعالج الحيوانات الأليفة؟",
          a: "أي، بالتوازي مع معالجة المكان: استشير البيطري للمعالجة المناسبة للحيوان وقت اللي نعالجو المحيط.",
        },
        {
          q: "قداش من تدخل لازم؟",
          a: "يعتمد على درجة الإصابة وخصوصية المكان، خاطر البيض يفقس على دفعات. نوضحو لك هذا من وقت التقييم.",
        },
      ],
      ctaTitle: "عندك مشكلة براغيث؟",
    },
  },
  aboutPage: {
    heroTitle: "من نحن — سليم للوقاية والتطهير",
    heroSub: "حلول وقاية ومعالجة ضد الحشرات والآفات، في تونس.",
    intro: [
      "شركة سليم للوقاية و التطهير من جميع انواع الحشرات تقدم حلول وقاية ومعالجة الحشرات والتطهير ومكافحة القوارض للخواص والمهنيين.",
      "القاعدة متاعنا ساهلة: نفهمو كل وضعية قبل ما نتدخلو، وبعد نرافقو الحريف بنصائح وقائية مناسبة.",
    ],
    approachTitle: "الطريقة متاعنا",
    approach: [
      {
        title: "نفهمو المشكلة",
        text: "توصف الآفة اللي شفتها والمكان والوضعية.",
      },
      {
        title: "نحددو الآفة",
        text: "الفريق يحدد الآفة ويقيّم درجة الإصابة.",
      },
      {
        title: "نقترحو تدخلاً مناسباً",
        text: "المعالجة تتحدد حسب الحالة، من غير حل جاهز للكل.",
      },
      {
        title: "نرافقو الحريف",
        text: "توضيحات وقائية باش تحدّ من رجوع الإصابة.",
      },
    ],
  },
  zonesPage: {
    heroTitle: "مناطق التدخل",
    heroSub: "مقرنا في تونس، ونتدخلو من بنزرت حتى للمهدية.",
    note: "في منطقة أخرى؟ اتصل بينا باش تثبت من توفر الفريق.",
    relatedTitle: "خدماتنا في منطقتك",
    zones: [
      { name: "بنزرت", desc: "بنزرت والمناطق المجاورة، حسب توفر الفريق." },
      { name: "تونس الكبرى", desc: "تونس وأريانة وبن عروس ومنوبة: منطقة تمركزنا." },
      { name: "نابل", desc: "نابل والوطن القبلي: ديار وفضاءات مهنية." },
      { name: "الحمامات", desc: "فيلات وإقامات ومؤسسات سياحية." },
      { name: "سوسة", desc: "ديار ومحلات وفضاءات مهنية." },
      { name: "المنستير", desc: "ديار وفضاءات مهنية." },
      { name: "المهدية", desc: "المهدية والمناطق المجاورة، حسب توفر الفريق." },
    ],
  },
  faqPage: {
    heroTitle: "الأسئلة الشائعة",
    heroSub: "أجوبة قصيرة وصادقة قبل ما تتصل بينا.",
    more: [
      {
        q: "قداش يدوم التدخل؟",
        a: "يعتمد على نوع الحشرة والمساحة ودرجة الإصابة. اتصل بينا باش تاخو التوضيحات المناسبة لوضعيتك.",
      },
      {
        q: "نجم نبقى في الدار وقت المعالجة؟",
        a: "يعتمد على المعالجة المستعملة. نوضحو لك الاحتياطات اللازمة قبل كل تدخل.",
      },
    ],
  },
  contactPage: {
    heroTitle: "تحتاج تدخلاً؟",
    heroSub: "اتصل بينا مباشرة ولا خلّي الطلب متاعك: نجاوبوك حسب توفر الفريق.",
  },
  ctaBlock: {
    title: "تحتاج تدخلاً؟",
  },
  reviews: {
    eyebrow: "آراء الحرفاء",
    title: "شنوّا يقولو علينا حرفاؤنا",
    subtitle: "منشوراتنا وآراء حرفائنا مباشرة من صفحتنا على فيسبوك.",
    watchOn: "شاهد على فيسبوك",
    frameLabel: "رأي حريف منشور على فيسبوك",
  },
  seo: {
    services: {
      title: "خدماتنا في مكافحة الحشرات بتونس | سليم",
      desc: "مكافحة الحشرات والقوارض وبق الفراش والتطهير: اكتشف خدماتنا في تونس. اتصل على 50 431 208.",
    },
    desinsectisation: {
      title: "مكافحة الحشرات في تونس | شركة سليم",
      desc: "معالجة مهنية للصراصير والنمل والناموس والنمل الأبيض من بنزرت للمهدية (تونس الكبرى، الوطن القبلي، الساحل). اتصل على 50 431 208.",
    },
    deratisation: {
      title: "مكافحة القوارض في تونس | شركة سليم",
      desc: "معالجة الجرذان والفئران في تونس والمناطق المجاورة: كشف ومعالجة ووقاية. اتصل على 50 431 208.",
    },
    punaises: {
      title: "بق الفراش في تونس | معالجة مهنية",
      desc: "قرصات في الليل؟ تشخيص ومعالجة مهنية لبق الفراش في تونس. اتصل على 50 431 208.",
    },
    desinfection: {
      title: "التطهير والتعقيم في تونس | سليم",
      desc: "تطهير وتعقيم المساكن والمحلات المهنية في تونس. اتصل على 50 431 208.",
    },
    nuisibles: {
      title: "معالجة الآفات في تونس | سليم",
      desc: "عناكب وسحالي وأفاعي وآفات أخرى: أوصف الوضعية ونقترحو الحل المناسب. 50 431 208.",
    },
    puces: {
      title: "مكافحة البراغيث في تونس | سليم",
      desc: "براغيث في الزرابي ولا الفرش؟ تشخيص ومعالجة مهنية للبراغيث في تونس مع نصائح وقائية. اتصل على 50 431 208.",
    },
    apropos: {
      title: "من نحن | سليم للوقاية والتطهير",
      desc: "سليم: وقاية ومعالجة الحشرات والتطهير ومكافحة القوارض في تونس. اكتشف الطريقة متاعنا.",
    },
    zones: {
      title: "مناطق التدخل في تونس | سليم",
      desc: "نتدخلو في بنزرت وتونس الكبرى ونابل والحمامات وسوسة والمنستير والمهدية. ثبت التوفر: 50 431 208.",
    },
    faq: {
      title: "الأسئلة الشائعة | سليم للوقاية والتطهير",
      desc: "بق الفراش والصراصير والأسعار وسير التدخل: أجوبة الأسئلة الشائعة حول تدخلاتنا في تونس.",
    },
    contact: {
      title: "اتصل بنا واطلب تدخلاً | سليم",
      desc: "اطلب تدخلاً: 50 431 208، واتساب أو استمارة. شارع ألفرد نوبل، البحيرة 3، تونس.",
    },
  },
  meta: {
    title: "مكافحة الحشرات والتطهير في تونس | شركة سليم للوقاية والتطهير",
    description:
      "مكافحة الحشرات والقوارض، معالجة بق الفراش والصراصير، والتطهير من بنزرت للمهدية. اتصل على 50 431 208.",
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "ar" ? ar : fr;
}
