export const initEvents = (graph: InstanceType<GraphType>) => {
  graph.on('node:click', (...args) => {
    console.log(args);
    
  })
}