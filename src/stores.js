import { writable } from 'svelte/store';

export const colours = writable([
    {
        name: 'Reds',
        data: [{ col: '#ff0000' }, { col: '#ff4444' }, { col: '#ff8888' }, { col: '#ffbbbb' }, { col: '#ffffff' }]
    },
    {
        name: 'Greens',
        data: [{ col: '#00ff00' }, { col: '#44ff44' }, { col: '#88ff88' }, { col: '#bbffbb' }, { col: '#ffffff' }]
    },
    {
        name: 'bblues',
        data: [{ col: '#0000ff' }, { col: '#4444ff' }, { col: '#8888ff' }, { col: '#bbbbff' }, { col: '#ffffff' }]
    },
    {
        name: 'Yellowish',
        data: [{ col: '#ffff00' }, { col: '#ffff44' }, { col: '#ffff88' }, { col: '#ffffbb' }, { col: '#ffffff' }]
    },
    {
        name: 'Cyan',
        data: [{ col: '#00ffff' }, { col: '#44ffff' }, { col: '#88ffff' }, { col: '#bbffff' }, { col: '#ffffff' }]
    },
    {
        name: 'hotpink',
        data: [{ col: '#ff00ff' }, { col: '#ff44ff' }, { col: '#ff88ff' }, { col: '#ffbbff' }, { col: '#ffffff' }]
    }
]);
