<template>
    <v-container class="main-box">
      <v-row>
        <v-col cols="12">
          <h1 style="color: #41807c;">文章管理</h1>
        </v-col>
        <v-col cols="12">
          <v-btn color="#41807c" @click="openDialog(null)">新增文章</v-btn>
        </v-col>
        <v-col cols="12">
          <v-data-table-server
            v-model:items-per-page="tableItemsPerPage"
            v-model:sort-by="tableSortBy"
            v-model:page="tablePage"
            :items="tableItems"
            :headers="tableHeaders"
            :loading="tableLoading"
            :items-length="tableItemsLength"
            :search="tableSearch"
            @update:items-per-page="tableLoadItems(false)"
            @update:sort-by="tableLoadItems(false)"
            @update:page="tableLoadItems(false)"
            hover
          >
            <template #top>
              <v-text-field
                label="搜尋"
                v-model="tableSearch"
                append-icon="mdi-magnify"
                @click-append="tableLoadItems(true)"
                @keydown.enter="tableLoadItems(true)"
              ></v-text-field>
            </template>
            <template #[`item.image`]="{ value }">
              <v-img :src="value" height="50px"></v-img>
            </template>
            <template #[`item.action`]="{ item }">
              <v-btn icon="mdi-lead-pencil" variant="text" color="#212879" @click="openDialog(item)"></v-btn>
              <v-btn icon="mdi-delete" variant="text" color="#d65c28" @click="deleteItem(item)"></v-btn>
            </template>
          </v-data-table-server>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog.open" persistent width="500">
      <v-form @submit.prevent="submit" :disabled="isSubmitting">
        <v-card>
          <v-card-title>{{ dialog.id ? '編輯文章' : '新增文章' }}</v-card-title>
          <v-card-text>
            <v-text-field
              label="標題"
              v-model="title.value.value"
              :error-messages="title.errorMessage.value"
            ></v-text-field>
            <v-textarea
              label="內容"
              v-model="content.value.value"
              :error-messages="content.errorMessage.value"
            ></v-textarea>
            <v-text-field
              label="作者"
              v-model="author.value.value"
              :error-messages="author.errorMessage.value"
            ></v-text-field>
            <v-text-field
              label="網址"
              v-model="url.value.value"
              :error-messages="url.errorMessage.value"
            ></v-text-field>
            <vue-file-agent
            v-model="fileRecords"
            v-model:raw-model-value="rawFileRecords"
            accept="image/jpeg,image/png"
            deletable
            max-size="1MB"
            help-text="選擇檔案或拖曳到這裡"
            :error-text="{ type: '檔案格式不支援', size: '檔案大小不能超過 1MB' }"
            ref="fileAgent"
          ></vue-file-agent>
          </v-card-text>
          <v-card-actions>
            <v-btn color="#d65c28" :loading="isSubmitting" @click="closeDialog">取消</v-btn>
            <v-btn color="#212879" type="submit" :loading="isSubmitting">送出</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </template>

  <script setup>
  import { ref } from 'vue'
  import * as yup from 'yup'
  import { useForm, useField } from 'vee-validate'
  import { useApi } from '@/composables/axios'
  import { useSnackbar } from 'vuetify-use-dialog'
  import { definePage } from 'vue-router/auto';

  definePage({
    meta: {
      title: 'qwiyeo | 文章管理',
      login: false,
      admin: false
    }
  })

  
  const { apiAuth } = useApi()
  const createSnackbar = useSnackbar()
  const fileAgent = ref(null)
  const dialog = ref({
    open: false,
    id: ''
  })
  
  const openDialog = (item) => {
    if (item) {
      dialog.value.id = item._id
      title.value.value = item.title
      content.value.value = item.content
      author.value.value = item.author
      url.value.value = item.url
    } else {
      dialog.value.id = ''
      resetForm()
    }
    dialog.value.open = true
  }
  
  const closeDialog = () => {
  dialog.value.open = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}
  
  const schema = yup.object({
    title: yup.string().required('標題必填'),
    content: yup.string().required('內容必填'),
    author: yup.string().required('作者必填'),
    url: yup.string().url('網址格式錯誤').required('網址必填')
  })
  
  const { handleSubmit, isSubmitting, resetForm } = useForm({
    validationSchema: schema,
    initialValues: {
      title: '',
      content: '',
      author: '',
      url: ''
    }
  })
  

  const fileRecords = ref([])
  const rawFileRecords = ref([])
  const title = useField('title')
  const content = useField('content')
  const author = useField('author')
  const url = useField('url')
  
  const submit = handleSubmit(async (values) => {
    if (fileRecords.value[0]?.error) return
    if (dialog.value.id.length === 0 && fileRecords.value.length < 1) return




    try {
    const fd = new FormData()
    // fd.append(key, value)
    fd.append('title', values.title)
    fd.append('content', values.content)
    fd.append('author', values.author)
    fd.append('url', values.url)

    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    if (dialog.value.id === '') {
      await apiAuth.post('/article', fd)
    } else {
      await apiAuth.patch('/article/' + dialog.value.id, fd)
    }

      createSnackbar({
        text: dialog.value.id === '' ? '新增成功' : '編輯成功',
        snackbarProps: {
          color: '#41807c'
        }
      })
      closeDialog()
      tableLoadItems(true)
    } catch (error) {
      console.log(error)
      createSnackbar({
        text: error?.response?.data?.message || '發生錯誤',
        snackbarProps: {
          color: '#d65c28'
        }
      })
    }
  })
  
  const tableItemsPerPage = ref(10)
  const tableSortBy = ref([{ key: 'createdAt', order: 'desc' }])
  const tablePage = ref(1)
  const tableItems = ref([])
  const tableHeaders = [
    { title: '圖片', align: 'center', sortable: false, key: 'image' },
    { title: '標題', align: 'center', sortable: true, key: 'title' },
    { title: '作者', align: 'center', sortable: true, key: 'author' },
    { title: '建立時間', align: 'center', sortable: true, key: 'createdAt' },
    { title: '操作', align: 'center', sortable: false, key: 'action' }
  ]
  const tableLoading = ref(true)
  const tableItemsLength = ref(0)
  const tableSearch = ref('')
  
  const tableLoadItems = async (reset) => {
    if (reset) tablePage.value = 1
    tableLoading.value = true
    try {
      const { data } = await apiAuth.get('/article/all', {
        params: {
          page: tablePage.value,
          itemsPerPage: tableItemsPerPage.value,
          sortBy: tableSortBy.value[0]?.key || 'createdAt',
          sortOrder: tableSortBy.value[0]?.order || 'desc',
          search: tableSearch.value
        }
      })
      tableItems.value.splice(0, tableItems.value.length, ...data.result.data)
      tableItemsLength.value = data.result.total
    } catch (error) {
      console.log(error)
      createSnackbar({
        text: error?.response?.data?.message || '發生錯誤',
        snackbarProps: {
          color: '#d65c28'
        }
      })
    }
    tableLoading.value = false
  }
  
  tableLoadItems()

  const deleteItem = async (item) => {
    console.log('Deleting item with ID:', item._id)
  try {
    const confirmed = confirm(`確定要刪除文章 "${item.title}" 嗎？`)
    if (!confirmed) return

    await apiAuth.delete(`/article/${item._id}`)
    
    createSnackbar({
      text: '刪除成功',
      snackbarProps: {
        color: '#41807c'
      }
    })
    tableLoadItems(true)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: '#d65c28'
      }
    })
  }
}

  </script>

  <style scoped>
  .main-box {
    width: 100%;
    margin: auto;
    padding-top: 20px;
    background-image: url('/src/assets/greenborder.jpg');
    background-size: cover; /* 確保圖片覆蓋整個容器 */
    background-position: center; /* 使圖片保持居中 */
    background-repeat: no-repeat; /* 防止背景圖片重複 */
    min-height: 100vh; /* 保證容器最小高度為視窗高度 */
    padding:50px;
    /* display: flex; */
    /* flex-direction: column; */
  }
  .v-data-table {
    /* margin-top: 50px; */
    background-color: rgba(255, 255, 255, 0.6); /* 增加背景透明度以提高可讀性 */
  }
  </style>
  
  <route lang="yaml">
  meta:
    layout: admin
    login: true
    admin: true
  </route>
  