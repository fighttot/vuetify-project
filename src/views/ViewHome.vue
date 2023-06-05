<template>
  <v-container>
    <v-row>
      <v-col v-for="club in clubs" :key="club" cols="12" md="6" lg="4">
        <v-hover>
          <template #default="{ isHovering, props }">
            <v-card :color="isHovering ? 'primary' : undefined" v-bind="props" :to="club.path">
              <v-card-title class="text-center">{{ club.name }}</v-card-title>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const clubs = [
  { name: '吉他社', path: '/guitar' },
  { name: '熱舞社', path: '' },
  { name: '棒球社', path: '' },
  { name: '羽球社', path: '' },
  { name: '足球社', path: '' },
  { name: '童軍社', path: '' }
]
</script>
