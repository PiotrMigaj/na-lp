<template>
  <form class="space-y-6" @submit.prevent="submitForm">
    <div>
      <input 
        v-model="form.name"
        type="text" 
        placeholder="Twoje imię" 
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
        placeholder="Twój e-mail" 
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
        placeholder="Temat" 
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
        placeholder="Twoja wiadomość" 
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
        <span v-if="isSubmitting">Wysyłanie...</span>
        <span v-else>Wyślij wiadomość</span>
      </button>
    </div>
    
    <div v-if="formSubmitted" class="py-4 px-6 bg-success-50 text-success-700 rounded">
      Dziękuję! Twoja wiadomość została wysłana pomyślnie.
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
  
  // Reset błędów
  Object.keys(errors).forEach(key => errors[key] = '');
  
  if (!form.name.trim()) {
    errors.name = 'Imię jest wymagane';
    isValid = false;
  }
  
  if (!form.email.trim()) {
    errors.email = 'Adres e-mail jest wymagany';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Podaj poprawny adres e-mail';
    isValid = false;
  }
  
  if (!form.subject.trim()) {
    errors.subject = 'Temat jest wymagany';
    isValid = false;
  }
  
  if (!form.message.trim()) {
    errors.message = 'Wiadomość jest wymagana';
    isValid = false;
  }
  
  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    });
    
    if (response.success) {
      // Reset formularza
      Object.keys(form).forEach(key => form[key] = '');
      formSubmitted.value = true;
      
      // Ukryj wiadomość po 5 sekundach
      setTimeout(() => {
        formSubmitted.value = false;
      }, 5000);
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    console.error('Błąd podczas wysyłania formularza:', error);
    // Możesz dodać obsługę błędów tutaj, np. wyświetlić komunikat o błędzie
  } finally {
    isSubmitting.value = false;
  }
};
</script>
