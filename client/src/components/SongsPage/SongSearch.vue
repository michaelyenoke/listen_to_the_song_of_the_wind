<template>

<panel title="Search" >
    <v-text-field
        label="Search by song name, artist, album, genre"
        v-model="search"
    ></v-text-field>
</panel>

</template>

<script>
import _ from 'lodash'

export default {
    data () {
        return {
            search: '',
        }
    },
    watch: {
        search: _.debounce(async function (value) {
            const route = {
                name: 'songs'
            }
            if (this.search !== '') {
                route.query = {  //將搜尋內容綁定在搜尋網址上
                    search: this.search
                }
            }
            this.$router.push(route)
            //console.log(value)
        }, 700),
        '$route.query.search': {  
            //反向搜尋(回傳搜尋欄位)
            immediate:true,
            async handler (value) {
                //this.search = (await SongsService.index(value)).data 
                this.search = value
            }
        }
    }
}
</script>