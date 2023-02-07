import { PortManager } from '@antv/x6/lib/model/port'

export const ports: Partial<PortManager.Metadata> | PortManager.PortMetadata[] =
  {
    groups: {
      right: {
        position: 'right',
        attrs: {
          circle: {
            magnet: true,
            stroke: '#3662EC',
            r: 6,
          },
        },
        label: {
          position: 'right',
        },
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            magnet: true,
            stroke: '#3662EC',
            r: 6,
          },
        },
        label: {
          position: 'left',
        },
      },
      functionPort: {
        position: 'functionPort',
        attrs: {
          circle: {
            magnet: true,
            stroke: '#3662EC',
            r: 6,
          },
        },
      }
    },
  }
