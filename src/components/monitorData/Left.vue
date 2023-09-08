<template>
  <el-tabs class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <calendar />
          </el-icon>
          <span>测组</span>
        </span>
      </template>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :render-content="renderContent"
        default-expand-all />
    </el-tab-pane>
  </el-tabs>
</template>
<script  setup>
import { Calendar } from '@element-plus/icons-vue'
import { inject } from 'vue';
let rightShow = inject('rightShow')
const handleNodeClick = (data) => {
  // console.log(data)
}

const data = [
  {
    id: 1,
    label: '视觉测量仪',
    children: [
      {
        label: '水平位移1',
        state: '正常'
      },
      {
        label: '水平位移2',
        state: '正常'
      },
      {
        label: '水平位移3',
        state: '正常'
      },
      {
        label: '竖直位移1',
        state: '正常'
      },
      {
        label: '竖直位移2',
        state: '正常'
      },
      {
        label: '竖直位移3',
        state: '正常'
      }
    ],
  },
  {
    id: 2,
    label: '水准仪',
    children: [
      {
        label: '管线竖向位移',
        state: '正常'
      },
      {
        label: '周边道路竖向位移',
        state: '正常'
      }
    ],
  },
  {
    id: 3,
    label: '水平位移',
    children: [
      {
        label: '圈梁水平位移',
        state: '正常'
      },
      {
        label: '深层水平位移',
        state: '正常'
      }
    ],
  },
  {
    id: 4,
    label: '坑外水坑',
  },
  {
    id: 5,
    label: '支撑轴力钢筋计'
  }
]

const renderContent = (
  h,
  {
    node,
    data,
    store,
  }
) => {
  return h('div',
    {
      class: 'custom-tree-node',
      style: {
        display: 'flex',
        flexFlow: 'row noWrap',
        justifyContent: 'flex-start',
        height: '20px',
        lineHeight: '20px',
        width: '90%',
        // color: data.state ? 'green' : 'red'
      },
      onClick: () => {
        if (data.state) {
          console.log('dianjile')
          rightShow.value = true
        }
      },
    },
    h('div', null, node.label),
    h(
      'div',
      {
        style: {
          float: 'right',
          color: 'rgb(0,255,0)',
          fontWeight: 'bolder',
          flexGrow: 1,
          textAlign: 'right'
        }
      },
      data.state ? data.state : ''
    )
  )
}

const defaultProps = {
  children: 'children',
  label: 'label',
}

</script>
<style lang="scss" scoped>
.demo-tabs {
  position: absolute;
  width: 20vw;
  left: 20px;
  top: 20px;


  :deep(.el-tabs__header) {
    margin: 0px;
    border: 0px;

    .el-tabs__item {
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      width: 80px;
      padding: 5px;
      margin: 5px;
      background-color: rgba(21, 32, 89, 0.627);
      backdrop-filter: blur(5px);
    }

    .el-tabs__active-bar {
      display: none;
    }

    .el-tabs__nav-wrap::after {
      display: none;
    }

  }

  :deep(.el-tabs__content) {
    border-radius: 10px;
    border: 0px;
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.12);
    font-weight: bolder;
    padding: 10px;
    background: linear-gradient(180deg, rgba(21, 32, 89, 0.627) 0%, rgba(0, 162, 255, 0.05) 100%);
    backdrop-filter: blur(5px);


    .el-tree {
      background: transparent;
      color: #fff;

      --el-tree-node-hover-bg-color: rgba(21, 32, 89, 0.5);

      .el-tree-node__label {
        font-weight: bold;
      }

      .el-tree-node {
        padding-top: 15px;
      }

      :deep(.el-tree-node__children) {
        .el-tree-node__content {
          padding: 0px !important;
        }
      }
    }

  }

  .custom-tabs-label {
    .el-icon {
      vertical-align: middle;
    }

    span {
      vertical-align: middle;
      margin-left: 6px;
    }
  }

}
</style>
