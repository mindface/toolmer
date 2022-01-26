<script setup lang="ts">
import {
  ChatLineSquare,
} from '@element-plus/icons-vue'
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex"

const store = useStore()
const executionNumber = ref(0)
const achieveNumber = ref(0)
const methodNumber = ref(0)
const executionRate = ref(0)
const infoRate = ref(0)
const acRate = ref('')

const count = ref(0)
const viewCalc = ref(false)

const calculationAcction = () => {
  viewCalc.value = !viewCalc.value
}

const calcNumber = ():number => {
  const rate = achieveNumber.value/executionNumber.value
  return Math.round(rate*100)/100
}

const infoRateCalac = ():number => {
  const rate = infoRate.value*(calcNumber()/100)
  return rate
}

</script>

<template>
  <div class="content">
    <div class="content__title">
      <h3 class="title">方法の精度</h3>
    </div>
    <div class="content_disc">
      <div class="fields">
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">実行数</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="executionNumber" placeholder="ex) 20(回-数字のみ)" min="0" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">目的の達成数</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="achieveNumber" placeholder="ex) 20(回-数字のみ)"  min="0" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><p class="field-caption">実行した方法の数</p></el-col>
            <el-col :span="12"><el-input type="number" v-model="methodNumber" placeholder="ex) 20(回-数字のみ)"  min="0" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><div class="field-caption">方法や言語化した情報量
              <el-popover
                  :width="300"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                  <template #reference>
                    <el-icon><chat-line-square /></el-icon>
                  </template>
                  <template #default>
                    <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                    >
                      <div>
                        <p
                          class="demo-rich-content__name"
                          style="margin: 0; font-weight: 500"
                        >自分で方法として認識している場合のテキスト数</p>
                      </div>
                      <p class="demo-rich-content__desc" style="margin: 0">
                      </p>
                    </div>
                  </template>
                </el-popover>
              </div></el-col>
            <el-col :span="12"><el-input type="number" v-model="infoRate" placeholder="ex) 20(回-数字のみ)" min="0" clearable /></el-col>
          </el-row>
        </div>
        <div class="field _p_1">
          <el-row :gutter="20">
            <el-col :span="8"><el-button type="primary" @click="calculationAcction">算出</el-button></el-col>
          </el-row>
        </div>
        <div class="field _p_1" v-if="viewCalc" >
          <el-card>
            <el-row :gutter="20">
              <el-col :span="4"><p class="field-caption">達成率</p></el-col>
              <el-col :span="6">{{ calcNumber() }}</el-col>
              <el-col :span="4"><p class="field-caption">情報の精度</p></el-col>
              <el-col :span="6">{{ infoRateCalac() }}</el-col>
            </el-row>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
