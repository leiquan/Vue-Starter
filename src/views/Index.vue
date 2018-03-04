<template>

    <div id="home">
        <div id="ad">
            轻松松松做任务,开开心心赚大钱

            jjjjj
        </div>
        <div id="wraper">
            <div id="container">
                <router-link to="/test">
                    Test
                </router-link>
                <router-link to="/index">
                    Index
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {};
  },

  mounted: function() {
    this.$http.get("/v2/mis/car/getCarDetail?id=1").then(
      response => {
        console.log(response.body);
      },
      response => {
        // error callback
      }
    );
  }
};
</script>
