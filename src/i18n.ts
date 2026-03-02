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
            }
        }
    }
})