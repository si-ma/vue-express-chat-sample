<script setup>
import SentChatContent from './SentChatContent.vue';
import ReceivedChatContent from './ReceivedChatContent.vue';

</script>

<template>
    <v-list-item class="user-profile">
        <template v-slot:prepend >
            <v-avatar class="avatar-prepend">
                <v-icon icon="mdi-account-circle" size="32"></v-icon>
            </v-avatar>
        </template>
        <v-list-item-title>evan you</v-list-item-title>

    </v-list-item>
    <div class="chat-content-item d-flex">
        <ReceivedChatContent />
    </div>
    <div class="chat-content-item d-flex flex-row-reverse">
        <SentChatContent 
        />
    </div>
</template>

<style scoped>
.user-profile{
    padding-left: 0px !important;
}
.avatar-prepend {
    margin-inline-end: 0px !important;
}
</style>