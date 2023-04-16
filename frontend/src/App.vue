<script setup>
import ChatList from './components/ChatList/ChatList.vue';

</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="surface-variant" title="Application bar"></v-app-bar>
      <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
        permanent
      >
        <ChatList />
        <!-- <v-main style="min-height: 300px;">
        </v-main> -->
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
