<template>
    <div id="contact-container" class="container mb-20 sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <div class="contact m-auto isolate p-16 sm:p-10 lg:p-16">
            <div class="max-w-2xl">
                <div class="flex">
                    <div class="inline-block w-1.5 h-10 bg-emerald-500 mr-4"></div>
                    <h2 class="text-3xl text-left font-bold tracking-tight text-gray-900 sm:text-3xl">Get in Touch</h2>
                </div>
                <p class="text-left mt-2 text-lg leading-8 text-gray-600">Level up your software game. Reach out and let's make it happen!</p>
            </div>
            <form @submit.prevent="sendEmail" class="mx-auto mt-16 max-w-xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-lg font-semibold leading-6 text-gray-900">First Name</label>
                        <div class="mt-2.5">
                            <input v-model="formData.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-lg font-semibold leading-6 text-gray-900">Last Name</label>
                        <div class="mt-2.5">
                            <input v-model="formData.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="company" class="block text-lg font-semibold leading-6 text-gray-900">Company</label>
                        <div class="mt-2.5">
                            <input v-model="formData.company" type="text" name="company" id="company" autocomplete="organization"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-lg font-semibold leading-6 text-gray-900">Email</label>
                        <div class="mt-2.5">
                            <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email"
                                :class="{ 'ring-red-500' : isInvalidEmail }"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" required/>
                        </div>
                        <div v-if="isInvalidEmail" class="text-red-500 mt-1">Invalid email format</div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="phone-number" class="block text-lg font-semibold leading-6 text-gray-900">Phone Number</label>
                        <div class="relative mt-2.5">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <label for="country" class="sr-only">Country</label>
                                <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 appearance-none focus:ring-2 focus:ring-inset focus:ring-emerald-900 sm:text-sm" required>
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                                <ChevronDownIcon class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" />
                            </div>
                            <input v-model="formData.phoneNumber" type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                class="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-lg font-semibold leading-6 text-gray-900">Message</label>
                        <div class="mt-2.5">
                            <textarea v-model="formData.message" name="message" id="message" rows="4"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" required/>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <button @click="sendEmail" type="submit" :disabled="!isFormValid || isButtonDisabled"
                        :class="{ 'bg-neutral-500': isButtonDisabled, 'bg-gradient-to-r from-green-500 hover:from-green-600 to-emerald-500 hover:bg-green-500 hover:to-emerald-600': !isButtonDisabled }"
                        class="email-btn block w-full rounded-md px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                        Let's talk
                    </button>
                </div>

                <div v-if="showSuccessMessage" class="text-green-600 mt-4">
                    Email sent successfully!
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import axios from 'axios';

export default {
    name: 'Contact',
    components: {
        ChevronDownIcon,
    },
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                country: '',
                phoneNumber: '',
                message: '',
            },
            showSuccessMessage: false,
            isButtonDisabled: true,
        };
    },
    methods: {
        sendEmail() {
            this.isButtonDisabled = true;
            if (!this.isValidEmail()) {
                console.log('Invalid email');
                return;
            }
            const formData = {
                firstName: this.formData.firstName,
                lastName: this.formData.lastName,
                email: this.formData.email,
                company: this.formData.company,
                phoneNumber: this.formData.phoneNumber,
                message: this.formData.message,
            };
            axios
                .post('https://misty-bull-top-hat.cyclic.app/api/send-email', formData)
                .then((response) => {
                    console.log('Email sent');
                    this.showSuccessMessage = true;
                    this.resetForm();
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        resetForm() {
            this.formData.firstName = '';
            this.formData.lastName = '';
            this.formData.email = '';
            this.formData.company = '';
            this.formData.country = '';
            this.formData.phoneNumber = '';
            this.formData.message = '';
            this.showSuccessMessage = false;
        },
        validateForm() {
            this.isButtonDisabled = !this.isFormValid;
        },
        isValidEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.formData.email);
        },
    },
    computed: {
        isFormValid() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid =
                this.formData.firstName &&
                this.formData.lastName &&
                this.formData.email &&
                this.formData.message &&
                emailRegex.test(this.formData.email);
            return isValid;
        },
        isInvalidEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return this.formData.email && !emailRegex.test(this.formData.email);
        },
    },
    watch: {
        'formData.firstName': {
            handler(newValue, oldValue) {
                this.validateForm();
            },
        },
        'formData.lastName': {
            handler(newValue, oldValue) {
                this.validateForm();
            },
        },
        'formData.email': {
            handler(newValue, oldValue) {
                this.validateForm();
            },
        },
        'formData.message': {
            handler(newValue, oldValue) {
                this.validateForm();
            },
        },
    },
};
</script>

<style scoped>.contact {
    max-width: 1200px;
}</style>
