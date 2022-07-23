<template>
   <div>
    <edit v-show="dialogFormVisible"></edit>
     <el-table
      :data="_.cloneDeep(tableData || []) "
      style="width: 90%"
      max-height="550"
    >
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="130"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="130"
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="130"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="130"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="130"
      >
        <template v-slot="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.row)">
            编辑
          </el-button>
          <el-popconfirm
            title="确定要删除吗？"
            @confirm="confirmEvent(scope.$index, tableData)"
            @cancel="cancelEvent"
          >
            <el-button
              slot="reference"
              type="text"
              size="small">
              移除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
   </div>
</template>

<script>
import edit from '../Subcomponents/edit.vue'
import { mapState } from 'vuex'

export default {
  components: { edit },
  data () {
    return {
      isEdit: false
    }
  },

  computed: {
    ...mapState({
      dialogFormVisible: 'dialogFormVisible',
      tableData: 'tableData'
    })
  },

  methods: {
    // 点击编辑
    handleEdit (value) {
      this.$store.commit('DIALOG_FORM_VISIBLE', value)
    },

    // 气泡确定事件
    confirmEvent (index, rows) {
      rows.splice(index, 1)
    },

    // 气泡取消事件
    cancelEvent () {
      this.$message('已取消删除')
    }

  },

  async mounted () {
    // vuex异步获取人员信息
    await this.$store.dispatch('getUser')
  }
}
</script>
<style lang="less">
.el-popconfirm{
  background-color:rgba(255, 255, 255);
  box-shadow:0 2px 10px 0 rgba(51, 70, 84, 0.2);
}
</style>
