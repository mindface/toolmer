<script setup lang="ts">
import { ref } from 'vue'
import { TextCopy } from '../utils/text-copy'

const value = ref('')
const age = ref('')
const lifespan = ref('')
const sleepTime = ref('')
const actionTime = ref('')
const useTime = ref('')
const limitTime = ref('')
const day = ref('')
const copyView = ref(false)

const aliveTimeAnser = ref(0)
const limitTimeAnser = ref(0)
const behaviorRate = ref(0)

const setMathRound = (num:number):number => {
  return Math.round(num*100) /100
}

const settingAction = () => {
  const liveTime = Number(lifespan.value) - Number(age.value)
  const alive = (liveTime*365*24) - ((365*liveTime) * Number(sleepTime.value))
  const limit = (24-Number(sleepTime.value))*Number(limitTime.value)
  // const number = alive - Number(sleepTime.value)
  aliveTimeAnser.value = alive
  limitTimeAnser.value = limit

  behaviorRate.value = setMathRound((limit/alive)*100)
  copyView.value = true
}

const copyAction = () => {
  const setText = `奇病寿命 ${lifespan.value}歳
  現在の年齢 ${age.value}歳
  期限 ${limitTime.value}日
  一日の睡眠時間 ${sleepTime.value}時間
  1日の稼働時間 ${actionTime.value}時間
  生存時間 : ${aliveTimeAnser.value}時間
  目的までの時間 : ${behaviorRate.value}時間
  生存時間と目的に使う時間の割合: ${behaviorRate.value}%`

  const setTxetCopy = new TextCopy(setText)
  setTxetCopy.copy()
}

</script>

<template>
  <div class="content">
    <div class="content__title">
      <h3 class="title">選択コンテンツ</h3>
    </div>
    <div class="content_body">
      <div class="fields">
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">希望寿命</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="lifespan" placeholder="ex) 80(歳)" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">現在の年齢</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="age" placeholder="ex) 24(歳)" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">期限</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="limitTime" placeholder="ex) 3(日数)" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">睡眠時間</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="sleepTime" placeholder="ex) 7(時間)" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">目的のために1日で物理的な活動が可能な時間</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="actionTime" placeholder="ex) 3(時間)" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1 ">
          <el-card>
            <el-row :gutter="20">
              <el-col :span="6">生存時間 : {{aliveTimeAnser}}</el-col>
              <el-col :span="6">目的までの時間 : {{behaviorRate}}</el-col>
              <el-col :span="6">生存時間と目的に使う時間の割合 : {{behaviorRate}}%</el-col>
            </el-row>
          </el-card>
        </div>
        <div class="field _p_1">
          <p class="field-caption"><el-button @click="settingAction">調整</el-button>　<el-button v-if="copyView" @click="copyAction">テキストコピー</el-button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
