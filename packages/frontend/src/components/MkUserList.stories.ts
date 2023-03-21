/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import MkUserList from './MkUserList.vue';
const meta = {
	title: 'components/MkUserList',
	component: MkUserList,
} satisfies Meta<typeof MkUserList>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				MkUserList,
			},
			props: Object.keys(argTypes),
			template: '<MkUserList v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkUserList>;
export default meta;
