<template>
  <form class="space-y-6" @submit.prevent="submitForm">
    <div>
      <input 
        v-model="form.name"
        type="text" 
        placeholder="Your Name" 
        class="w-full border-0 border-b border-gray-300 py-3 px-0 focus:ring-0 focus:border-secondary bg-transparent"
        :class="{ 'border-error-500': errors.name }"
        required
      />
      <p v-if="errors.name" class="text-error-500 text-sm mt-1">{{ errors.name }}</p>
    </div>
    
    <div>
      <input 
        v-model="form.email"
        type="email" 
        placeholder="Your Email" 
        class="w-full border-0 border-b border-gray-300 py-3 px-0 focus:ring-0 focus:border-secondary bg-transparent"
        :class="{ 'border-error-500': errors.email }"
        required
      />
      <p v-if="errors.email" class="text-error-500 text-sm mt-1">{{ errors.email }}</p>
    </div>
    
    <div>
      <input 
        v-model="form.subject"
        type="text" 
        placeholder="Subject" 
        class="w-full border-0 border-b border-gray-300 py-3 px-0 focus:ring-0 focus:border-secondary bg-transparent"
        :class="{ 'border-error-500': errors.subject }"
        required
      />
      <p v-if="errors.subject" class="text-error-500 text-sm mt-1">{{ errors.subject }}</p>
    </div>
    
    <div>
      <textarea 
        v-model="form.message"
        rows="5" 
        placeholder="Your Message" 
        class="w-full border-0 border-b border-gray-300 py-3 px-0 focus:ring-0 focus:border-secondary bg-transparent resize-none"
        :class="{ 'border-error-500': errors.message }"
        required
      ></textarea>
      <p v-if="errors.message" class="text-error-500 text-sm mt-1">{{ errors.message }}</p>
    </div>
    
    <div>
      <button 
        type="submit" 
        class="bg-secondary text-primary px-8 py-3 uppercase tracking-wider text-sm transition duration-300 hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting">Sending...</span>
        <span v-else>Send Message</span>
      </button>
    </div>
    
    <div v-if="formSubmitted" class="py-4 px-6 bg-success-50 text-success-700 rounded">
      Thank you! Your message has been sent successfully.
    </div>
  </form>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '');
  
  if (!form.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }
  
  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    Object.keys(form).forEach(key => form[key] = '');
    formSubmitted.value = true;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>