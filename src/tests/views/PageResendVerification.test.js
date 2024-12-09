import { expect, test, describe } from 'vitest'
import { mount, config } from '@vue/test-utils'
import PageResendVerification from '../../views/PageResendVerification.vue'
import CardBoxBig from '../../components/Content/CardBoxBig.vue'
import CardBox from '../../components/Content/CardBox.vue'
import UFAlert from '../../components/UFAlert.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Register font-awesome-icon component
library.add(fas)
config.global.stubs['FontAwesomeIcon'] = FontAwesomeIcon

// Register global components
config.global.components['UFCardBoxBig'] = CardBoxBig
config.global.components['UFCardBox'] = CardBox
config.global.components['UFAlert'] = UFAlert

describe('PageResendVerification.vue', () => {
    test('Render correctly', () => {
        const wrapper = mount(PageResendVerification)
        expect(wrapper.exists()).toBe(true)
    })
})
