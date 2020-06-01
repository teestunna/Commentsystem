import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'


describe('Comment.vue', () => {
    it('Finds the App component', () => {
      const wrapper = shallowMount(App, {
        propsData: {}
      });
      expect(wrapper.findComponent(App).exists()).equal(true)
    })
})

describe('App.vue', () => {
    it('renders h1 tag', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find("h1").text()).equal("Comment Box")
    })
})
