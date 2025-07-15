import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {        
    fr: {
        translation: {
            saveTheDate: {
                date : "13 juin 2026"
            },
            countdown: {
                ticTac: "Tic Tac... Il ne reste plus que ...",
                days: "Jours",
                hours: "Heures",
                minutes: "Minutes",
                seconds: "Secondes",
                beautifulYes: "Pour les plus beaux oui de l'année !"
            },
            planning: {
                title: "Planning de la journée",
                firstParagraph: "C’est avec beaucoup de bonheur que nous vous accueillerons à la ferme d’Ecavée en début d'après-midi",
                secondParagraph: "Nous avons hâte de partager avec vous cette journée si spéciale, remplie d’amour, de rires et de beaux souvenirs à créer ensemble.",
                ceremony: {
                    title: "Cérémonie",
                    description: "La journée commencera avec la cérémonie, directement sur le lieu de réception. Un moment que nous avons voulu à notre image et que nous avons hâte de partager avec vous."
                },
                dinner: {
                    title: "Repas",
                    description: "Après les larmes de joie, place aux saveurs ! Un repas gourmand vous attend pour prolonger la magie autour d’une belle tablée conviviale."  
                },
                party: {
                    title: "Fête",
                    description: "Le cœur rempli et le ventre bien content, il ne restera plus qu’à faire chauffer la piste de danse. Sortez vos plus beaux pas, la soirée ne fait que commencer !"  
                }
            },
            place: {
                title: "LA FERME D'ECAVÉE",
                leftSection: {
                    description: "C’est avec grand plaisir que nous vous accueillerons dans le cadre enchanteur de la ferme d’Ecavée, un véritable havre de paix, situé à deux pas de Tournai."
                },
                rightSection: {
                    description: "Nous vous remercions de bien vouloir stationner vos véhicules sur le parking situé à gauche de l’entrée principale, afin de respecter le calme et l’harmonie du lieu."
                },
            },
            rsvp: {
                title: "Confirmez votre présence !",
                description: "On a hâte de vous voir, mais pour être sûrs de ne rien oublier, merci de nous confirmer votre venue avant janvier 2026.",
                buttonLabel: "Confirmer maintenant"
            },
            faq: {
                title: "Avez-vous des questions ?",
                confirmationLimit: {
                    question: "Combien de temps ai-je pour confirmer notre présence ?",
                    answer: {
                        firstParagraph: "Janvier 2026. Passé ce délai, vous risquez de vous retrouver entre le DJ et la porte de la cuisine ! 😅"
                    }
                },
                dressCode: {
                    question: "Y a t'il un dress code ?",
                    answer: {
                        firstParagraph: "Aucun dress code imposé, mais une tenue soignée et élégante sera la bienvenue.",
                        secondParagraph: "Nous vous remercions simplement d’éviter le blanc, le marron ou les teintes qui s’en rapprochent.",
                        thirdParagraph: "La cérémonie ayant lieu en extérieur (sauf pluie), pensez à prévoir une tenue adaptée à la météo. 👗👞☀️",

                    }
                },
                whereToSleep: {
                    question: "Où dormir après la fête ?",
                    answer: {
                        firstParagraph: "Nous savons que le lieu de réception peut être éloigné pour certains, et que vous aurez peut-être envie de profiter pleinement de la soirée sans penser au trajet du retour.",
                        secondParagraph: "Des options de logement se trouvent non loin de la fête. Si vous en avez besoin, écrivez-nous, on se fera un plaisir de vous guider."
                    }
                },
                inviteOtherPerson: {
                    question: "Puis-je inviter d’autres personnes ?",
                    answer: {
                     firstParagraph: "Toutes les places ayant déjà été soigneusement comptabilisées, nous vous prions de ne pas amener de convives supplémentaires, car il n’y aura pas de places disponibles."   
                    }
                },
                childrenAtTheWedding: {
                    question: "Puis-je amener mes enfants au mariage ?",
                    answer: {
                        firstParagraph: "Bien sûr ! Vos petits bouts sont les bienvenus pour faire la fête avec nous ! 🎉 Une table à leur taille, des jeux rigolos et même un coin piscine (sous la responsabilité des parents) les attendent pour s’amuser en toute liberté.",
                        secondParagraph: "N’oubliez pas leur maillot de bain et leurs essuies ! Et surtout, pensez à nous confirmer leur présence également, pour que tout soit prêt pour eux aussi."
                    }
                },
                otherQuestion : {
                    question: "Avez-vous une autre question ?",
                    answer: {
                        firstParagraph: "Une question en tête ? Écrivez-nous, on se fera un plaisir de vous répondre !",
                    }
                }
            }
        }
    },
    pt: {
        translation: {
            saveTheDate: {
                date : "13 junho 2026"
            },
            countdown: {
                ticTac: "A contagem começou...",
                days: "Dias",
                hours: "Horas",
                minutes: "Minutos",
                seconds: "Segundos",
                beautifulYes: "Para o 'sim' mais lindo do ano !"
            },
            planning: {
                title: "Nosso dia especial, passo a passo",
                firstParagraph: "Com muito carinho, esperamos por vocês na Fazenda Ecavée a partir das 15h.",
                secondParagraph: "Mal podemos esperar para viver esse dia tão especial ao lado de pessoas queridas, cheio de sorrisos, amor e momentos inesquecíveis !",
                ceremony: {
                    title: "Cerimônia",
                    description: "Vamos abrir esse dia mágico com a nossa cerimônia, direto no local da recepção. Um momento pensado com carinho, do nosso jeitinho, que estamos ansiosos para dividir com vocês !"
                },
                dinner: {
                    title: "Refeição",
                    description: "Depois das emoções, é hora de celebrar à mesa! Um jantar delicioso os espera, com muitos sabores e risadas compartilhadas."  
                },
                party: {
                    title: "Festa",
                    description: "Barriga cheia, coração leve... é hora de dançar! Preparem os passinhos — a noite promete ser animada, vibrante e cheia de momentos inesquecíveis, do começo ao fim !"
                }
            },
            place: {
                title: "LA FERME D'ECAVÉE",
                leftSection: {
                    description: "Vai ser uma alegria imensa receber vocês nesse cantinho encantador, bem pertinho de Tournai — um lugar cheio de charme e tranquilidade."
                },
                rightSection: {
                    description: "Pedimos com carinho que deixem seus carros no estacionamento à esquerda da entrada principal, para preservar a harmonia do espaço. Obrigado !"
                },
            },
            rsvp: {
                title: "Confirme sua presença !",
                description: "Estamos ansiosos para ver você, mas para não esquecer nenhum detalhe, pedimos que confirme sua presença até janeiro de 2026.",
                buttonLabel: "Confirmar agora"
            },
            faq: {
                title: "Ficou com alguma dúvida ?",
                confirmationLimit: {
                    question: "Até quando posso confirmar minha presença?",
                    answer: {
                        firstParagraph: "Até janeiro de 2026. Depois disso... pode ser que só sobre um lugar entre o DJ e a cozinha ! 😅"
                    }
                },
                dressCode: {
                    question: "Tem dress code?",
                    answer: {
                        firstParagraph: "Não temos regras rígidas, mas uma roupa bonita e elegante será super bem-vinda !",
                        secondParagraph: "Só pedimos para evitar o branco, marrom ou tons muito parecidos.",
                        thirdParagraph: "Como a cerimônia será ao ar livre (a não ser que chova!), escolha um look confortável e adequado ao clima. 👗👞☀️"
                    }
                },
                whereToSleep: {
                    question: "Onde dormir depois da festa?",
                    answer: {
                        firstParagraph: "Sabemos que o local pode ser um pouquinho distante pra alguns, e talvez você queira aproveitar sem pressa.",
                        secondParagraph: "Tem sim ! Selecionamos algumas opções de hospedagem próximas. É só mandar uma mensagem e te ajudamos com prazer !"
                    }
                },
                inviteOtherPerson: {
                    question: "Posso convidar outras pessoas?",
                    answer: {
                        firstParagraph: "Como tudo foi planejado com muito carinho e os lugares são contadinhos, pedimos que venham apenas os convidados que receberam o convite. Obrigado pela compreensão !"
                    }
                },
                childrenAtTheWedding: {
                    question: "Posso levar meus filhos ?",
                    answer: {
                        firstParagraph: "Claro que sim! As crianças são mais do que bem-vindas para celebrar com a gente! 🎉 Vamos ter uma mesinha só para elas, brinquedos divertidos e até uma piscininha (sempre sob supervisão dos pais!).",
                        secondParagraph: "Ah! Não esqueçam o maiô e as toalhas! E por favor, avisem se os pequenos vêm também, pra prepararmos tudo direitinho pra eles."
                    }
                },
                otherQuestion: {
                    question: "Ficou com alguma dúvida ?",
                    answer: {
                        firstParagraph: "Fala com a gente! Será um prazer responder e te ajudar com o que precisar 😊"
                    }
                }
            }
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: "fr",
    lng: navigator.language, 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;