<template>
  <div>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        {{index}}. {{book.name}}:{{book.author}}
        &nbsp;
        <input type="button" value="删除" @click="removeBook(index,$event)">
      </li>
    </ul>

    <hr>
    <p>
      <label for="bookname">书名</label>
      <input id="bookname" type="text" placeholder="书名" v-model="newBook.name">
    </p>
    <p>
      <label for="bookauthor">作者</label>
      <input id="bookauthor" type="text" placeholder="作者" v-model="newBook.author">
    </p>
    <p>
      <button @click="addBook()">添加新书</button>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        books: [{
            author: '东野圭吾',
            name: '《放学后》',
          },
          {
            author: '海明威',
            name: '《老人与海》'
          },
          {
            author: '刘慈欣',
            name: '《三体III：死神永生》'
          }
        ],
        newBook: {
          author: '',
          name: ''
        }
      }
    },
    methods: {
      addBook() {
        this.books.push(this.newBook)
      },
      removeBook(index,event) {
        this.books.splice(index, 1);
        alert(event.target.tagName)
      }
    },
    mounted() {
      window.vfor = this.$data;
    }
  }
</script>

<style>
</style>
