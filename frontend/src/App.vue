<script setup>
import ChatContent from './components/ChatContent.vue';
import ChatList from './components/ChatList.vue';
import InputMessage from './components/InputMessage.vue';

</script>

<template>
    <v-layout>
      <v-app-bar color="surface-variant" title="Application bar"></v-app-bar>
      <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
        permanent
      >
        <ChatList />
      </v-navigation-drawer>
      <v-main>
        <v-container class="fill-height pa-0">
          <v-responsive
            class="overflow-y-auto fill-height"
          >
            <v-card flat class="d-flex flex-column fill-height">
              <v-card-title>
                user1 room
              </v-card-title>
              <v-card-text class="flex-grow-1 overflow-y-auto">
                <ChatContent></ChatContent>
              </v-card-text>
              <v-card-text class="flex-grow-1 overflow-y-auto">
                <InputMessage />
              </v-card-text>
            </v-card>
          </v-responsive>

        </v-container>
      </v-main>
    </v-layout>
</template>
