<template>
    <main class="main max-w-lg mx-auto my-0 p-0">
        <prism-editor 
            class="code-editor"
            :code="this.codeSnippet" 
            :readonly="true"
            :lineNumbers="true" 
            :language="js"
            :autoStyleLineNumbers="true">

        </prism-editor>
    </main>
</template>

<script>
    import Prism from 'prismjs';
    import 'prismjs/components/prism-haskell';
    import 'prismjs/components/prism-clike';
    import 'prismjs/components/prism-java';
    import PrismEditor from 'vue-prism-editor';
    import "vue-prism-editor/dist/VuePrismEditor.css";

    export default {
        components: {
            PrismEditor
        },

        mounted() {
            this.fetchCodeSnippet('object', 'javascript', 150, 200);
        },

        methods: {
            fetchCodeSnippet(keyword, language, minLoc, maxLoc) {
                const apiUrl = `https://searchcode.com/api/codesearch_I/?src=2&q=${keyword}%20lang:${language}&loc=${minLoc}&loc2=${maxLoc}`;
                this.langauge = language;

                axiosSearchCode.get(apiUrl).then((res) => {
                    const codeSampleId = res.data.results.randomElement().id;
                    return axiosSearchCode.get(`https://searchcode.com/codesearch/raw/${codeSampleId}`);
                }).then(rawCode => {
                    this.codeSnippet = rawCode.data;
                }).catch(err => {
                    this.codeSnippet = err;
                });
            }
        },

        computed: {
        },

        data() {
            return {
                codeSnippet: "Code to be filled here ... ",
                language: "",
            };
        },

        watch: {
        }
    }
</script>

<style>
.code-editor {
    height: 500px;
}
</style>
