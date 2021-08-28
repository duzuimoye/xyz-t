import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from '../locales/en.json'
import zhCommon from '../locales/zh.json'
import antdzhLocale from '../control/baseMaterial/antdesign/locales-zh'
import antdenLocale from '../control/baseMaterial/antdesign/locales-en'

const en = JSON.parse(JSON.stringify(enCommon))
const ch = JSON.parse(JSON.stringify(zhCommon))

en.translation.baseMateiral = antdenLocale
ch.translation.baseMateiral = antdzhLocale

i18n.use(initReactI18next).init({
  resources: {
    en,
    ch
  },
  fallbackLng: 'ch',
  interpolation: { escapeValue: false }
})

export default i18n
