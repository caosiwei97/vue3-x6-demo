export const initEvents = (graph: GraphType) => {
  graph.on('node:click', (args) => {
    console.log('开始处理节点点击行为...');
    console.log('节点自身的一些逻辑判断...');
    console.log('激活画布右边配置面板，传入参数:', args);
  })

  graph.on('edge:connected', (args) => {
    
  })
}