<template>
    <v-form>
        <v-text-field 
            label="message"
            required
        >
            <template v-slot:append-inner>
                <v-btn 
                    icon="mdi-send"
                    size="small"
                />
            </template>
        </v-text-field>
    </v-form>
</template>