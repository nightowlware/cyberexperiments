<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!--<div class="jumbotron">-->
            <prism-editor :code="this.codeSnippet" :readonly="true"></prism-editor>
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import Prism from 'prismjs';
    import 'prismjs/components/prism-haskell';
    import 'prismjs/components/prism-clike';
    import 'prismjs/components/prism-java';
    import PrismEditor from 'vue-prism-editor';

    export default {
        components: {
            PrismEditor
        },

        mounted() {
            this.fetchCodeSnippet('object', 'haskell', 150, 200);
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

</style>
