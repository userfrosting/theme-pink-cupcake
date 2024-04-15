<script setup lang="ts">
import LayoutDashboard from '../layouts/LayoutDashboard.vue'
</script>

<template>
    <LayoutDashboard>
        <table class="uk-table">
            <caption>
                Table Caption
            </caption>
            <thead>
                <tr>
                    <th>Table Heading</th>
                    <th>Table Heading</th>
                    <th>Table Heading</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                </tr>
                <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Table Footer</td>
                    <td>Table Footer</td>
                    <td>Table Footer</td>
                </tr>
            </tfoot>
        </table>
    </LayoutDashboard>
</template>
