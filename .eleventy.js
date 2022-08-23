module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("static");


    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats:["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            include: "includes"

        }

    }
}