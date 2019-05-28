export default {
    up() {

    },
    down(size) {
        const sizes = {
            mobile: "575.98px",
            mobileLandscape: "767.98px",
            tablet: "991.98px",
            desktop: "1199.98px",
            bigDesktop: "1441.98px"
        }
        return `@media (max-width: ${sizes[size]})`
    }
}
