import { h, reactive } from 'vue'
import ContextMenu from '@imengyu/vue3-context-menu'
import type { MenuOptions } from '@imengyu/vue3-context-menu/index'
import { useTaskOperationMessage } from './useTaskOperationMessage'
import { useTaskStore } from '@/store'

export function useTaskRightContextMenu() {
  const taskStore = useTaskStore()
  const { showRemoveMessage, showMoveMessage } = useTaskOperationMessage()
  const moveProjects: NonNullable<MenuOptions['items']> = [
    ...getSearchMenuItem(),
    ...getMoveListProjects(),
  ]
  const menuData = reactive<MenuOptions>({
    x: 0,
    y: 0,
    items: [
      {
        label: '移动到',
        children: moveProjects,
      },
      {
        label: '删除',
        onClick: () => {
          showRemoveMessage(taskStore.currentActiveTask!)
          taskStore.removeTask(taskStore.currentActiveTask!)
        },
      },
    ],
  })

  function getSearchMenuItem() {
    return [
      {
        label: h('input', {
          style: {
            width: '100px',
            height: '20px',
            outlineColor: 'rgb(86, 125, 250)',
          },
          placeholder: '搜索',
          id: 'seaechInput',
          onInput: changeInput,
        }),
        clickClose: false,
      },
    ]
  }

  function changeInput() {
    const inputValue = (<HTMLInputElement>(
      document.getElementById('seaechInput')
    )).value
    if (menuData.items) {
      if (!inputValue) {
        menuData.items[0].children = moveProjects
        return
      }
      menuData.items[0].children = moveProjects.filter((projectItem) => {
        if (typeof projectItem.label === 'string')
          return (projectItem.label as string).includes(inputValue)
        else return true
      })
    }
  }

  function getMoveListProjects() {
    return taskStore.listProjects.map((projectItem) => {
      const isCurrentProject
        = taskStore.currentActiveProject.id === projectItem.id
      return {
        label: isCurrentProject
          ? h(
            'span',
            {
              style: {
                color: '#567dfa',
              },
            },
            projectItem.name,
          )
          : projectItem.name,
        onClick: () => {
          if (isCurrentProject)
            return
          showMoveMessage(projectItem.name)
          taskStore.moveTask(taskStore.currentActiveTask!, projectItem.id)
        },
      }
    })
  }

  function showContextMenu(e: MouseEvent) {
    e.preventDefault()
    menuData.x = e.x
    menuData.y = e.y
    if (menuData.items)
      menuData.items[0].children = moveProjects
    ContextMenu.showContextMenu(menuData)
  }

  return {
    showContextMenu,
  }
}
