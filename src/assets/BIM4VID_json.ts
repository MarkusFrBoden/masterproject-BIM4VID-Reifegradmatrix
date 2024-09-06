const BIM4VID = {
    "title": "BIM4VID",
    "description": "Building Information Modeling (BIM) Maturity Model für Verkehrsinfrastrukturbehörden in Deutschland",
    "pages": [
        {
            "name": "BIM4VIDPage0",
            "elements": [
                {
                    "type": "html",
                    "name": "explanationquestion0",
                    "html": "Dieser Reifegradcheck stellt Fragen zum BIM-Implementierungsgrad in Ihrer Organisation. Dabei werden neben einer Selbsteinschätzung nach den Zielen des Masterplans BIM Bundesfernstraßen acht weitere Dimensionen abgefragt. Im Anschluss erhalten Sie eine Auswertung in Form eines Ampelsystems, das Ihnen aufzeigt, in welchen Bereichen sie Vorreiter oder Nachzügler sind."
                },
                {
                    "type": "image",
                    "name": "image0",
                    "imageLink": "BIM4VID_Dimensionen-KPI.png",
                    "imageFit": "cover",
                    "imageHeight": "auto",
                    "imageWidth": "100%"
                }
            ],
            "title": "Informationen über den Reifegradcheck"
        },
        {
            "name": "BIM4VIDPage1",
            "elements": [
                {
                    "type": "html",
                    "name": "explanationquestion1",
                    "html": "Die Berechnungsmethode der Auswertung ergibt sich anhand der von Ihnen betreuten Straßenklasse und gemäß den im Masterplan BIM Bundesfernstraßen definierten Zielen. Die Anforderungen von Organisationen des Bundesfernstraßenbaus wurden entsprechend für Landes- und Kreisstraßen abgeschwächt."
                },
                {
                    "type": "radiogroup",
                    "name": "BIM4VIDQuestion1",
                    "title": "Welche stellte die höchste von Ihnen betreute Straßenklasse dar?",
                    "defaultValue": "Item 1",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Bundesfernstraßen"
                        },
                        {
                            "value": "Item 2",
                            "text": "Landstraßen"
                        },
                        {
                            "value": "Item 3",
                            "text": "Kreisstraßen"
                        }
                    ]
                }
            ],
            "title": "Statistische Abfrage"
        },
        {
            "name": "BIM4VIDPage2",
            "elements": [
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel1",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquesion2",
                            "html": "Implementierung der BIM-Methode"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion2",
                            "imageLink": "/1713259144314-MP_Implementierung.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion2",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquesion3",
                            "html": "BIM-Projekteinsatz"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion3",
                            "imageLink": "/1713259147598-MP_Projekteinsatz.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion3",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquesion4-1",
                            "html": "BIM-Anwendungsfälle (AwF)"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion4",
                            "imageLink": "/1713259151762-MP_BIM-AwF.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "html",
                            "name": "explanationquesion4-2",
                            "html": "<p>Die zu erreichenden <a href=\"https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/BIM4INFRA/3_6_BIM4INFRA2020_AP4_Teil6.pdf\" target=\"_blank\">BIM4INFRA-Anwendungsfälle</a> sind in den Rahmendokumenten <a href=\"https://www.bimdeutschland.de/fileadmin/media/Downloads/Download-Liste/Strasse/BIM_RD_Anwendungsfaelle_V1_0_barrierefrei.pdf\" target=\"_blank\">V1</a> und <a href=\"https://www.bim-bundesfernstrassen.de/fileadmin/user_upload/Rahmendokumente/bim-rd-anwendungsfaelle-phase-II.pdf\" target=\"_blank\">V2</a> dargestellt.</p> <p>V1 enthält die Anwendungsfälle Bestandserfassung und - modellierung, Planungsvarianten, Visualisierung, Koordination der Fachgewerke, Ableitung von Planunterlagen, Mengen- und Kostenermittlung, Leistungsverzeichnis, Ausschreibung, Vergabe, Projekt- und Bauwerksdokumentation </p><p>V2 enthält zusätzlich die Anwendungsfälle Planungsfortschrittskontrolle und Qualitätsprüfung, Bemessung und Nachweisführung, Terminplanung der Ausführung, Logistikplanung, Baufortschrittskontrolle, Abnahme- und Mängelmanagement</p><p>Weitere BIM4Infra-AwF sind unter anderem  Arbeits- und Gesundheitsschutz, Planungsfreigabe und Nutzung für Betrieb und Erhaltung</p>"
                          },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion4",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ]
                }
            ],
            "title": "Selbsteinschätzung des BIM-Reifegrades nach dem Masterplan",
            "description": "Die Ziele vom Masterplan BIM Bundesfernstraßen lassen sich in drei Key Performance Indikatoren unterteilen. Diese beinhalten die Implementierung der BIM-Methode in der Organisation, den Einsatz der BIM-Methode bei Projekten sowie die Nutzung verschiedener BIM-Anwendungsfälle (AwF)."
        },
        {
            "name": "BIM4VIDPage3",
            "elements": [
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel2",
                    "elements": [
                        {
                            "type": "image",
                            "name": "imagequestion5",
                            "imageLink": "/1713257444443-01_BIM-Ziele&Strategie.png.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion5",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "BIM-Ziele und -Strategie"
                },
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel3",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquestion6",
                            "html": "Managementunterstüzung (BIM-Wissen auf Führungsebenen)"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion6",
                            "imageLink": "/1713257448054-02_ManagementunterstÃ¼tzung.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion6",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquestion7",
                            "html": "BIM-Bedeutung für die Organisation"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion7",
                            "imageLink": "/1713257452074-03_BIM-Bedeutung.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion7",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "Struktur, Organisation und Management"
                },
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel4",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquestion8",
                            "html": "BIM-Schulungen und -Zertifizierungen für Mitarbeiter"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion8",
                            "imageLink": "/1713257632312-04_BIM-Schulungen.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion8",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquestion9",
                            "html": "BIM-Mindset bei den Mitarbeitern"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion9",
                            "imageLink": "/1713257636277-05_BIM-Mindset.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion9",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "Menschen und Unternehmenskultur"
                },
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel5",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquestion10",
                            "html": "Informationsanforderungen nach ISO 19650-1"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion10",
                            "imageLink": "/1713257717567-06_IA.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion10",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquestion11",
                            "html": "Besondere Vertragsbedingungen (BIM-BVB)"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion11",
                            "imageLink": "/1713257720797-07_BIM-BVB.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion11",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "Regulierungen und Verträge"
                }
            ],
            "title": "Dimensionen und KPI-Abfragen",
            "description":"Die weiteren Dimensionen fragen die BIM-Impplementierung in verschiedenen Bereichen ihrer Organisation ab und vervollständigen dadurch ihren BIM-Reifegradcheck."
        },
        {
            "name": "BIM4VIDPage4",
            "elements": [
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel6",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquestion12",
                            "html": "BIM-Unterstützung der Auftragnehmer"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion12",
                            "imageLink": "/1713257780776-08_AN-UnterstÃ¼tzung.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion12",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquestion13",
                            "html": "Bürgerinformation und -beteiligung"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion13",
                            "imageLink": "/1713257784640-09_BÃ¼rgerinformation.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion13",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "Stakeholder"
                },
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel7",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquestion14",
                            "html": "Prozesse und Prozessübersichten"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion14",
                            "imageLink": "/1713258735903-10_Prozesse.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion14",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquestion15",
                            "html": "Dokumentation von BIM-Wissen"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion15",
                            "imageLink": "/1713258740152-11_BIM-Wissen.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion15",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "Prozesse"
                },
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel8",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquestion16",
                            "html": "Software"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion16",
                            "imageLink": "/1713258907485-12_Software.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion16",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquestion17",
                            "html": "Hardware"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion17",
                            "imageLink": "/1713258910874-13_Hardware.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion17",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "IT-Infrastruktur"
                },
                {
                    "type": "panel",
                    "name": "BIM4VIDPanel9",
                    "elements": [
                        {
                            "type": "html",
                            "name": "explanationquestion18",
                            "html": "CDE nach DIN SPEC 91391-1"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion18",
                            "imageLink": "/1713259023095-14_CDE.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion18",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        },
                        {
                            "type": "html",
                            "name": "explanationquestion19",
                            "html": "Interoperabilität im Sinne des EIF und nach BuildingSMART"
                        },
                        {
                            "type": "image",
                            "name": "imagequestion19",
                            "imageLink": "/1713259026414-15_InteroperabilitÃ¤t.jpg",
                            "imageFit": "cover",
                            "imageHeight": "auto",
                            "imageWidth": "100%"
                        },
                        {
                            "type": "rating",
                            "name": "BIM4VIDQuestion19",
                            "title": " ",
                            "hideNumber": true,
                            "defaultValue": 1,
                            "isRequired": true,
                            "autoGenerate": false,
                            "rateCount": 6,
                            "rateValues": [
                                {
                                    "value": 1,
                                    "text": "0"
                                },
                                {
                                    "value": 2,
                                    "text": "1"
                                },
                                {
                                    "value": 3,
                                    "text": "2"
                                },
                                {
                                    "value": 4,
                                    "text": "3"
                                },
                                {
                                    "value": 5,
                                    "text": "4"
                                },
                                {
                                    "value": 6,
                                    "text": "5"
                                }
                            ],
                            "rateMax": 6
                        }
                    ],
                    "title": "Technologie und Daten"
                }
            ],
            "title": "Dimensionen und KPI-Abfragen",
            "description":"Die weiteren Dimensionen fragen die BIM-Impplementierung in verschiedenen Bereichen ihrer Organisation ab und vervollständigen dadurch ihren BIM-Reifegradcheck."
        }
    ],
    "showProgressBar": "top",
    "questionTitlePattern": "numTitle",
    "widthMode": "static",
    "width": "80%",
    "fitToContainer": true
}

export { BIM4VID };
