/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-default-export */
import { Meta, StoryObj } from '@storybook/vue3';
import WidgetUserList from './WidgetUserList.vue';
const meta = {
	title: 'widgets/WidgetUserList',
	component: WidgetUserList,
} satisfies Meta<typeof WidgetUserList>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				WidgetUserList,
			},
			props: Object.keys(argTypes),
			template: '<WidgetUserList v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof WidgetUserList>;
export default meta;
