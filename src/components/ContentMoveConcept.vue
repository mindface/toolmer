<script lang="ts">
import { ref, onMounted, computed, defineComponent, reactive } from 'vue'
import {
  Document
} from '@element-plus/icons-vue'
import type { VNode, VNodeProps } from 'vue'
import { toRaw } from '@vue/reactivity'
import { useStore, mapState } from "vuex"
import { TextCopy } from '../utils/text-copy'

interface Option {
  key: number
  label: string
  disabled: boolean
}

export default defineComponent({
  components:{
    Document
  },
  setup() {
    const store = useStore()

    const generateData = (): Option[] => {
      const data: Option[] = [
        {key: 1,label: '情報処理モデル',disabled: false},
        {key: 2,label: '情報処理モデル',disabled: false},
        {key: 3,label: '情報処理モデル',disabled: false},
        {key: 4,label: '情報処理モデル',disabled: false},
      ]
      // const ll = store.getters['concept/getConceptsData'].map((item:any)=> {
      //   return {key: item.id,label: item.label,disabled: item.disabled}
      // })
      return data
    }

    // const data = computed({
    //   get: () => {
    //     const list = [
    //       {key: 1,label: '情報処理モデル',disabled: false},
    //       {key: 2,label: '情報処理モデル',disabled: false},
    //       {key: 3,label: '情報処理モデル',disabled: false},
    //       {key: 4,label: '情報処理モデル',disabled: false},
    //     ]
    //     return list
    //   },
    //   set: (list:Option[]) => {
    //     console.log('com')
    //     console.log(list)
    //     return list
    //   }
    // })
    const data = ref([
          {key: 1,label: '情報処理モデル',disabled: false},
          {key: 2,label: '情報処理モデル',disabled: false},
          {key: 3,label: '情報処理モデル',disabled: false},
          {key: 4,label: '情報処理モデル',disabled: false},
        ])
    const rightValue = ref([2,3,4])
    const leftValue = ref([1])
    const dialogVisible = ref(false)
    const drawer = ref(false)
    const label = ref('')
    const editType = ref('new')
    const editId = ref(-1)

    const renderFunc = (
      h: (type: string, props: VNodeProps | null, children?: string) => VNode,
      option: Option
    ) => {
      return h('span', null, option.label)
    }
    const handleChange = (
      value: number | string,
      direction: 'left' | 'right',
      movedKeys: string[] | number[]
    ) => {
      // console.log(value, direction, movedKeys)
    }
    const listDaialog = (item?:Option) => {
      drawer.value = true
      if(item) {
        editType.value = 'edit'
        editId.value = item.key
        label.value = item.label
      }else {
        editType.value = 'new'
        editId.value = -1
        label.value = ''
      }
    }
    const setList = (type:string,id?:number) => {
      if(editType.value === 'edit'){
        const list = data.value.map((item:Option) => {
          if(editId.value === item.key){
            return {key:item.key,label:label.value,disabled:false}
          }else{
            return item
          }
        })
        data.value = list
      }else {
        data.value.push({key:data.value.length+1,label:label.value,disabled:false})
      }
      drawer.value = false
    }

    const copyAction = () => {
      const setText = {
        left: '',
        right: ''
      }
      data.value.forEach((item:Option) => {
        if(rightValue.value.includes(item.key)){
          setText.right += `${item.key}\n`
          setText.right += `${item.label}\n`
        }else {
          setText.left += `${item.key}\n`
          setText.left += `${item.label}\n`
        }
      })
      let copyText = `コードタスク ${setText.left} \n`
      copyText += `終了タスク ${setText.right}\n`
      const setTxetCopy = new TextCopy(copyText)
      setTxetCopy.copy()
    }

    return {
      data,
      rightValue,
      leftValue,
      dialogVisible,
      drawer,
      label,
      editType,
      renderFunc,
      handleChange,
      listDaialog,
      setList,
      copyAction
    }
  }
})

</script>

<template>
<div class="content">
  <div class="content__title">
    <h3 class="title _p_2 _t_center">基本タイトルに関する概念の変更
      <el-button type="text" @click="dialogVisible = true">
        <el-icon><document /></el-icon>
      </el-button>
      <el-button @click="copyAction">テキストコピー</el-button>
    </h3>
  </div>
  <div class="conten__body">
    <div style="text-align: center">
      <el-transfer
        v-model="rightValue"
        style="text-align: left; display: inline-block"
        filterable
        :left-default-checked="[]"
        :right-default-checked="[]"
        :render-content="renderFunc"
        :titles="['コードタスク', '終了タスク']"
        :button-texts="['To left', 'To right']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        :data="data"
        @change="handleChange"
      >
        <template #left-footer>
          <p class="_p_1">規定概念</p>
        </template>
        <template #right-footer>
          <p class="_p_1">変更認識</p>
        </template>
      </el-transfer>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="項目リスト"
    width="40%"
  >
    <el-button class="add-btn" type="text" @click="listDaialog()">
      新規追加<el-icon><document /></el-icon>  
    </el-button>
    <div class="info">
      <ul class="info-list">
        <li class="info-item _p_1" v-for="item in data" :key="item.key">
          <p class="label" @click="listDaialog(item)">{{item.label}}</p>
        </li>
      </ul>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Close</el-button>
      </span>
    </template>
  </el-dialog>

  <el-drawer v-model="drawer" direction="rtl">
    <template #title>
      <h4 v-if="editType === 'edit'">更新</h4>
      <h4 v-else>追加</h4>
    </template>
    <template #default>
      <div>
        <el-row :gutter="20">
          <el-col :span="8"><p class="field-caption">リスト項目</p></el-col>
          <el-col :span="12"><el-input type="text" v-model="label" placeholder="ex) " clearable /></el-col>
        </el-row>
      </div>
      <div style="flex: auto">
        <el-button @click="drawer = false">close</el-button>
        <el-button v-if="editType === 'edit'" @click="setList('edit')">更新</el-button>
        <el-button v-else @click="setList('new')">追加</el-button>
      </div>
    </template>
    <template #footer></template>
  </el-drawer>

</div>
</template>

<style scoped>
</style>
