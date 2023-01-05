import { Snapline } from '@antv/x6-plugin-snapline'

export const initSnaplinePlugin = () => {
  const snapline = new Snapline({
    enabled: true,
  })

  return snapline
}
