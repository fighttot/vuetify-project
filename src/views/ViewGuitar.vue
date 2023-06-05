<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>吉他社</h1>
      </v-col>
      <v-col cols="12">
        <v-tabs v-model="selectedTab" align-tabs="center" color="light-blue">
          <v-tab v-for="(tab, i) in tabs" :key="tab" :value="i">{{ tab }}</v-tab></v-tabs>
        <v-window v-model="selectedTab">
          <v-window-item :value="0">
            <v-table hover>
              <thead class="bg-light-blue">
                <tr>
                  <th>日期</th>
                  <th>名稱</th>
                  <th>地點</th>
                  <th>主持人</th>
                  <th>說明</th>
                </tr>

              </thead>
              <tbody>
                <tr v-for="event in events" :key="event.data">
                  <td>{{ event.date }}</td>
                  <td>{{ event.name }}</td>
                  <td>{{ event.place }}</td>
                  <td>{{ event.host }}</td>
                  <td>
                    <pre>{{ event.description }}</pre>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>
          <v-window-item :value="1">
            <v-expansion-panels variant="popout">
              <v-expansion-panel>
                <v-expansion-panel-title>吉他社社史</v-expansion-panel-title>
                <v-expansion-panel-text>0000000000000</v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>社長資料</v-expansion-panel-title>
                <v-expansion-panel-text>撈月亮哎呀我心慌給姥姥熬湯喝一碗家鄉</v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>指導老師</v-expansion-panel-title>
                <v-expansion-panel-text>哎呀你臉紅阿 讓我看看!</v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-window-item>
          <v-window-item :value="2">
            <v-list>
              <v-list-item v-for="l in learning" :key="l">{{ l }}</v-list-item>

            </v-list></v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { ref } from 'vue';
const selectedTab = ref(0)
const tabs = ['活動公告',
  '社史',
  '教學內容']

const events = [
  {
    date: '9/16',
    name: '社員大會',
    place: '吉他社教室',
    host: '王小明',
    description: `
      1.入社歡迎茶會
      2.指導老師致詞
      3.社長致詞
      4.社規介紹以及教學內容之簡介
    `
  }, {
    date: '10/31',
    name: '校內吉他表演',
    place: '學校大禮堂',
    host: '王小明社長',
    description: `
      以吉他演奏演唱民歌，曲目如下
      1.海浬來的沙
      2.微風往事
      3.七月涼山
      4.明天會更好(大合唱)
    `
  }
]

const learning = [
  '基礎樂理',
  '常用之吉他技巧',
  '音程介紹以及音程表內容',
  '節奏型態',
  '和絃及級數和絃',
  '和絃公式',
  '轉位複合',
  '調音法',
  '吉他的保養',
  '如何轉調'
]
</script>
