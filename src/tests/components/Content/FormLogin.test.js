// Import necessary libraries and components
import { mount, config } from '@vue/test-utils'
import { describe, test, beforeEach, expect, vi } from 'vitest'
import FormLogin from '../../../components/Content/FormLogin.vue'
import { useAuthStore } from '@userfrosting/sprinkle-account/stores'
import AlertContainer from '../../../components/AlertContainer.vue'
import UIkit from 'uikit'

// Mock the auth store
vi.mock('@userfrosting/sprinkle-account/stores', () => ({
    useAuthStore: vi.fn()
}))

// Mock UIkit notification
vi.mock('uikit', async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        notification: vi.fn()
    }
})

// Register the AlertContainer component stub globally
config.global.stubs['UFAlertContainer'] = AlertContainer

describe('FormLogin.vue', () => {
    let authMock

    beforeEach(() => {
        authMock = {
            login: vi.fn()
        }
        useAuthStore.mockReturnValue(authMock)
    })

    test('renders correctly', () => {
        const wrapper = mount(FormLogin)
        expect(wrapper.exists()).toBe(true)
    })

    test('handles successful login', async () => {
        authMock.login.mockResolvedValue(Promise.resolve({ full_name: 'John Doe' }));

        const wrapper = mount(FormLogin)
        await wrapper.vm.sendLogin({
            user_name: 'john.doe',
            password: 'password'
        })

        // Spy on the UIkit notification method
        vi.spyOn(UIkit, 'notification')
        expect(UIkit.notification).toHaveBeenCalledTimes(1)
        expect(UIkit.notification).toHaveBeenCalledWith({
            message: 'Welcome back John Doe!',
            status: 'success',
            pos: 'bottom-right',
            timeout: 4000
        })
    })

    // test('handles login failure', async () => {
    //     const error: AlertInterface = { title: 'Invalid credentials' }
    //     const form: LoginForm = {
    //         user_name: 'john.doe',
    //         password: 'password'
    //     }

    //     authMock.login.mockRejectedValue(error)
    //     const wrapper = mount(FormLogin)
    //     await wrapper.vm.sendLogin(form)
    //     // console.log(wrapper.vm)
    //     // expect(wrapper.vm.error.value).toBe(error)

    //     expect(wrapper.find('[data-test="error"]').exists()).toBe(true)
    //     expect(wrapper.get('[data-test="error"]').text()).toMatch('Hello world')
    // })

    // test('manages loading state correctly', async () => {
    //     authMock.login.mockResolvedValue({ full_name: 'John Doe' })
    //     const wrapper = mount(FormLogin)
    //     expect(wrapper.vm.loading).toBe(false)
    //     const sendLoginPromise = wrapper.vm.sendLogin({ user_name: 'john.doe', password: 'password' })
    //     expect(wrapper.vm.loading).toBe(true)
    //     await sendLoginPromise
    //     expect(wrapper.vm.loading).toBe(false)
    // })

    // test('displays error message on login failure', async () => {
    //     const error = { message: 'Invalid credentials' }
    //     authMock.login.mockRejectedValue(error)
    //     const wrapper = mount(FormLogin, {
    //         global: {
    //             stubs: {
    //                 UFAlertContainer
    //             }
    //         }
    //     })
    //     await wrapper.vm.sendLogin()
    //     await wrapper.vm.$nextTick() // Wait for DOM update
    //     expect(wrapper.findComponent({ name: 'UFAlertContainer' }).exists()).toBe(true)
    //     expect(wrapper.findComponent({ name: 'UFAlertContainer' }).props('alert')).toBe(error)
    // })
})
