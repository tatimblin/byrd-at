module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/sass/base.scss";
        `
      }
    }
  },
}
