import { writable } from 'svelte/store';

export const colours = writable([
	[{ col: '#f00' }, { col: '#f44' }, { col: '#f88' }, { col: '#fbb' }, { col: '#fff' }],
	[{ col: '#0f0' }, { col: '#4f4' }, { col: '#8f8' }, { col: '#bfb' }, { col: '#fff' }],
	[{ col: '#00f' }, { col: '#44f' }, { col: '#88f' }, { col: '#bbf' }, { col: '#fff' }],
	[{ col: '#ff0' }, { col: '#ff4' }, { col: '#ff8' }, { col: '#ffb' }, { col: '#fff' }],
	[{ col: '#0ff' }, { col: '#4ff' }, { col: '#8ff' }, { col: '#bff' }, { col: '#fff' }],
	[{ col: '#f0f' }, { col: '#f4f' }, { col: '#f8f' }, { col: '#fbf' }, { col: '#fff' }]
]);
