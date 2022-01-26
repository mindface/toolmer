<script setup lang="ts">
import {
  ChatLineSquare,
  Edit,
  EditPen
} from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import { ref, onMounted, reactive } from 'vue'
import { useStore } from "vuex"

export interface TimeLine {
  id:number,
  title:string,
  numberId:string,
  addFlowText:string,
  disc:string,
  time:string
}

const setList = [
  {id:1,title:'自分で考えた内容を実行する',addFlowText:'part01',disc:'メタ認知などせず、初期のイメージから実行までを観測',numberId:'No01',time:'2018-4-12 20:46'},
  {id:2,title:'感覚と一般的な改善方法を試してみる',addFlowText:'part02',disc:'メタ認知せず、考えるデフォルトの方法を実行',numberId:'No02',time:'2018-4-3 20:46'},
  {id:3,title:'行動の癖や遺伝子、過去の改善プロセスから効果的な目的を果たす方法に再調する',addFlowText:'part03',disc:'メタ人認知して評価形式を変更する',numberId:'No03',time:'2018-4-2 20:46'},
]

const flowList = reactive({items:setList})

const addTitle = ref('')
const addDisc = ref('')
const addFlowText = ref('')
const editId = ref(-1)
const addTime = ref(new Date())

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const setDate = (date:Date):string => {
  const y = date.getFullYear()
  const m = ('00'+(date.getMonth()+1)).slice(-2)
  const d = ('00'+date.getDate()).slice(-2)
  return `${y}-${m}-${d} ${date.getHours()}:${date.getMinutes()}`
}

const addTimeline = () => {
  addTime.value = new Date()
  let list = flowList.items
  if(editId.value !== -1) {
    list = list.map((item:TimeLine) => {
      if(editId.value === item.id){
        return {id:item.id,title:addTitle.value,addFlowText:addFlowText.value,disc:addDisc.value,numberId:item.numberId,time:setDate(addTime.value)}
      }else {
        return item
      }
    })
  }else {
    list.push({id:list.length+1,numberId:`No0${list.length+1}`,title:addTitle.value,addFlowText:addFlowText.value,disc:addDisc.value,time:setDate(addTime.value)})
  }
  flowList.items = list
  dialogVisible.value = !dialogVisible.value
}

const openAddDialog = () => {
  addTitle.value = ''
  addDisc.value = ''
  addFlowText.value = ''
  editId.value = -1
  dialogVisible.value = !dialogVisible.value
}

const openEditDialog = (item:TimeLine) => {
  addTitle.value = item.title
  addDisc.value = item.disc
  addFlowText.value = item.addFlowText
  editId.value = item.id
  dialogVisible.value = !dialogVisible.value
}

</script>

<template>
  <div class="content">
    <div class="content__title">
      <h3 class="title">方法の提供フロー
        <el-button type="text" @click="openAddDialog">
          <el-icon><edit /></el-icon>
        </el-button>
      </h3>

      <el-dialog
        v-model="dialogVisible"
        title="タイムラインの追加"
        width="30%"
        :before-close="handleClose"
      >
        <div class="timeline-form">
          <div class="filed _p_1">
            <el-row :gutter="20">
              <el-col :span="8">タイトル</el-col>
              <el-col :span="12"><el-input v-model="addTitle" placeholder="" clearable /></el-col>
            </el-row>
          </div>
          <div class="filed _p_1">
            <el-row :gutter="20">
              <el-col :span="8">詳細</el-col>
              <el-col :span="12"><el-input v-model="addDisc" placeholder="" clearable /></el-col>
            </el-row>
          </div>
          <div class="filed _p_1">
            <el-row :gutter="20">
              <el-col :span="8">フローテキスト</el-col>
              <el-col :span="12"><el-input v-model="addFlowText" placeholder="" clearable /></el-col>
            </el-row>
          </div>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="addTimeline">追加</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div class="content_disc">
      <div class="fields">
        <el-timeline>
          <el-timeline-item v-for="item in flowList.items" :key="item.id" :timestamp="item.numberId" placement="top">
            <el-card class="_relative">
              <h4 class="_p_b1">{{item.title}}</h4>
              <p class="_p_b1">{{item.disc}}</p>
              <p class="_p_b1">{{item.time}}</p>
              <el-button class="btn" @click="openEditDialog(item)">
                <el-icon><edit /></el-icon>
              </el-button>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
