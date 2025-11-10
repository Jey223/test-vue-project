<template>

    <h2>{{ eventIsFun ? "Fun Day" : "No Fun" }}</h2>
    <button @click="toggleIsFun" >Is it Fun?</button>
    <div>
        <h3>Location: {{location}}</h3>
        <h3>Type of Event: {{eventType}}</h3>
        <h3>Artist Playing: {{ artist }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        location: {
            type: String,
            required: true
        },
        eventType: {
            type: String,
            required: true,
        },
        artist: {
            type: String,
            required: true,
        },
        isFun: {
            type: Boolean,
            required: false,
            default: true,
            validator: function (value) {
                return value === true || value === false
            }
        }
    },
    data(){
        return {
         eventIsFun: this.isFun,

        }
    },
    methods: {
        toggleIsFun(){
            this.eventIsFun = !this.eventIsFun
        }
    }
}

</script>

