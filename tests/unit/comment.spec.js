import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
//import { mount } from '@vue/test-utils'
import Comment from '@/components/views/Comment.vue'

const objectEqual = (o1, o2) =>
  Object.keys(o1).length == Object.keys(o2).length
  && Object.keys(o1).every( p => o1[p] == o2[p]);

describe('Comment.vue', () => {
  it('renders props.commentDetail when passed', () => {
    const commentArr = {
      "id": "1",
      "name": "Brad",
      "user": "AUTHOR",
      "text": "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
      "replies": 21,
      "likes": 123,
      "dislikes": 0,
      "img_url": "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18337.png",
      "time" : "2 MINUTES AGO"
    }

    const wrapper = shallowMount(Comment, {
      propsData: { 
        commentDetail : [
          {
              "id": "1",
              "name": "Brad",
              "user": "AUTHOR",
              "text": "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
              "replies": 21,
              "likes": 123,
              "dislikes": 0,
              "img_url": "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18337.png",
              "time" : "2 MINUTES AGO"
          }
        ]
      }
    })
    expect(wrapper.props().commentDetail.forEach(function(e) { objectEqual(e, commentArr) }))
  })
})

describe('Comment.vue', () => {
  it('renders props.commentDetail checked type', () => {

    const wrapper = shallowMount(Comment, {
      propsData: { 
        commentDetail : [
          {
              "id": "1",
              "name": "Brad",
              "user": "AUTHOR",
              "text": "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
              "replies": 21,
              "likes": 123,
              "dislikes": 0,
              "img_url": "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18337.png",
              "time" : "2 MINUTES AGO"
          }
        ]
      }
    })
    expect(wrapper.props().commentDetail.forEach(function(e) { typeof e == Object }))
  })
})

describe('Comment.vue', () => {
  it('Finds the Comment component', () => {
    const wrapper = shallowMount(Comment, {
      propsData: {}
    });
    expect(wrapper.findComponent(Comment).exists()).equal(true)
  })
})

describe('Key event tests', () => {
  it('Present color by default', () => {
    const wrapper = shallowMount(Comment)
    expect(wrapper.vm.presColor).equal("#A0A0A0")
  })

  it('On Mouse over', () => {
    const wrapper = shallowMount(Comment, {
      propsData: {}
    });
      wrapper.vm.hoverIn();
      expect(wrapper.vm.presColor).equal("#282828");
  });
});
