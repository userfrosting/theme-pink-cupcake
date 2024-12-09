import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import CardBox from '../../../components/Content/CardBox.vue'

describe('CardBoxBig.vue', () => {
    test('Basic test', () => {
        // Arrange
        const wrapper = mount(CardBox, {
            props: {
                title: 'Hello world'
            },
            slots: {
                default: 'This is the slot content'
            }
        })

        // Assert
        expect(wrapper.get('[data-test="title"]').text()).toMatch('Hello world')
        expect(wrapper.get('[data-test="slot"]').text()).toMatch('This is the slot content')
    })

    test('Test with no prop and slot', () => {
        // Arrange
        const wrapper = mount(CardBox)

        // Assert
        expect(wrapper.find('[data-test="title"]').exists()).toBe(false)
        expect(wrapper.get('[data-test="slot"]').text()).toMatch('')
    })
})
