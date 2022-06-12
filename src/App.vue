<template>
  <div
    class="container">
    <Modal
      v-show="showModal"
      @close="showModal = false">
      <template #modal-text>
        {{ modalText }}
      </template>
    </Modal>
    <TodoHeader
      :propstime="nowTime" />
    <div v-if="userName">
      <TodoTitle
        :propsdata="checkCount"
        :prop-name="userName" />
      <TodoInput 
        @addItem="addOneItem" />
      <TodoController
        @sortItem="sortAllItem"
        @clearAll="clearAllItem" />
      <TodoList 
        :propsdata="todoItems"
        :propempty="isEmpty"
        @removeItem="removeOneItem"
        @toggleItem="toggleOneItem" />
    </div>
    <div v-else>
      <TodoHello
        @addName="addUserName" />
    </div>
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "~/components/TodoHeader";
import TodoTitle from "~/components/TodoTitle";
import TodoInput from "~/components/TodoInput";
import TodoHello from "~/components/TodoHello";
import TodoController from "~/components/TodoController";
import TodoList from "~/components/TodoList";
import TodoFooter from "~/components/TodoFooter";
import Modal from "~/components/common/Modal";

import getDate from "~/commonJS/getDate"

export default {
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoHello,
    TodoController,
    TodoList,
    TodoFooter,
    Modal
  },
  data() {
    return {
      todoItems: [],
      userName: "",
      showModal: false,
      modalText: "",
      nowTime: ""
    };
  },
  created() {
    this.userName = localStorage.getItem("userName")

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "userName") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          )
        }
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      // 빈 내용
      if (todoItem === '') {
        this.showModal = !this.showModal;
        this.modalText = "할 일을 입력해주세요!";
        return false;
      }
      // 중복
      for (let i = 0; i < this.todoItems.length; i++) {
        if (this.todoItems[i].item === todoItem) {
          this.showModal = !this.showModal
          this.modalText = "목록에 이미있습니다!"
          return false
        }
      }
      var value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
      }
      localStorage.setItem(todoItem, JSON.stringify(value))
      this.todoItems.push(value)
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItem() {
      this.todoItems = []
      localStorage.clear()
    },
    sortTodoLatest() {
      this.todoItems.sort(function(a, b) {
        return b.time - a.time;
      });
    },
    sortTodoOldest() {
      this.todoItems.sort(function(a, b) {
        return a.time - b.time;
      });
    },
    sortAllItem(onePick) {
      if (onePick.value === "date-desc") {
        this.sortTodoLatest()
      } else if (onePick.value === "date-asc") {
        this.sortTodoOldest()
      }
    },
    addUserName(userName) {
      localStorage.setItem("userName", userName)
      this.userName = userName
    },
    realTime() {
      this.nowTime = new Date().toLocaleTimeString('ko-KR', {
        dataStyle: 'short',
        hour: '2-digit',
        hourCycle: 'h23',
        minute: '2-digit',
        second: '2-digit',
      })
      setInterval(() => {
        this.nowTime = new Date().toLocaleTimeString('ko-KR', {
          dataStyle: 'short',
          hour: '2-digit',
          hourCycle: 'h23',
          minute: '2-digit',
          second: '2-digit',
        })
      }, 1000)
    }
  },
  mounted() {
    this.sortTodoOldest()
    this.realTime()
  },
  computed: {
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0
        for (let i = 0; i < this.todoItems.length; i++) {
          if (this.todoItems[i].completed === false) {
            leftCount++
          }
        }
        return leftCount
      };

      const count = {
        total: this.todoItems.length,
        left: checkLeftItems()
      };
      return count
    },
    isEmpty() {
      return this.todoItems.length <= 0 ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;
    background-color: $white;
    border: 1px solid #2C78DB;
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% / .25);
    border-radius: 50px;
    margin-top: 50px;
  }
</style>