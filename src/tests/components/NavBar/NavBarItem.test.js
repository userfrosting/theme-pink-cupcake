import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import NavBarItem from '../../../components/NavBar/NavBarItem.vue'

// Mock router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: NavBarItem
        }
    ]
})

describe('NavBarItem.vue', () => {
    test('No props or slots', () => {
        // Arrange
        const wrapper = mount(NavBarItem, {
            global: {
                plugins: [router]
            }
        })

        // Assert
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.text()).toMatch('')
    })

    test('External link, using both props', () => {
        // Arrange
        const wrapper = mount(NavBarItem, {
            props: {
                to: 'http://userfrosting.com',
                label: 'UserFrosting'
            },
            global: {
                plugins: [router]
            }
        })

        // Assert
        expect(wrapper.text()).toMatch('UserFrosting')
    })

    test('External link, using slot', () => {
        // Arrange
        const wrapper = mount(NavBarItem, {
            props: {
                to: 'http://userfrosting.com',
                label: 'This is the Label as prop'
            },
            slots: {
                default: 'This is the slot content'
            },
            global: {
                plugins: [router]
            }
        })

        // Assert
        expect(wrapper.text()).toMatch('This is the slot content')
    })

    test('Internal, using both props', () => {
        // Arrange
        const wrapper = mount(NavBarItem, {
            props: {
                to: '/',
                label: 'UserFrosting'
            },
            global: {
                plugins: [router]
            }
        })

        // Assert
        expect(wrapper.text()).toMatch('UserFrosting')
    })

    test('Internal, using both slot', () => {
        // Arrange
        const wrapper = mount(NavBarItem, {
            props: {
                to: '/',
                label: 'This is the Label as prop'
            },
            slots: {
                default: 'This is the slot content'
            },
            global: {
                plugins: [router]
            }
        })

        // Assert
        expect(wrapper.text()).toMatch('This is the slot content')
    })
})