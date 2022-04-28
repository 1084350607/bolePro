module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // 关闭预设避免和Bootstrap冲突
  corePlugins: {
    preflight: false,
  },
  // 给Tailwind加前缀
  prefix: "tw-",
}
