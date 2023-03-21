/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkPageWindow from './MkPageWindow.vue';
const meta = {
	title: 'components/MkPageWindow',
	component: MkPageWindow,
} satisfies Meta<typeof MkPageWindow>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkPageWindow,
			},
			props: Object.keys(argTypes),
			template: '<MkPageWindow v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkPageWindow>;
export default meta;
