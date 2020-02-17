let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./svg/', true, /\.svg$/))
} catch (error) {
  // console.log("引入icon文件脚本有问题")
}
