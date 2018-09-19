import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCaretLeft, faCaretDown, faMoon } from '@fortawesome/free-solid-svg-icons'

export const loadIcons = () => {
    library.add(faEnvelope, faCaretLeft, faCaretDown, faMoon)
}

