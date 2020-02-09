<template>
    <article class="FAQ">
      <button @click="active = !active" class="FAQ-trigger">
        <h3 class="FAQ-question">{{ question }}</h3>
      </button>
      <transition
        name="accordion"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave">
        <div v-show="active" class="FAQ-body">
          <p class="FAQ-answer">
              {{ answer }}
          </p>
        </div>
      </transition>
    </article>
</template>

<script>
export default {
  props: {
    question: String,
    answer: String
  },
  data () {
    return {
      active: false,
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0'
      console.log(el)
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el)
    {
      el.style.height = '0'
    }
  }
}
</script>

<style scoped lang="scss">
.FAQ
{
  margin-bottom: unit(50);

  &-trigger
  {
    display: block;
    width: 100%;
    text-align: left;
  }

  &-question
  {
    margin: unit(50) 0;
  }

  &-body
  {
    overflow: hidden;
    transition: height $dur * 2 $ease;
  }

  &-answer
  {
    padding: unit(50) unit(25);
  }
}
</style>