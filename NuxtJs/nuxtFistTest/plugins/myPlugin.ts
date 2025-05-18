export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide : {

            // getName is add to the context of nuxtApp and available averywhere

            // i've tried it in the contact page
            getName : (name : string) => `Hi , ${name}`
        }
    }
})