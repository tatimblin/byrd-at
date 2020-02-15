<template>
  <div class="Contact">
    <page-heading title="Contact Us" desc="Send us a message." />
    <div class="Contact-container">
      <ul class="Contact-details">
        <li v-for="detail in details" :key="detail.copy" class="Contact-detail">
          <a :href="detail.url" class="Contact-link">
            {{ detail.copy }}
          </a>
        </li>
      </ul>

      <div class="Contact-head">
        <h2 class="Heading--head">
          Get in touch
        </h2>
        <p class="Contact-body">
          We’re here for you when you need us! Contact Byrd Assistive Technologies today or send us an e-mail and we’ll get back to you as soon as possible.
        </p>
      </div>

      <form action="" class="Contact-form">
        <div class="Contact-field">
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Name">
        </div>
        <div class="Contact-field">
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Email">
        </div>
        <div class="Contact-field">
          <label for="message">Message</label>
          <input type="textarea" name="message" placeholder="Hi, I am interested in a chair for someone with...">
        </div>
        <button class="Contact-submit" type="submit">Send</button>
      </form>

      <div class="Contact-head">
        <h2 class="Heading--head">
          Frequently Asked Questions
        </h2>
      </div>

      <ul class="Contact-faqs">
        <li v-for="faq in faqs" :key="faq.question" class="Contact-faq">
          <f-a-q :question="faq.question" :answer="faq.answer" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue'
import FAQ from '@/components/FAQ.vue'

export default {
  components: {
    PageHeading,
    FAQ
  },
  data () {
    return {
      details: [
        {
          copy: '(571) 252-5214',
          url: 'tel:5712525214'
        },
        {
          copy: 'info@byrd-at.com',
          url: 'mailto:info@byrd-at.com'
        },
        {
          copy: '13897 Willard Rd, Suite A, Chantilly, VA 20151',
          url: 'https://google.com'
        }
      ],
      faqs: [
        {
          question: 'How many wheels does a wheelchair have?',
          answer: 'two big ones and two little ones.'
        },
        {
          question: 'How fast can a wheelchair go?',
          answer: '35mph'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.Contact
{
  &-container
  {
    @include l-container;
  }

  &-details
  {
    @include l-section;
    display: flex;
    justify-content: space-between;
  }

  &-head
  {
    margin-bottom: unit(100);
  }

  &-faqs,
  &-form
  {
    margin-top: unit(100);
    margin-bottom: unit(100);
  }
}
</style>
