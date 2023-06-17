<template>
    <h4>Pages</h4>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(page, index) in $pages.getAllPages()"
            :key="index"
            @click="goToPage(index)"
            >
            <td>{{ page.pageTitle }}</td>
            <td>{{ page.link.text }}</td>
            <td>{{ page.published ? 'yes' : 'no' }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
/* eslint-disable */
import {reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

// const data = reactive({counter: 0});
const $pages = inject('$pages');
const router = useRouter();

function goToPage(index){
    router.push({path: `pages/${index}/edit`});
}

</script>
<style scoped>
.table.table.hover tr:hover {
    cursor: pointer;
}
</style>