import { createI18n } from "vue-i18n";

export const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'rn',
    messages: {
        pt: {
            hello: 'Opa, e ai!',
            back: 'Voltar',
            follow: 'Me acompanhe em outras redes:',
            about: 'Sobre mim',
            show: 'Esse é um showcase dos meus trabalhos:',
            showcase: {
                designer: 'Designer UX/UI',
                character: 'Designer de personagens (para animação)',
                animation: 'Animação 2D'
            },
            buttons: {
                ux: 'UX/UI',
                character: 'Personagem',
                animation: 'Animação',
                illustration: 'Ilustrações',
                about: 'Sobre Mim'
            },
            section: {
                about1: 'Bom dia! Eu sou Maria Clara - Maria Mel - Sou uma designer e animadora 2D, formada em Design de Animação na faculdade IESB em brasília. E Design UX, na Escola Britânica de Artes Criativas & Tecnológicas (EBAC).',
                about2: 'Sou apaixonada em trazer vida a personagens incríveis e fantásticos.',
                about3: 'E adoro trazer um design prático e criativo para jogos divertidos!'
            },
            ux: {
                title: 'Quadrilha Mania',
                section1: 'É um projeto de UX/UI design focado em jogos, com o objetivo de testar minhas habilidades de designer e criativadade dentro dos jogos.',
                section2: 'Quadrilha mania é um jogo mobile, que trás 3 jogos divertidos e clássicos:',
                section21: 'Xadrez',
                section22: 'Damas',
                section23: 'Sudoku',
                obs: 'Por ser um projeto de design não tem a possibilidade de jogar :('
            },
            characters: {
                hdnDescription: "Herói de ninguém, é o projeto de animação do Studio Triunfo Animation. Estou participando como designer de personagem e animadora 2D.",
                inDev: 'Como o projeto ainda está em desenvolvimento, ainda há muito para autalizar nesta página! Por isso salve meu site para ficar por dentro ;)',
                follow: 'E siga nosso projeto! Apenas aperte em Herói de Ninguém',
                hero: 'HERÓI',
                modelsheet1: "O modelsheet da personagem chica está sendo desenvolvida por Luli Bufano",
                modelsheet2: "Acompanhe o trabalho delu aqui!"
            },
            animation: {
                title: "Uma Nova Luz ás Sombras",
                p1: "Uma Nova Luz ás Sombras foi um projeto da faculdade do meu último semestre. Na qual eu e meu grupo, tivemos que mostrar o que aprendemos em todos os semetres.",
                p2: "Nos dedicamos e apresentamos o melhor projeto de turma.",
                p3: "Essa é um história que conta sobre suprerar preconceitos e redenção. As vezes o que achamos ser ruim, sem nem mesmo conhecer o que está na nossa frente, pode não ser o verdadeiro mal."
            }
        },
        en: {
            hello: "Hello there!",
            back: 'Back',
            follow: 'Follow me in other social medias:',
            about: 'About Me',
            show: 'This is a showcase of some of my works:',
            showcase: {
                designer: 'Designer UX/UI',
                character: 'Character designer (for animation)',
                animation: '2D Animation'
            },
            buttons: {
                ux: 'UX/UI',
                character: 'Character',
                animation: 'Animation',
                illustration: 'Illustrations',
                about: 'About Me'
            },
            section: {
                about1: 'Hello! I am Maria Clara - Maria Mel - I’m a designer and 2D animator, graduated in Animation Design from IESB college located in brasília Brazil. And Design UX, from Escola Britânica de Artes Criativas & Tecnológicas (EBAC).',
                about2: 'I am passionate about bringing incredible and fantastic characters to life.',
                about3: 'And I love bringing a practical and creative design to fun games!'
            },
            ux: {
                title: 'Quadrilha Mania',
                section1: 'This is a UX/UI design project focused on games, with the goal of testing my design skills and creativity within games.',
                section2: 'Quadrilha Mania is a mobile game that brings together 3 fun and classic games:',
                section21: 'Chess',
                section22: 'Checkers',
                section23: 'Sudoku',
                obs: "Since it's a design project, there's no playable fuctions :("
            },
            characters: {
                hdnDescription: "Hero of none, t his is an animation project by Studio Triunfo Animation. I am participating as a character designer and 2D animator.",
                inDev: "Since the project is still under development, there's still a lot to update on this page! So save my site to stay informed ;)",
                follow: 'And follow our project! Just click on Hero of None.',
                hero: 'HERO',
                modelsheet1: "The model sheet for the character Chica is being developed by Luli Bufano",
                modelsheet2: "Acompanhe o trabalho delu aqui!"
            },
            animation: {
                title: "A New Light for the Shadows",
                p1: "Uma Nova Luz ás Sombras was a college project of my final semester. In which my group and I had to show what we learned in all the semesters.",
                p2: "We dedicated ourselves and presented the best project in the class.",
                p3: "This is a story about overcoming prejudice and redemption. Sometimes what we think is bad, without even knowing what's in front of us, may not be the real evil."
            },
        }
    }
})