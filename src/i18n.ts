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
            }
        },
        en: {
            hello: "Hey, what's up?",
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
            }
        }
    }
})