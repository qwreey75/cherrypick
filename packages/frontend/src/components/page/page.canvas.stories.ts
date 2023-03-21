/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import page_canvas from './page.canvas.vue';
const meta = {
	title: 'components/page/page.canvas',
	component: page_canvas,
} satisfies Meta<typeof page_canvas>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				page_canvas,
			},
			props: Object.keys(argTypes),
			template: '<page_canvas v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof page_canvas>;
export default meta;
