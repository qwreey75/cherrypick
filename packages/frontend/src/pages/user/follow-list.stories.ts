/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import follow_list from './follow-list.vue';
const meta = {
	title: 'pages/user/follow-list',
	component: follow_list,
} satisfies Meta<typeof follow_list>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				follow_list,
			},
			props: Object.keys(argTypes),
			template: '<follow_list v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof follow_list>;
export default meta;
