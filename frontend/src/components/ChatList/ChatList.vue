<script setup>

const chatrooms = [
    {
        chatroom_id:1,
        name: "chat1"
    },
    {
        chatroom_id:2,
        name: "chat2"
    }
];

</script>

<template>
    <v-list density="compact">
      <!-- <v-list-subheader>Chat List</v-list-subheader> -->

      <v-list-item
        v-for="(item, i) in chatrooms"
        :key="i"
        :value="item"
        active-color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>
    </v-list>
</template>